package middleware

import (
	"context"
	"github.com/ta-toshio/bherb/ent"
	"github.com/ta-toshio/bherb/ent/staff"
	"github.com/ta-toshio/bherb/service"
	"net/http"
	"strings"
)

var userCtxKey = &contextKey{name: "user"}
var staffCtxKey = &contextKey{name: "user"}
type contextKey struct {
	name string
}

func AuthMiddleware(ormClient *ent.Client) func(handler http.Handler) http.Handler {
	return func (next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

			authHeader := r.Header.Get("Authorization")
			idToken := strings.Replace(authHeader, "Bearer ", "", 1)

			// Allow unauthenticated users in
			if idToken == "" {
				next.ServeHTTP(w, r)
				return
			}

			client, err := service.NewFirebaseClient()
			if err != nil {
				http.Error(w, "Failed to initiate firebase", http.StatusInternalServerError)
				return
			}

			token, err := client.VerifyIDToken(r.Context(), idToken)
			if err != nil {
				http.Error(w, "Invalid firebase token", http.StatusForbidden)
				return
			}

			//fmt.Println("UID")
			//fmt.Println(token.UID)

			ctx := r.Context()
			staffEntity, err := ormClient.Staff.
				Query().
				Where(staff.UIDEQ(token.UID)).
				Only(ctx)
			if err == nil {
				ctx = context.WithValue(ctx, staffCtxKey, staffEntity)
			}

			// and call the next with our new context
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
		})
	}
}

func ForStaffContext(ctx context.Context) *ent.Staff {
	staffEntity , _ := ctx.Value(staffCtxKey).(*ent.Staff)
	return staffEntity
}
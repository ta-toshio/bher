package firebase

import (
	"context"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"fmt"
	"google.golang.org/api/option"
	"os"
)

type Client struct {
	Ctx           context.Context
	FireBase      *firebase.App
	Auth          *auth.Client
}

type Handler interface {
	VerifyIDToken(ctx context.Context, idToken string) (*auth.Token, error)
	VerifyEmail(ctx context.Context, uid string) error
	CreateUser(ctx context.Context, email, password, name string) (string, error)
}

type Firebase struct {
	Handler
}

func NewFirebaseClient() (Handler, error) {
	rootDir := os.Getenv("ROOT_DIR")
	ctx := context.Background()
	opt := option.WithCredentialsFile(rootDir + "/secret/serviceAccountKey.json")
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		return nil, fmt.Errorf("error initializing app: %v", err)
	}

	authClient, err := app.Auth(ctx)
	if err != nil {
		return nil, fmt.Errorf("error initializing app: %v", err)
	}

	f := &Client{
		Auth:     authClient,
		FireBase: app,
		Ctx:      ctx,
	}
	return f, nil
}

func (fb *Client) VerifyIDToken(ctx context.Context, idToken string) (*auth.Token, error) {
	token, err := fb.Auth.VerifyIDToken(ctx, idToken)
	if err != nil {
		return nil, err
	}
	return token, err
}

func (fb *Client) CreateUser(ctx context.Context, email, password, name string) (string, error) {
	params := (&auth.UserToCreate{}).
		Email(email).
		Password(password).
		DisplayName(name).
		EmailVerified(true).
		Disabled(false)

	u, err := fb.Auth.CreateUser(ctx, params)
	if err != nil {
		return "", err
	}
	return u.UID, err
}

func (fb *Client) VerifyEmail(ctx context.Context, uid string) error {
	params := (&auth.UserToUpdate{}).
		EmailVerified(true)
	_, err := fb.Auth.UpdateUser(ctx, uid, params)
	return err
}

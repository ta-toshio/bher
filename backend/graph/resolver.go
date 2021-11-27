package graph

import (
	"context"
	"fmt"
	"github.com/99designs/gqlgen/graphql"
	"github.com/ta-toshio/bherb/ent"
	"github.com/ta-toshio/bherb/graph/generated"
	"github.com/ta-toshio/bherb/graph/model"
	"github.com/ta-toshio/bherb/http/middleware"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	Client *ent.Client
}

func NewConfig(client *ent.Client) generated.Config {
	c := generated.Config{
		Resolvers: &Resolver{
			Client: client,
		},
	}

	c.Directives.Auth = func(ctx context.Context, obj interface{}, next graphql.Resolver, auth model.Auth) (res interface{}, err error) {
		staff := middleware.ForStaffContext(ctx)
		if (auth == model.AuthAny || auth == model.AuthStaff) && staff == nil {
			return nil, fmt.Errorf("access denied")
		}
		//user := middleware.ForUserContext(ctx)
		//if (auth == model.AuthAny || auth == model.AuthUser) && user == nil {
		//}

		return next(ctx)
	}
	return c
}

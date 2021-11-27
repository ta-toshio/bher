package service

import (
	"context"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"fmt"
	"google.golang.org/api/option"
	"os"
)

type FireBaseClient struct {
	Ctx           context.Context
	FireBase      *firebase.App
	Auth          *auth.Client
}

type FireBaseHandler interface {
	VerifyIDToken(ctx context.Context, idToken string) (*auth.Token, error)
}

type FireBase struct {
	FireBaseHandler
}

func NewFirebaseClient() (FireBaseHandler, error) {
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

	f := &FireBaseClient{
		Auth:     authClient,
		FireBase: app,
		Ctx:      ctx,
	}
	return f, nil
}

func (fb *FireBaseClient) VerifyIDToken(ctx context.Context, idToken string) (*auth.Token, error) {
	token, err := fb.Auth.VerifyIDToken(ctx, idToken)
	if err != nil {
		return nil, err
	}
	return token, err
}
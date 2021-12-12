package model

import (
	"fmt"
	"io"
	"strconv"
)

type Auth string

const (
	AuthAdmin Auth = "ADMIN"
	AuthStaff Auth = "STAFF"
	AuthUser  Auth = "USER"
	AuthAny   Auth = "ANY"
)

var AllAuth = []Auth{
	AuthAdmin,
	AuthStaff,
	AuthUser,
	AuthAny,
}

func (e Auth) IsValid() bool {
	switch e {
	case AuthAdmin, AuthStaff, AuthUser, AuthAny:
		return true
	}
	return false
}

func (e Auth) String() string {
	return string(e)
}

func (e *Auth) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Auth(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Auth", str)
	}
	return nil
}

func (e Auth) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

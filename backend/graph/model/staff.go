package model

import (
	"github.com/ta-toshio/bherb/ent/staff"
)


type CreateStaffInput struct {
	UID       string
	Email     string
	Name      string
	Role      *staff.Role
	Firebase  bool
}

package model

import (
	"github.com/ta-toshio/bherb/ent/staff"
)


type CreateStaffWithUIDInput struct {
	UID       string
	Email     string
	Password  string
	Name      string
	Role      *staff.Role
}

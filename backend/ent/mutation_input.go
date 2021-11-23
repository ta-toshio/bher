// Code generated by entc, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/ta-toshio/bherb/ent/staff"
	"github.com/ta-toshio/bherb/ent/todo"
)

// CreateChartInput represents a mutation input for creating charts.
type CreateChartInput struct {
	CreateTime        *time.Time
	UpdateTime        *time.Time
	Patch             *bool
	Generation        *int
	Gender            *int
	Allergy           *int
	Rash              *int
	Sting             *int
	DyeWhen           *int
	DyeWhere          *int
	HenaWhen          *int
	RebondedWhen      *int
	ManicureWhen      *int
	PermWhen          *int
	TreatmentWhen     *int
	NoticeReason      *int
	LastName          string
	FirstName         string
	LastNameHiragana  string
	FirstNameHiragana string
	PostalCode        string
	PrefectureID      *int
	Address           string
	Tel               string
	Email             string
}

// Mutate applies the CreateChartInput on the ChartCreate builder.
func (i *CreateChartInput) Mutate(m *ChartCreate) {
	if v := i.CreateTime; v != nil {
		m.SetCreateTime(*v)
	}
	if v := i.UpdateTime; v != nil {
		m.SetUpdateTime(*v)
	}
	if v := i.Patch; v != nil {
		m.SetPatch(*v)
	}
	if v := i.Generation; v != nil {
		m.SetGeneration(*v)
	}
	if v := i.Gender; v != nil {
		m.SetGender(*v)
	}
	if v := i.Allergy; v != nil {
		m.SetAllergy(*v)
	}
	if v := i.Rash; v != nil {
		m.SetRash(*v)
	}
	if v := i.Sting; v != nil {
		m.SetSting(*v)
	}
	if v := i.DyeWhen; v != nil {
		m.SetDyeWhen(*v)
	}
	if v := i.DyeWhere; v != nil {
		m.SetDyeWhere(*v)
	}
	if v := i.HenaWhen; v != nil {
		m.SetHenaWhen(*v)
	}
	if v := i.RebondedWhen; v != nil {
		m.SetRebondedWhen(*v)
	}
	if v := i.ManicureWhen; v != nil {
		m.SetManicureWhen(*v)
	}
	if v := i.PermWhen; v != nil {
		m.SetPermWhen(*v)
	}
	if v := i.TreatmentWhen; v != nil {
		m.SetTreatmentWhen(*v)
	}
	if v := i.NoticeReason; v != nil {
		m.SetNoticeReason(*v)
	}
	m.SetLastName(i.LastName)
	m.SetFirstName(i.FirstName)
	m.SetLastNameHiragana(i.LastNameHiragana)
	m.SetFirstNameHiragana(i.FirstNameHiragana)
	m.SetPostalCode(i.PostalCode)
	if v := i.PrefectureID; v != nil {
		m.SetPrefectureID(*v)
	}
	m.SetAddress(i.Address)
	m.SetTel(i.Tel)
	m.SetEmail(i.Email)
}

// SetInput applies the change-set in the CreateChartInput on the create builder.
func (c *ChartCreate) SetInput(i CreateChartInput) *ChartCreate {
	i.Mutate(c)
	return c
}

// UpdateChartInput represents a mutation input for updating charts.
type UpdateChartInput struct {
	Patch             *bool
	Generation        *int
	Gender            *int
	Allergy           *int
	Rash              *int
	Sting             *int
	DyeWhen           *int
	DyeWhere          *int
	HenaWhen          *int
	RebondedWhen      *int
	ManicureWhen      *int
	PermWhen          *int
	TreatmentWhen     *int
	NoticeReason      *int
	LastName          *string
	FirstName         *string
	LastNameHiragana  *string
	FirstNameHiragana *string
	PostalCode        *string
	PrefectureID      *int
	Address           *string
	Tel               *string
	Email             *string
}

// Mutate applies the UpdateChartInput on the ChartMutation.
func (i *UpdateChartInput) Mutate(m *ChartMutation) {
	if v := i.Patch; v != nil {
		m.SetPatch(*v)
	}
	if v := i.Generation; v != nil {
		m.SetGeneration(*v)
	}
	if v := i.Gender; v != nil {
		m.SetGender(*v)
	}
	if v := i.Allergy; v != nil {
		m.SetAllergy(*v)
	}
	if v := i.Rash; v != nil {
		m.SetRash(*v)
	}
	if v := i.Sting; v != nil {
		m.SetSting(*v)
	}
	if v := i.DyeWhen; v != nil {
		m.SetDyeWhen(*v)
	}
	if v := i.DyeWhere; v != nil {
		m.SetDyeWhere(*v)
	}
	if v := i.HenaWhen; v != nil {
		m.SetHenaWhen(*v)
	}
	if v := i.RebondedWhen; v != nil {
		m.SetRebondedWhen(*v)
	}
	if v := i.ManicureWhen; v != nil {
		m.SetManicureWhen(*v)
	}
	if v := i.PermWhen; v != nil {
		m.SetPermWhen(*v)
	}
	if v := i.TreatmentWhen; v != nil {
		m.SetTreatmentWhen(*v)
	}
	if v := i.NoticeReason; v != nil {
		m.SetNoticeReason(*v)
	}
	if v := i.LastName; v != nil {
		m.SetLastName(*v)
	}
	if v := i.FirstName; v != nil {
		m.SetFirstName(*v)
	}
	if v := i.LastNameHiragana; v != nil {
		m.SetLastNameHiragana(*v)
	}
	if v := i.FirstNameHiragana; v != nil {
		m.SetFirstNameHiragana(*v)
	}
	if v := i.PostalCode; v != nil {
		m.SetPostalCode(*v)
	}
	if v := i.PrefectureID; v != nil {
		m.SetPrefectureID(*v)
	}
	if v := i.Address; v != nil {
		m.SetAddress(*v)
	}
	if v := i.Tel; v != nil {
		m.SetTel(*v)
	}
	if v := i.Email; v != nil {
		m.SetEmail(*v)
	}
}

// SetInput applies the change-set in the UpdateChartInput on the update builder.
func (u *ChartUpdate) SetInput(i UpdateChartInput) *ChartUpdate {
	i.Mutate(u.Mutation())
	return u
}

// SetInput applies the change-set in the UpdateChartInput on the update-one builder.
func (u *ChartUpdateOne) SetInput(i UpdateChartInput) *ChartUpdateOne {
	i.Mutate(u.Mutation())
	return u
}

// CreateStaffInput represents a mutation input for creating staffs.
type CreateStaffInput struct {
	Email     string
	Name      string
	Role      *staff.Role
	CreatedAt *time.Time
	UpdatedAt *time.Time
}

// Mutate applies the CreateStaffInput on the StaffCreate builder.
func (i *CreateStaffInput) Mutate(m *StaffCreate) {
	m.SetEmail(i.Email)
	m.SetName(i.Name)
	if v := i.Role; v != nil {
		m.SetRole(*v)
	}
	if v := i.CreatedAt; v != nil {
		m.SetCreatedAt(*v)
	}
	if v := i.UpdatedAt; v != nil {
		m.SetUpdatedAt(*v)
	}
}

// SetInput applies the change-set in the CreateStaffInput on the create builder.
func (c *StaffCreate) SetInput(i CreateStaffInput) *StaffCreate {
	i.Mutate(c)
	return c
}

// UpdateStaffInput represents a mutation input for updating staffs.
type UpdateStaffInput struct {
	Email     *string
	Name      *string
	Role      *staff.Role
	UpdatedAt *time.Time
}

// Mutate applies the UpdateStaffInput on the StaffMutation.
func (i *UpdateStaffInput) Mutate(m *StaffMutation) {
	if v := i.Email; v != nil {
		m.SetEmail(*v)
	}
	if v := i.Name; v != nil {
		m.SetName(*v)
	}
	if v := i.Role; v != nil {
		m.SetRole(*v)
	}
	if v := i.UpdatedAt; v != nil {
		m.SetUpdatedAt(*v)
	}
}

// SetInput applies the change-set in the UpdateStaffInput on the update builder.
func (u *StaffUpdate) SetInput(i UpdateStaffInput) *StaffUpdate {
	i.Mutate(u.Mutation())
	return u
}

// SetInput applies the change-set in the UpdateStaffInput on the update-one builder.
func (u *StaffUpdateOne) SetInput(i UpdateStaffInput) *StaffUpdateOne {
	i.Mutate(u.Mutation())
	return u
}

// CreateTodoInput represents a mutation input for creating todos.
type CreateTodoInput struct {
	Text      string
	CreatedAt *time.Time
	Status    *todo.Status
	Priority  *int
	ChildIDs  []int
	ParentID  *int
}

// Mutate applies the CreateTodoInput on the TodoCreate builder.
func (i *CreateTodoInput) Mutate(m *TodoCreate) {
	m.SetText(i.Text)
	if v := i.CreatedAt; v != nil {
		m.SetCreatedAt(*v)
	}
	if v := i.Status; v != nil {
		m.SetStatus(*v)
	}
	if v := i.Priority; v != nil {
		m.SetPriority(*v)
	}
	if ids := i.ChildIDs; len(ids) > 0 {
		m.AddChildIDs(ids...)
	}
	if v := i.ParentID; v != nil {
		m.SetParentID(*v)
	}
}

// SetInput applies the change-set in the CreateTodoInput on the create builder.
func (c *TodoCreate) SetInput(i CreateTodoInput) *TodoCreate {
	i.Mutate(c)
	return c
}

// UpdateTodoInput represents a mutation input for updating todos.
type UpdateTodoInput struct {
	Text           *string
	Status         *todo.Status
	Priority       *int
	AddChildIDs    []int
	RemoveChildIDs []int
	ParentID       *int
	ClearParent    bool
}

// Mutate applies the UpdateTodoInput on the TodoMutation.
func (i *UpdateTodoInput) Mutate(m *TodoMutation) {
	if v := i.Text; v != nil {
		m.SetText(*v)
	}
	if v := i.Status; v != nil {
		m.SetStatus(*v)
	}
	if v := i.Priority; v != nil {
		m.SetPriority(*v)
	}
	if ids := i.AddChildIDs; len(ids) > 0 {
		m.AddChildIDs(ids...)
	}
	if ids := i.RemoveChildIDs; len(ids) > 0 {
		m.RemoveChildIDs(ids...)
	}
	if i.ClearParent {
		m.ClearParent()
	}
	if v := i.ParentID; v != nil {
		m.SetParentID(*v)
	}
}

// SetInput applies the change-set in the UpdateTodoInput on the update builder.
func (u *TodoUpdate) SetInput(i UpdateTodoInput) *TodoUpdate {
	i.Mutate(u.Mutation())
	return u
}

// SetInput applies the change-set in the UpdateTodoInput on the update-one builder.
func (u *TodoUpdateOne) SetInput(i UpdateTodoInput) *TodoUpdateOne {
	i.Mutate(u.Mutation())
	return u
}

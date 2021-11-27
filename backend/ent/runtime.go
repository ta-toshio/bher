// Code generated by entc, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/ta-toshio/bherb/ent/chart"
	"github.com/ta-toshio/bherb/ent/schema"
	"github.com/ta-toshio/bherb/ent/staff"
	"github.com/ta-toshio/bherb/ent/todo"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	chartMixin := schema.Chart{}.Mixin()
	chartMixinFields0 := chartMixin[0].Fields()
	_ = chartMixinFields0
	chartFields := schema.Chart{}.Fields()
	_ = chartFields
	// chartDescCreateTime is the schema descriptor for create_time field.
	chartDescCreateTime := chartMixinFields0[0].Descriptor()
	// chart.DefaultCreateTime holds the default value on creation for the create_time field.
	chart.DefaultCreateTime = chartDescCreateTime.Default.(func() time.Time)
	// chartDescUpdateTime is the schema descriptor for update_time field.
	chartDescUpdateTime := chartMixinFields0[1].Descriptor()
	// chart.DefaultUpdateTime holds the default value on creation for the update_time field.
	chart.DefaultUpdateTime = chartDescUpdateTime.Default.(func() time.Time)
	// chart.UpdateDefaultUpdateTime holds the default value on update for the update_time field.
	chart.UpdateDefaultUpdateTime = chartDescUpdateTime.UpdateDefault.(func() time.Time)
	// chartDescPatch is the schema descriptor for patch field.
	chartDescPatch := chartFields[0].Descriptor()
	// chart.DefaultPatch holds the default value on creation for the patch field.
	chart.DefaultPatch = chartDescPatch.Default.(bool)
	// chartDescGeneration is the schema descriptor for generation field.
	chartDescGeneration := chartFields[1].Descriptor()
	// chart.DefaultGeneration holds the default value on creation for the generation field.
	chart.DefaultGeneration = chartDescGeneration.Default.(int)
	// chartDescGender is the schema descriptor for gender field.
	chartDescGender := chartFields[2].Descriptor()
	// chart.DefaultGender holds the default value on creation for the gender field.
	chart.DefaultGender = chartDescGender.Default.(int)
	// chartDescAllergy is the schema descriptor for allergy field.
	chartDescAllergy := chartFields[3].Descriptor()
	// chart.DefaultAllergy holds the default value on creation for the allergy field.
	chart.DefaultAllergy = chartDescAllergy.Default.(int)
	// chartDescRash is the schema descriptor for rash field.
	chartDescRash := chartFields[4].Descriptor()
	// chart.DefaultRash holds the default value on creation for the rash field.
	chart.DefaultRash = chartDescRash.Default.(int)
	// chartDescSting is the schema descriptor for sting field.
	chartDescSting := chartFields[5].Descriptor()
	// chart.DefaultSting holds the default value on creation for the sting field.
	chart.DefaultSting = chartDescSting.Default.(int)
	// chartDescDyeWhen is the schema descriptor for dye_when field.
	chartDescDyeWhen := chartFields[6].Descriptor()
	// chart.DefaultDyeWhen holds the default value on creation for the dye_when field.
	chart.DefaultDyeWhen = chartDescDyeWhen.Default.(int)
	// chartDescDyeWhere is the schema descriptor for dye_where field.
	chartDescDyeWhere := chartFields[7].Descriptor()
	// chart.DefaultDyeWhere holds the default value on creation for the dye_where field.
	chart.DefaultDyeWhere = chartDescDyeWhere.Default.(int)
	// chartDescHenaWhen is the schema descriptor for hena_when field.
	chartDescHenaWhen := chartFields[8].Descriptor()
	// chart.DefaultHenaWhen holds the default value on creation for the hena_when field.
	chart.DefaultHenaWhen = chartDescHenaWhen.Default.(int)
	// chartDescRebondedWhen is the schema descriptor for rebonded_when field.
	chartDescRebondedWhen := chartFields[9].Descriptor()
	// chart.DefaultRebondedWhen holds the default value on creation for the rebonded_when field.
	chart.DefaultRebondedWhen = chartDescRebondedWhen.Default.(int)
	// chartDescManicureWhen is the schema descriptor for manicure_when field.
	chartDescManicureWhen := chartFields[10].Descriptor()
	// chart.DefaultManicureWhen holds the default value on creation for the manicure_when field.
	chart.DefaultManicureWhen = chartDescManicureWhen.Default.(int)
	// chartDescPermWhen is the schema descriptor for perm_when field.
	chartDescPermWhen := chartFields[11].Descriptor()
	// chart.DefaultPermWhen holds the default value on creation for the perm_when field.
	chart.DefaultPermWhen = chartDescPermWhen.Default.(int)
	// chartDescTreatmentWhen is the schema descriptor for treatment_when field.
	chartDescTreatmentWhen := chartFields[12].Descriptor()
	// chart.DefaultTreatmentWhen holds the default value on creation for the treatment_when field.
	chart.DefaultTreatmentWhen = chartDescTreatmentWhen.Default.(int)
	// chartDescNoticeReason is the schema descriptor for notice_reason field.
	chartDescNoticeReason := chartFields[13].Descriptor()
	// chart.DefaultNoticeReason holds the default value on creation for the notice_reason field.
	chart.DefaultNoticeReason = chartDescNoticeReason.Default.(int)
	// chartDescLastName is the schema descriptor for last_name field.
	chartDescLastName := chartFields[14].Descriptor()
	// chart.LastNameValidator is a validator for the "last_name" field. It is called by the builders before save.
	chart.LastNameValidator = chartDescLastName.Validators[0].(func(string) error)
	// chartDescFirstName is the schema descriptor for first_name field.
	chartDescFirstName := chartFields[15].Descriptor()
	// chart.FirstNameValidator is a validator for the "first_name" field. It is called by the builders before save.
	chart.FirstNameValidator = chartDescFirstName.Validators[0].(func(string) error)
	// chartDescPrefectureID is the schema descriptor for prefecture_id field.
	chartDescPrefectureID := chartFields[19].Descriptor()
	// chart.DefaultPrefectureID holds the default value on creation for the prefecture_id field.
	chart.DefaultPrefectureID = chartDescPrefectureID.Default.(int)
	staffFields := schema.Staff{}.Fields()
	_ = staffFields
	// staffDescUID is the schema descriptor for uid field.
	staffDescUID := staffFields[0].Descriptor()
	// staff.UIDValidator is a validator for the "uid" field. It is called by the builders before save.
	staff.UIDValidator = staffDescUID.Validators[0].(func(string) error)
	// staffDescEmail is the schema descriptor for email field.
	staffDescEmail := staffFields[1].Descriptor()
	// staff.EmailValidator is a validator for the "email" field. It is called by the builders before save.
	staff.EmailValidator = staffDescEmail.Validators[0].(func(string) error)
	// staffDescName is the schema descriptor for name field.
	staffDescName := staffFields[2].Descriptor()
	// staff.NameValidator is a validator for the "name" field. It is called by the builders before save.
	staff.NameValidator = staffDescName.Validators[0].(func(string) error)
	// staffDescCreatedAt is the schema descriptor for created_at field.
	staffDescCreatedAt := staffFields[4].Descriptor()
	// staff.DefaultCreatedAt holds the default value on creation for the created_at field.
	staff.DefaultCreatedAt = staffDescCreatedAt.Default.(func() time.Time)
	// staffDescUpdatedAt is the schema descriptor for updated_at field.
	staffDescUpdatedAt := staffFields[5].Descriptor()
	// staff.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	staff.DefaultUpdatedAt = staffDescUpdatedAt.Default.(func() time.Time)
	todoFields := schema.Todo{}.Fields()
	_ = todoFields
	// todoDescText is the schema descriptor for text field.
	todoDescText := todoFields[0].Descriptor()
	// todo.TextValidator is a validator for the "text" field. It is called by the builders before save.
	todo.TextValidator = todoDescText.Validators[0].(func(string) error)
	// todoDescCreatedAt is the schema descriptor for created_at field.
	todoDescCreatedAt := todoFields[1].Descriptor()
	// todo.DefaultCreatedAt holds the default value on creation for the created_at field.
	todo.DefaultCreatedAt = todoDescCreatedAt.Default.(func() time.Time)
	// todoDescPriority is the schema descriptor for priority field.
	todoDescPriority := todoFields[3].Descriptor()
	// todo.DefaultPriority holds the default value on creation for the priority field.
	todo.DefaultPriority = todoDescPriority.Default.(int)
}

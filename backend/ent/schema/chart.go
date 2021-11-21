package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/mixin"
)

// Chart holds the schema definition for the Chart entity.
type Chart struct {
	ent.Schema
}

// Fields of the Chart.
func (Chart) Fields() []ent.Field {
	return []ent.Field{
		field.Bool("patch").
			Default(false),
		field.Int("generation").
			Default(0),
		field.Int("gender").
			Default(0),
		field.Int("allergy").
			Default(0),
		field.Int("rash").
			Default(0),
		field.Int("sting").
			Default(0),
		field.Int("dye_when").
			Default(0),
		field.Int("dye_where").
			Default(0),
		field.Int("hena_when").
			Default(0),
		field.Int("rebonded_when").
			Default(0),
		field.Int("manicure_when").
			Default(0),
		field.Int("perm_when").
			Default(0),
		field.Int("treatment_when").
			Default(0),
		field.Int("notice_reason").
			Default(0),
		field.Text("last_name").
			NotEmpty(),
		field.Text("first_name").
			NotEmpty(),
		field.Text("last_name_hiragana").
			Annotations(
				entgql.OrderField("LAST_NAME_HIRAGANA"),
			),
		field.Text("first_name_hiragana").
			Annotations(
				entgql.OrderField("FIRST_NAME_HIRAGANA"),
			),
		field.Text("postal_code"),
		field.Int("prefecture_id").
			Default(0),
		field.Text("address"),
		field.Text("tel"),
		field.Text("email"),
	}
}


// Edges of the Chart.
func (Chart) Edges() []ent.Edge {
	return nil
}

func (Chart) Mixin() []ent.Mixin {
	return []ent.Mixin{
		mixin.Time{},
	}
}

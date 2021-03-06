// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/ta-toshio/bherb/ent/staff"
)

// StaffCreate is the builder for creating a Staff entity.
type StaffCreate struct {
	config
	mutation *StaffMutation
	hooks    []Hook
}

// SetUID sets the "uid" field.
func (sc *StaffCreate) SetUID(s string) *StaffCreate {
	sc.mutation.SetUID(s)
	return sc
}

// SetEmail sets the "email" field.
func (sc *StaffCreate) SetEmail(s string) *StaffCreate {
	sc.mutation.SetEmail(s)
	return sc
}

// SetName sets the "name" field.
func (sc *StaffCreate) SetName(s string) *StaffCreate {
	sc.mutation.SetName(s)
	return sc
}

// SetRole sets the "role" field.
func (sc *StaffCreate) SetRole(s staff.Role) *StaffCreate {
	sc.mutation.SetRole(s)
	return sc
}

// SetNillableRole sets the "role" field if the given value is not nil.
func (sc *StaffCreate) SetNillableRole(s *staff.Role) *StaffCreate {
	if s != nil {
		sc.SetRole(*s)
	}
	return sc
}

// SetCreatedAt sets the "created_at" field.
func (sc *StaffCreate) SetCreatedAt(t time.Time) *StaffCreate {
	sc.mutation.SetCreatedAt(t)
	return sc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (sc *StaffCreate) SetNillableCreatedAt(t *time.Time) *StaffCreate {
	if t != nil {
		sc.SetCreatedAt(*t)
	}
	return sc
}

// SetUpdatedAt sets the "updated_at" field.
func (sc *StaffCreate) SetUpdatedAt(t time.Time) *StaffCreate {
	sc.mutation.SetUpdatedAt(t)
	return sc
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (sc *StaffCreate) SetNillableUpdatedAt(t *time.Time) *StaffCreate {
	if t != nil {
		sc.SetUpdatedAt(*t)
	}
	return sc
}

// Mutation returns the StaffMutation object of the builder.
func (sc *StaffCreate) Mutation() *StaffMutation {
	return sc.mutation
}

// Save creates the Staff in the database.
func (sc *StaffCreate) Save(ctx context.Context) (*Staff, error) {
	var (
		err  error
		node *Staff
	)
	sc.defaults()
	if len(sc.hooks) == 0 {
		if err = sc.check(); err != nil {
			return nil, err
		}
		node, err = sc.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*StaffMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			if err = sc.check(); err != nil {
				return nil, err
			}
			sc.mutation = mutation
			if node, err = sc.sqlSave(ctx); err != nil {
				return nil, err
			}
			mutation.id = &node.ID
			mutation.done = true
			return node, err
		})
		for i := len(sc.hooks) - 1; i >= 0; i-- {
			if sc.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = sc.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, sc.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX calls Save and panics if Save returns an error.
func (sc *StaffCreate) SaveX(ctx context.Context) *Staff {
	v, err := sc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (sc *StaffCreate) Exec(ctx context.Context) error {
	_, err := sc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (sc *StaffCreate) ExecX(ctx context.Context) {
	if err := sc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (sc *StaffCreate) defaults() {
	if _, ok := sc.mutation.Role(); !ok {
		v := staff.DefaultRole
		sc.mutation.SetRole(v)
	}
	if _, ok := sc.mutation.CreatedAt(); !ok {
		v := staff.DefaultCreatedAt()
		sc.mutation.SetCreatedAt(v)
	}
	if _, ok := sc.mutation.UpdatedAt(); !ok {
		v := staff.DefaultUpdatedAt()
		sc.mutation.SetUpdatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (sc *StaffCreate) check() error {
	if _, ok := sc.mutation.UID(); !ok {
		return &ValidationError{Name: "uid", err: errors.New(`ent: missing required field "uid"`)}
	}
	if v, ok := sc.mutation.UID(); ok {
		if err := staff.UIDValidator(v); err != nil {
			return &ValidationError{Name: "uid", err: fmt.Errorf(`ent: validator failed for field "uid": %w`, err)}
		}
	}
	if _, ok := sc.mutation.Email(); !ok {
		return &ValidationError{Name: "email", err: errors.New(`ent: missing required field "email"`)}
	}
	if v, ok := sc.mutation.Email(); ok {
		if err := staff.EmailValidator(v); err != nil {
			return &ValidationError{Name: "email", err: fmt.Errorf(`ent: validator failed for field "email": %w`, err)}
		}
	}
	if _, ok := sc.mutation.Name(); !ok {
		return &ValidationError{Name: "name", err: errors.New(`ent: missing required field "name"`)}
	}
	if v, ok := sc.mutation.Name(); ok {
		if err := staff.NameValidator(v); err != nil {
			return &ValidationError{Name: "name", err: fmt.Errorf(`ent: validator failed for field "name": %w`, err)}
		}
	}
	if _, ok := sc.mutation.Role(); !ok {
		return &ValidationError{Name: "role", err: errors.New(`ent: missing required field "role"`)}
	}
	if v, ok := sc.mutation.Role(); ok {
		if err := staff.RoleValidator(v); err != nil {
			return &ValidationError{Name: "role", err: fmt.Errorf(`ent: validator failed for field "role": %w`, err)}
		}
	}
	if _, ok := sc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "created_at"`)}
	}
	if _, ok := sc.mutation.UpdatedAt(); !ok {
		return &ValidationError{Name: "updated_at", err: errors.New(`ent: missing required field "updated_at"`)}
	}
	return nil
}

func (sc *StaffCreate) sqlSave(ctx context.Context) (*Staff, error) {
	_node, _spec := sc.createSpec()
	if err := sqlgraph.CreateNode(ctx, sc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{err.Error(), err}
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	return _node, nil
}

func (sc *StaffCreate) createSpec() (*Staff, *sqlgraph.CreateSpec) {
	var (
		_node = &Staff{config: sc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: staff.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: staff.FieldID,
			},
		}
	)
	if value, ok := sc.mutation.UID(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: staff.FieldUID,
		})
		_node.UID = value
	}
	if value, ok := sc.mutation.Email(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: staff.FieldEmail,
		})
		_node.Email = value
	}
	if value, ok := sc.mutation.Name(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: staff.FieldName,
		})
		_node.Name = value
	}
	if value, ok := sc.mutation.Role(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeEnum,
			Value:  value,
			Column: staff.FieldRole,
		})
		_node.Role = value
	}
	if value, ok := sc.mutation.CreatedAt(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: staff.FieldCreatedAt,
		})
		_node.CreatedAt = value
	}
	if value, ok := sc.mutation.UpdatedAt(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: staff.FieldUpdatedAt,
		})
		_node.UpdatedAt = value
	}
	return _node, _spec
}

// StaffCreateBulk is the builder for creating many Staff entities in bulk.
type StaffCreateBulk struct {
	config
	builders []*StaffCreate
}

// Save creates the Staff entities in the database.
func (scb *StaffCreateBulk) Save(ctx context.Context) ([]*Staff, error) {
	specs := make([]*sqlgraph.CreateSpec, len(scb.builders))
	nodes := make([]*Staff, len(scb.builders))
	mutators := make([]Mutator, len(scb.builders))
	for i := range scb.builders {
		func(i int, root context.Context) {
			builder := scb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*StaffMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				nodes[i], specs[i] = builder.createSpec()
				var err error
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, scb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, scb.driver, spec); err != nil {
						if sqlgraph.IsConstraintError(err) {
							err = &ConstraintError{err.Error(), err}
						}
					}
				}
				if err != nil {
					return nil, err
				}
				mutation.id = &nodes[i].ID
				mutation.done = true
				if specs[i].ID.Value != nil {
					id := specs[i].ID.Value.(int64)
					nodes[i].ID = int(id)
				}
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, scb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (scb *StaffCreateBulk) SaveX(ctx context.Context) []*Staff {
	v, err := scb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (scb *StaffCreateBulk) Exec(ctx context.Context) error {
	_, err := scb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (scb *StaffCreateBulk) ExecX(ctx context.Context) {
	if err := scb.Exec(ctx); err != nil {
		panic(err)
	}
}

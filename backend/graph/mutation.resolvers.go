package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"github.com/ta-toshio/bherb/service/firebase"

	"github.com/ta-toshio/bherb/ent"
	"github.com/ta-toshio/bherb/ent/todo"
	"github.com/ta-toshio/bherb/graph/generated"
	"github.com/ta-toshio/bherb/graph/model"
)

func (r *mutationResolver) CreateTodo(ctx context.Context, input ent.CreateTodoInput) (*ent.Todo, error) {
	return ent.FromContext(ctx).Todo.
		Create().
		SetInput(input).
		Save(ctx)
}

func (r *mutationResolver) UpdateTodo(ctx context.Context, id int, input ent.UpdateTodoInput) (*ent.Todo, error) {
	return ent.FromContext(ctx).Todo.UpdateOneID(id).SetInput(input).Save(ctx)
}

func (r *mutationResolver) UpdateTodos(ctx context.Context, ids []int, input ent.UpdateTodoInput) ([]*ent.Todo, error) {
	client := ent.FromContext(ctx)
	if err := client.Todo.Update().Where(todo.IDIn(ids...)).SetInput(input).Exec(ctx); err != nil {
		return nil, err
	}
	return client.Todo.Query().Where(todo.IDIn(ids...)).All(ctx)
}

func (r *mutationResolver) CreateChart(ctx context.Context, input ent.CreateChartInput) (*ent.Chart, error) {
	return ent.FromContext(ctx).Chart.
		Create().
		SetInput(input).
		Save(ctx)
}

func (r *mutationResolver) CreateStaffWithUID(ctx context.Context, input model.CreateStaffWithUIDInput) (*ent.Staff, error) {
	i := ent.CreateStaffInput{
		UID:   input.UID,
		Email: input.Email,
		Name:  input.Name,
		Role:  input.Role,
	}
	staff, err := ent.FromContext(ctx).Staff.
		Create().
		SetInput(i).
		Save(ctx)

	if err == nil {
		f, _ := firebase.NewFirebaseClient()
		err := f.VerifyEmail(ctx, input.UID)
		if err != nil {
			return nil, err
		}
	}
	return staff, err
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }

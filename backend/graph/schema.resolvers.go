package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/ta-toshio/bherb/ent"
	"github.com/ta-toshio/bherb/graph/generated"
	"github.com/ta-toshio/bherb/graph/model"
)

func (r *mutationResolver) CreateTodo(ctx context.Context, todo model.TodoInput) (*ent.Todo, error) {
	return r.Client.Todo.Create().
		SetText(todo.Text).
		SetStatus(todo.Status).
		SetNillablePriority(todo.Priority). // フィールド"priority"が指定された場合、値をセットします。
		SetNillableParentID(todo.Parent).   // フィールド"parent_id"が指定された場合、値をセットします。
		Save(ctx)
}

func (r *queryResolver) Todos(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.TodoOrder) (*ent.TodoConnection, error) {
	return r.Client.Todo.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithTodoOrder(orderBy),
		)
}

func (r *queryResolver) Node(ctx context.Context, id int) (ent.Noder, error) {
	return r.Client.Noder(ctx, id)
}

func (r *queryResolver) Nodes(ctx context.Context, ids []int) ([]ent.Noder, error) {
	return r.Client.Noders(ctx, ids)
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

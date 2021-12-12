package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/ta-toshio/bherb/ent"
	"github.com/ta-toshio/bherb/graph/generated"
)

func (r *queryResolver) Todos(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.TodoOrder, where *ent.TodoWhereInput) (*ent.TodoConnection, error) {
	return r.Client.Debug().Todo.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithTodoOrder(orderBy),
			ent.WithTodoFilter(where.Filter),
		)
}

func (r *queryResolver) TodosWithAuth(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.TodoOrder, where *ent.TodoWhereInput) (*ent.TodoConnection, error) {
	return r.Client.Debug().Todo.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithTodoOrder(orderBy),
			ent.WithTodoFilter(where.Filter),
		)
}

func (r *queryResolver) Staffs(ctx context.Context, after *ent.Cursor, first *int, before *ent.Cursor, last *int, orderBy *ent.StaffOrder, where *ent.StaffWhereInput) (*ent.StaffConnection, error) {
	return r.Client.Debug().Staff.Query().
		Paginate(ctx, after, first, before, last,
			ent.WithStaffOrder(orderBy),
			ent.WithStaffFilter(where.Filter),
		)
}

func (r *queryResolver) Staff(ctx context.Context, id int) (*ent.Staff, error) {
	return r.Client.Debug().Staff.Get(ctx, id)
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }

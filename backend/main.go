package main

import (
	"context"
	"entgo.io/contrib/entgql"
	"entgo.io/ent/dialect"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"

	"github.com/go-chi/chi"
	"github.com/rs/cors"

	"github.com/ta-toshio/bherb/ent"
	"github.com/ta-toshio/bherb/ent/migrate"
	"github.com/ta-toshio/bherb/graph"
	"github.com/ta-toshio/bherb/graph/generated"
)

const defaultPort = "8080"

func newClient() *ent.Client {
	client, err := ent.Open(dialect.MySQL,  "myuser:secret@tcp(db:3306)/mydatabase?parseTime=True")
	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}

	// Run the auto migration tool.
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
		); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	return client
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	client := newClient()
	defer client.Close()

	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{
		Client: client,
	}}))
	srv.Use(entgql.Transactioner{TxOpener: client})

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

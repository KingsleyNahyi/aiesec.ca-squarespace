package main

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

var db *sql.DB

// initDB opens a connection to the Turso database using credentials
// supplied via environment variables. It must be called once at startup,
// before any HTTP routes that touch the database are registered.
//
// Required environment variables (set these in Render's dashboard under
// Environment, never commit them to the repo):
//   TURSO_DATABASE_URL  -> from `turso db show aiesec-forms-data --url`
//   TURSO_AUTH_TOKEN    -> from `turso db tokens create aiesec-forms-data`
func initDB() {
	dbURL := os.Getenv("TURSO_DATABASE_URL")
	authToken := os.Getenv("TURSO_AUTH_TOKEN")

	if dbURL == "" || authToken == "" {
		log.Fatal("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must both be set as environment variables")
	}

	connStr := dbURL + "?authToken=" + authToken

	var err error
	db, err = sql.Open("libsql", connStr)
	if err != nil {
		log.Fatalf("failed to open Turso connection: %v", err)
	}

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to reach Turso database: %v", err)
	}

	log.Println("connected to Turso database")
}

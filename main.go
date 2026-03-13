package main

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func renderPage(w http.ResponseWriter, tmpl string, data interface{}) {
	// This ensures we always load the base layout + the specific page
	tmplFiles := []string{
		"templates/base.html",           // Your main shell
		"templates/partials/nav.html",
		"templates/partials/footer.html",	
		filepath.Join("templates/pages", tmpl), // The specific content (home.html)
	}

	t, err := template.ParseFiles(tmplFiles...)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	
	// We execute "base" because it contains the {{template "content" .}} hook
	err = t.ExecuteTemplate(w, "base", data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	// --- THE ESSENTIAL ADDITION ---
	// This line was the "missing link." It connects your /static/ URLs to your folder.
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	// Your Routes
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		renderPage(w, "home.html", nil)
	})

	http.HandleFunc("/this-is-aiesec", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "this-is-aiesec.html", nil)
	})

	http.HandleFunc("/our-mission", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "our-mission.html", nil)
	})

	http.HandleFunc("/meet-the-team", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "meet-the-team.html", nil)
	})

	http.HandleFunc("/alumni", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "alumni.html", nil)
	})

	http.HandleFunc("/our-partners", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "our-partners.html", nil)
	})

	http.HandleFunc("/exchange", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "exchange.html", nil)
	})

	http.HandleFunc("/membership", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "membership.html", nil)
	})

	http.HandleFunc("/join-us", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "join-us.html", nil)
	})

	http.HandleFunc("/about-partnerships", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "about-partnerships.html", nil)
	})

	http.HandleFunc("/y2b", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "y2b.html", nil)
	})
	http.HandleFunc("/exchange-for-organizations", func(w http.ResponseWriter, r *http.Request){

	renderPage(w, "exchange-for-organizations.html", nil)
	})

	http.HandleFunc("/global-volunteer.html", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "global-volunteer.html", nil)
	})

	http.HandleFunc("/global-teacher.html", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "global-teacher.html", nil)
	})

	http.HandleFunc("/global-talent.html", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "global-talent.html", nil)
	})

	http.HandleFunc("/privacy-policy.html", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "privacy-policy.html", nil)
	})

	http.HandleFunc("/annual-reports.html", func(w http.ResponseWriter, r *http.Request){

		renderPage(w, "annual-reports.html", nil)
	})
port := os.Getenv("PORT")
if port == "" {
    port = "8080"
}
log.Fatal(http.ListenAndServe(":"+port, nil))
}
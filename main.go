package main

import (
	"html/template"
	"net/http"
	"path/filepath"
	"os"
	"log"
	"strings"
)
func renderPage(w http.ResponseWriter, tmpl string, data interface{}) {
    var tmplFiles []string

    if strings.HasPrefix(tmpl, "hub/") {
        hubNav := "templates/partials/hub/nav.html"
        hubFooter := "templates/partials/hub/footer.html"

        navFile := "templates/partials/nav.html"
        footerFile := "templates/partials/footer.html"

        // Use hub-specific partials if they exist, otherwise fall back
        if _, err := os.Stat(hubNav); err == nil {
            navFile = hubNav
        }
        if _, err := os.Stat(hubFooter); err == nil {
            footerFile = hubFooter
        }

        tmplFiles = []string{
            "templates/base.html",
            navFile,
            footerFile,
            filepath.Join("templates/pages", tmpl),
        }
    } else {
        tmplFiles = []string{
            "templates/base.html",
            "templates/partials/nav.html",
            "templates/partials/footer.html",
            filepath.Join("templates/pages", tmpl),
        }
    }

    t, err := template.ParseFiles(tmplFiles...)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    err = t.ExecuteTemplate(w, "base", data)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
    }
}

func main() {
	staticFS := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasSuffix(r.URL.Path, ".js") {
			w.Header().Set("Content-Type", "application/javascript")
		} else if strings.HasSuffix(r.URL.Path, ".css") {
			w.Header().Set("Content-Type", "text/css")
		}
		http.StripPrefix("/static/", staticFS).ServeHTTP(w, r)
	}))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "home.html", nil)
	})

	http.HandleFunc("/this-is-aiesec", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "this-is-aiesec.html", nil)
	})

	http.HandleFunc("/our-mission", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "our-mission.html", nil)
	})

	http.HandleFunc("/meet-the-team", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "meet-the-team.html", nil)
	})

	http.HandleFunc("/alumni", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "alumni.html", nil)
	})

	http.HandleFunc("/our-partners", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "our-partners.html", nil)
	})

	http.HandleFunc("/exchange", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "exchange.html", nil)
	})

	http.HandleFunc("/membership", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "membership.html", nil)
	})

	http.HandleFunc("/join-us", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "join-us.html", nil)
	})

	http.HandleFunc("/about-partnerships", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "about-partnerships.html", nil)
	})

	http.HandleFunc("/y2b", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "y2b.html", nil)
	})

	http.HandleFunc("/exchange-for-organizations", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "exchange-for-organizations.html", nil)
	})

	http.HandleFunc("/global-volunteer", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "global-volunteer.html", nil)
	})

	http.HandleFunc("/global-teacher", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "global-teacher.html", nil)
	})

	http.HandleFunc("/global-talent", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "global-talent.html", nil)
	})

	http.HandleFunc("/privacy-policy", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "privacy-policy.html", nil)
	})

	http.HandleFunc("/annual-reports", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "annual-reports.html", nil)
	})

	http.HandleFunc("/support-us", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "support-us.html", nil)
	})

	http.HandleFunc("/exchange-signup", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "exchange-signup.html", nil)
	})

	http.HandleFunc("/safety-policy", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "safety-policy.html", nil)
	})

http.HandleFunc("/hub", func(w http.ResponseWriter, r *http.Request) {
    renderPage(w, "hub/index.html", map[string]interface{}{
        "Title":          "Hub",
        "TransparentNav": true,
        "NavActive":      "home",
    })
})

http.HandleFunc("/hub/", func(w http.ResponseWriter, r *http.Request) {
	page := strings.TrimPrefix(r.URL.Path, "/hub/")
	renderPage(w, "hub/" +page+".html", map[string]interface{}{
	"Title": "Hub",
	})
})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
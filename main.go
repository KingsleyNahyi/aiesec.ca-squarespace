package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

// PageData holds all data passed to every template
type PageData struct {
	Title           string
	MetaDescription string
	CanonicalPath   string
	TransparentNav  bool
	NavActive       string
}

func renderPage(w http.ResponseWriter, tmpl string, data interface{}) {
	var tmplFiles []string

	if strings.HasPrefix(tmpl, "hub/") {
		hubNav    := "templates/partials/hub/nav.html"
		hubFooter := "templates/partials/hub/footer.html"
		hubSearch := "templates/partials/hub/search.html"

		navFile    := "templates/partials/nav.html"
		footerFile := "templates/partials/footer.html"

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
			hubSearch,
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
	// Static files
	staticFS := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasSuffix(r.URL.Path, ".js") {
			w.Header().Set("Content-Type", "application/javascript")
		} else if strings.HasSuffix(r.URL.Path, ".css") {
			w.Header().Set("Content-Type", "text/css")
		}
		// Cache static assets for 7 days
		w.Header().Set("Cache-Control", "public, max-age=604800")
		http.StripPrefix("/static/", staticFS).ServeHTTP(w, r)
	}))

	// robots.txt
	http.HandleFunc("/robots.txt", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		fmt.Fprint(w, "User-agent: *\nAllow: /\n\nSitemap: https://aieseccanada.com/sitemap.xml\n")
	})

	// sitemap.xml
	http.HandleFunc("/sitemap.xml", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/xml")
		pages := []string{
			"/",
			"/this-is-aiesec",
			"/our-mission",
			"/meet-the-team",
			"/alumni",
			"/our-partners",
			"/exchange",
			"/membership",
			"/join-us",
			"/about-partnerships",
			"/y2b",
			"/exchange-for-organizations",
			"/global-volunteer",
			"/global-teacher",
			"/global-talent",
			"/privacy-policy",
			"/annual-reports",
			"/support-us",
			"/exchange-signup",
			"/safety-policy",
			"/hub/b2c",
			"/hub/conference-overview",
			"/hub/data-management",
			"/hub/finance",
			"/hub/gdpr-nec-content",
			"/hub/get-inspired",
			"/hub/incoming-global-talent-nec",
			"/hub/index",
			"/hub/lcp-hub",
			"/hub/leaders-101",
			"/hub/leadership",
			"/hub/local-committee-president",
			"/hub/ogt",
			"/hub/ogv",
			"/hub/organizingcommittee",
			"/hub/outgoing-global-exchange",
			"/hub/talent-management-nec",
			"/hub/talentmanagement",
			"/hub/youth-leadership-launch"
		}
		fmt.Fprint(w, `<?xml version="1.0" encoding="UTF-8"?>`)
		fmt.Fprint(w, "\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n")
		for _, p := range pages {
			fmt.Fprintf(w, "  <url>\n    <loc>https://aieseccanada.com%s</loc>\n  </url>\n", p)
		}
		fmt.Fprint(w, "</urlset>")
	})

	// Page routes
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "home.html", PageData{
			Title:           "Home",
			MetaDescription: "AIESEC in Canada develops leadership in young people through international exchange and cross-cultural experiences.",
			CanonicalPath:   "/",
		})
	})

	http.HandleFunc("/this-is-aiesec", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "this-is-aiesec.html", PageData{
			Title:           "This is AIESEC",
			MetaDescription: "Learn about AIESEC — the world's largest youth-run organization empowering young people through leadership and exchange.",
			CanonicalPath:   "/this-is-aiesec",
		})
	})

	http.HandleFunc("/our-mission", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "our-mission.html", PageData{
			Title:           "Our Mission",
			MetaDescription: "AIESEC's mission is to activate leadership potential in young people to create a positive impact on society.",
			CanonicalPath:   "/our-mission",
		})
	})

	http.HandleFunc("/meet-the-team", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "meet-the-team.html", PageData{
			Title:           "Meet the Team",
			MetaDescription: "Meet the AIESEC Canada national team — passionate young leaders driving change across the country.",
			CanonicalPath:   "/meet-the-team",
		})
	})

	http.HandleFunc("/alumni", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "alumni.html", PageData{
			Title:           "Alumni",
			MetaDescription: "Join the AIESEC Canada alumni network and stay connected with thousands of global leaders who shaped their futures through AIESEC.",
			CanonicalPath:   "/alumni",
		})
	})

	http.HandleFunc("/our-partners", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "our-partners.html", PageData{
			Title:           "Our Partners",
			MetaDescription: "Discover the organizations partnering with AIESEC Canada to develop the next generation of global leaders.",
			CanonicalPath:   "/our-partners",
		})
	})

	http.HandleFunc("/exchange", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "exchange.html", PageData{
			Title:           "Exchange Programs",
			MetaDescription: "Explore AIESEC Canada's international exchange programs — volunteer, teach, or work abroad to develop your leadership skills.",
			CanonicalPath:   "/exchange",
		})
	})

	http.HandleFunc("/membership", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "membership.html", PageData{
			Title:           "Membership",
			MetaDescription: "Become a member of AIESEC Canada and join a global network of young leaders making a difference.",
			CanonicalPath:   "/membership",
		})
	})

	http.HandleFunc("/join-us", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "join-us.html", PageData{
			Title:           "Join Us",
			MetaDescription: "Join AIESEC Canada today and start your leadership journey with the world's largest youth-run organization.",
			CanonicalPath:   "/join-us",
		})
	})

	http.HandleFunc("/about-partnerships", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "about-partnerships.html", PageData{
			Title:           "About Partnerships",
			MetaDescription: "Partner with AIESEC Canada to connect with motivated young talent and support the development of future global leaders.",
			CanonicalPath:   "/about-partnerships",
		})
	})

	http.HandleFunc("/y2b", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "y2b.html", PageData{
			Title:           "Youth to Business",
			MetaDescription: "AIESEC Canada's Youth to Business forum connects young leaders with industry professionals for meaningful dialogue and growth.",
			CanonicalPath:   "/y2b",
		})
	})

	http.HandleFunc("/exchange-for-organizations", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "exchange-for-organizations.html", PageData{
			Title:           "Exchange for Organizations",
			MetaDescription: "Bring global talent to your organization through AIESEC Canada's exchange program for businesses and NGOs.",
			CanonicalPath:   "/exchange-for-organizations",
		})
	})

	http.HandleFunc("/global-volunteer", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "global-volunteer.html", PageData{
			Title:           "Global Volunteer",
			MetaDescription: "Make a global impact through AIESEC's Global Volunteer program — volunteer abroad and develop real leadership skills.",
			CanonicalPath:   "/global-volunteer",
		})
	})

	http.HandleFunc("/global-teacher", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "global-teacher.html", PageData{
			Title:           "Global Teacher",
			MetaDescription: "Teach abroad with AIESEC's Global Teacher program and make a meaningful difference in classrooms around the world.",
			CanonicalPath:   "/global-teacher",
		})
	})

	http.HandleFunc("/global-talent", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "global-talent.html", PageData{
			Title:           "Global Talent",
			MetaDescription: "Gain international work experience through AIESEC's Global Talent program and accelerate your career development.",
			CanonicalPath:   "/global-talent",
		})
	})

	http.HandleFunc("/privacy-policy", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "privacy-policy.html", PageData{
			Title:           "Privacy Policy",
			MetaDescription: "Read AIESEC Canada's privacy policy to understand how we collect, use, and protect your personal information.",
			CanonicalPath:   "/privacy-policy",
		})
	})

	http.HandleFunc("/annual-reports", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "annual-reports.html", PageData{
			Title:           "Annual Reports",
			MetaDescription: "Browse AIESEC Canada's annual reports and see the impact we've made in developing young leaders across the country.",
			CanonicalPath:   "/annual-reports",
		})
	})

	http.HandleFunc("/support-us", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "support-us.html", PageData{
			Title:           "Support Us",
			MetaDescription: "Support AIESEC Canada's mission to develop youth leadership and create positive change in communities worldwide.",
			CanonicalPath:   "/support-us",
		})
	})

	http.HandleFunc("/exchange-signup", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "exchange-signup.html", PageData{
			Title:           "Exchange Sign Up",
			MetaDescription: "Sign up for an AIESEC Canada exchange program and take the first step toward a transformative international experience.",
			CanonicalPath:   "/exchange-signup",
		})
	})

	http.HandleFunc("/safety-policy", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "safety-policy.html", PageData{
			Title:           "Safety Policy",
			MetaDescription: "Learn about AIESEC Canada's safety policy and the measures we take to ensure the wellbeing of all exchange participants.",
			CanonicalPath:   "/safety-policy",
		})
	})

	http.HandleFunc("/hub", func(w http.ResponseWriter, r *http.Request) {
		renderPage(w, "hub/index.html", PageData{
			Title:          "Hub",
			MetaDescription: "Access the AIESEC Canada member hub for resources, tools, and updates.",
			CanonicalPath:  "/hub",
			TransparentNav: true,
			NavActive:      "home",
		})
	})

	http.HandleFunc("/hub/", func(w http.ResponseWriter, r *http.Request) {
		page := strings.TrimPrefix(r.URL.Path, "/hub/")
		renderPage(w, "hub/"+page+".html", PageData{
			Title:          "Hub",
			MetaDescription: "AIESEC Canada member hub.",
			CanonicalPath:  "/hub/" + page,
		})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
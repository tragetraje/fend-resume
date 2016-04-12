
//Display Bio JSON;
bio = {
    "name": "Zina Astafyeva",
    "role": "Front-End Web Developer Nanodegree Student",
    "contacts": {
        "email": "z.a.astafyeva@gmail.com",
        "mobile": "0401 333 222",
        "linkedin": "https://au.linkedin.com/pub/zina-astafyeva/40/368/248",
        "github": "https://github.com/tragetraje",
        "location": "Newcastle, Australia"
    },
    "welcomeMessage": "A telecom engineer transitioned to Front-End Web developer. Obsessed with web development. Curious about visual aesthetics of everyday things. Check out my GitHub and LinkedIn.",
    "skills": ["Programming languages: HTML5, CSS3, JavaScript", "Frameworks, IDEs: jQuery, Bootstrap, Atom, Grunt", "Version Control System: Git"],
    "languages": "Fluent in: Spanish and Russian",
    "biopic": "images/me.jpg",

    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedWelcomeMessage = HTMLwelcomeMessage.replace("%data%", bio.welcomeMessage);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedEmail = HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedLinkedin = HTMLlinkedin.replace("#", bio.contacts.linkedin);
        var formattedGithub = HTMLgithub.replace("#", bio.contacts.github);
        var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages);


        $("#header").prepend(formattedWelcomeMessage);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedMobile);
        $("#topContacts, #footerContacts").append(formattedEmail);

        $("#footerContacts").append(formattedLinkedin);
        $("#footerContacts").append(formattedGithub);

        if (bio.skills.length > 0) {
            for (var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
        $("#languages").append(HTMLlanguages.replace("%data%", bio.languages));
    }
};

bio.display();

//Display Education JSON;

var education = {
    "schools": [{
        "name": "Saint-Petersburg Electrotechnical University",
        "url": "http://www.eltech.ru/en/university",
        "location": "Russia",
        "degree": "Electrical Engineer",
        "majors": ["Electronics", "Microelectronics"],
        "dates": "2007"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com/nanodegree-classic"
    }, {
        "title": "Fundamentals of JavaScript",
        "school": "CodeCademy",
        "date": "2016",
        "url": "www.codecademy.com/learn/javascript"
    }],
    display: function() {
        var name, location, degree, dates, url, title, school, date;
        education.schools.forEach(addUni);
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(addOnlineCourse);

        function addUni(school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace("%data%", school.name).replace("#", school.url))
                .append(HTMLschoolLocation.replace("%data%", school.location))
                .append(HTMLschoolDegree.replace("%data%", school.degree))
                .append(HTMLschoolDates.replace("%data%", school.dates));
        }

        function addOnlineCourse(course) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.school).replace("#", course.url))
                .append(HTMLonlineTitle.replace("%data%", course.title))
                .append(HTMLonlineDates.replace("%data%", course.date));
        }
    }
};

education.display();

//Display Work JSON;

var work = {
    "jobs": [{
        "employer": "Freelance",
        "title": "Consulting Network Engineer",
        "location": "Hunter Region, NSW, Australia",
        "dates": "November 2015 - December 2015",
        "description": "Successfully installed, configured and performed initial troubleshooting of Cisco network equipment in 3 locations across the state"
    }, {
        "employer": "Altran",
        "title": "Technical Consultant",
        "location": "Madrid, Spain",
        "dates": "September 2011 - August 2013",
        "description": "Collaborated in commercial launch of 2 Android OS mobile clients in Spain and Germany. Designed and executed a variety of test sets required for productive release."
    }],
    display: function() {
        var employer, title, location, dates, description;
        work.jobs.forEach(addWorkPlace);

        function addWorkPlace(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkTitle.replace("%data%", job.title))
                .append(HTMLworkEmployer.replace("%data%", job.employer))
                .append(HTMLworkLocation.replace("%data%", job.location))
                .append(HTMLworkDates.replace("%data%", job.dates))
                .append(HTMLworkDescription.replace("%data%", job.description));
        }
    }
};

work.display();

//Display Projects JSON;

var projects = {
    "projects": [{
        "title": "Interactive Resume",
        "dates": "March, 2016",
        "view": "tragetraje.github.io/fend-resume",
        "github": "https://github.com/tragetraje/fend-resume",
        "description": "An interactive resume site to showcase my projects and its progress while studying for a nanodegree. JavaScript/jQuery and Bootstrap were used to interactively display the sections of the resume.",
        "images": [ "images/project.jpg", "images/project-demo.jpg" ]
    }, {
        "title": "Portfolio Site",
        "dates": "February, 2016",
        "view": "http://tragetraje.github.io/",
        "github": "https://github.com/tragetraje/tragetraje.github.io",
        "description": "A static single-page, responsive site using HTML, CSS and Bootstrap. User can view contact information and my recent projects, hosted on GitHub pages.",
        "images": [ "images/project.jpg", "images/project-demo.jpg" ]
    }],
    display: function() {
        var title, dates, view, github, description;
        projects.projects.forEach(addProject);

        function addProject(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",
                    project.title))
                .append(HTMLprojectDates.replace("%data%", project.dates))
                .append(HTMLprojectDescription.replace("%data%", project.description));
            if (project.view !== undefined)
                $(".project-entry:last").append(HTMLprojectView.replace("#", project.view));
            if (project.github !== undefined)
                $(".project-entry:last").append(HTMLprojectGithub.replace("#", project.github));
        }
    }
};

projects.display();

//Display Google Map;

$("#mapDiv").append(googleMap);

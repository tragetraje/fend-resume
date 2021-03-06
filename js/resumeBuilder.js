
//Display Bio JSON;
bio = {
    "name": "Zina Astafyeva",
    "role": "Front-End Web Developer Nanodegree Student",
    "contacts": {
        "email": "z.a.astafyeva@gmail.com",
        "mobile": "0400 000 000",
        "linkedin": "https://au.linkedin.com/in/zastafyeva",
        "github": "https://github.com/tragetraje",
        "location": "Newcastle, Australia"
    },
    "welcomeMessage": "A telecom engineer transitioned to Front-End Web developer. A problem solver and lifetime learner. Curious about visual aesthetics of everyday things. Check out my GitHub and LinkedIn.",
    "skills": ["Programming languages: HTML5, CSS3, JavaScript", "Frameworks, IDEs: Knockout.js, jQuery, Grunt, Bootstrap", "Version Control System: Git"],
    "languages": "Fluent in: Spanish and Russian",

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
        "url": "https://www.udacity.com/nanodegree"
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
    "projects": [
      {   "title": "Feedreader Testing",
          "dates": "October, 2016",
          "view": "https://tragetraje.github.io/fend-feedreader/",
          "github": "https://github.com/tragetraje/fend-feedreader",
          "description": "In this project I was given a web-based application that reads RSS feeds from four popular blogs on Web Development and outputs them in the main window. My task was to implement a series of test sets using JavaScript Testing Framework Jasmine to check the application logic, event handling and DOM manipulation."
      },
      {   "title": "Neighborhood Map",
          "dates": "September, 2016",
          "view": "http://tragetraje.github.io/fend-neighborhood-map",
          "github": "https://github.com/tragetraje/fend-neighborhood-map",
          "description": "A responsive single-page application featuring a street art map of Newcastle, Australia. Map displays street art locations' by default which can be filtered using text input box and searching for a particular artist and his work. Knockout.js, Google Maps API and Flickr API were used to build the project."
      },
      {   "title": "Website Perfomance Optimization",
          "dates": "July, 2016",
          "view": "http://tragetraje.github.io/fend-optimization",
          "github": "https://github.com/tragetraje/fend-optimization",
          "description": "Added a series of optimization techniques to make the page render as quickly as possible. Investigated the reasons which prevent the page from rendering at 60 frames per second and improved its performance by refactoring the JavaScript code. Used Grunt task runner to minify the files and images."
      },{
        "title": "Classic Arcade Game Clone",
          "dates": "April, 2016",
          "view": "http://tragetraje.github.io/fend-arcade-game/",
          "github": "https://github.com/tragetraje/fend-arcade-game",
          "description": "My task was to create a clone of classic JavaScript Arcade Game Frogger. Using Object-Oriented JavaScript, I implemented the player and enemy classes, function to detect the collision of the entities and handleInput method which makes the player move according to keyboard input. Visual assets and game engine was provided."
      }, {
        "title": "Interactive Resume",
        "dates": "March, 2016",
        "view": "http://tragetraje.github.io/fend-resume",
        "github": "https://github.com/tragetraje/fend-resume",
        "description": "An interactive resume site to showcase my projects and its progress while studying for a nanodegree. I created JSON-objects representing my skills, education, work experience and web projects, JavaScript/jQuery was used to interactively display the sections of the resume."
    }, {
        "title": "Portfolio Site",
        "dates": "February, 2016",
        "view": "http://tragetraje.github.io/fend-portfolio",
        "github": "https://github.com/tragetraje/fend-portfolio",
        "description": "A static single-page, responsive site using HTML, CSS and Bootstrap. User can view contact information and my recent projects, hosted on GitHub pages. I've set up Grunt task-runner for this project to scale the images for different viewport sizes"
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

// Bio JSON

var bio = {
  "name": "Zina Astafyeva",
  "role": "Front-End Web Developer Nanodegree Student",
  "contacts": {
    "email": "z.a.astafyeva@gmail.com",
    "linkedin": "https://au.linkedin.com/pub/zina-astafyeva/40/368/248",
    "github": "https://github.com/tragetraje",
    "location": "Newcastle, Australia"
  },
  "welcomeMsg": "A telecom engineer transitioned to Front-End Web developer. Obsessed with web development. Curious about visual aesthetics of everyday things. Check out my GitHub and LinkedIn.",
  "skills" : ["Programming languages: HTML5, CSS3, JavaScript", "Frameworks, IDEs: jQuery, Bootstrap, Atom, Grunt", "Version Control System: Git"],
  "languages": "Fluent in: Spanish and Russian"
}

//Display Bio JSON function;

function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedEmail = HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email);
    var formattedLinkedin = HTMLlinkedin.replace("#", bio.contacts.linkedin);
    var formattedGithub = HTMLgithub.replace("#", bio.contacts.github);
    var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages);


    $("#header").prepend(formattedWelcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedLocation);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedLinkedin);
    $("#footerContacts").append(formattedGithub);

    if(bio.skills.length > 0)
    {
      for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      };
    };

    $("#languages").append(HTMLlanguages.replace("%data%", bio.languages));
}

displayBio();

//Education JSON

var education = {
"schools": [
  {
    "name": "Saint-Petersburg Electrotechnical University",
    "url": "http://www.eltech.ru/en/university",
    "location": "Russia",
    "degree": "Electrical Engineer",
    "dates": "2007"
  }
],
"onlineCourses": [
    {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "2016",
    "url": "www.udacity.com/nanodegree-classic"
  },
    {
    "title": "Fundamentals of JavaScript",
    "school": "CodeCademy",
    "dates": "2016",
    "url": "www.codecademy.com/learn/javascript"
    }
  ]
}

//Display Education JSON function;

function displayEducation() {
  for (var schools in education.schools ) {
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(HTMLschoolName.replace("%data%",  education.schools[schools].name).replace("#", education.schools[schools].url))
                    .append(HTMLschoolLocation.replace("%data%", education.schools[schools].location))
                    .append(HTMLschoolDegree.replace("%data%", education.schools[schools].degree))
                    .append(HTMLschoolDates.replace("%data%", education.schools[schools].dates));
    //$('.education-entry:last').append(formattedSchoolDegree);
    //$('.education-entry:last').append(formattedSchoolDates);
    }
  $("#education").append(HTMLonlineClasses);
  for (school in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school).replace("#", education.onlineCourses[school].url))
                    .append(HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title))
                    .append(HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates));
    }
}

displayEducation();

//Work JSON

var work = {
  "jobs": [
    {
      "employer": "Freelance",
      "title": "Consulting Network Engineer",
      "location": "Hunter Region, NSW, Australia",
      "dates": "November 2015 - December 2015",
      "description": "Successfully installed, configured and performed initial troubleshooting of Cisco network equipment in 3 locations across the state"
    },
    {
      "employer": "Altran",
      "title": "Technical Consultant",
      "location": "Madrid, Spain",
      "dates": "September 2011 - August 2013",
      "description": "Collaborated in commercial launch of 2 Android OS mobile clients in Spain and Germany. Designed and executed a variety of test sets required for productive release."
    }
  ]
}

//Display Work JSON function;

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title))
                    .append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer))
                    .append(HTMLworkLocation.replace("%data%", work.jobs[job].location))
                    .append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
                    .append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

displayWork();

//Projects JSON

var projects = {
  "projects": [
    {
      "title": "Interactive Resume",
      "dates": "March, 2016",
      "view": "www",
      "github": "https://github.com/tragetraje/fend-resume",
      "description": "An interactive resume site to showcase my projects and its progress while studying for a nanodegree. JavaScript/jQuery and Bootstrap were used to interactively display the sections of the resume."
    },
    {
      "title": "Portfolio Site",
      "dates": "February, 2016",
      "view": "http://tragetraje.github.io/",
      "github": "https://github.com/tragetraje/tragetraje.github.io",
      "description": "A static single-page, responsive site using HTML, CSS and Bootstrap. User can view contact information and my recent projects, hosted on GitHub pages."
    }
  ]
}

function displayProjects() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",
            projects.projects[project].title))
                            .append(HTMLprojectDates.replace("%data%", projects.projects[project].dates))
                            .append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        if (projects.projects[project].view != undefined )
            $(".project-entry:last").append(HTMLprojectView.replace("#", projects.projects[project].view));
        if (projects.projects[project].github != undefined )
            $(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project].github));
    }
}
displayProjects();

$("#mapDiv").append(googleMap);

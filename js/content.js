showContent("projects");
function showContent(contentId) {
  var container = document.getElementById("container");
  var menuItems = document.querySelectorAll("#menu li");

  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });

  menuItems.forEach(function (item) {
    if (item.id === contentId) {
      item.classList.add("active");
    }
  });

  container.innerHTML = "";
  /*-----------FORM----------*/
  if (contentId === "projects") {
    var projectsData = [
      {
        imageSrc: "/resources/pixme.png",
        projectTitle: "Online multimedia gallery",
        author: "@sebasmonsalve16",
        verified: true,
        developedYear: 2023,
        technologies: ["React", "NodeJS", "ExpressJS", "MongoDB", "Cloudinary"],
        description:
          "PIXME. This online photo and video gallery, accessible through your favorite web browser, offers a user-friendly platform for preserving and enjoying your cherished memories. You can mark favorites, recover deleted items, and choose when to permanently remove them from your account. Additionally, it features robust security measures that allow you to recover your account in case you forget your password.",
        githubLink: "https://github.com/sebasmonsalve16/pixme",
        websiteLink: "https://www.pixme.com",
      },
      {
        imageSrc: "/resources/swift-admin.png",
        projectTitle: "Interactive Education Platform",
        author: "@sebasmonsalve16",
        verified: true,
        developedYear: 2023,
        technologies: ["React", "NodeJS", "ExpressJS", "MongoDB", "Cloudinary"],
        description:
          "SWIFTADMIN. This web application enables a super administrator to create administrators and users. Users can upload files that are verified by administrators. The platform is designed to facilitate professors in uploading course content, and the faculty leader (administrator) has the authority to approve it or provide constructive feedback for improvements before implementation. It's worth noting that my involvement in this project is limited to the frontend.",
        githubLink: "https://github.com/sebasmonsalve16/pixme",
        websiteLink: "https://www.pixme.com",
      },
      {
        imageSrc: "/resources/hotel-billing-system.png",
        projectTitle: "Billing system for hotels",
        author: "@sebasmonsalve16",
        verified: true,
        developedYear: 2023,
        technologies: ["C#", "SQLserver"],
        description:
          "HBS. This hotel billing software, offers a comprehensive solution for managing various aspects of hotel operations. Users can effortlessly create and manage rooms, packages, products, and other items, ultimately generating reservations and seamlessly creating invoices with all the necessary details.",
        githubLink: "https://github.com/sebasmonsalve16/hotel-billing-system",
        websiteLink: "https://www.hbs.com",
      },
    ];
    /*-----------TEMPLATE----------*/

    projectsData.forEach(function (project) {
      var projectHTML =
        '<div class= "project">' +
        '<div class= "image-project">' +
        '<img src="' +
        project.imageSrc +
        '" alt="project image" draggable="false">' +
        '<div class= "options-project">' +
        '<a href="' +
        project.githubLink +
        '"><i class= "fa-brands fa-github" title="View GitHub"></i></a>' +
        '<a href="' +
        project.websiteLink +
        '"><i class= "fa-solid fa-link" title="View website"></i></a>' +
        "</div>" +
        "</div>" +
        '<div class= "content-project">' +
        "<h2>" +
        project.projectTitle +
        "</h2>" +
        '<div class= "sub-project">' +
        '<div class= "sub-info">' +
        "<span>" +
        project.author +
        ' <i class= "fa-solid fa-circle-check" title="Verificado"></i></span>' +
        "<span>Developed in " +
        project.developedYear +
        "</span>" +
        "</div>" +
        '<div class="sub-tech">' +
        project.technologies
          .map(function (tech) {
            return "<span>" + tech + "</span>";
          })
          .join("") +
        "</div>" +
        "</div>" +
        "<p>" +
        project.description +
        "</p>" +
        "</div>" +
        "</div>";

      container.innerHTML += projectHTML;
    });
  } else if (contentId === "skills") {
    container.innerHTML =
      '<div class= "container-skills">' +
      '<div class= "category">' +
      "<h3>Programming Languages</h3>" +
      "<span><i class= 'bx bxl-java'></i>Java</span>" +
      "<span><i class= 'bx bx-code-alt'></i>C#</span>" +
      "<span><i class= 'bx bxl-javascript' ></i>JavaScript</span>" +
      "<span><i class= 'bx bxl-html5' ></i>HTML</span>" +
      "<span><i class= 'bx bxl-css3' ></i>CSS</span>" +
      "<span><i class= 'bx bxl-react' ></i>React</span>" +
      "<span><i class= 'bx bxl-nodejs' ></i>Node.js</span>" +
      "<span><i class= 'bx bxl-python' ></i>Python</span>" +
      "</div>" +
      "<div class= 'category'>" +
      "<h3>Database Management</h3>" +
      "<span><i class= 'bx bxl-postgresql' ></i>SQL Server</span>" +
      "<span><i class= 'bx bxl-mongodb' ></i>MongoDB</span>" +
      "</div>" +
      "<div class= 'category'>" +
      "<h3>Development and Version Control Tools</h3>" +
      "<span><i class= 'bx bxl-github' ></i>GitHub</span>" +
      "</div>" +
      "<div class= 'category'>" +
      "<h3>Design and Prototyping</h3>" +
      "<span><i class= 'bx bxl-figma' ></i>Figma</span>" +
      "<span><i class='bx bxs-pen' ></i>Photoshop</span>" +
      "</div>" +
      "</div>";
  } else if (contentId === "about") {
    var aboutData = [
      {
        imageSrc: "/resources/Profile1.jpg",
        name: "Sebastian Monsalve",
        content:
          "Since I was a child, I immersed myself in the world of technology thanks to my dad, Who at that time was studying a basic technique on systems. Watching him in front of the PC doing his practical exercises fascinated me, so I started tinkering on my own. I even attempted to create a video game in Unity without any programming knowledge, just following tutorials to the letter. That failed attempt (as expected🤡) convinced me to dive headfirst into continuing to learn more and more about computer science🥳.",
        postImageSrc: "/resources/myphotosmall.jpg",
        postOptions: ["Like", "Dislike", "Comment"],
      },
      {
        imageSrc: "/resources/Profile1.jpg",
        name: "Sebastian Monsalve",
        content:
          "I'm someone with a strong sense of belonging. I like to lend a hand wherever I can to ensure everything runs smoothly (perhaps because I don't like seeing things not working quite right—maybe I'm a bit of a perfectionist, just a bit... hahaha😅). On another note (as an additional piece of information that no one asked for😅), I've always been interested in the world of art and culture. In school, I won several first and second-place medals in troubadour singing and drawing (who would have thought? Now I can't even draw a stickman🤡😂).",
        postImageSrc: "/resources/myphoto.jpg",
        postOptions: ["Like", "Dislike", "Comment"],
      },
      {
        imageSrc: "/resources/Profile1.jpg",
        name: "Sebastian Monsalve",
        content:
          "I'm not a big sports fanatic, but swimming has won me over. Although I haven't practiced it professionally for a while, I'm always ready to take a plunge when the mood strikes. And since we're talking about my interests, music is my constant companion. Not to mention cinema. I love watching movies and series, but not just for entertainment. I consider myself an expert critic (according to me and no one else hahahaha😅😂), analyzing everything from performances to soundtracks, from camera angles to color palettes. If something doesn't click for me, I swear, I won't buy into it. What can I say? An exceptional being🤭. Oh, and I also like taking photos📷.",
        postImageSrc: "/resources/photo1.jpg",
        postOptions: ["Like", "Dislike", "Comment"],
      },
    ];

    aboutData.forEach(function (aboutItem) {
      var aboutHTML = `
        <div class="about-box">
          <div class="content-box">
            <div class="image-profile-box">
              <img src="${aboutItem.imageSrc}" alt="profile ${
        aboutItem.name
      }" draggable="false">
            </div>
            <div class="content-info-box">
              <h2>${aboutItem.name}</h2>
              <p>${aboutItem.content}</p>
            </div>
          </div>
                  <div class="container-box">
                      <div class="image-box">
                          <img src="${
                            aboutItem.postImageSrc
                          }" alt="post image" draggable="false">
                      </div>
                  </div>
                  <div class="options-box">
                      ${aboutItem.postOptions
                        .map(
                          (option) =>
                            `<i class='bx bx-${option.toLowerCase()}' title="${option}"></i>`
                        )
                        .join("")}
                  </div>
              </div>`;

      container.innerHTML += aboutHTML;
    });
  } else if (contentId === "education") {
    var educationData = [
      {
        icon: "fa-solid fa-award",
        period: "2021 - 2025",
        title: "Informatics Engineering",
        institution: "University institution of Envigado. IUE",
      },
      {
        icon: "fa-solid fa-award",
        period: "2018 - 2020",
        title: "Computer network installation technician",
        institution: "National Learning Service. SENA",
      },
      {
        icon: "fa-solid fa-certificate",
        period: "2020",
        title: "Computer Maintenance Certification",
        institution: "National Learning Service. SENA",
      },
      {
        icon: "fa-solid fa-certificate",
        period: "2022",
        title: "Cisco Data Network Certification",
        institution: "University institution of Envigado. IUE",
      },
    ];

    educationData.forEach(function (educationItem) {
      var educationHTML = `
          <div class="education">
              <div class="icon-edu">
                  <i class="${educationItem.icon}" title="Education"></i>
              </div>
              <div class="content-edu">
                  <h5>${educationItem.period}</h5>
                  <h3>${educationItem.title}</h3>
                  <p>${educationItem.institution}</p>
              </div>
          </div>`;

      container.innerHTML += educationHTML;
    });
  }
}

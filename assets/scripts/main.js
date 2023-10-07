document.addEventListener("alpine:init", () => {
  Alpine.data("site", () => ({
    openedPage: "about-me",
    navigationOpened: false,
    startPage: "about-me",
    menus: [
      {
        id: "about-me",
        label: "About me",
        page: "about-me",
      },
      {
        id: "projects",
        label: "Projects",
        page: "projects",
      },
      {
        id: "competences",
        label: "Competences",
        page: "competences",
      },
      {
        id: "contact-me",
        label: "Contact me",
        page: "contact-me",
      },
      {
        id: "attributions",
        label: "Attributions",
        page: "attributions",
      },
    ],
    pages: [
      {
        id: "about-me",
        title: "About me",
        content: ``,
      },
      {
        id: "projects",
        title: "Projects",
        content: [
          
          {
            id: "android-fitness-app",
            title: "Android_Fitness_App",
            github: "https://github.com/Rodolphe27/Andriod_Fitness_App",
            image:
              "httpsimages.unsplash.comphoto-1554260570-c7068c223285ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1304&q=80",
            description: `
            This is a fitness app that I created in Collaboration with four other students for a school project. It is a simple app that allows you to track your daily activities and monitor your progress. It was built using Android Studio and Java.
            One of the main objective of this project was to learn how to work in a team using the SCRUM framework and gain insights into git and github.       
                 `,
          },
          
          {
            id: "Integral",
            title: "Integral",
            github: "https://github.com/juliush-dev/xolve",
            image:
              "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            Yes! This website was a project I created while learning JavaScript in the past. I continue to update it as needed, and soon it will be transformed into a blog page. This platform will allow me to share more stories and provide insights into my day-to-day life. 🙂
            `,
          },

          
        ],
      },
      {
        id: "competences",
        title: "Competences",
        content: {
          languages: [
            {
              icon: "./flag-cam.png",
              title: "Yemba",
              xp: "pro",
            },
            {
              icon: "./lang-french.png",
              title: "French",
              xp: "pro",
            },
            {
              icon: "./flag-german.png",
              title: "German",
              xp: "int",
            },
            {
              icon: "./flag-uk.png",
              title: "English",
              xp: "int",
            },
          ],
          programming: [
            {
              icon: "./prog-php.png",
              title: "PHP",
              xp: "int",
            },
            {
              icon: "./prog-js.png",
              title: "Javascript",
              xp: "int",
            },
            {
              icon: "./prog-sql.png",
              title: "SQL",
              xp: "int",
            },
            {
              icon: "./prog-java.png",
              title: "Java",
              xp: "mid",
            },
            {
              icon: "./prog-python.png",
              title: "Python",
              xp: "mid",
            },
          ],
          tools: [
            {
              icon: "./tool-linux.png",
              title: "Linux",
              xp: "int",
            },
            {
              icon: "./tool-win.png",
              title: "Windows",
              xp: "int",
            },
            {
              icon: "./tool-apache.png",
              title: "Apche Web Server",
              xp: "int",
            },
            {
              icon: "./tool-git.png",
              title: "Git & GitHub",
              xp: "int",
            },
            {
              icon: "./tool-365.png",
              title: "MS Suite",
              xp: "mid",
            },
          ],
        },
      },
      {
        id: "contact-me",
        title: "Contact me",
        content: "contact me",
      },
      {
        id: "attributions",
        title: "Attributions",
        content: [
          {
            url: "https://unsplash.com/photos/",
            label: "Unsplash",
          },
          {
            url: "https://material.io/resources/icons/?style=baseline",
            label: "Material io icons",
          },
          {
            url: "https://www.iconfinder.com/",
            label: "Iconfinder",
          },
        ],
      },
    ],
  }));
});

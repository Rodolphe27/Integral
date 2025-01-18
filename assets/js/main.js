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
              "https://images.unsplash.com/photo-1554260570-c7068c223285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMGZpdG5lc3MlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            description: `
            This is a fitness app that I created in Collaboration with four other students for a school project. It is a simple app that allows you to track your daily activities and monitor your progress. It was built using Android Studio and Java.
            One of the main objective of this project was to learn how to work in a team using the SCRUM framework and gain insights into git and github.       
                 `,
          },
          {
            id: "palim",
            title: "Palim",
            github: "https://github.com/Rodolphe27/palim-program",
            image:
              "https://i.stack.imgur.com/NArLh.png",
            description: `
            Palim is a parallel file content search tool written in C. It allows you to search for a specific string in the content of files within a directory tree and provides statistics about the search process. 
            This tool is designed to take advantage of multithreading to efficiently search through a large number of files and directories       
                 `,
          },
          {
            id: "linkedlist",
            title: "LinkedList",
            github: "https://github.com/Rodolphe27/linkedlist",
            image:
              "https://miro.medium.com/v2/resize:fit:2000/1*to0Tp8CBi-vbKvu-ljPukg.png",
            description: `
            This Python program demonstrates the implementation of a singly linked list data structure. A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
             This implementation allows you to create and manipulate a singly linked list.       
                 `,
          },
          
          {
            id: "Integral",
            title: "Integral",
            github: "https://github.com/Rodolphe27/Integral",
            image:
              "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            Yes! This website is a project I am actually working on while learning JavaScript. I continue to update it as needed, and soon it will be transformed into a blog page. This platform will allow me to share more stories and provide insights into my day-to-day life. 🙂
            `,
          },
          {
            id: "VierGewinnt",
            title: "VierGewinnt",
            github: "https://github.com/Rodolphe27/VierGewinnt",
            image:
              "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
            description: `
            This Java program implements a simplified version of the classic "Connect Four" game, known as "Vier Gewinnt" in German. The game is designed for two players who take turns dropping colored discs into a 6x7 grid, with the goal of connecting four discs of the same color in a row. Crafting this game was not only about creating entertainment but also seizing an opportunity to elevate my Java skills and revisit the fundamentals that form the backbone of my programming journey.
            `,
          },
          {
            id: "Csharp Event Patten",
            title: "Csharp Event Pattern",
            github: "https://github.com/Rodolphe27/C-Sharp-_Templates-and-Event-Pattern",
            image:
              "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGV8ZW58MHx8MHx8fDA%3D",
            description: `
            This C# program serves as a learning project for understanding the implementation of the event pattern and the usage of templates in C#. The system demonstrates a basic Fleet Management System using the Autos namespace. It maintains a fleet of vehicles, allowing users to add vehicles, calculate the average age of the fleet, and display inventory information
            `,
          },
          {
            id: "C++_Pointers",
            title: "C++_Pointers",
            github: "https://github.com/Rodolphe27/C-Pointers_Medien",
            image:
              "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZGV8ZW58MHx8MHx8fDA%3D",
            description: `
            This C++ program demonstrates a basic media management system using an array of pointers and a linked list. It incorporates the concepts of polymorphism and dynamic memory allocation. The system handles two types of media: audio and images. A Makefile is provided for easy compilation and execution
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
              icon: "./assets/img/flag-cam.png",
              title: "Yemba",
              xp: "pro",
            },
            {
              icon: "./assets/img/lang-french.png",
              title: "French",
              xp: "pro",
            },
            {
              icon: "./assets/img/flag-german.png",
              title: "German",
              xp: "int",
            },
            {
              icon: "./assets/img/flag-uk.png",
              title: "English",
              xp: "int",
            },
          ],
          programming: [
            
            {
              icon: "./assets/img/prog-js.png",
              title: "Javascript",
              xp: "new",
            },
            {
              icon: "./assets/img/prog-sql.png",
              title: "SQL",
              xp: "mid",
            },
            
            {
              icon: "./assets/img/prog-c.png",
              title: "C",
              xp: "mid",
            },
            {
              icon: "./assets/img/prog-java.png",
              title: "Java",
              xp: "mid",
            },
            {
              icon: "./assets/img/prog-python.png",
              title: "Python",
              xp: "mid",
            },
          ],
          tools: [
            {
              icon: "./assets/img/tool-linux.png",
              title: "Linux",
              xp: "mid",
            },
            {
              icon: "./assets/img/tool-win.png",
              title: "Windows",
              xp: "int",
            },
            
            
            {
              icon: "./assets/img/tool-365.png",
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

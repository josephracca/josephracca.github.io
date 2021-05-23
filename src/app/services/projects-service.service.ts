import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor() { }

  private currentProj: any;

  private projectList: IProject[] = [
    //EightAnd
    {
      name: "EightAnd",
      date: "11.01.2020 - IN PROGRESS",
      subtitle: "A PERFORMANCE LOGISTICS APP",
      text: "#FFFFFF",
      color: "#334956",
      logo: "./../../../assets/images/proj_logos/EightAnd.png",
      desc: "EightAnd solves the problem of segmented performance group logistics, including individual and group scheduling, internal and external performance requests and communications, and inventory management. This application is currently in development.",
      tags: ["fullstack", "adobexd", "ionic", "angular", "csharp", "frontend", "backend", "typescript", "wireframe", "ui/ux", "ui/ux design", "collaboration"],
      repoUrl: "",
      liveUrl: "",
      xdUrl: "https://xd.adobe.com/view/83ba4eb2-bdcd-4ce3-af87-1f00d3808171-d6e9/screen/a24a5f43-8c1a-498f-bdb7-e450210388e8/",
      screenshot1: "./../../../assets/images/projectScreenShots/eightAnd_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/eightAnd_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/eightAnd_ss3.png",
      expandedDescription: "Originally ideated in November of 2020, EightAnd is a project that I pitched to a panel in November of 2020. Out of 22 pitches, my project was one of eight projects selected to be developed as a fullstack application. Our current goals for the project are to take it piece by piece, with half of the team working on the frontend and the other half on the backend and as we progress through each feature, get the front and back ends connected and communicating properly to one another. EightAnd was born out of my experience in a performance group and the logistics that have been segmented into different platforms. I wanted it to cover all of those logisitcal headached: communication, scheduling, and inventory.",
      importance: 0,
      technologies: this.returnIconArray(["cc_xd.svg", "dev_typescript.svg", "dev_angular.svg", "dev_ionic.svg", "dev_csharp.svg"])
    },
    //HFP
    {
      name: "HealthForce Partners",
      date: "03.01.2021 - IN PROGRESS",
      subtitle: "Website Redevelopment",
      text: "white",
      color: "#0F6480",
      logo: "./../../../assets/images/proj_logos/HFP.svg",
      desc: "HealthForce Partners needed a website that was engaging and interactive, easy to navigate, and informative. I started at the beginning, wire-framed a layout, then began developing in Wix Editor using Velo and node.js.",
      tags: ["theinternship", "UI/UX", "ui/ux design", "frontend", "redevelopment", "VeloByWix", "nodeJS"],
      repoUrl: "",
      liveUrl: "",
      xdUrl: "https://xd.adobe.com/view/68470547-6382-4749-bf88-0176a424e60a-3d14/?fullscreen&hints=off",
      screenshot1: "./../../../assets/images/projectScreenShots/hfp_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/hfp_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/hfp_ss3.png",
      expandedDescription: "In March of 2021, I began the redesign for HealthForce Partners' website redevelopment. I started with wireframing a few different layouts, and after approval, we began to prototype in Xd based on the direction given to us by the company's executive team. As of May 3rd, we will begin the development phase. With five other Junior Web Developmer Interns, we will start building the project using Velo by Wix. Our target date for completion is end of May 2021.",
      importance: 0,
      technologies: this.returnIconArray(["cc_xd.svg", "dev_javascript.svg"])
    },
    // Tokay Press
    {
      name: "Tokay Press",
      date: "NOVEMBER 2020",
      subtitle: "Website Redevelopment",
      text: "black",
      color: "#8BDDD7",
      logo: "./../../../assets/images/proj_logos/tokay.svg",
      desc: "Redesigned, developed a new website for the business at a time when they needed it most: their website was compromised. The owner came to me after she learned that her website was hacked and was able to get her new site deployed in a few days.",
      tags: ["html", "css", "javascript", "xd"],
      // repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      repoUrl: "",
      liveUrl: "https://www.tokaypress.com/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/tp_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/tp_ss2.png",
      screenshot3: "",
      expandedDescription: "This was one of my greatest accomplishments during the early part of our time at CodeStack Academy. As an assignment, we were tasked with choosing a local business and redeveloping their website. I was so happy with the outcome that I decided to put it in front of the business owner. She enjoyed it so much that she decided to invest in it and we ended up publishing the project. Tokay Press is a local print and design, all-in-one company.",
      importance: 0,
      technologies: this.returnIconArray(["dev_html5.svg", "dev_css3.svg", "dev_bootstrap.svg", "dev_javascript.svg", "cc_xd.svg"])
    },
    // DoND
    {
      name: "Deal or No Deal?!",
      date: "SEPTEMBER 2020",
      subtitle: "A Unity Project",
      text: "black",
      color: "#B81556",
      logo: "./../../../assets/images/proj_logos/DoND.png",
      desc: "Deal or No Deal?! but sick'ning. Built in Unity, assets borrowed from multiple artists and sources online. Check back soon! I'm working on getting that built as a webGL on Unity. In the meantime, check out some screenshots.",
      tags: ["csharp", "unity", "process", "betaTesting", "wireframes", "flowcharts", "pseudocode"],
      repoUrl: "",
      liveUrl: "",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/dond_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/dond_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/dond_ss3.png",
      expandedDescription: "Deal or No Deal? You've seen it on tv, at the arcades, even at casinos but have you ever seen it this sick'ning? Probably not. From start to finish, this has to be one of the most difficult projects I've done so far in my time as a developer for one main reason: THIS WAS THE PROJECT that we had to finish in order for us to start level one of our coding academy. In the combine, we were tasked with learning the basics of object oriented programming with none other than C#. It was eye-opening for me and it was fun the whole way through, late nights, really late nights, but overall a very satisfying journey.",
      importance: 0,
      technologies: this.returnIconArray(["dev_csharp.svg"])
    },
    // A41
    {
      name: "All For One",
      date: "SEPTEMBER 2020 && JAN - FEB 2021",
      subtitle: "Recreating a C# Project in React",
      text: "black",
      color: "#F7C52D",
      logo: "./../../../assets/images/proj_logos/doggies.svg",
      desc: "All For One is a collection of mini challenges that capture user inputs as values to use on the User Interface once they've submitted their information. Originally built in Unity with C#, I recreated the application in React JS.",
      tags: ["react", "html", "css", "re-do", "csharp"],
      repoUrl: "https://github.com/josephracca/a41",
      liveUrl: "http://josephracca.azurewebsites.net/a41/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/a41_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/a41_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/a41_ss3.png",
      expandedDescription: "Revisiting an Old Assignment was the essence of this project. I was one of the lucky few that got to re-do a C#/Unity project and refactor that into a JSX React project. This project really got me familiar with using ternaries, understanding functional and class components. It was an interesting shift from plain ol' vanila JavaScript, especialyl when it came to manipulating the DOM. I would say react was a pretty fun library to work in and hopefully soon, I'll be able to get more practice in it.",
      importance: 0,
      technologies: this.returnIconArray(["dev_csharp.svg", "dev_react.svg", "dev_css3.svg", "dev_bootstrap.svg"])
    },
      
      // flashcards
      {
        name: "flash.commit",
        date: "",
        subtitle: "a flashcard app for studying",
        text: "black",
        color: "#AED951",
        logo: "./../../../assets/images/proj_logos/flash.svg",
      desc: "Flash.Commit is an application I designed and built using HTML, CSS, and vanila JS. Utilizes wicked css and some custom animation for the card flips. The data, currently programming concepts, is being pulled from a google sheet.",
      tags: ["sprintweek", "html", "javascript", "css"],
      repoUrl: "https://github.com/josephracca/flashCommit",
      liveUrl: "http://josephracca.azurewebsites.net/flash.commit/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/flash_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/flash_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/flash_ss1.png",
      expandedDescription: "",
      importance: 0,
      technologies: this.returnIconArray(["dev_html5.svg", "dev_css3.svg", "dev_bootstrap.svg", "dev_javascript.svg", "cc_xd.svg"])
    },
    
    // rpsls
    {
      name: "Rock, Paper, Scissors",
      date: "",
      subtitle: "Then add Lizard and Spock",
      text: "white",
      color: "#4124d0",
      logo: "./../../../assets/images/proj_logos/RPSLS.svg",
      desc: "RPSLS is a spin on the classic Rock, Paper, Scissors. In this game, you can choose between Player vs CPU, or PvP, and the number of rounds to play to. Use it to settle a dispute but remember to have fun!",
      tags: ["html", "css", "javascript", "xd", "ui", "APIcall"],
      repoUrl: "https://github.com/josephracca/RPSLS",
      liveUrl: "http://josephracca.azurewebsites.net/RaccaPSLS/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/rpsls_ss3.png",
      screenshot2: "./../../../assets/images/projectScreenShots/rpsls_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/rpsls_ss2.png",
      expandedDescription: "",
      importance: 0,
      technologies: this.returnIconArray(["dev_html5.svg", "dev_css3.svg", "dev_bootstrap.svg", "dev_javascript.svg", "cc_xd.svg"])
    },
    
    // top10
    // {
      //   name: "Top 10",
      //   date: "",
      // subtitle: "",
      //   text: "white",
      //   color: "#3C75AD",
      //   logo: "./../../../assets/images/proj_logos/top10.svg",
      //   desc: "A collab with A Chansy, where we feature our top animes and video games.",
      //   tags: ["html", "css", "bootstrap", "collab"],
      //   repoUrl: "",
      //   liveUrl: "http://josephraccainit.azurewebsites.net/TopFaves/",
      //   xdUrl: "",
      //   screenshot1: "./../../../assets/images/projectScreenShots/fave_ss1.png",
      //   screenshot2: "./../../../assets/images/projectScreenShots/fave_ss2.png",
      //   screenshot3: "./../../../assets/images/projectScreenShots/fave_ss3.png",
      //   expandedDescription: "",
      //   importance: 0,
      //   technologies: this.returnIconArray([])
      // },


    // weather app
    {
      name: "Weather.Gogh",
      date: "",
      subtitle: "UNDERSTANDING THE CLIENT",
      text: "black",
      color: "#E96E51",
      logo: "./../../../assets/images/proj_logos/cloud.png",
      desc: "A weather application, originally designed and prototyped by H. Mejia, then developed by yours truly. Pulled data from OpenWeatherMap Weather API.",
      tags: ["switchedAtCode", "collab", "APIcall", "Xd"],
      repoUrl: "https://github.com/josephracca/fyreWeather",
      liveUrl: "http://josephracca.azurewebsites.net/weather.gogh2/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/fyre_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/fyre_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/fyre_ss1.png",
      expandedDescription: "",
      importance: 0,
      technologies: this.returnIconArray([])
    },
      // random group gen
      {
        name: "R&OM",
        date: "",
        subtitle: "A Group-Generating Application",
      text: "white",
      color: "#17436e",
      logo: "./../../../assets/images/proj_logos/R&OM.svg",
      desc: "An app that allows you to add/remove names from a list, randomize a name from said list, or generate groups based on size or number of groups desired.",
      tags: ["html", "css", "javascript", "ui"],
      repoUrl: "https://github.com/josephracca/randomGroupsApp",
      liveUrl: "http://josephracca.azurewebsites.net/randOM/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/group_ss1.png",
      screenshot2: "",
      screenshot3: "",
      expandedDescription: "",
      importance: 0,
      technologies: this.returnIconArray(["dev_html5.svg", "dev_css3.svg", "dev_bootstrap.svg", "dev_javascript.svg"])
    },
    
    // calculator
    {
      name: "calculatoJr",
      date: "",
    subtitle: "A REACT APPLICATION",
      text: "black",
      color: "#009E42",
      logo: "./../../../assets/images/proj_logos/calc.svg",
      desc: "A simple calculator app that allowed me to learn and use React.",
      tags: ["html", "css", "react", "javascript"],
      repoUrl: "https://github.com/josephracca/calculator",
      liveUrl: "http://josephracca.azurewebsites.net/calculatoJr/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/calc_ss1.png",
      screenshot2: "",
      screenshot3: "",
      expandedDescription: "Inspired by the iOS design language, specifically the calculator app, I built this calculator as a follow-along during a class lecture and styled it after to give it that refined, user-friendly, dark-mode feel. There are a few flukes in it, but overall with the time that I had to complete it, I got a spot that I am proud of.",
      importance: 0,
      technologies: this.returnIconArray([])
    },
    // upvote
    // {
    //   name: "UpVote",
    //   date: "",
    // subtitle: "",
    //   text: "black",
    //   color: "#C75656",
    //   logo: "./../../../assets/images/proj_logos/upvote.svg",
    //   desc: "Recreating the up vote feature of the Web Unleashed 2020 virtual conference",
    //   tags: ["html", "css", "javascript"],
    //   repoUrl: "https://github.com/josephracca/MC_13_UpVote",
    //   liveUrl: "http://josephracca.azurewebsites.net/upvote/",
    //   xdUrl: "",
    //   screenshot1: "./../../../assets/images/projectScreenShots/upvote_ss1.png",
    //   screenshot2: "./../../../assets/images/projectScreenShots/upvote_ss1.png",
    //   screenshot3: "./../../../assets/images/projectScreenShots/upvote_ss1.png",
    //   expandedDescription: "",
    //   importance: 0,
    //   technologies: this.returnIconArray([])
    // },

    // puppy rest
    // {
    //   name: "Muzzles",
    //   date: "",
    //   subtitle: "",
    //   text: "white",
    //   color: "#5F022B",
    //   logo: "./../../../assets/images/proj_logos/paw.png",
    //   desc: "Our first, multi-person project, first time using GitHub repos to collaborate with other devs.",
    //   tags: ["fundamentals", "teamwork", "github", "merge"],
    //   repoUrl: "https://github.com/josephracca/puppy-restaurant",
    //   liveUrl: "http://josephracca.azurewebsites.net/puppy-restaurant/",
    //   xdUrl: "",
    //   screenshot1: "./../../../assets/images/projectScreenShots/puppy_ss1.png",
    //   screenshot2: "./../../../assets/images/projectScreenShots/puppy_ss2.png",
    //   screenshot3: "./../../../assets/images/projectScreenShots/puppy_ss3.png",
    //   expandedDescription: "",
    //   importance: 0,
    //   technologies: this.returnIconArray([])
    // },

    // hamster hotel
    // {
    //   name: "Le Petite Maison",
    //   date: "",
    //   subtitle: "",
    //   text: "white",
    //   color: "#000324",
    //   logo: "./../../../assets/images/proj_logos/hamster.png",
    //   desc: "A fun school assignment to get used to working with Bootstrap. Book now!",
    //   tags: ["fundamentals", "html", "css", "bootstrap"],
    //   repoUrl: "https://github.com/josephracca/HamsterHotel",
    //   liveUrl: "http://josephraccainit.azurewebsites.net/HamsterHotel/",
    //   xdUrl: "",
    //   screenshot1: "./../../../assets/images/projectScreenShots/hamster_ss1.png",
    //   screenshot2: "./../../../assets/images/projectScreenShots/hamster_ss2.png",
    //   screenshot3: "./../../../assets/images/projectScreenShots/hamster_ss3.png",
    //   expandedDescription: "",
    //   importance: 0,
    //   technologies: this.returnIconArray([])
    // },

    // rng v1
    {
      name: "Name Generator App",
      date: "",
      subtitle: " Version 1",
      text: "black",
      color: "#9B3C9F",
      logo: "./../../../assets/images/proj_logos/random.svg",
      desc: "A random name generator that also manipulates the DOM with each random name. This application also allows the user to input names and stores them to local storage.",
      tags: ["basics", "DOM", "html", "css", "javascript"],
      repoUrl: "https://github.com/josephracca/MC11_RNGv2",
      liveUrl: "http://josephraccainit.azurewebsites.net/RNGv2/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/random_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/random_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/random_ss3.png",
      expandedDescription: "",
      importance: 0,
      technologies: this.returnIconArray(["dev_html5.svg", "dev_css3.svg", "dev_bootstrap.svg", "dev_javascript.svg"])
    },

    // DOM
    {
      name: "DOM Manipulations",
      date: "",
      subtitle: "Foundations in HTML, CSS, & JS",
      text: "white",
      color: "#3e3e3e",
      logo: "./../../../assets/images/proj_logos/DOM.svg",
      desc: "This was the first time I used Javascript to manipulate DOM elements. This really set the foundation for my undersstanding of DOM manipulations.",
      tags: ["basics", "fundamentals", "html", "css", "DOM"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "http://josephraccainit.azurewebsites.net/DOM/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/dom_ss1.png",
      screenshot2: "",
      screenshot3: "",
      expandedDescription: "",
      importance: 0,
      technologies: this.returnIconArray(["dev_html5.svg", "dev_css3.svg", "dev_bootstrap.svg", "dev_javascript.svg"])
    },

    // More
    // {
    //   name: "More!?",
    // date: "",
    // subtitle: "",
    //   text: "black",
    //   color: "#63686B",
    //   logo: "./../../../assets/images/Icons/nav_jr.svg",
    //   desc: "Well if you've made it here...I love to eat, cook, dance, keep active, and love being a dad to my two pups and handful of plants!",
    //   tags: ["aboutMe", "notJustADev", "noAIhere", "plantLover", "dogDad"],
    //   repoUrl: "https://github.com/josephracca",
    //   liveUrl: "",
    //   xdUrl: "",
    //   screenshot1: "./../../../assets/images/projectScreenShots/.png",
    //   screenshot2: "./../../../assets/images/projectScreenShots/.png",
    //   screenshot3: "./../../../assets/images/projectScreenShots/.png",
    //   expandedDescription: "",
    // importance: 0,
    // technologies: this.returnIconArray([])
    // },
    // 
    // Null
    // {
    //   name: "!null",
    // date: "",
    // subtitle: "",
    //   text: "black",
    //   color: "#464646",
    //   logo: "./../../../assets/images/proj_logos/ellipses.svg",
    //   desc: "Intentionally blank, hopefully to fill in with another soon and maybe one I can work on with + for you!",
    //   tags: ["learn", "ui/ux design", "develop", "repeat"],
    //   repoUrl: "",
    //   liveUrl: "",
    //   xdUrl: "",
    //   screenshot1: "./../../../assets/images/projectScreenShots/.png",
    //   screenshot2: "./../../../assets/images/projectScreenShots/.png",
    //   screenshot3: "./../../../assets/images/projectScreenShots/.png",
    //   expandedDescription: "",
    // importance: 0,
    // technologies: this.returnIconArray([])
    // },
    // 
    // 
  ];

  //function that gets called on init that sets up the list
  sendList(): IProject[] {
    return this.projectList;
  }

  setProject(value: IProject) {
    this.currentProj = value;
  }

  returnProject() {
    return this.currentProj;
  }

  returnIconArray(incoming: string[]) {
    return incoming.map(e => "./../../../assets/images/Icons/" + e);
  }
}

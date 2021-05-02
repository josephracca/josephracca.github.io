import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor() { }

  private currentProj: any;

  private projectList: IProject[] = [
    {
      name: "EightAnd",
      date: "11.01.2020 - IN PROGRESS",
      text: "#FFFFFF",
      color: "#334956",
      logo: "./../../../assets/images/proj_logos/EightAnd.png",
      desc: "A fullstack application, currently in development with Beautifully Brutal: Alex Ato., Ken Martinez, and Carlos Gonzalez.",
      tags: ["fullstack", "adobexd", "ionic", "angular", "csharp", "frontend", "backend", "typescript", "wireframe", "ui/ux", "design", "collaboration"],
      repoUrl: "",
      liveUrl: "",
      xdUrl: "https://xd.adobe.com/view/83ba4eb2-bdcd-4ce3-af87-1f00d3808171-d6e9/screen/a24a5f43-8c1a-498f-bdb7-e450210388e8/",
      screenshot1: "./../../../assets/images/projectScreenShots/eightAnd_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/eightAnd_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/eightAnd_ss3.png",
      expandedDescription: "Originally ideated in November of 2020, EightAnd is a project that I pitched to a panel of judges. Out of 22 student pitches, my project was one of eight projects selected to be developed as a fullstack application. What did "
    },
    {
      name: "HealthForce Partners Internship",
      date: "",
      text: "black",
      color: "#0F6480",
      logo: "./../../../assets/images/proj_logos/HFP.svg",
      desc: "Responsible for redesigning the organization's website to be later built using Velo by Wix. Co-designed with A. Chansy and developed with T. Womack, J. Morales, and K. Martinez,",
      tags: ["theinternship", "UI/UX", "design", "frontend", "redevelopment"],
      repoUrl: "",
      liveUrl: "",
      xdUrl: "https://xd.adobe.com/view/68470547-6382-4749-bf88-0176a424e60a-3d14/?fullscreen&hints=off",
      screenshot1: "./../../../assets/images/projectScreenShots/hfp_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/hfp_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/hfp_ss1.png",
      expandedDescription: ""
    },
    {
      name: "Tokay Press",
      date: "",
      text: "black",
      color: "#8BDDD7",
      logo: "./../../../assets/images/proj_logos/tokay.svg",
      desc: "Project to redevelop a local business' website, turned real business solution. Collab with M. Mendoza.",
      tags: ["html", "css", "javascript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.tokaypress.com/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/tp_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/tp_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/tp_ss1.png",
      expandedDescription: ""
    },
    {
      name: "DoND: Rupaul Edition",
      date: "",
      text: "black",
      color: "#B81556",
      logo: "./../../../assets/images/proj_logos/DoND.png",
      desc: "Deal or No Deal?! but sick'ning. Built in Unity, assets borrowed from multiple artists and sources online. Check back soon! I'm working on getting that built as a webGL on Unity.",
      tags: ["csharp", "unity", "process", "beta"],
      repoUrl: "",
      liveUrl: "",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/dond_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/dond_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/dond_ss1.png",
      expandedDescription: ""
    },
    {
      name: "All For One",
      date: "",
      text: "black",
      color: "#F7C52D",
      logo: "./../../../assets/images/proj_logos/doggies.svg",
      desc: "Originally built in Unity with C#, task was to recreate it in React. Check out the mini challenges and have fun!",
      tags: ["react", "html", "css", "re-do", "csharp"],
      repoUrl: "https://github.com/josephracca/a41",
      liveUrl: "http://josephracca.azurewebsites.net/a41/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/a41_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/a41_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/a41_ss1.png",
      expandedDescription: ""
    },
    {
      name: "calculatoJr",
      date: "",
      text: "black",
      color: "#009E42",
      logo: "./../../../assets/images/proj_logos/calc.svg",
      desc: "A simple calculator app that allowed me to learn and use React.",
      tags: ["html", "css", "react", "javascript"],
      repoUrl: "https://github.com/josephracca/calculator",
      liveUrl: "http://josephracca.azurewebsites.net/calculatoJr/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/calc_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/calc_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/calc_ss1.png",
      expandedDescription: ""
    },
    {
      name: "Weather.Gogh",
      date: "",
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
      expandedDescription: ""
    },
    {
      name: "flash.commit",
      date: "",
      text: "black",
      color: "#AED951",
      logo: "./../../../assets/images/proj_logos/flash.svg",
      desc: "A flashcard app that promotes learning code, and pulls data from a google sheet.",
      tags: ["sprintweek", "html", "javascript", "css"],
      repoUrl: "https://github.com/josephracca/flashCommit",
      liveUrl: "http://josephracca.azurewebsites.net/flash.commit/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/flash_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/flash_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/flash_ss1.png",
      expandedDescription: ""
    },
    {
      name: "RPSLS",
      date: "",
      text: "black",
      color: "#2EC4EA",
      logo: "./../../../assets/images/proj_logos/RPSLS.svg",
      desc: "Rock, paper, Scissors, Lizard, Spock. You choose the options!",
      tags: ["html", "css", "javascript", "xd", "ui", "APIcall"],
      repoUrl: "https://github.com/josephracca/RPSLS",
      liveUrl: "http://josephracca.azurewebsites.net/RaccaPSLS/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/rpsls_ss3.png",
      screenshot2: "./../../../assets/images/projectScreenShots/rpsls_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/rpsls_ss2.png",
      expandedDescription: ""
    },
    {
      name: "Top 10",
      date: "",
      text: "black",
      color: "#3C75AD",
      logo: "./../../../assets/images/proj_logos/top10.svg",
      desc: "A collab with A Chansy, where we feature our top animes and video games.",
      tags: ["html", "css", "bootstrap", "collab"],
      repoUrl: "",
      liveUrl: "http://josephraccainit.azurewebsites.net/TopFaves/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/fave_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/fave_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/fave_ss3.png",
      expandedDescription: ""
    },
    {
      name: "R&OM",
      date: "",
      text: "black",
      color: "#0F2230",
      logo: "./../../../assets/images/proj_logos/R&OM.svg",
      desc: "An app that allows you to add/remove names from a list, randomize a name from said list, or generate groups based on size or number of groups desired.",
      tags: ["html", "css", "javascript", "ui"],
      repoUrl: "https://github.com/josephracca/randomGroupsApp",
      liveUrl: "http://josephracca.azurewebsites.net/randOM/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/group_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/group_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/group_ss1.png",
      expandedDescription: ""
    },
    {
      name: "UpVote",
      date: "",
      text: "black",
      color: "#C75656",
      logo: "./../../../assets/images/proj_logos/upvote.svg",
      desc: "Recreating the up vote feature of the Web Unleashed 2020 virtual conference",
      tags: ["html", "css", "javascript"],
      repoUrl: "https://github.com/josephracca/MC_13_UpVote",
      liveUrl: "http://josephracca.azurewebsites.net/upvote/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/upvote_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/upvote_ss1.png",
      screenshot3: "./../../../assets/images/projectScreenShots/upvote_ss1.png",
      expandedDescription: ""
    },
    {
      name: "Muzzles",
      date: "",
      text: "black",
      color: "#5F022B",
      logo: "./../../../assets/images/proj_logos/paw.png",
      desc: "Our first, multi-person project, first time using GitHub repos to collaborate with other devs.",
      tags: ["fundamentals", "teamwork", "github", "merge"],
      repoUrl: "https://github.com/josephracca/puppy-restaurant",
      liveUrl: "http://josephracca.azurewebsites.net/puppy-restaurant/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/puppy_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/puppy_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/puppy_ss3.png",
      expandedDescription: ""
    },
    {
      name: "Le Petite Maison",
      date: "",
      text: "black",
      color: "#000324",
      logo: "./../../../assets/images/proj_logos/hamster.png",
      desc: "A fun school assignment to get used to working with Bootstrap. Book now!",
      tags: ["fundamentals", "html", "css", "bootstrap"],
      repoUrl: "https://github.com/josephracca/HamsterHotel",
      liveUrl: "http://josephraccainit.azurewebsites.net/HamsterHotel/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/hamster_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/hamster_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/hamster_ss3.png",
      expandedDescription: ""
    },
    {
      name: "Random Name Generator Version 1",
      date: "",
      text: "black",
      color: "#9B3C9F",
      logo: "./../../../assets/images/proj_logos/random.svg",
      desc: "A random name generator that also manipulates the DOM with each random name!",
      tags: ["basics", "DOM", "html", "css", "javascript"],
      repoUrl: "https://github.com/josephracca/MC11_RNGv2",
      liveUrl: "http://josephraccainit.azurewebsites.net/RNGv2/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/random_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/random_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/random_ss3.png",
      expandedDescription: ""
    },
    {
      name: "DOM Manipulations",
      date: "",
      text: "black",
      color: "#181818",
      logo: "./../../../assets/images/proj_logos/DOM.svg",
      desc: "A project to teach us how to get comfortable manipulating the DOM.",
      tags: ["basics", "fundamentals", "html", "css", "DOM"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "http://josephraccainit.azurewebsites.net/DOM/",
      xdUrl: "",
      screenshot1: "./../../../assets/images/projectScreenShots/dom_ss1.png",
      screenshot2: "./../../../assets/images/projectScreenShots/dom_ss2.png",
      screenshot3: "./../../../assets/images/projectScreenShots/dom_ss3.png",
      expandedDescription: ""
    },
    // {
    //   name: "More!?",
    // date: "",
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
    //   expandedDescription: ""
    // },
    // {
    //   name: "!null",
    // date: "",
    //   text: "black",
    //   color: "#464646",
    //   logo: "./../../../assets/images/proj_logos/ellipses.svg",
    //   desc: "Intentionally blank, hopefully to fill in with another soon and maybe one I can work on with + for you!",
    //   tags: ["learn", "design", "develop", "repeat"],
    //   repoUrl: "",
    //   liveUrl: "",
    //   xdUrl: "",
    //   screenshot1: "./../../../assets/images/projectScreenShots/.png",
    //   screenshot2: "./../../../assets/images/projectScreenShots/.png",
    //   screenshot3: "./../../../assets/images/projectScreenShots/.png",
    //   expandedDescription: ""
    // },
  ];

  //function that gets called on init that sets up the list
  sendList(): IProject[]{
    return this.projectList;
  }

  setProject(value: IProject){
    this.currentProj = value;
  }

  returnProject(){
    return this.currentProj;
  }
}

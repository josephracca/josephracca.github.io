import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor() { }

  private projectList: IProject[] = [
    {
      name: "EightAnd",
      text: "#FFFFFF",
      color: "#334956",
      logo: "./../../../assets/images/proj_logos/EightAnd.png",
      desc: "A fullstack application, currently in development with A. Ato., K. Martinez, and C. Gonzalez.",
      tags: ["fullstack", "xd", "ionic", "angular", "csharp", "frontend", "backend"],
      repoUrl: "",
      liveUrl: ""
    },
    {
      name: "Health Force Partners Internship",
      text: "black",
      color: "#0F6480",
      logo: "./../../../assets/images/proj_logos/HFP.svg",
      desc: "Responsible for redesigning the organization's website to be later built using Velo by Wix. Co-designed with A. Chansy and developed with T. Womack, J. Morales, and K. Martinez,",
      tags: ["theinternship", "UI/UX", "design", "frontend", "redevelopment"],
      repoUrl: "",
      liveUrl: ""
    },
    {
      name: "Tokay Press",
      text: "black",
      color: "#8BDDD7",
      logo: "./../../../assets/images/proj_logos/tokay.svg",
      desc: "Project to redevelop a local business' website, turned real business solution. Collab with M. Mendoza.",
      tags: ["html", "css", "javascript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.tokaypress.com/"
    },
    {
      name: "DoND: Rupaul Edition",
      text: "black",
      color: "#B81556",
      logo: "./../../../assets/images/proj_logos/DoND.png",
      desc: "Deal or No Deal?! but sick'ning. Built in Unity, assets borrowed from multiple artists and sources online. Check back soon! I'm working on getting that built as a webGL on Unity.",
      tags: ["csharp", "unity", "process", "beta"],
      repoUrl: "",
      liveUrl: ""
    },
    {
      name: "All For One",
      text: "black",
      color: "#F7C52D",
      logo: "./../../../assets/images/proj_logos/doggies.svg",
      desc: "Originally built in Unity with C#, task was to recreate it in React. Check out the mini challenges and have fun!",
      tags: ["react", "html", "css", "re-do", "csharp"],
      repoUrl: "https://github.com/josephracca/a41",
      liveUrl: "http://josephracca.azurewebsites.net/a41/"
    },
    {
      name: "calculatoJr",
      text: "black",
      color: "#009E42",
      logo: "./../../../assets/images/proj_logos/calc.svg",
      desc: "A simple calculator app that allowed me to learn and use React.",
      tags: ["html", "css", "react", "javascript"],
      repoUrl: "https://github.com/josephracca/calculator",
      liveUrl: "http://josephracca.azurewebsites.net/calculatoJr/"
    },
    {
      name: "Weather.Gogh",
      text: "black",
      color: "#E96E51",
      logo: "./../../../assets/images/proj_logos/cloud.png",
      desc: "A weather application, originally designed and prototyped by H. Mejia, then developed by yours truly. Pulled data from OpenWeatherMap Weather API.",
      tags: ["switchedAtCode", "collab", "APIcall", "Xd"],
      repoUrl: "https://github.com/josephracca/fyreWeather",
      liveUrl: "http://josephracca.azurewebsites.net/weather.gogh2/"
    },
    {
      name: "flash.commit",
      text: "black",
      color: "#AED951",
      logo: "./../../../assets/images/proj_logos/flash.svg",
      desc: "A flashcard app that promotes learning code, and pulls data from a google sheet.",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://github.com/josephracca/flashCommit",
      liveUrl: "http://josephracca.azurewebsites.net/flash.commit/"
    },
    {
      name: "RPSLS",
      text: "black",
      color: "#2EC4EA",
      logo: "./../../../assets/images/proj_logos/RPSLS.svg",
      desc: "Rock, paper, Scissors, Lizard, Spock. You choose the options!",
      tags: ["html", "css", "js", "xd", "ui", "APIcall"],
      repoUrl: "https://github.com/josephracca/RPSLS",
      liveUrl: "http://josephracca.azurewebsites.net/RaccaPSLS/"
    },
    {
      name: "Top 10",
      text: "black",
      color: "#3C75AD",
      logo: "./../../../assets/images/proj_logos/top10.svg",
      desc: "A collab with A Chansy, where we feature our top animes and video games.",
      tags: ["html", "css", "bootstrap", "collab"],
      repoUrl: "",
      liveUrl: "http://josephraccainit.azurewebsites.net/TopFaves/"
    },
    {
      name: "R&OM",
      text: "black",
      color: "#0F2230",
      logo: "./../../../assets/images/proj_logos/R&OM.svg",
      desc: "An app that allows you to add/remove names from a list, randomize a name from said list, or generate groups based on size or number of groups desired.",
      tags: ["html", "css", "javascript", "ui"],
      repoUrl: "https://github.com/josephracca/randomGroupsApp",
      liveUrl: "http://josephracca.azurewebsites.net/randOM/"
    },
    {
      name: "UpVote",
      text: "black",
      color: "#C75656",
      logo: "./../../../assets/images/proj_logos/upvote.svg",
      desc: "Recreating the up vote feature of the Web Unleashed 2020 virtual conference",
      tags: ["html", "css", "javascript"],
      repoUrl: "https://github.com/josephracca/MC_13_UpVote",
      liveUrl: "http://josephracca.azurewebsites.net/upvote/"
    },
    {
      name: "Muzzles",
      text: "black",
      color: "#5F022B",
      logo: "./../../../assets/images/proj_logos/paw.png",
      desc: "Our first, multi-person project, first time using GitHub repos to collaborate with other devs.",
      tags: ["fundamentals", "teamwork", "github", "merge"],
      repoUrl: "https://github.com/josephracca/puppy-restaurant",
      liveUrl: "http://josephracca.azurewebsites.net/puppy-restaurant/"
    },
    {
      name: "Le Petite Maison",
      text: "black",
      color: "#000324",
      logo: "./../../../assets/images/proj_logos/hamster.png",
      desc: "A fun school assignment to get used to working with Bootstrap. Book now!",
      tags: ["fundamentals", "html", "css", "bootstrap"],
      repoUrl: "https://github.com/josephracca/HamsterHotel",
      liveUrl: "http://josephraccainit.azurewebsites.net/HamsterHotel/"
    },
    {
      name: "Random Name Generator Version 1",
      text: "black",
      color: "#9B3C9F",
      logo: "./../../../assets/images/proj_logos/random.svg",
      desc: "A random name generator that also manipulates the DOM with each random name!",
      tags: ["basics", "DOM", "html", "css", "js"],
      repoUrl: "https://github.com/josephracca/MC11_RNGv2",
      liveUrl: "http://josephraccainit.azurewebsites.net/RNGv2/"
    },
    {
      name: "DOM Manipulations",
      text: "black",
      color: "#181818",
      logo: "./../../../assets/images/proj_logos/DOM.svg",
      desc: "A project to teach us how to get comfortable manipulating the DOM.",
      tags: ["basics", "fundamentals", "html", "css", "DOM"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "http://josephraccainit.azurewebsites.net/DOM/"
    },
    {
      name: "More!?",
      text: "black",
      color: "#63686B",
      logo: "./../../../assets/images/Icons/nav_jr.svg",
      desc: "Well if you've made it here...I love to eat, cook, dance, keep active, and love being a dad to my two pups and handful of plants!",
      tags: ["aboutMe", "notJustADev", "noAIhere", "plantLover", "dogDad"],
      repoUrl: "https://github.com/josephracca",
      liveUrl: ""
    },
    {
      name: "!null",
      text: "black",
      color: "#464646",
      logo: "./../../../assets/images/proj_logos/ellipses.svg",
      desc: "Intentionally blank, hopefully to fill in with another soon and maybe one I can work on with + for you!",
      tags: ["learn", "design", "develop", "repeat"],
      repoUrl: "",
      liveUrl: ""
    },
  ];

  extensionsClosed: boolean = false;

  toggleExtensions() {
    if (this.extensionsClosed === true) {
      this.extensionsClosed = false;
    } else {
      this.extensionsClosed = true;
    }
    return this.extensionsClosed;
  }

  //function that gets called on init that sets up the list
  sendList() {
    return this.projectList;
  }
}

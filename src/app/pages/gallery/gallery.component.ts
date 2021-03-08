import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/iproject';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  projects: string[] = ["EightAnd", "Tokay Press", "HFP", "Flash", "RPSLS", "Top10", "DoND", "Calculator", "R&OM", "UpVote", "A41", "Weather.Gogh", "random", "le maison", "puppy", "DOM", "___", "..."]

  white="black"

  projectList: IProject[] = [
    {
      name: "EightAnd",
      text: "#000000",
      color: "#334956",
      logo: "./../../../assets/images/proj_logos/EightAnd.png",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://www.github.com/josephracca",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "Tokay Press",
      text: "black",
      color: "#8BDDD7",
      logo: "./../../../assets/images/proj_logos/tokay.svg",
      desc: "School project turned business solution",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "Health Force Partners",
      text: "black",
      color: "#0F6480",
      logo: "./../../../assets/images/proj_logos/HFP.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "flash.commit",
      text: "black",
      color: "#AED951",
      logo: "./../../../assets/images/proj_logos/flash.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "RPSLS",
      text: "black",
      color: "#2EC4EA",
      logo: "./../../../assets/images/proj_logos/RPSLS.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "Top 10",
      text: "black",
      color: "#FEFF9D",
      logo: "./../../../assets/images/proj_logos/top10.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "DoND: Rupaul Edition",
      text: "black",
      color: "#FEBCEF",
      logo: "./../../../assets/images/proj_logos/DoND.png",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "calculatJr",
      text: "black",
      color: "#009E42",
      logo: "./../../../assets/images/proj_logos/calc.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "R&OM",
      text: "black",
      color: "#0F2230",
      logo: "./../../../assets/images/proj_logos/R&OM.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "UpVote",
      text: "black",
      color: "#EBEBEB",
      logo: "./../../../assets/images/proj_logos/upvote.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "All For One",
      text: "black",
      color: "#F7C52D",
      logo: "./../../../assets/images/proj_logos/doggies.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "Weather.Gogh",
      text: "black",
      color: "#E96E51",
      logo: "./../../../assets/images/proj_logos/cloud.png",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "random(name)",
      text: "black",
      color: "#FFFFFF",
      logo: "./../../../assets/images/proj_logos/random.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "Le Petite Maison",
      text: "black",
      color: "#000324",
      logo: "./../../../assets/images/proj_logos/hamster.png",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "Muzzles",
      text: "black",
      color: "#5F022B",
      logo: "./../../../assets/images/proj_logos/paw.png",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "DOM Manipulations",
      text: "black",
      color: "#181818",
      logo: "./../../../assets/images/proj_logos/DOM.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "null",
      text: "black",
      color: "#464646",
      logo: "",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
    {
      name: "more!",
      text: "black",
      color: "#63686B",
      logo: "./../../../assets/images/proj_logos/ellipses.svg",
      desc: "A fullstack application, pitched from the ",
      tags: ["pitch", "teamwork", "angular", "typescript"],
      repoUrl: "https://josephracca.github.io/josephracca.github.io/",
      liveUrl: "https://www.racca.dev/"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

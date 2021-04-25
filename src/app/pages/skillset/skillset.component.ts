import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.sass']
})
export class SkillsetComponent implements OnInit {

  code: string[] = ['1', '1', '1', '1', '1', '1', '1',]
  icon: string = "./../../../assets/images/Icons/";


  devflow = [
    {
      name: "C#",
      path: "./../../../assets/images/Icons/dev_csharp.svg"
    },
    {
      name: "JavaScript",
      path: "./../../../assets/images/Icons/dev_javascript.svg"
    },
    {
      name: "React",
      path: "./../../../assets/images/Icons/dev_react.svg"
    },
    {
      name: "Angular",
      path: "./../../../assets/images/Icons/dev_angular.svg"
    },
    {
      name: "CSS",
      path: "./../../../assets/images/Icons/dev_css3.svg"
    },
    {
      name: "HTML",
      path: "./../../../assets/images/Icons/dev_html5.svg"
    },
    {
      name: "Bootstrap",
      path: "./../../../assets/images/Icons/dev_bootstrap.svg"
    },

  ]

  creativeFlow = [
    {
      name: "Cloud",
      path: "./../../../assets/images/Icons/cc.svg"
    },
    {
      name: "Xd",
      path: "./../../../assets/images/Icons/cc_xd.svg"
    },
    {
      name: "Illustrator",
      path: "./../../../assets/images/Icons/cc_ai.svg"
    },
    {
      name: "Photoshop",
      path: "./../../../assets/images/Icons/cc_ps.svg"
    },
    {
      name: "InDesign",
      path: "./../../../assets/images/Icons/cc_id.svg"
    },
    {
      name: "TypeKit",
      path: "./../../../assets/images/Icons/cc_tk.svg"
    },
    {
      name: "Acrobat",
      path: "./../../../assets/images/Icons/cc_ac.svg"
    },

  ]

  prodFlow = [
    {
      name: "Mac + iOS",
      path: "./../../../assets/images/Icons/prod_app.svg"
    },
    {
      name: "VS Code",
      path: "./../../../assets/images/Icons/prod_code.svg"
    },
    {
      name: "Slack",
      path: "./../../../assets/images/Icons/prod_slack.svg"
    },
    {
      name: "Google",
      path: "./../../../assets/images/Icons/prod_google.svg"
    },
    {
      name: "Notion",
      path: "./../../../assets/images/Icons/prod_notion.svg"
    },
    {
      name: "Jira",
      path: "./../../../assets/images/Icons/prod_jira.svg"
    },
    {
      name: "FileZilla",
      path: "./../../../assets/images/Icons/prod_fz.svg"
    },
    {
      name: "Postman",
      path: "./../../../assets/images/Icons/prod_pm.svg"
    },
    {
      name: "Notability",
      path: "./../../../assets/images/Icons/prod_not.svg"
    },

  ]

  // devSkills: string[] = this.devflow;

  // printPaths() {
  //   console.log(this.devSkills);
  // }

  constructor() { }

  ngOnInit(): void {
    // this.printPaths();
  }

}

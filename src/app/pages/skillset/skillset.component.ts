import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.sass']
})
export class SkillsetComponent implements OnInit {

  code: string[] = ['1', '1', '1', '1', '1', '1', '1',]
  icon: string = "./../../../assets/images/Icons/";


  devflow: string[] = ["dev_angular.svg", "dev_react.svg", "dev_javascript.svg", "dev_csharp.svg", "dev_bootstrap.svg",  "dev_css3.svg", "dev_html5.svg"
  ].map(e => `${this.icon}${e}`)

  creativeFlow: string[] = ["cc.svg", "cc_xd.svg", "cc_ai.svg", "cc_ps.svg", "cc_id.svg", "cc_tk.svg", "cc_ac.svg"
  ].map(e => `${this.icon}${e}`)

  prodFlow: string[] = ["prod_apple.svg", "prod_code.svg", "prod_slack.svg", "prod_google.svg", "prod_notion.svg", "prod_jira.svg", "prod_fz.svg", "prod_pm.svg", "prod_not.svg"
  ].map(e => `${this.icon}${e}`)

  // devSkills: string[] = this.devflow;

  // printPaths() {
  //   console.log(this.devSkills);
  // }

  constructor() { }

  ngOnInit(): void {
    // this.printPaths();
  }

}

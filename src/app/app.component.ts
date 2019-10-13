import { Component } from "@angular/core";
import { timeout } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Author = "Mohan";
  title = "Assigment 2";
  title2 = "Assigment 3";
  Name = [];
  CurrentName = "";
  Surname = "";
  Age = "";
  Reg = false;
  Status = "no";
  statusFlag = false;
  state = true;
  buttonState = true;
  flag = true;

  waveFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  register() {
    this.Reg = true;
    this.Name.push(this.CurrentName);
  }
  reset() {
    this.Name = [];
    this.Surname = "";
    this.Age = "";
    this.Reg = false;
  }

  checkName() {
    if ((this.Name == [], this.Surname == "", this.Age == "")) {
      return true;
    }
  }

  getColor() {
    if (this.flag === true) {
      return "green";
    } else {
      return "red";
    }
  }
}

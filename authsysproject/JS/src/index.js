import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import XrayChest from "./Utils/XrayChest";
//import XrayLeftShoulder from "./Utils/XrayLeftShoulder";
//import XrayRightShoulder from "./Utils/XrayRightShoulder";
import XrayKnee from "./Utils/XrayKnee";
//import XraySpineCervical from "./Utils/XraySpineCervical";
//import XraySpineLumber from "./Utils/XraySpineLumber";
//import XraySpineDorsal from "./Utils/XraySpineDorsal";
//import NormalTemplate from "./Utils/NormalTemplate";
import CtHead from "./Utils/CtHead";
import PnsAbnormal from "./Utils/PnsAbnormal";

const options = [{ label: 'X-RAY CHEST', id: 1 },
{ label: "X-RAY KNEE", id: 4 }, { label: 'CT HEAD', id: 9 }, { label: 'CT PNS', id: 10 }
]


class App extends Component {
  editor = null;
  constructor() {
    super();
    this.state = {
      modal: false,
      reportFrmData: this.generatePatientTable(),
      options_label: "DEFAULT",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSeletion = this.handleSeletion.bind(this);
    this.generateReport = this.generateReport.bind(this);
  }

  componentDidMount() {
    this.setState({
      reportFrmData: this.generatePatientTable()
    })
  }

  generateReport(data) {
    this.setState({ reportFrmData: data });
  }

  handleClick() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

   
    generatePatientTable() {
    let params = (new URL(document.location)).searchParams;
    const age = params.get("age") ? params.get("age") + "Yr" : "";
    let table = "<img src= 'https://aarthiscan.com/wp-content/themes/aarthi/img/logo.png'><table>";
    let tableBody = "<tbody>";
    tableBody += "<tr>";
    tableBody += "<td>Patient Name</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Date Of Birth</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>National Health ID</td><td>" + 'NULL' + "</td>";
    tableBody += "<td>Age/Sex</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>Accession No.</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Referral Dr</td><td>" + " " + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>Study Date Time</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Report Date Time</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "</tbody>";
    table += tableBody + "</table>";
    return '';
  }


  choose() {
    var list = document.createElement('select');
    list.id = "choose_scan"
    var optionSelect = document.createElement('option');
    optionSelect.value = 0;
    optionSelect.text = 'Reporting BOT';
    list.appendChild(optionSelect);
    options.forEach(({ label, id }) => {
      var option = document.createElement('option');
      option.value = id;
      option.text = label;
      list.appendChild(option);
    });
    list.onchange = this.handleSeletion;
    return list;
  }

  userDropdown() {
    var userDiv = document.createElement('div');
    var current_user = JSON.parse(document.getElementById("current-user").textContent);
    userDiv.innerHTML = `Welcome <span class='current-user'>${current_user.username}</span>`;
    userDiv.className = 'user-name';
    current_user.className = 'xyz';
    //userDiv.prepend("<span class='ck ck-toolbar__separator'></span>");


    var logout = document.createElement("a");
    logout.href = "/logout";
    logout.innerHTML = "Logout";

    userDiv.appendChild(logout);
    logout.className = 'report-here';

    return userDiv;
   }





  handleSeletion(evt) {
    let nindex = evt.target.selectedIndex;
    let label = evt.target[nindex].text;
    let value = evt.target.value;
    this.setState({
      options_label: label,
      reportFrmData: this.generatePatientTable()
    })
    options.forEach(({ label, id }) => {
      if (value == id) {
        this.handleClick();
      }
    });
  }

  render() {
    const { options_label, reportFrmData } = this.state;
    return (
      <div>
        {
          this.state.modal && (options_label === "X-RAY CHEST") ?
            <XrayChest handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
            //this.state.modal && (options_label === "X-RAY LEFT-SHOULDER") ?
              //<XrayLeftShoulder handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
              //this.state.modal && (options_label === "X-RAY RIGHT-SHOULDER") ?
                //<XrayRightShoulder handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                this.state.modal && (options_label === "X-RAY KNEE") ?
                  <XrayKnee handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                  //this.state.modal && (options_label === "X-RAY SPINE(CERVICAL)") ?
                    //<XraySpineCervical handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                    //this.state.modal && (options_label === "X-RAY SPINE(LUMBER)") ?
                      //<XraySpineLumber handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                      //this.state.modal && (options_label === "X-RAY SPINE(DORSAL)") ?
                        //<XraySpineDorsal handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                        //this.state.modal && (options_label === "X-RAY TEMPLATE") ?
                          //<NormalTemplate handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                          this.state.modal && (options_label === "CT HEAD") ?
                            <CtHead handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                            this.state.modal && (options_label === "CT PNS") ?
                              <PnsAbnormal handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> : ""
        }
        <div className="document-editor">
          <div className="document-editor__toolbar"/>
          <div className="document-editor__editable-container">
            <CKEditor
              editor={DecoupledEditor}
              data={reportFrmData}
              onInit={(editor) => {
                window.editor = editor;
                editor.allowedContent = true;
                const toolbarContainer = document.querySelector(
                  ".document-editor__toolbar"
                );

                toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                window.editor.ui.view.toolbar.element.children[0].appendChild(
                  this.choose()
                );
                window.editor.ui.view.toolbar.element.children[0].appendChild(
                  this.userDropdown()
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
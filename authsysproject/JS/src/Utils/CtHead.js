import React, { Component } from "react";
import "../style.css";
import PopUp from "../PopUps/PopUpCtHead";


import text from "../Forms/text_hrct_chest.json";
import { data } from "jquery";

class CtHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frmData: {
        cerebralParenchyma: true,

        extraAxialCollection: true,
        extraduralCollection: true,
        subduralCollection: true,
        subarachnoidhemorrhage: true,
        hematoma: false,
        hematomaR: false,
        hematomaL: false,
        Atrophy: false,

        Infarct: false,
        TypeofInfarct: false,
        Location: false,

        HemorrhagicTransFormation: false,



      },
    };
    this.handleData = this.handleData.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  async handleData(data) {
    console.log("====data index", data);
    this.setState({ frmData: data }, async () => {
      await this.formatData();
    });
  }

  async formatData() {
    const { frmData } = this.state;
    let report = this.props.generatePatientTable;
    const impression = [];
    let pageBreak = 0;
    let totalCovidPoints = 0;


    if (frmData.cerebralParenchyma
      || frmData.bonyStructures || frmData.MucosalThickening) {
      report += "<h5>" + "<strong>" + "<u>" + "LOW DOSE CT REPORT - BRAIN (PLAIN)" + "</u>" + "</strong>" + "</h5>";

    }


    if (frmData.allNormal) {
      report += "<p>" + "<b>" + "<u>" + "TECHNIQUE:" + "</u>" + "</b>" + " Serial axial sections of brain were made from base of skull to the vertex without intravenous contrast. (Base 5mm, Cerebrum 5mm)." + "<b>" + "<br><br>OBSERVATION:" + "</b>" + "<br><br>No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>No evidence of fracture.<br><br>The gray white differentiation is maintained.<br><br>The cerebellum, brainstem and basal cisterns appear normal.<br><br>Cerebello pontine angles and internal auditory meatus appear normal.<br><br>Ventricular system and sulci are normal for the age.<br><br>The sella and parasellar regions are normal.<br><br>The basal ganglia, thalami and capsular tracts appear normal.<br><br>The bones of skull and pericranial soft tissue appear normal.<br><br>Visualized paranasal sinuses appear normal.<br><br><br><br> <br><br>" + "<b>" + "IMPRESSION:<br><br>• No evidence of intracranial hemorrhage or bony injury.<br><br> •	No significant abnormality is visualized in the Brain." + "</b>" + "</p>";
    }

    if (frmData.Atrophy) {
      if (frmData.Atrophytype === 'Age Related Cerebral Atrophy') {
        report += "<p>" + "<b>" + "<u>" + "TECHNIQUE:" + "</u>" + "</b>" + " Serial axial sections of brain were made from base of skull to the vertex without intravenous contrast. (Base 5mm, Cerebrum 5mm)." + "<b>" + "<br><br>OBSERVATION:" + "<br><br>• Ventricular system, sulci and basal cisterns appear prominent." + "</b>" + "<br><br>• No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>•	No evidence of fracture.<br><br>•	The gray white differentiation is maintained.<br><br>•	The cerebellum and brainstem appear normal.<br><br>•	Cerebello pontine angles and internal auditory meatus appear normal.<br><br>•	The sella and parasellar regions are normal.<br><br>•	The basal ganglia, thalami and capsular tracts appear normal.<br><br>•	The bones of skull and pericranial soft tissue appear normal.<br><br>•	Visualized paranasal sinuses appear normal." + "<b>" + "<br><br>IMPRESSION:<br><br>Age related cerebral atrophy." + "</b>" + "</p>";
      }
      if (frmData.Atrophytype === 'Age Advanced Cerebral Atrophy') {
        report += "<p>" + "<b>" + "<u>" + "TECHNIQUE:" + "</u>" + "</b>" + " Serial axial sections of brain were made from base of skull to the vertex without intravenous contrast. (Base 5mm, Cerebrum 5mm)." + "<b>" + "<br><br>OBSERVATION:" + "<br><br>• Ventricular system, sulci and basal cisterns appear prominent." + "</b>" + "<br><br>•	No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>•	No evidence of fracture.<br><br>•	The gray white differentiation is maintained.<br><br>•	The cerebellum and brainstem appear normal.<br><br>•	Cerebello pontine angles and internal auditory meatus appear normal.<br><br>•	The sella and parasellar regions are normal.<br><br>•	The basal ganglia, thalami and capsular tracts appear normal.<br><br>•	The bones of skull and pericranial soft tissue appear normal.<br><br>•	Visualized paranasal sinuses appear normal" + "<b>" + "<br><br>IMPRESSION:<br><br>Age advanced cerebral atrophy." + "</b>" + "</p>"
      }
    }

    if (frmData.ChronicIschemic) {
      report += "<p>" + "<b>" + "<u>" + "TECHNIQUE:" + "</u>" + "</b>" + " Serial axial sections of brain were made from base of skull to the vertex without intravenous contrast. (Base 5mm, Cerebrum 5mm)." + "<b>" + "<br><br>OBSERVATION:<br><br>" + "• Ill-defined hypodensities seen in bilateral fronto-parietal white matter." + '</b>' + "</b>" + "<br><br>•	No evidence of contusion, edema or intracranial hemorrhage is visualized.<br><br>•	No evidence of fracture.<br><br>•	The cerebellum and brainstem appear normal.<br><br>•	Cerebello pontine angles and internal auditory meatus appear normal.<br><br>•	The sella and parasellar regions are normal.<br><br>•	The basal ganglia, thalami and capsular tracts appear normal.<br><br>•	The bones of skull and pericranial soft tissue appear normal.<br><br>•	Visualized paranasal sinuses appear normal" + "<b>" + "<br><br>IMPRESSION:<br><br>Chronic small vessel ischemic changes." + "</b>" + "</p>"
    }

    if (frmData.Infarct) {
      if (frmData.Location) {
        if (frmData.LocationType) {
          let arr = []
          if (frmData.Frontal) {
            arr.push("frontal")
          }
          if (frmData.Parietal) {
            arr.push("parietal")
          }
          if (frmData.Temporal) {
            arr.push("temporal")
          }
          if (frmData.Occipital) {
            arr.push("occipital")
          }
          if (frmData.BasalGanglia) {
            arr.push("basal ganglia")
          }
          if (frmData.Thalamus) {
            arr.push("thalamus")
          }
          if (frmData.CoronaRadiate) {
            arr.push("corona radiate")
          }
          if (frmData.CentrumSemiovale) {
            arr.push('centrum semiovale')
          }
          if (frmData.Cerebellum) {
            arr.push('cerebellum')
          }
          if (frmData.Pons) {
            arr.push('pons')
          }
          if (frmData.Medulla) {
            arr.push('medulla')
          }
          if (frmData.Midbrain) {
            arr.push('midbrain')
          }
          report += "<p>" + "<b>" + text.LocationTypetext.replace("{1}", frmData.LocationType).replace("{2}", arr.join("-")) + "</b>" + "</p>";
        }
      }
      if (frmData.HemorrhagicTransFormation) {
        if (frmData.HemorrahagicTransformationCC || frmData.HemorrahagicTransformationAP || frmData.HemorrahagicTransformationTR) {
          report += "<p>" + '<b>' + "Hemorrhagic transformation seen measuring " + frmData.HemorrahagicTransformationCC + " x " + frmData.HemorrahagicTransformationAP + " x " + frmData.HemorrahagicTransformationTR + "mm." + "</b>" + "</p>";
        }
      }

      if (frmData.Location || frmData.HemorrhagicTransFormation) {
        report += "<p>" + "No evidence of fracture.<br><br>The gray white differentiation is maintained.<br><br>Cerebello pontine angles and internal auditory meatus appear normal.<br><br>Ventricular system and sulci are normal for the age.<br><br>The sella and parasellar regions are normal.<br><br>The bones of skull and pericranial soft tissue appear normal.<br><br>Visualized paranasal sinuses appear normal." + "</p>";
      }

      if ((frmData.Location || frmData.TypeofInfarct) && !frmData.HemorrhagicTransFormation) {
        if (frmData.LocationType || frmData.typeofInfarct) {
          let arr = []
          if (frmData.Frontal) {
            arr.push("frontal")
          }
          if (frmData.Parietal) {
            arr.push("parietal")
          }
          if (frmData.Temporal) {
            arr.push("temporal")
          }
          if (frmData.Occipital) {
            arr.push("occipital")
          }
          if (frmData.BasalGanglia) {
            arr.push("basal ganglia")
          }
          if (frmData.Thalamus) {
            arr.push("thalamus")
          }
          if (frmData.CoronaRadiate) {
            arr.push("corona radiate")
          }
          if (frmData.CentrumSemiovale) {
            arr.push('centrum semiovale')
          }
          if (frmData.Cerebellum) {
            arr.push('cerebellum')
          }
          if (frmData.Pons) {
            arr.push('pons')
          }
          if (frmData.Medulla) {
            arr.push('medulla')
          }
          if (frmData.Midbrain) {
            arr.push('midbrain')
          }
          report += "<p>" + "<b>" + "<br><br>IMPRESSION:<br><br>" + text.LocationTypetext1.replace("{1}", frmData.LocationType).replace("{2}", arr.join("-")) + "- likely " + frmData.typeofInfarct + " infarct." + "</b>" + "</p>";
        }
      }
      else {
        if ((frmData.Location || frmData.TypeofInfarct) && frmData.HemorrhagicTransFormation) {
          if (frmData.LocationType || frmData.typeofInfarct) {
            let arr = []
            if (frmData.Frontal) {
              arr.push("frontal")
            }
            if (frmData.Parietal) {
              arr.push("parietal")
            }
            if (frmData.Temporal) {
              arr.push("temporal")
            }
            if (frmData.Occipital) {
              arr.push("occipital")
            }
            if (frmData.BasalGanglia) {
              arr.push("basal ganglia")
            }
            if (frmData.Thalamus) {
              arr.push("thalamus")
            }
            if (frmData.CoronaRadiate) {
              arr.push("corona radiate")
            }
            if (frmData.CentrumSemiovale) {
              arr.push('centrum semiovale')
            }
            if (frmData.Cerebellum) {
              arr.push('cerebellum')
            }
            if (frmData.Pons) {
              arr.push('pons')
            }
            if (frmData.Medulla) {
              arr.push('medulla')
            }
            if (frmData.Midbrain) {
              arr.push('midbrain')
            }
            report += "<p>" + "<b>" + "<br><br>IMPRESSION:<br><br>" + text.LocationTypetext1.replace("{1}", frmData.LocationType).replace("{2}", arr.join("-")) + "- likely " + frmData.typeofInfarct + " infarct.<br><br>Hemorrhagic transformation seen as described." + "</b>" + "</p>";
          }
        }
      }
    }

    report +=
      this.pageBreak() +
      this.getImpression(impression, totalCovidPoints) +
      this.getCorads();
    this.setState({ reportFrmData: report }, () => {
      this.props.generateReport(report);
    });
  }

  pageBreak() {
    return '<div class="page-break ck-widget ck-widget_selected" contenteditable="false" draggable="true"></div>';
  }

  getCorads() {
    return (
      "<p><i> </i></p>" +
      "<p></p>"
    );
  }

  getImpression(impression, totalCovidPoints) {
    let text = "<p><strong></strong></p><p>";
    return text + (impression.join(" "));
  }

  render() {
    const { frmData } = this.state;
    return (
      <div>
        {
          <PopUp
            handleClick={this.props.handleClick}
            data={frmData}
            handleData={this.handleData}
            name="CT Head"
          />
        }
      </div>
    );
  }
}


export default CtHead;

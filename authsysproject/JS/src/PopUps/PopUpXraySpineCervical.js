import React from "react";
import Modal from "react-bootstrap4-modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import Form10 from "../Forms/forms10";

export default class PopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {

      },
      err: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  handleChange(data, err) {
    if (!err) {
      this.setState({ data }, () => this.props.handleData(data));
    }

    if (data.CervicalNormal) {
      document.querySelectorAll('label[id^="#/properties/CervicalNormal"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.CervicalDegenerative) {
      document.querySelectorAll('label[id^="#/properties/CervicalDegenerative"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.CervicalDegenerative) {
      if (data.cervicalLordosis || data.CervicalOsteophytes || data.CervicalEndplateSclerosis
        || data.CervicalSchmorlsNode || data.CervicalInterVertebralDiscSpace
      ) {
        document.querySelectorAll('label[id^="#/properties/CervicalDegenerative"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }

    if (data.CervicalFracture) {
      if (data.CervicalCompressionFracture || data.CervicalSpinousProcessFracture || data.CervicalBurstFracture
        || data.CervicalChanceFracture || data.CervicalFlexionTearDropFracture
        || data.CervicalExtensionTearDropFracture || data.CervicalDensFrature) {
        document.querySelectorAll('label[id^="#/properties/CervicalFracture"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }

    if (data.CervicalSpondylolisthesis) {
      if (data.CervicalretrolisthesisOf || data.CervicalretrolisthesisOver) {
        document.querySelectorAll('label[id^="#/properties/CervicalSpondylolisthesis"]').forEach((el) => {
          el.classList.remove("err");
        });
      }
    }

    if (data.CervicalOssification) {
      document.querySelectorAll('label[id^="#/properties/CervicalOssification"]').forEach((el) => {
        el.classList.remove("err");
      });
    }
    if (data.CervicalCompressionFracture) {
      document.querySelectorAll('label[id^="#/properties/CervicalOssification"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.CervicalCollapse) {
      document.querySelectorAll('label[id^="#/properties/CervicalCollapse"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.CervicalGibbusDeformity) {
      document.querySelectorAll('label[id^="#/properties/CervicalOssification"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    this.setState({ err });
  }

  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);

    if (!data.SpineView) {
      if (!(data.SpineViewAP || data.SpineViewLateral || data.SpineViewFlexion || data.SpineViewExtension)) {
        document.querySelectorAll('label[id^="#/properties/SpineView"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.CervicalNormal) {
      if (!data.CervicalNormalSpine
        && !data.CervicalNormalVertebrae
        && !data.CervicalNormalTransverse
        && !data.CervicalNormalInterVertebral
        && !data.CervicalNormalProas) {
        document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.CervicalDegenerative) {
      if (!data.cervicalLordosis
        && !data.CervicalOsteophytes
        && !data.CervicalEndplateSclerosis
        && !data.CervicalVacuumPhenomenon
        && !data.CervicalSchmorlsNode
        && !data.CervicalInterVertebralDiscSpace) {
        document.querySelectorAll('label[id^="#/properties/CervicalDegenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }

      if (!data.cervicalLordosisType


        && !data.CervicalOsteophytesC1
        && !data.CervicalOsteophytesC2
        && !data.CervicalOsteophytesC3
        && !data.CervicalOsteophytesC4
        && !data.CervicalOsteophytesC5
        && !data.CervicalOsteophytesC6
        && !data.CervicalOsteophytesC7

        && !data.CervicalEndplateSclerosisC1
        && !data.CervicalEndplateSclerosisC2
        && !data.CervicalEndplateSclerosisC3
        && !data.CervicalEndplateSclerosisC4
        && !data.CervicalEndplateSclerosisC5
        && !data.CervicalEndplateSclerosisC6
        && !data.CervicalEndplateSclerosisC7

        && !data.CervicalVacuumPhenomenonC1
        && !data.CervicalVacuumPhenomenonC2
        && !data.CervicalVacuumPhenomenonC3
        && !data.CervicalVacuumPhenomenonC4
        && !data.CervicalVacuumPhenomenonC5
        && !data.CervicalVacuumPhenomenonC6
        && !data.CervicalVacuumPhenomenonC7

        && !data.CervicalSchmorlsNodeC1
        && !data.CervicalSchmorlsNodeC2
        && !data.CervicalSchmorlsNodeC3
        && !data.CervicalSchmorlsNodeC4
        && !data.CervicalSchmorlsNodeC5
        && !data.CervicalSchmorlsNodeC6
        && !data.CervicalSchmorlsNodeC7


        && !data.CervicalInterVertebralDiscSpaceC1C2
        && !data.CervicalInterVertebralDiscSpaceC2C3
        && !data.CervicalInterVertebralDiscSpaceC3C4
        && !data.CervicalInterVertebralDiscSpaceC4C5
        && !data.CervicalInterVertebralDiscSpaceC5C6
        && !data.CervicalInterVertebralDiscSpaceC6C7) {
        document.querySelectorAll('label[id^="#/properties/CervicalDegenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.CervicalFracture && !data.CervicalDonsFrature) {
      if (!data.CervicalCompressionFracture
        && !data.CervicalSpinousProcessFracture
        && !data.CervicalBurstFracture
        && !data.CervicalChanceFracture
        && !data.CervicalFlexionTearDropFracture
        && !data.CervicalExtensionTearDropFracture) {
        document.querySelectorAll('label[id^="#/properties/CervicalFracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!data.CervicalCompressionFractureC1
        && !data.CervicalCompressionFractureC2
        && !data.CervicalCompressionFractureC3
        && !data.CervicalCompressionFractureC4
        && !data.CervicalCompressionFractureC5
        && !data.CervicalCompressionFractureC6
        && !data.CervicalCompressionFractureC7
        && !data.CervicalCompressionFractureT1
        && !data.CervicalCompressionFractureT2

        && !data.CervicalBurstFractureC1
        && !data.CervicalBurstFractureC2
        && !data.CervicalBurstFractureC3
        && !data.CervicalBurstFractureC4
        && !data.CervicalBurstFractureC5
        && !data.CervicalBurstFractureC6
        && !data.CervicalBurstFractureC7
        && !data.CervicalBurstFractureT1
        && !data.CervicalBurstFractureT2

        && !data.CervicalChanceFractureC1
        && !data.CervicalChanceFractureC2
        && !data.CervicalChanceFractureC3
        && !data.CervicalChanceFractureC4
        && !data.CervicalChanceFractureC5
        && !data.CervicalChanceFractureC6
        && !data.CervicalChanceFractureC7
        && !data.CervicalChanceFractureT1
        && !data.CervicalChanceFractureT2

        && !data.CervicalFlexionTearDropFractureC1
        && !data.CervicalFlexionTearDropFractureC2
        && !data.CervicalFlexionTearDropFractureC3
        && !data.CervicalFlexionTearDropFractureC4
        && !data.CervicalFlexionTearDropFractureC5
        && !data.CervicalFlexionTearDropFractureC6
        && !data.CervicalFlexionTearDropFractureC7
        && !data.CervicalFlexionTearDropFractureT1
        && !data.CervicalFlexionTearDropFractureT2

        && !data.CervicalExtensionTearDropFractureC1
        && !data.CervicalExtensionTearDropFractureC2
        && !data.CervicalExtensionTearDropFractureC3
        && !data.CervicalExtensionTearDropFractureC4
        && !data.CervicalExtensionTearDropFractureC5
        && !data.CervicalExtensionTearDropFractureC6
        && !data.CervicalExtensionTearDropFractureC7
        && !data.CervicalExtensionTearDropFractureT1
        && !data.CervicalExtensionTearDropFractureT2

        && !data.CervicalSpinousProcessFractureC1
        && !data.CervicalSpinousProcessFractureC2
        && !data.CervicalSpinousProcessFractureC3
        && !data.CervicalSpinousProcessFractureC4
        && !data.CervicalSpinousProcessFractureC5
        && !data.CervicalSpinousProcessFractureC6
        && !data.CervicalSpinousProcessFractureC7
        && !data.CervicalSpinousProcessFractureT1
        && !data.CervicalSpinousProcessFractureT2

      ) {
        document.querySelectorAll('label[id^="#/properties/CervicalFracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.CervicalOssification) {
      if (!data.CervicalOssificationType) {
        document.querySelectorAll('label[id^="#/properties/CervicalOssification"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.CervicalCollapse) {
      if (!data.CervicalCollapseC1
        && !data.CervicalCollapseC1
        && !data.CervicalCollapseC2
        && !data.CervicalCollapseC3
        && !data.CervicalCollapseC4
        && !data.CervicalCollapseC5
        && !data.CervicalCollapseC6
        && !data.CervicalCollapseC7) {
        document.querySelectorAll('label[id^="#/properties/CervicalCollapse"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

     







    if (!err) {
      this.props.handleClick();
    }
    else{
      <div>
        <h1>please select carefully</h1>
      </div>
    }
  }

  // event handling methods go here
  render() {
    const { data, handleClick, name } = this.props;
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">{name}</h5>
          <div>
            <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Back</button>
            <button type="button" className="btn btn-primary" style={{ margin: '9px' }} onClick={this.handleDone}>Done</button>
          </div>
        </div>
        <div className="modal-body">
          <Form10 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
          
        </div>
      </Modal>
    );
  }
}

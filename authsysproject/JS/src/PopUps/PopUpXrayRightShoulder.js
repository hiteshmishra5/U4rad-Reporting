import React from "react";
import Modal from "react-bootstrap4-modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import Form12 from "../Forms/forms12";

export default class PopUpXrayLeftShoulder extends React.Component {
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

    

    if (data.fracture) {
      document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.dislocation) {
      document.querySelectorAll('label[id^="#/properties/dislocation"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    if (data.degenerative) {
      document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
        el.classList.remove("err");
      });
    }

    this.setState({ err });
  }

  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);

    if(!data.XrayType){
      document.querySelectorAll('label[id^="#/properties/XrayType"]').forEach((el) => {
        el.classList.add("err");
      });
      return;
    } 

    if (data.Normal) {
      if ((data.fracture || data.dislocation) && data.Normal){
        document.querySelectorAll('label[id^="#/properties/Normal"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }

    if (data.fracture) {
      if (!data.humerus && !data.clavicle && !data.scapula && !data.ribText) {
        document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!data.linearFracture && !data.comminutedFracture
        && !data.obliqueFracture && data.clavicle && data.scapula && data.ribText) {
        document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if (!data.LinearHead && !data.LinearNeck && !data.LinearProximal
        && !data.comminutedHead && !data.comminutedNeck && !data.comminutedProximal
        && !data.obliqueHead && !data.obliqueNeck && !data.obliqueProximal
        && !data.clavicleMidShaft && !data.clavicleProximalShaft && !data.clavicleDistalShaft
        && !data.scapulaBody && !data.scapulaSpine && !data.scapulaGlenoid && !data.ribText) {
        document.querySelectorAll('label[id^="#/properties/fracture"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    if (data.dislocation) {
      if (!data.acromioclavicularJoint && !data.shoulderJoint) {
        document.querySelectorAll('label[id^="#/properties/dislocation"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }
    if (data.degenerative && !data.acromioclavicularJoint) {
      if (!data.glenohumeralJoint) {
        document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
      if(!(data.glenohumeralJointType && (data.glenohumeralJointJointSpace 
                                          || data.glenohumeralJointSubchondralCyst
                                          || data.glenohumeralJointMarginalOsteophytes
                                          || data.glenohumeralJointIrregularArticular
                                          || data.glenohumeralJointSclerosis))){
        document.querySelectorAll('label[id^="#/properties/degenerative"]').forEach((el) => {
          el.classList.add("err");
        });
        return;
      }
    }


    if (!err) {
      this.props.handleClick();
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
          <Form12 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
          
        </div>
      </Modal>
    );
  }
}


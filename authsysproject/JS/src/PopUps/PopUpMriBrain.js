import React from "react";
import Modal from "react-bootstrap4-modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import Form5 from "../Forms/form5";

export default class PopUpXrayChest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        brainParenchyma: true
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
    this.setState({ err });
  }

  handleDone() {
    const { data, err } = this.state;
    console.log("======data", data);
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
          <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Back</button>
            <button type="button" className="btn btn-primary" style={{ margin: '9px' }} onClick={this.handleDone}>Done</button>
        </div>
        <div className="modal-body">
          <Form5 data={data} handleChange={this.handleChange} />
        </div>
        <div className="modal-footer">
          
        </div>
      </Modal>
    );
  }
}

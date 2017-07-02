import React, { Component } from 'react';

import $ from 'jquery';

import './style.scss';

export default class LogoutModal extends Component {
  dismiss = () => {
    this.props.globs.handlers.toggleModal(null)
  }

  render = () => {
    return (
      <div id="LogoutModal">
        <h1 className="ModalTitle"></h1>
        <h3>Are you sure you want to log out ?</h3>
        <div className="ModalControls">
          <button className="waves-effect waves-light red lighten-2 btn right" onClick={this.dismiss}><i className="material-icons md-24">clear</i></button>
          <button className="waves-effect waves-light blue lighten-2 btn right" onClick={() => {this.props.globs.handlers.logout(); this.dismiss()}}><i className="material-icons md-24">check</i></button>
        </div>
      </div>
    );
  }
}
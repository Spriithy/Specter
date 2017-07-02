import React, { Component } from 'react';

import $ from 'jquery';

import './style.scss';

export default class LoginModal extends Component {
  render = () => {
    return (
      <div id="LoginModal">
        <h1 className="ModalTitle"> </h1>
        <div className="LoginModalForm">
          <span>Username</span>
          <input type="text" />
          <span>Password</span>
          <input type="password"/>
          <span className="error"></span>
        </div>
        <div className="ModalControls">
          <button className="waves-effect waves-light red lighten-2 btn right" onClick={() => this.props.globs.handlers.toggleModal(null)}>
            Cancel
          </button>
          <button className="waves-effect waves-light green lighten-2 btn right" onClick={() => $('span.error').html('Invalid username')}>Connect</button>
        </div>
      </div>
    );
  }
}
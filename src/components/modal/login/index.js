import React, { Component } from 'react';

import $ from 'jquery';

import './style.scss';

export default class LoginModal extends Component {
  dismiss = () => {
    this.props.globs.handlers.toggleModal(null)
  }

  render = () => {
    return (
      <div id="LoginModal">
        <h1 className="ModalTitle"></h1>
        <div className="LoginModalForm left">
          <h3>Login</h3>
          <span className="login-error"></span>
          <input type="text" placeholder="Username"/>
          <br />
          <input type="password" placeholder="Password"/>
          <span><a href="">Forgot your password ?</a></span>
        </div>
        <div className="RegisterModalForm right">
          <h3>Register</h3>
          <span className="register-error"></span>
          <input type="text" placeholder="Username"/>
          <br/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password"/>
        </div>
        <div className="ModalControls">
          <button className="waves-effect waves-light red lighten-2 btn right" onClick={this.dismiss}>Cancel</button>
          <button className="waves-effect waves-light blue lighten-2 btn right" onClick={() => $('span.register-error').html('Username already in use')}>Register</button>        
          <button className="waves-effect waves-light green lighten-2 btn right" onClick={() => {this.props.globs.handlers.login('', ''); this.dismiss()}}>Connect</button>
        </div>
      </div>
    );
  }
}
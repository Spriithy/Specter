import React, { Component } from 'react';

import Board from './board';
import ToolBar from './toolbar';
import Modal from './modal';
import BoardHistory from './board/history';

import '../lib/materialize.js';
import '../styles/shared.scss';
import '../styles/materialize.scss';

var initialState = {
  logged: false,
  toolbar: true,
  content: null,
  modal: null,
};

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      initialState,
      {
        handlers: {
          toggleToolBar: this.toggleToolBar,
          toggleModal: this.toggleModal,
          login: this.login,
          logout: this.logout,
          setContent: this.setContent,
        }
      }
    );
  }

  login = (u, p) => {
    this.setState(Object.assign(this.state,
      { logged: true }
    ));
  }

  logout = () => {
    this._setContent("Specter", [], null);
    this.setState(Object.assign(this.state,
      { logged: false }
    ));
  }

  toggleModal = (x) => {
    $('#Modals').css({ opacity: '0' });
    this.setState(Object.assign(this.state,
      { modal: x }
    ));
    $('#Modals').css({ opacity: '1' }).fadeIn(200);
  }

  toggleToolBar = () => {
    this.setState(Object.assign(this.state, {toolbar: !this.state.toolbar }));
  }

  setContent = (x) => {
    this._setContent(x.props.title, x.props.actions, x);
  }

  _setContent = (title, actions, dom) => {
    this.setState(Object.assign(this.state,
      { content: { name: title, actions: actions, dom: dom } }
    ));
  }

  render = () => {
    return (
      <div className="dashboard">
        <Modal globs={this.state} />
        <ToolBar globs={this.state} />
        <Board globs={this.state} />
      </div>
    );
  }
}
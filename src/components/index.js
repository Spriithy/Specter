import React, { Component } from 'react';

import Board from './board';
import ToolBar from './toolbar';
import Modal from './modal';

import '../lib/materialize.js';
import '../styles/shared.scss';
import '../styles/materialize.scss';

var initialState = {
  toolbar: true,
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
          toggleModal: this.toggleModal
        }
      }
    );
  }

  toggleModal = (x) => {
    console.log(x);
    this.setState(Object.assign(this.state,
      { modal: x })
    );
  }

  toggleToolBar = () => {
    this.setState(Object.assign(this.state, {toolbar: !this.state.toolbar }));
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
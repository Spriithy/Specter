import React, { Component } from 'react';

import $ from 'jquery';

import './style.scss';

export default class Modal extends Component {
  render = () => {
    return (
      <div id="Modals" style={{display: this.props.globs.modal === null ? 'none' : 'block'}}>
        {this.props.globs.modal}
      </div>
    );
  }
}
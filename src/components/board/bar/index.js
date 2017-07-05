import React, { Component } from 'react';

import LoginModal from '../../modal/login';

import $ from 'jquery';

import './style.scss';

export default class BoardBar extends Component {
  render = () => {
    return (
      <div id="BoardBarWrap">
        <div id="ToolBarToggle" onClick={this.props.globs.handlers.toggleToolBar}>
          <i className="material-icons md-36">
            {this.props.globs.toolbar ? "chevron_left" : "chevron_right"}
          </i>
        </div>
        <div id="BoardBar">
          <ul className="BreadCrumb">
            <li className="text">{this.props.globs.content !== null ? this.props.globs.content.name : "Specter"}</li>
            {this.props.globs.content !== null ? this.props.globs.content.actions : null}
          </ul>
        </div>
      </div>
    );
  }
}
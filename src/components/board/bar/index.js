import React, { Component } from 'react';

import LoginModal from '../../modal/login';

import $ from 'jquery';

import './style.scss';

export default class BoardBar extends Component {
  render = () => {
    return (
      <div>
        <div id="ToolBarToggle" onClick={this.props.globs.handlers.toggleToolBar}>
          <i className="material-icons md-36">
            {this.props.globs.toolbar ? "chevron_left" : "chevron_right"}
          </i>
        </div>
        <div id="BoardBar">
          <ul className="BreadCrumb">
            <li className="text">Produits</li>
            <li onClick={() => this.props.globs.handlers.toggleModal(<LoginModal globs={this.props.globs}/>)}><i className="material-icons md-24">add</i></li>
            <li className="current"><i className="material-icons md-24">create</i></li>
            <li className="disabled"><i className="material-icons md-24">more_horiz</i></li>
            <li className="right cancel"><i className="material-icons md-24">close</i></li>
            <li className="right validate"><i className="material-icons md-24">check</i></li>
          </ul>
        </div>
      </div>
    );
  }
}
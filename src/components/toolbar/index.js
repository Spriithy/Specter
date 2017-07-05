import React, { Component } from 'react';

import LoginModal from '../modal/login';
import LogoutModal from '../modal/logout';
import BoardHistory, { BoardHistoryActions } from '../board/history';

import './style.scss';

export default class ToolBar extends Component {
  render = () => {
    return (
      <div id="ToolBar" style={{display: this.props.globs.toolbar ? 'block' : 'none'}}>
        <div className="ToolBarActions" style={{display: this.props.globs.logged ? 'block' : 'none'}}>
          <button className="save waves-effect waves-light">Save</button>
          <button className="quit waves-effect waves-light" onClick={() => this.props.globs.handlers.toggleModal(<LogoutModal globs={this.props.globs}/>)}>Log Out</button>
        </div>
        <div className="ToolBarActions" style={{display: this.props.globs.logged ? 'none' : 'block'}}>
          <button onClick={() => this.props.globs.handlers.toggleModal(<LoginModal globs={this.props.globs}/>)} className="login waves-effect waves-light">Login</button>
        </div>
        <ul className="GeneralOptions">
          <li className="option waves-effect waves-light disabled"><span className="left">Settings</span><i className="material-icons md-24 right">settings</i></li>
          <li className="option waves-effect waves-light disabled"><span className="left">Your Profile</span><i className="material-icons md-24 right">person</i></li>
          <li className="option waves-effect waves-light" onClick={() => this.props.globs.handlers.setContent(<BoardHistory globs={this.props.globs} title="Logs" actions={BoardHistoryActions}/>)}><span className="left">Logs</span><i className="material-icons md-24 right">assignment_late</i></li>
        </ul>
      </div>
    );
  }
}
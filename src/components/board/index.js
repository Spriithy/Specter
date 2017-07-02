import React, { Component } from 'react';

import BoardBar from './bar';

import './style.scss';

export default class Board extends Component {
  render = () => {
    var tb = this.props.globs.toolbar;
    return (
      <div id="Board" style={{ width: tb ? '80%' : '100%', left: tb ? '20%' : '0px' }}>
        <BoardBar globs={this.props.globs}/>
      </div>
    );
  }
}
import React, { Component } from 'react';

import './style.scss';

export default class ToolBar extends Component {
  render = () => {
    return (
      <div id="ToolBar" style={{display: this.props.globs.toolbar ? 'block' : 'none'}}>
        
      </div>
    );
  }
}
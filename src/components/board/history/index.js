import React, { Component } from 'react';

import './style.scss';

export var BoardHistoryActions = [
  <li key="0" className="right">
    <i className="material-icons md-24">more_vert</i>
  </li>
];

export default class ToolBar extends Component {
  render = () => {
    return (
      <div className="BoardHistory">
        <table>
          <tbody>
            <tr>
              <th className="col-type">Type</th>
              <th className="col-time">Time</th>
              <th className="col-user">User</th>
              <th className="col-desc">Description</th>
            </tr>
            <tr className="row success">
              <td className="col-type"><i className="material-icons md-24">beenhere</i></td>
              <td className="col-time">21:14</td>
              <td className="col-user">Spriithy</td>
              <td className="col-desc">Successful Event</td>
            </tr>
            <tr className="row info">
              <td className="col-type"><i className="material-icons md-24">info</i></td>
              <td className="col-time">21:14</td>
              <td className="col-user">Spriithy</td>
              <td className="col-desc">Informative log</td>
            </tr>
            <tr className="row error">
              <td className="col-type"><i className="material-icons md-24">error</i></td>
              <td className="col-time">21:14</td>
              <td className="col-user">Spriithy</td>
              <td className="col-desc">Error notification</td>
            </tr>
            <tr className="row neutral">
              <td className="col-type"><i className="material-icons md-24">notifications</i></td>
              <td className="col-time">21:14</td>
              <td className="col-user">Spriithy</td>
              <td className="col-desc">Neutral log</td>
            </tr>
            <tr className="row warning">
              <td className="col-type"><i className="material-icons md-24">warning</i></td>
              <td className="col-time">21:14</td>
              <td className="col-user">Spriithy</td>
              <td className="col-desc">Warning notification</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
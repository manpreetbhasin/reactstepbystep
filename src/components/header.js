import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return <div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <Link to={'/'}>History</Link>
        </li>
        <li className="pure-menu-item">
          <Link to='/componentb'>Component B</Link>
        </li>
      </ul>
    </div>
  }
}

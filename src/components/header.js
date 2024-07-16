import React from 'react';
import {Link} from "react-router-dom";
import  './header.css';

export default class Nav extends React.Component {
  render() {
    return <div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <Link to={'/'}>Log</Link>
        </li>
        <li className="pure-menu-item">
          <Link to='/requirements'>Requirement</Link>
        </li>
      </ul>
    </div>
  }
}

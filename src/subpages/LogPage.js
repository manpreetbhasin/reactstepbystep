import React from 'react';
import '../App.css';

class LogPage extends React.Component {
  render() {
    return <div>
    <h3> Log Page</h3>
      <b>01/02/2021</b>
      <ol>
        <li>
          Created react repo
        </li>
        <li>
          Added components that has basic router.
        </li>
        <li>
          npm stack
            <pre>{`
            "@testing-library/jest-dom": "^4.2.4",
            "@testing-library/react": "^9.3.2",
            "@testing-library/user-event": "^7.1.2",
            "react": "^16.13.1",
            "react-dom": "^16.13.1",
            "react-router": "^5.1.2",
            "react-router-dom": "^5.1.2",
            "react-scripts": "3.4.1",
            "serve": "^11.3.0"
            `}</pre>
        </li>
      </ol>





    </div>
  }

}

export default LogPage;




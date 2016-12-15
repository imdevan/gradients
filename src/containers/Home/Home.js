import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const backgroundStyle = {
      background: 'linear-gradient(to right top, #56CCF2, #9B51E0)',
      height: '100vh',
      width: '100%',
      display: 'block'
    };

    return (
      <div className={styles.home} style={backgroundStyle }>
        <Helmet title="Home"/>
        <h1>pls work</h1>
      </div>
    );
  }
}

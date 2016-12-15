import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const styles = require('./Home.scss');
    const {showKitten} = this.state;
    const backgroundStyle = {
      background: 'linear-gradient(to right top, #56CCF2, #9B51E0)',
      height: '100vh',
      width: '100%',
      display: 'block'
    };

    return (
      <div className={styles.home} style={backgroundStyle }>
        <Helmet title="Home"/>
        <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
          style={{marginLeft: 50}}
          onClick={this.handleToggleKitten}>
          {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
      </div>
    );
  }
}

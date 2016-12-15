import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Link } from 'components';
import config from '../../config';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>About Gradients</h1>
        <Helmet title="About Gradients"/>

        <p>
        Hi, Welcome to Gradients..
        </p>
        <p>
          Create beautiful gradients, drop in pictures, share them with your friends.
        </p>

        <h3>Star on Github</h3>
        <h3>Share on Twitter</h3>
        <h3>
          Check out this picture of a ktten :3

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'No! Take it away!' : 'Yes! Please!'}</button>
        </h3>

        {showKitten && <div><img src={kitten}/></div>}

        <h3>
          ✌,
          <Link href={config.app.author.twitter}>{config.app.author.name}</Link>
        </h3>
      </div>
    );
  }
}

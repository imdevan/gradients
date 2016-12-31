import React from 'react';
import copy from 'copy-to-clipboard';
import randomColor from 'randomcolor';
import refreshIcon from '../svgs/refresh-icon.svg';
import copyIcon from '../svgs/copy-icon.svg';
import uploadImageIcon from '../svgs/upload-image-icon.svg';
import { Link } from 'react-router';
import {colorOptions} from '../data/config';

const Main = React.createClass({
  render() {
    let bgStyle = {
      background: 'linear-gradient(to top right, ' + this.props.colors[0] +
      ',' + this.props.colors[1] + ')'
    };

    function copyBackground() {
      copy('background: ' + bgStyle.background + ';');
    }

    function refresh() {
      this.props.changeColors(
        this.props.colors.map(
          () => randomColor(colorOptions)
        )
      )
    }

    return (
      <div className='vh-100 pa5-ns' id='background-container' style={bgStyle}>
        <div className='relative h-100'>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {React.cloneElement({...this.props}.children, {...this.props})}

          <div className='absolute right-0 bottom-0 left-0 pv4 ph1 shadow-5 b--white br2-ns bg-white relative'>
              <section className='dt dt--fixed mw7 mw5-ns center'>
              <div className='dtc tc'>
                  <i onClick={refresh.bind(this)}  className='App-icon App-icon--spin'>
                  <img src={refreshIcon} alt='refresh'/>
                </i>
              </div>
              <div className='dtc tc'>
                <i onClick={copyBackground}  className='App-icon'>
                  <img src={copyIcon} alt='copy'/>
                </i>
              </div>
              <div className='dtc tc'>
                <i onClick={copyBackground}  className='App-icon'>
                  <img src={uploadImageIcon} alt='copy'/>
                </i>
              </div>
            </section>

            <h2 className='code tc App-highlight f3 h-100 v-mid' id='bg-label'>
              {bgStyle.background}
            </h2>
          </div>
        </div>
      </div>
    )
  }
});

export default Main;

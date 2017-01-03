// Modules
import React from 'react';
import copy from 'copy-to-clipboard';
import randomColor from 'randomcolor';
import { Link } from 'react-router';

// Components
import Toast from './Toast';

// Icons
import refreshIcon from '../svgs/refresh-icon.svg';
import copyIcon from '../svgs/copy-icon.svg';
import uploadImageIcon from '../svgs/upload-image-icon.svg';

// Config
import {colorOptions} from '../data/config';

const Main = React.createClass({
  render() {
    const {colors, changeColors, toast, doToast} = this.props;
    console.log(toast);
    let bgStyle = {
      background: `linear-gradient(to top right, ${colors[0]}, ${colors[1]})`
    };

    function copyBackground(e) {
      copy(`background: ${bgStyle.background};`);
      doToast('show');
      window.setTimeout(
        () => {
          doToast('hide');
        },
        1000
      );
    }

    function refresh() {
      changeColors(
        colors.map(
          () => randomColor(colorOptions)
        )
      )
    }

    return (
      <div className='vh-100 pa5-ns' id='background-container' style={bgStyle}>
          <div className='flex items-center justify-center h-100'>

          <div className='center relative'>
              <h2 className='code tc f3 f1-ns h-100 v-mid mb5 white ds-white' id='bg-label'>
                  <span className="br-pill bg-white pa3"style={{color: colors[0]}}>{colors[0]}</span>&nbsp;👉&nbsp;
                  <span className="br-pill bg-white pa3"style={{color: colors[1]}}>{colors[1]}</span>
              </h2>

              <section className='dt dt--fixed mw7 mw5-ns center'>
              <div className='dtc tc'>
                  <i onClick={refresh.bind(this)}  className='App-icon App-icon--spin'>
                  <img src={refreshIcon} alt='refresh'/>
                </i>
              </div>
              <div className='dtc tc'>
                <i onClick={copyBackground} className='App-icon'>
                  <img src={copyIcon} alt='copy'/>
                  <Toast toast={toast}>
                    <span>Copied to clipboard</span>
                  </Toast>
                </i>
              </div>
              <div className='dtc tc'>
                <i onClick={copyBackground}  className='App-icon'>
                  <img src={uploadImageIcon} alt='copy'/>
                </i>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
});

export default Main;

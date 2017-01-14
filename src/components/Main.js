// Modules
import React from 'react';
import copy from 'copy-to-clipboard';
import randomColor from 'randomcolor';
import domtoimage from 'dom-to-image';

// Components
import Toast from './Toast';
import ColorButton from './ColorButton';
import SpinnerButton from './SpinnerButton';

// Icons
import refreshIcon from '../svgs/refresh-icon.svg';
import copyIcon from '../svgs/copy-icon.svg';
import uploadImageIcon from '../svgs/upload-image-icon.svg';

// Config
import {colorOptions} from '../data/config';
import directions from '../data/directions';

const Main = React.createClass({
  render() {
    const {colors, changeColors, toast, doToast, direction, changeDirection} = this.props;
    const bgStyle = {
      background: `linear-gradient(${direction.direction}, ${colors[0]}, ${colors[1]})`
    };

    console.log(this.props.params.slug);
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

    function downloadImage () {
      const node = document.getElementById('background-container');
      const insideNode = document.getElementById('inside-container');
      insideNode.style.display = 'none';

      domtoimage.toPng(node)
          .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = `${colors[0]}-${colors[1]}.png`;
              link.href = dataUrl;
              link.click();
              insideNode.style.display = 'block';
          })
          .catch(function (error) {
              console.error('oops, something went wrong!', error);
          });
    }

    function refresh() {
      changeColors(
        colors.map(
          () => randomColor(colorOptions)
        )
      )
    }

    function spin() {
      console.log('called');
      const newDir = (directions.findIndex(x => x.deg===direction.deg)+1) % directions.length;
      console.log(newDir);
      console.log(directions[newDir]);
      changeDirection(
        directions[newDir]
      )
    }

    return (
      <div className='vh-100 pa5-ns' id='background-container' style={bgStyle}>
          <div className='flex items-center justify-center h-100'>
          <div className='center relative overflow'  id='inside-container' >
              <h2 className='code tc f3 f1-ns h-100 v-mid mb5 white ' id='bg-label'>
                  <ColorButton color={colors[0]} key={0} />&nbsp;
                  <i onClick={spin.bind(this)}>
                  <SpinnerButton deg={direction.deg}/></i>&nbsp;
                  <ColorButton color={colors[1]} key={1} />
              </h2>
              <section className='dt dt--fixed mw7 mw5-ns center'>
              <div className='dtc tc'>
                  <i onClick={refresh.bind(this)}  className='icon icon--spin ds-white'>
                  <img src={refreshIcon} alt='refresh'/>
                </i>
              </div>
              <div className='dtc tc'>
                <i onClick={copyBackground} className='icon ts-white'>
                  <img src={copyIcon} alt='copy'/>
                  <Toast toast={toast}>
                    <span>Copied to clipboard</span>
                  </Toast>
                </i>
              </div>
              <div className='dtc tc'>
                <i onClick={downloadImage}  className='icon ds-white'>
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

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import copy from 'copy-to-clipboard';
import {bindActionCreators} from 'redux';
import randomColor from 'randomcolor';
import * as backgroundActions from '../actions/background-actions';
import refreshIcon from '../svgs/refresh-icon.svg';
import copyIcon from '../svgs/copy-icon.svg';
import uploadImageIcon from '../svgs/upload-image-icon.svg';

class BackgroundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.colorOpts = {luminosity: 'bright'};
    this.colors = [randomColor(this.colorOpts), randomColor(this.colorOpts)];
  }


  componentDidMount() {
    let newBackground = 'linear-gradient(to top right, ' + this.colors[0] +
    ',' + this.colors[1] + ')';

    document.getElementById('bg-label').innerHTML = newBackground;
    document.getElementById('background-container').style
      .background = newBackground;
  }

  render() {
    function copyBackground() {
      copy('background: ' +
        document.getElementById('background-container').style.background +
        ';');
    }

    function refresh() {
      const co = {luminosity: 'bright'};
      let colors = [randomColor(co), randomColor(co)];
      let newBackground = 'linear-gradient(to top right, ' + colors[0] +
      ',' + colors[1  ] + ')';

      document.getElementById('bg-label').innerHTML = newBackground;
      document.getElementById('background-container').style
        .background = newBackground;
    }

    return (
      <div className='vh-100 pa5-ns' id='background-container'>
        <div className='relative h-100'>
          <div className='absolute right-0 bottom-0 left-0 pv4 ph1 shadow-5 b--white br2-ns bg-white relative'>
              <section className='dt dt--fixed mw7 mw5-ns center'>
              <div className='dtc tc'>
                <i onClick={refresh}  className='App-icon'>
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
              background
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

BackgroundContainer.propTypes = {
  colors: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    colors: state.colors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(backgroundActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundContainer);

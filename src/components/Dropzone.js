// http://okonet.ru/react-dropzone
// https://github.com/benhowdle89/grade
// http://benhowdle.im/grade/
// background: linear-gradient(to top right, #332cf9, #0f918d);
// background: linear-gradient(to top right, #39c9d3, #5dd3ac);
import React from 'react';
import Dropzone from 'react-dropzone';
// import Grade from 'grade-js';
import aurthur from '../images/aurthur.png';


var DropzoneDemo = React.createClass({
    componentDidMount: function() {
      let imageWrap = document.querySelector('.gradient-wrap');
      console.log(imageWrap);
    },
    onDrop: function (acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
      // background: linear-gradient(to top right, #3ceffc, #f92f47);
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>

            <section className='tesImages'>
              <div className='gradient-wrap pa5'>
                <img alt='aurthur' src={aurthur}></img>
              </div>
            </section>
          </div>
      );
    }
});

export default DropzoneDemo;

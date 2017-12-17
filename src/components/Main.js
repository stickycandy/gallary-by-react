require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas = require('../data/imageData.json');


//图片名信息转成url信息
function genImageURL(arr){
  for(let i = 0, j = arr.length; i< j; i++){
    let arrImg = arr[i];
    arrImg.imaURL = require('../images/'+ arrImg.fileName);
    arr[i] = arrImg;
  }
  return arr;
}

imageDatas = genImageURL(imageDatas);

// console.log(imageDatas);
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="contorl-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

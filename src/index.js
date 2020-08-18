import _ from 'lodash';
import './style.css';
import './example.scss';
import myPngImage from './mypng.png';
import myjpegImage from './myjpegimage.jpg';


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}
function sassComponent() {
    let div = document.createElement('h1');
    div.setAttribute('id', 'sass-heading');
    div.innerHTML = "This colour was given through sass"
    return div;
}
function lessComponent() {
    let div = document.createElement('h1');
    div.setAttribute('id', 'less-heading');
    div.innerHTML = "This colour was given through less hello"
    return div;
}
function ImageComponent() {
    let div = document.createElement('div');
    div.setAttribute('id', 'png-image');
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'png-image-title');
    h1.innerHTML = "The below image is the PNG Image";
    div.appendChild(h1);
    // Add the image to our existing div.
    const myPng = new Image();
    myPng.src = myPngImage;
    div.appendChild(myPng);
    
    let h1jpg = document.createElement('h1');
    h1jpg.setAttribute('id', 'png-image-title');
    h1jpg.innerHTML = "The below image is the JPG Image";
    div.appendChild(h1jpg);
    const myJPG = new Image();
    myJPG.src = myjpegImage;
    div.appendChild(myJPG);
    return div;
}

//function Another
document.body.appendChild(component());
document.body.appendChild(sassComponent());
document.body.appendChild(lessComponent());
document.body.appendChild(ImageComponent());
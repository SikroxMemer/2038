// Imports :


import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Load from './Load';
import Show from './Show';

// // // // // // // // // // // // // //


let Files  = document.getElementById('Path');
let Button = document.getElementById('Show');
let MyForm = document.getElementById('myForm');

MyForm.addEventListener('submit' , event => {event.preventDefault();});

let ArrayOfImages = new Array();


const BlobImages = Load(Files , ArrayOfImages);

const UI = () => {
    BlobImages.forEach((image) => {

        let Div   = document.createElement('div');
        let Image = document.createElement('img');

        Div.setAttribute('class' , 'Image');

        Image.src = image;
        Div.append(Image)

        document.getElementById('Image-galery').append(Div);
    })
    // BlobImages == [] ? Button.disabled = true ; Button.disabled = false 
}

Show(Button , 'click' , UI);
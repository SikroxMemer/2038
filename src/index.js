// Imports :

import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Load from './Load';
import Show from './Show';

// // // // // // // // // // // // // //


let Files  = document.getElementById('Path');
let Button = document.getElementById('Show');
let MyForm = document.getElementById('myForm');

Files.style = "content:Select some files;"

MyForm.addEventListener('submit' , event => {event.preventDefault();});

let ArrayOfImages = new Array();


const BlobImages = Load(Files , ArrayOfImages);

const UI = () => {
    if (BlobImages.length == 0)
    {
        Button.disabled = false;
    }
    else
    {
        Button.disabled = true;
    }
    BlobImages.forEach((image) => {

        let Div         = document.createElement('div')
        let Image       = document.createElement('img');

        Image.src = image;
        Div.append(Image)

        Image.setAttribute('class' , 'Image border border-1')

        document.getElementById('Image-galery').append(Div);
    });
}

Show(Button , 'click' , UI);
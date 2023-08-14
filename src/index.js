// Imports :

import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

import icon from './assets/icon.png';


document.getElementById('link').setAttribute(
    'href' , icon
)

import Load from './Load';
import Show from './Show';

// // // // // // // // // // // // // //


let Files  = document.getElementById('Path');
let Button = document.getElementById('Show');
let MyForm = document.getElementById('myForm');
let Reset  = document.getElementById('Reset');

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

        Div.setAttribute('class' , 'col-md-4 col-sm-6 col-12')
        Image.setAttribute('class' , 'w-100 mb-2 rounded')

        document.getElementById('Gallery').append(Div);
    });
}

Reset.addEventListener('click' , () => {window.location.reload()})

Show(Button , 'click' , UI);
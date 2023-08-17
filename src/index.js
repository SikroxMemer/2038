import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import icon from './assets/icon.png';
/**
 * 
 * @param {HTMLInputElement} input 
 * @param {Array<null>} EmptyArray 
 * @returns {Array<Blob>}
 */
const Load = (input, EmptyArray) => {
    input.addEventListener('change', () => {

        for (let i = 0; i < input.files.length; i++) {
            let Reader = new FileReader();

            Reader.readAsDataURL(input.files[i]);

            Reader.addEventListener('load', () => { EmptyArray.push(Reader.result) })
        }
    })
    return EmptyArray;
}
/**
 * 
 * @param {HTMLElement} target
 * @param {Event} mode
 * @param {Function} callback
 */
const Show = (target, mode, callback) => {
    target.addEventListener(
        mode, callback
    )
}

document.getElementById('link').setAttribute('href', icon)

let Files = document.getElementById('Path');
let Button = document.getElementById('Show');
let MyForm = document.getElementById('myForm');
let Reset = document.getElementById('Reset');

Files.style = "content:Select some files;"

MyForm.addEventListener('submit', event => { event.preventDefault(); });

let ArrayOfImages = new Array();

const BlobImages = Load(Files, ArrayOfImages);
const UI = () => {
    if (BlobImages.length == 0) {
        Button.disabled = false;
    }
    else {
        Button.disabled = true;
    }
    BlobImages.forEach((image) => {

        let Div = document.createElement('div')
        let Image = document.createElement('img');

        Image.src = image;
        Div.append(Image)

        Div.setAttribute('class', 'col-md-4 col-sm-6 col-12')
        Image.setAttribute('class', 'w-100 mb-2 rounded')

        document.getElementById('Gallery').append(Div);
    });
}


Reset.addEventListener('click', () => { window.location.reload() })
Show(Button, 'click', UI);
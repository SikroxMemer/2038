// Elements
let Files = document.getElementById('Files');
let Button = document.getElementById('Show');
let MyForm = document.getElementById('myForm');
let Reset = document.getElementById('Reset');
// // // // // // // // // // // // // // // //

// Imports
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.js'
import icon from './assets/icon.png';
// // // // // // // // // // // // // // //


document.getElementById('link').setAttribute(
    'href', icon
);

MyForm.addEventListener('submit', e => {
    e.preventDefault();
});

Reset.addEventListener('click', () => {
    window.location.reload()
});

const BlobImages = new Array();



Files.addEventListener('change', () => {
    for (let i = 0; i < Files.files.length; i++) {
        let input = Files.files[i]
        let reader = new FileReader();
        reader.readAsDataURL(input);
        reader.addEventListener('load', () => {
            BlobImages.push(reader.result)
        })
    }
    console.log(BlobImages)
})


Button.addEventListener(
    'click', () => {

        if (BlobImages.length == 0) {
            document.getElementById("section").innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Info :</strong> Try adding some images before clicking on show
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
        }
        else {
            Button.disabled = true;
        }

        BlobImages.forEach((image) => {

            let Div = document.createElement('div')
            let Image = document.createElement('img');
            let Image_Section = document.createElement('div');

            Image_Section.setAttribute('class', 'd-flex flex-column')
            Image.src = image;



            Image_Section.append(Image)
            Div.append(Image_Section)

            Div.setAttribute('class', 'col-md-4 col-sm-6 col-12')
            Image.setAttribute('class', 'w-100 mb-2 rounded')

            document.getElementById('Gallery').append(Div);
        })
    })
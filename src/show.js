const show = (img) => {

    let image = document.createElement('div');

    image.setAttribute('class' , 'card');

    image.style = `background-img:url('${img}');`

    return image;
}

export default show;
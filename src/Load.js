/**
 * 
 * @param {HTMLInputElement} input 
 * @param {Array<null>} EmptyArray 
 * @returns {Array<Blob>}
 */
const Load = (input , EmptyArray) => {
    input.addEventListener('change' , () => {

        for (let i = 0; i < input.files.length; i++) 
        {
            let Reader = new FileReader();

            Reader.readAsDataURL(Path.files[i]);

            Reader.addEventListener('load', () => {EmptyArray.push(Reader.result)})
        }
    })
    return EmptyArray;
}

export default Load;
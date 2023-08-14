/**
 * 
 * @param {HTMLElement} target
 * @param {Event} mode
 * @param {Function} callback
 */
const Show = (target , mode , callback) => {
    target.addEventListener(
        mode ,  callback
    )
}


export default Show;
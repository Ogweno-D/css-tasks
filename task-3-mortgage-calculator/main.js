// Adding an onclick event
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');


openBtn.onclick = function () {
    modal.style.display = 'block';
}
closeBtn.onclick = function () {
    modal.style.display = 'none';
}
//  Close the modal if clicking outside content
modal.addEventListener('click', (e) => {
    if(e.target=== modal){
        modal.classList.add('modal-hidden');
    }
})

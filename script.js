const modal = document.querySelector('.modalWindow')
const modalBg = document.querySelector('.modalBackground')
const modalTrigger = document.querySelector('.headerButtonModal1')
const modalBtn = document.querySelector('.modalApplicationBtn')
modalTrigger.addEventListener('click', () => {
    if (modal.style.display = 'none') {
       modal.style.display = 'flex'
    }
    else {
       modal.style.display = 'none'
    }
   })
   
   modalBtn.addEventListener('click', (event) => {
       modal.style.display = 'none'
       
   })


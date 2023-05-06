
const menuBtns = document.querySelectorAll('.menu-btn');
let menuOpen = false;

for(let menuBtn of menuBtns){
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });
};


const checkBoxes = document.querySelectorAll('.check-box');
let checkOpen = false;

for(let checkBox of checkBoxes){
  checkBox.addEventListener('click', () => {
    if(!checkOpen) {
      checkBox.classList.add('open');
      checkOpen = true;
    } else {
      checkBox.classList.remove('open');
      checkOpen = false;
    }
  });
};
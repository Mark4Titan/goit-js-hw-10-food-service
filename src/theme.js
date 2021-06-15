
const LIGHT = 'light-theme'
const DARK = 'dark-theme'
const icoCol = 'iconN'
 
const body = document.querySelector('body')
const checkBox = document.querySelector('.theme-switch__toggle')
const iconCheckBox = document.querySelectorAll('.theme-switch__icon')


function changeCheckBox() {   
  if (checkBox.checked) {
      body.classList = DARK
    localStorage.setItem('theme', DARK);

    // console.log(iconCheckBox)
    icoColors('add') 

    } else {
      body.classList = LIGHT
     icoColors('remove')
     localStorage.setItem('theme', LIGHT);        
    }
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === DARK) {   
  checkBox.checked = true;
  body.classList.add(DARK);
  icoColors('add')
}

function icoColors (sel) {
  if (sel === 'add') {
    iconCheckBox.forEach(e => {
      e.classList.add(icoCol);
    });
  }

  if (sel === 'remove') {
    iconCheckBox.forEach(e => {
      e.classList.remove(icoCol);
    });
  }  
}

checkBox.addEventListener('change', changeCheckBox);
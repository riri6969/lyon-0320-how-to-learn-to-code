let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector ('#dark-mode-toggle');

// check if dark mode is enable
//if it"s enabled, turn it off
//if it' s disabled, turn it on
const enableDarkMode = () => {
    //add class darkmode to the body
    document.body.classList.add('darkmode');
    //update darkMode in the storage
    localStorage.setItem('darkMode', 'enabled');
}


const disableDarkMode = () => {
    //add class darkmode to the body
    document.body.classList.remove('darkmode');
    //update darkMode in the storage
    localStorage.setItem('darkMode', null);
}

if (darkMode==='enabled'){
    enableDarkMode()
}

darkModeToggle.addEventListener('click', ()=>{
    darkMode = localStorage.getItem("darkMode")


   if (darkMode !== 'enabled'){
       enableDarkMode();
       console.log(darkMode)
   }else{
       disableDarkMode();
       console.log(darkMode)
   }
})
const headerLink = document.querySelectorAll('.header-link');
const headerButtonMenu=document.querySelector('.header-button__menu');
const headerMenu = document.querySelector('.header-menu');
const menuIcon =  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>`

const closeIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>`

function closeAllDropdowns(){
    for(let i=0;i<headerLink.length;i++){
        headerLink[i].classList.remove('active')
        headerLink[i].nextElementSibling.classList.remove('active')
     }
}

function headerMenuOpen(){
    headerButtonMenu.classList.add('active')
    headerMenu.classList.add('active')
    headerButtonMenu.innerHTML = closeIcon
}

function headerMenuClose(){
    headerButtonMenu.classList.remove('active')
    headerMenu.classList.remove('active')
    headerButtonMenu.innerHTML = menuIcon
}
for(let i=0;i<headerLink.length;i++){
    headerLink[i].addEventListener('click',function(){
        let dropdown =headerLink[i].nextElementSibling
        let dropdownBg=dropdown.querySelector('.dropdown-bg')
        if(headerLink[i].classList.contains('active')){
            headerLink[i].classList.remove('active')
            dropdown.classList.remove('active')
        }else{
            closeAllDropdowns()
            headerMenuClose()
             headerLink[i].classList.add('active');
             dropdown.classList.add('active');
        }
        dropdownBg.addEventListener('click',function(){
            headerLink[i].classList.remove('active')
            dropdown.classList.remove('active')
        })
})
}
headerButtonMenu.addEventListener('click',function(){
    if(headerButtonMenu.classList.contains('active')){
        headerMenuClose()
    }else{
        closeAllDropdowns()
        headerMenuOpen()
    }
})
console.log(headerMenu)

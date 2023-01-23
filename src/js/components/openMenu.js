const openMenu = document.querySelector(".openMenu");
const headerNav = document.querySelector(".header__inner");
const mainList = document.querySelector(".main-list");


const navItem = document.querySelectorAll('.main-list li');
const itemBlock = document.querySelectorAll('.nav__label-text');
const navCol = document.querySelectorAll('.nav__col');

navItem.forEach(item =>{
    item.addEventListener('click', function (){
        for(let i = 0; i < navItem.length; i++) {
            navItem[i].classList.remove('active');
        }
        item.classList.add('active');
        itemBlock.forEach(block => {
            if(item.getAttribute('data-nav-item') === block.innerHTML){
                navCol.forEach(nav => {
                    nav.classList.remove('visible');
                })
                const parent = block.closest('.nav__col')
                parent.classList.add('visible');

            }
        })

    })
})

function toggleMenu(){
    headerNav.classList.toggle('open');
    openMenu.classList.toggle('open');
}
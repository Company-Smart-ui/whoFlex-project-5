const openMenu = document.querySelector(".openMenu");
const headerNav = document.querySelector(".header__inner");
const mainList = document.querySelector(".main-list");


const navItem = document.querySelectorAll('.main-list li');
const itemBlock = document.querySelectorAll('.nav__label-text');
const navCol = document.querySelectorAll('.nav__col');

const searchBtnIcon = document.querySelector('.search_icon_mobile');
const searchBlock = document.querySelector('.search_box');
const searchHistoryCard = document.querySelector('.search-history');

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
    searchHistoryCard.classList.toggle('transform');
    closeSearchMobile();
}

function toggleSearchMobile() {    
    searchBtnIcon.addEventListener("click", function() {
        if(searchBtnIcon.classList.contains('active')) {
            closeSearchMobile();
        } else {
            if(openMenu.classList.contains('open')) {
                toggleMenu();
            }
            openSearchMobile();
        }
    });
}toggleSearchMobile();

function openSearchMobile(){
    searchBtnIcon.classList.add('active');
    searchBlock.classList.add('active');
    searchHistoryCard.classList.add('active');
};

function closeSearchMobile(){
    searchBtnIcon.classList.remove('active');
    searchBlock.classList.remove('active');
    searchHistoryCard.classList.remove('active');
};

function openUseProfile() {
    const useBtn = document.querySelector('.user-btn');
    useBtn.addEventListener("click", function() {
        useBtn.nextElementSibling.classList.toggle('active');
    });
}openUseProfile();
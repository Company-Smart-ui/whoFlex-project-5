const signInModal = document.querySelector(".whoflex-signin-modal");
const signUpModal = document.querySelector(".whoflex-signup-modal");
const signInTrigger = document.querySelector(".signin-trigger");
const signUpTrigger = document.querySelector(".signup-trigger");
const signInCloseButton = document.querySelector(".whoflex-signin-close-button");
const signUpCloseButton = document.querySelector(".whoflex-signup-close-button");
const signUpTitle = document.querySelector(".whoflex-modal-title-sing-up");
const signUpButton = document.getElementById("signUpButton");
const signUpInputs = document.getElementById("signUpInputs");
const signUpSocialButtons = document.getElementById("signUpSocialButtons");
const signUpBackButton = document.getElementById("signUpBackButton");
const errorMessage = document.getElementById("error-message");
const email = document.getElementById('email');
const signinEmail = document.getElementById('instrLoginEmail');
const signupEmail = document.getElementById('signupEmail');
const signinErrorMessage = document.getElementById('signin-error-message');
const signupErrorMessage = document.getElementById('signup-error-message');
const haveAccount = document.getElementById('have-account');
const signupRightContainer = document.getElementById('signup-right-container')
const whoflexAggrement = document.getElementById('whoflex-aggrement')
const signupImg = document.getElementById('signupImg')
const signupModalContainer = document.getElementById('signupModalContainer')
const whoflexLeftTextContainer = document.getElementById('whoflexLeftTextContainer');

(function(){
    if(signinErrorMessage){
        signinErrorMessage.style.display = "none";
    }
    if(signupErrorMessage){
        signupErrorMessage.style.display = "none";
    }
    if(errorMessage){
        errorMessage.style.display = "none";
    }
    if(haveAccount){
        haveAccount.innerHTML = 'Already have an account?'
    }
    if(signupRightContainer){
        signupRightContainer.classList.add("mt-36")
    }
    if(whoflexAggrement){
        whoflexAggrement.classList.add("mb-0", "mt-45")
    }
}());

function windowOnClick(event) {
    if (event.target === signInModal) {
        toggleSignInModal();
    } else if (event.target === signUpModal) {
        toggleSignUpModal();
    }
}

function toggleSignInModal() {
    signInModal.classList.toggle("whoflex-signin-show-modal");
}
function toggleSignUpModal() {
    signUpModal.classList.toggle("whoflex-signup-show-modal");
}


function hideEmailSignUpEmail(e) {
    e.preventDefault()
    signupImg.src = "images/sign-up2.png"
    signUpInputs.classList.add("d-block")
    signUpInputs.classList.remove("d-none")
    signUpButton.classList.add("d-none")
    signUpSocialButtons.classList.add("d-none")
    signupRightContainer.classList.add("mt-0")
    signupRightContainer.classList.remove("mt-36")
    whoflexAggrement.classList.add("mb-17", "mt-90")
    whoflexAggrement.classList.remove("mb-0", "mt-45" )
    whoflexLeftTextContainer.style.bottom = "192px"
    signUpTitle.classList.add("d-none")
}

function showEmailSignUpEmail(e) {
    e.preventDefault()
    signupImg.src = "images/sign-up.png"
    haveAccount.innerHTML = 'Already have an account?'
    signUpInputs.classList.add("d-none")
    signUpInputs.classList.remove("d-block")
    signUpButton.classList.add("d-block")
    signUpButton.classList.remove("d-none")
    signUpSocialButtons.classList.add("d-block")
    signUpSocialButtons.classList.remove("d-none")
    signupRightContainer.classList.add("mt-36")
    signupRightContainer.classList.remove("mt-0")
    whoflexAggrement.classList.add("mb-0", "mt-45")
    whoflexAggrement.classList.remove("mb-17", "mt-90")
    whoflexLeftTextContainer.style.bottom = "158px"
    signUpTitle.classList.remove("d-none")

}

if(signInModal){
    signInTrigger.addEventListener("click", toggleSignInModal);
    signUpTrigger.addEventListener("click", toggleSignUpModal);
    signInCloseButton.addEventListener("click", toggleSignInModal);
}
if (signUpModal){
    signUpCloseButton.addEventListener("click", toggleSignUpModal);
    window.addEventListener("click", windowOnClick);
    signUpButton.addEventListener('click', (e) => hideEmailSignUpEmail(e))
    signUpBackButton.addEventListener('click', (e) => showEmailSignUpEmail(e))
}

const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkSignUpEmailValidation() {
    if (!filter.test(signupEmail.value)) {
        signupErrorMessage.style.display = "block";
        signupEmail.style.border = "1px solid #ea4335";

        signupEmail.focus();
        return false;
    } else {
        signupErrorMessage.style.display = "none";
        signupEmail.style.border = "1px solid #dddddd";
    }
};
function checkSignInEmailValidation() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    signinEmail.addEventListener('keyup', function (){
        if (!filter.test(signinEmail.value)) {
            signinErrorMessage.style.display = "block";
            signinEmail.style.border = "1px solid #ea4335";

            signinEmail.focus();
            return false;
        } else {
            signinErrorMessage.style.display = "none";
            signinEmail.style.border = "1px solid #dddddd";
        }
    })
    if (!filter.test(signinEmail.value)) {
        signinErrorMessage.style.display = "block";
        signinEmail.style.border = "1px solid #ea4335";

        signinEmail.focus();
        return false;
    } else {
        signinErrorMessage.style.display = "none";
        signinEmail.style.border = "1px solid #dddddd";
    }
};
function checkEmailValidation() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        errorMessage.style.display = "block";
        email.style.border = "1px solid #ea4335";

        email.focus();
        return false;
    } else {
        errorMessage.style.display = "none";
        email.style.border = "1px solid #dddddd";
    }
};

function showPassFunction() {
    const showPass = document.querySelectorAll(".showPass");
    showPass.forEach(item => {
        item.classList.add('d-none');
        const wrapPa = item.closest('.form__group');
        const input = wrapPa.querySelector('input');

        input.addEventListener('keyup', function(){
            if(input.value.length > 0){
                item.classList.remove('d-none');
            }else{
                item.classList.add('d-none');
            }
        })
        item.addEventListener('click', function(){
            if (input.type === "password") {
                input.type = "text";
                item.innerHTML = "Hide";

            } else {
                input.type = "password";
                item.innerHTML = "Show";
            }
            input.focus();
            input.selectionStart = input.value.length;
        })
    })
};
showPassFunction();

function openLogin(){
    const openBtn = document.querySelector('.inst-login__open');
    const modalLogin = document.querySelector('.inst-login__wrapper');
    if(openBtn && modalLogin){
        openBtn.addEventListener('click', function (){
            modalLogin.classList.add('open');
        })
    }
}openLogin();

function closeModal(){
    const closeBtn = document.querySelectorAll('.close-btn');
    const modal = document.querySelector('.modal');
    const wrapModal = document.querySelector('.wrap-modal');
    const openBtn = document.querySelector('.inst-login__open');

    closeBtn.forEach(btn => {
        btn.addEventListener('click', function (){
            btn.closest('.wrap-modal').classList.remove('open');
        })
    })
}closeModal();

function notificationOpen(){
    const notificationBtn = document.querySelector('.notification-btn');
    const notificationBlock = document.querySelector('.notification');
    if(notificationBlock){
        notificationBtn.addEventListener('click', function (){
            notificationBlock.classList.toggle('open')
            document.body.classList.toggle('scroll-hide');
        })
        document.addEventListener( 'click', (e) => {
            const withinNotification = e.composedPath().includes(notificationBlock);
            const withinNotificationBtn = e.composedPath().includes(notificationBtn);
            if (  ! withinNotification && ! withinNotificationBtn) {
                notificationBlock.classList.remove('open')
                document.body.classList.remove('scroll-hide');
            }
        })
    }
}notificationOpen();


const searchHistory = document.querySelector('.search-history');
const historyList = document.querySelector('.search-history__list');
const searchBoxDesk = document.querySelector('.search_box_desk');

function searchHistoryOpen(){
    const searchBox = document.querySelectorAll('.search_box');
    const menu = document.querySelector('.m_nav_logo_box');
    const closeSearch = document.querySelector('.close-search');
    if(searchBox && searchHistory){
        searchBox.forEach(search => {
            const searchBtn = search.querySelector('.common_input');
            searchBtn.addEventListener('focus', function(){
                searchHistory.classList.add('open');
                searchBoxDesk.classList.add('open');
                menu.classList.add('hide');
                document.body.classList.add('scroll-h');
            })
            searchBtn.addEventListener('click', function(){
                searchHistory.classList.add('open');
            })
            document.addEventListener(  'mousedown', (e) => {
                const withinSearchHistory = e.composedPath().includes(searchHistory);
                const withinSearchHistoryBtn = e.composedPath().includes(searchBoxDesk);
                if (  ! withinSearchHistory && ! withinSearchHistoryBtn) {
                    searchHistory.classList.remove('open');
                    searchBoxDesk.classList.remove('open');
                    document.body.classList.remove('scroll-h');
                }
            })
        })
        closeSearch.addEventListener('click', function (){
            searchHistory.classList.remove('open');
            searchBoxDesk.classList.remove('open');
            menu.classList.remove('hide');
            document.body.classList.remove('scroll-h');
        })
    }
}searchHistoryOpen();

function notificationOpenInfo(){
    const notificationInfoBtn = document.querySelectorAll('.notification__info-btn');
    if(notificationInfoBtn){
        notificationInfoBtn.forEach(btn =>{
            const notificationInfo = btn.closest('.notification__item');
            const notificationDropdown = notificationInfo.querySelector('.notification__info-dropdown');
            btn.addEventListener('click', function (){
                notificationDropdown.classList.toggle('open')
            })
            document.addEventListener( 'click', (e) => {
                const withinNotificationDropdown = e.composedPath().includes(notificationDropdown);
                const withinNotificationBtn = e.composedPath().includes(btn);
                if (  ! withinNotificationDropdown && ! withinNotificationBtn) {
                    notificationDropdown.classList.remove('open')
                }
            })
        })
    }
}notificationOpenInfo();

function createSearchHistory(searchInput){
    const addItem = document.createElement('li');
    addItem.innerHTML = '<svg width="23" height="23" viewBox="0 0 23 23" fill="none">\n' +
        '                     <path d="M14.041 16.2752L14.041 16.2752C14.3586 16.6114 14.8887 16.6265 15.225 16.309L15.2251 16.309C15.5612 15.9913 15.5764 15.4612 15.2589 15.1249L15.2589 15.1249L12.6821 12.3968C12.4607 12.1623 12.3374 11.8521 12.3374 11.5299L12.3374 6.2499C12.3374 5.78736 11.9624 5.4124 11.4999 5.4124C11.0374 5.4124 10.6624 5.78737 10.6624 6.2499V11.5299C10.6624 12.2798 10.9493 13.0015 11.4643 13.5467L14.041 16.2752Z" fill="#666666" stroke="#666666" stroke-width="0.1"/>\n' +
        '                     <path d="M11.5 22.05C17.3266 22.05 22.05 17.3266 22.05 11.5C22.05 5.67339 17.3266 0.95 11.5 0.95C5.67339 0.95 0.95 5.67339 0.95 11.5C0.95 17.3266 5.67339 22.05 11.5 22.05ZM20.375 11.5C20.375 16.4014 16.4014 20.375 11.5 20.375C6.59824 20.375 2.625 16.4014 2.625 11.5C2.625 6.59824 6.59824 2.625 11.5 2.625C16.4014 2.625 20.375 6.59824 20.375 11.5Z" fill="#666666" stroke="#666666" stroke-width="0.1"/>\n' +
        '                   </svg>\n' +
        '                   <span>' +
        searchInput.value +
        '</span>';

    historyList.append(addItem);
};

(function(){
    const searchBox = document.querySelectorAll('.search_box');
    if(searchBox){
        searchBox.forEach(search => {
            const searchInput = search.querySelector('.common_input');
            searchInput.addEventListener("keyup", function(e) {
                if (e.keyCode === 13) {
                    if(searchInput.value.length > 1 && searchInput.value !== " "){
                        searchInput.select();
                        document.execCommand("copy");
                        createSearchHistory(searchInput);
                        searchInput.blur();
                        searchInput.value = "";
                        searchHistory.classList.remove('open');
                        searchBoxDesk.classList.remove('open');
                    } else{
                        searchInput.blur();
                        searchInput.value = "";
                    }
                }
            });
        })
    }
}());







@@include('components/openMenu.js');
@@include('components/swiper-min.js');
@@include('components/slider-init.js');

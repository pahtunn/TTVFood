
// Food categories
let foodMenuList = document.querySelector('.food-item-wrap');
let foodCategory = document.querySelector('.food-category');
let categories = foodCategory.querySelectorAll('button');

Array.from(categories).forEach((item) => {
    item.onclick = (e) => {
        let currcat = foodCategory.querySelector('button.active');
        currcat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
    }
})

// Login modal
// Sign im
var modal = document.getElementById("signInModal");
var btnSignIn = document.getElementById("btnSignIn");
var btnClose = document.getElementsByClassName("close")[0];

btnSignIn.onclick = function () {
    modal.style.display = "block";
}

btnClose.onclick = function () {
    modal.style.display = "none";
}

// Sign up
var modal2 = document.getElementById("signUpModal");
var btnSignUp = document.getElementById("btnSignUp");
var btnClose2 = document.getElementsByClassName("close2")[0];

btnSignUp.onclick = function () {
    modal2.style.display = "block";
}

btnClose2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// menu mb 

document.querySelector('.menu-mb-bar').onclick = () => {
    document.querySelector('.menu-mb-bar').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active');
}



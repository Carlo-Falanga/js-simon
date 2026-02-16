// Dom elements
const countDownEl = document.getElementById('countdown')
const numberListEl = document.getElementById('numbers-list')
const answersFormEl = document.getElementById('answers-form')
const buttonPrimaryEl = document.querySelector('.btn-primary')
const messageEl = document.getElementById('message')


// random rumber generator function
function getRandomNum() {
    return Math.floor(Math.random() * 50) + 1;
}

// save the result of the function in a variable
const randomNumResult = getRandomNum()
console.log(randomNumResult);

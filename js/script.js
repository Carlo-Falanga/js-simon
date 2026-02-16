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

// empty array 
const secretNumbers = [];

// while cicle for pushing max 5 numbers into the array
while (secretNumbers.length < 5){
    const num = getRandomNum()
    // IF the number in not already present, push it into the array
    if (!secretNumbers.includes(num)){
        secretNumbers.push(num)
    }    
}
console.log(secretNumbers);

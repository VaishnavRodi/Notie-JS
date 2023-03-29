
let btns = document.querySelectorAll('a');
btns.forEach((button) => {
    button.classList.add('my-button');
})

let success = document.querySelector('.success-btn');
success.addEventListener('click', () => {
    notie.alert({
        type: "success", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: "Successful Alert",
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: "top" // optional, default = 'top', enum: ['top', 'bottom']
      })
})

let info = document.querySelector('.info-btn');
info.addEventListener('click', () => {
    notie.alert({
        type: "info", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: "Information Alert",
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: "bottom" // optional, default = 'top', enum: ['top', 'bottom']
      })
})

let warning = document.querySelector('.warning-btn');
warning.addEventListener('click', () => {
    notie.alert({
        type: "warning", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: "Information Alert",
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: "top" // optional, default = 'top', enum: ['top', 'bottom']
      })
})

let error = document.querySelector('.error-btn');
error.addEventListener('click', () => {
    notie.alert({
        type: "error", // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: "Information Alert",
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: "bottom" // optional, default = 'top', enum: ['top', 'bottom']
      })
})

let confirm = document.querySelector('.confirm-btn');
confirm.addEventListener('click', () => {
    notie.confirm({
        text: 'Would you like to confirm Sir?',
        submitText: 'Yessir', // optional, default = 'Yes'
        cancelText: 'Nossir', // optional, default = 'Cancel'
        position: 'top', // optional, default = 'top', enum: ['top', 'bottom']
      })
})

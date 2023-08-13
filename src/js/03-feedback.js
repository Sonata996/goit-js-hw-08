import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form')
let KeyLocale = JSON.parse(localStorage.getItem("feedback-form-state")) || {}


form.addEventListener('input', throttle(onInputFormFeedbeck, 500))
form.addEventListener("submit", onSubmitForm)
checkАieldКestart()


function onInputFormFeedbeck(event) {
    KeyLocale[event.target.name] = event.target.value
    // const data = {email: form.elements.email.value, message: form.elements.message.value } 
    // console.log(data)
    localStorage.setItem("feedback-form-state", JSON.stringify(KeyLocale))
} 


function onSubmitForm(event) {
    event.preventDefault()

    const {email , message} = form.elements
    console.log({ email: email.value, message: message.value })
    
    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset()
}

function checkАieldКestart() {
    if (KeyLocale !== '') {
        const { email, message } = form.elements
        email.value = KeyLocale.email || ''
        message.value = KeyLocale.message || ''
    }
}























// checkValue()

// function onInputFormFeedbeck(event) {
//     const formValue = event.target.value
// localStorage.setItem("feedback-form-state", JSON.stringify(formValue))
// }

// function onSubmitForm(event) {
//     console.log(event)
//     event.preventDefault()

//     const { email, message } = event.currentTarget.elements
//     console.log({ email: email.value, message : message.value})
   
//     event.currentTarget.reset()
//     localStorage.removeItem("feedback-form-state")
// }

// function checkValue() {
//     if (foo) {
//         let { email, message } = form.elements
        
//         email.value = foo.email || ''
//         message.value = foo.message  || ''
//     } 
// }
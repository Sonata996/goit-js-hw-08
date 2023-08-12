import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onInputFormFeedbeck, 500))
form.addEventListener("submit", onSubmitForm)


function onInputFormFeedbeck(event) {
    const formValue = event.target.value
localStorage.setItem("feedback-form-state", JSON.stringify(formValue))
}

function onSubmitForm(event) {
    console.log(event)
    event.preventDefault()

    const { email, message } = event.currentTarget.elements
    console.log({ email: email.value, message : message.value})
   
    event.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
}

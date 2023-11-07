const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', FormSubmit);
function FormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (mail === '' || password === '') {
        return alert('Всі поля повинні бути заповнені!');
    }
    const formData = {
        mail,
        password,
    };
    console.log(formData);
    event.currentTarget.reset();
}


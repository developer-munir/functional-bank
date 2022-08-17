document.getElementById("login-btn").addEventListener('click', function () {
    const email = getElementByIdInputField('email-field');
    const password = getElementByIdInputField('password-field');
    if (email === 'developermunir@gmail.com' || password === 'baperbank') {
        window.location.href = 'tranjection.html';
    } else {
        alert('please enter a valid email password');
    }
})
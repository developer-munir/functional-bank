function getElementByIdInputField(InputField) {
    const inputField = document.getElementById(InputField);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}
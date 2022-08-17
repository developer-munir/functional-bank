function getElementByIdInputField(InputField) {
  const inputField = document.getElementById(InputField);
  const inputFieldValue = inputField.value;
  inputField.value = "";
  return inputFieldValue;
}
function getElementByIdInputFieldPage2(InputField) {
  const inputField = document.getElementById(InputField);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getElements(ElementId) {
  const element = document.getElementById(ElementId);
  const elementTextString = element.innerText;
  const elementText = parseFloat(elementTextString);
  return elementText;
}

function getTextofElement(ElementId, newValue) {
  const element = document.getElementById(ElementId);
  element.innerText = newValue;
}

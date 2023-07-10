// 1) To display numbers and operators in console.
function displayNumber(num) {
  result.value += num;
}

// 2) To clear
function clearBox() {
  result.value = '';
}

// 3) To evaluate
function evaluateBox() {

  //Method 1
  // exp = result.value;
  // output = eval(exp);
  // result.value = output;

  //Method 2
  result.value = eval(result.value)
}

// 4) Backspace -  remove last item from box
function backspace() {
  currentItem = result.value;
  result.value = currentItem.slice(0, -1);

}
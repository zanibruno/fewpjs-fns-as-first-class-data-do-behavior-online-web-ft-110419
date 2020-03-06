/* Given Code, don't edit */

function handleClick(e) {
  const time = document.getElementById('time').value
  displayMessage(greet(time))
}

/* End Given Code, don't edit above here...*/

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(time) {
  const hour = parseInt(time, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}

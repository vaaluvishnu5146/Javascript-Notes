var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit-form");

var data = {};
email.addEventListener("input", handleChange);
password.addEventListener("input", handleChange);
submit.addEventListener("click", (e) => {
  console.log(data);
});
function handleChange(e) {
  data[e.target.id] = e.target.value;
}

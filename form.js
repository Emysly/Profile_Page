const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
let store = [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if ((name.value == "", email.value == "", message.value == "")) {
    name.focus();
  } else {
    const obj = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    store.push(JSON.stringify(obj));

    name.value = "";
    email.value = "";
    message.value = "";

    name.focus();

    console.log(store);
  }
});

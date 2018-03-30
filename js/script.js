var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var background = document.querySelector(".site-wrapper");

var isStorageSupport = true;

var storage_username = "";
var storage_email = "";

try {
  storage_username = localStorage.getItem("username");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage_username) {
      username.value = storage_username;
      if(storage_email) {
        email.value = storage_email;
        message.focus();
      } else {
        email.focus();
      }
    } else {
      username.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !message.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

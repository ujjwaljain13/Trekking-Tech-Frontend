const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function SendMail() {
  var params = {
    from_name: document.getElementById("contact-name").value,
    email_id: document.getElementById("contact-email").value,
    message: document.getElementById("contact-message").value,
  };
  emailjs.send("service_75pueug", "template_7g41098", params).then(function (res) {
      alert("Your Message has been sent successfully!!");
    });
}

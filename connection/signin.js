const siginurl = "https://trekkingtech-backend2022.herokuapp.com/api/auth/signup";
const done=document.getElementById("done");
const alert= document.getElementById("alert");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const sign_in = document.getElementById("sign_in");
// const express = require("express");

// app.use(static.use("public"));
const signin = async (e) => {
  e.preventDefault();
  const object = {
    username: username.value,
    password: password.value,
    email: email.value,
  };
  console.log(object);

  await fetch(siginurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  })
    .then(async (res) => {
      const data = await res.json();
      console.log(data);
      if (data.value === 0) {
        localStorage.setItem("authtoken", data.authtoken);
       
        producePrompt("Successfully Registered 👍", "done", "black")
          
        function producePrompt(message, promptLocation, color) {
          document.getElementById(promptLocation).innerHTML = message;
          document.getElementById(promptLocation).style.color = color;
        }
      
      setTimeout(function () {
        $(".loader_bg").fadeToggle();
      }, 1500);
      setTimeout(function () {
        window.location.replace("https://trekking-tech.netlify.app/login.html");
      }, 1500);
      } 

      else if(data.value ===-2) {
        alert.innerHTML = "ⓘ Password should be atleast 5 in length ";
            setTimeout(function () {
              jsHide("alert");
            }, 2500);

            function jsHide(id) {
              document.getElementById(id).style.display = "none";
            }
            setTimeout(function () {
            window.location.reload();
          }, 2500);
      }
      else if(data.value ===-3 || data.value ===-4) {
        alert.innerHTML = "User Already Exist ❌";
            setTimeout(function () {
              jsHide("alert");
            }, 2500);

            function jsHide(id) {
              document.getElementById(id).style.display = "none";
            }
            setTimeout(function () {
            window.location.reload();
          }, 2500);
      }

        

      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

sign_in.addEventListener("click", signin);

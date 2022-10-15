const fnameCont = document.querySelector("#fname-cont");
const fnameInp = document.querySelector("#fname");
const fnameErr = document.querySelector("#fname-cont .error-msg");
const lnameCont = document.querySelector("#lname-cont");
const lnameInp = document.querySelector("#lname");
const lnameErr = document.querySelector("#lname-cont .error-msg");
const emailCont = document.querySelector("#email-cont");
const emailInp = document.querySelector("#email");
const emailErr = document.querySelector("#email-cont .error-msg");
const passCont = document.querySelector("#password-cont");
const passInp = document.querySelector("#password");
const passErr = document.querySelector("#password-cont .error-msg");
const confPassCont = document.querySelector("#conf-password-cont");
const confPassInp = document.querySelector("#conf-password");
const confPassErr = document.querySelector("#conf-password-cont .error-msg");
const passToggler = document.querySelector("#password-cont i");
const confPassToggler = document.querySelector("#conf-password-cont i");
const signinBtn = document.querySelector(".btn button");

function containsNumbers(str) {
  return /\d/.test(str);
}

function nameFirstCapitalize(elem, elemErr, elemCont) {
  elem.oninput = () => {
    if (elem.value != "") {
      if (!containsNumbers(elem.value)) {
        elemErr.classList.add("hide");
        elemCont.classList.remove("error");
      } else {
        elemErr.classList.remove("hide");
        elemCont.classList.add("error");
        elemErr.innerHTML = "Numbers not allowed";
      }
    } else {
      elemErr.classList.remove("hide");
      elemCont.classList.add("error");
      elemErr.innerHTML = "Enter your name";
    }

    elem.value =
      elem.value.slice(0, 1).toUpperCase() +
      elem.value.slice(1, elem.value.length);
  };

  elem.onfocus = () => {
    document.onkeydown = (e) => {
      if (e.which == 32) {
        e.preventDefault();
      }
    };
  };
}
nameFirstCapitalize(fnameInp, fnameErr, fnameCont);
nameFirstCapitalize(lnameInp, lnameErr, lnameCont);
confPassCont.class;
function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
emailInp.oninput = () => {
  if (!validateEmail(emailInp.value)) {
    emailCont.classList.add("error");
    emailErr.classList.remove("hide");
  } else {
    emailCont.classList.remove("error");
    emailErr.classList.add("hide");
  }
};

passInp.oninput = () => {
  if (passInp.value.length <= 6) {
    passCont.classList.add("error");
    passErr.classList.remove("hide");
  } else {
    passCont.classList.remove("error");
    passErr.classList.add("hide");
  }
};

confPassInp.oninput = () => {
  if (confPassInp.value != passInp.value) {
    confPassCont.classList.add("error");
    confPassErr.classList.remove("hide");
  } else if (confPassInp.value == passInp.value) {
    confPassCont.classList.remove("error");
    confPassErr.classList.add("hide");
    console.log("hey");
  }
};

function pwToggle(elem, elemInp) {
  elem.onclick = () => {
    if (
      elem.classList.contains("fa-eye") &&
      elemInp.getAttribute("type") == "text"
    ) {
      elem.classList.add("fa-eye-slash");
      elem.classList.remove("fa-eye");

      elemInp.setAttribute("type", "password");
    } else if (
      elem.classList.contains("fa-eye-slash") &&
      elemInp.getAttribute("type") == "password"
    ) {
      elem.classList.add("fa-eye");
      elem.classList.remove("fa-eye-slash");

      elemInp.setAttribute("type", "text");
    }
  };
}

pwToggle(passToggler, passInp);
pwToggle(confPassToggler, confPassInp);

signinBtn.onclick = () => {
  function nameFunc(elem, elemErr, elemCont) {
    if (containsNumbers(elem.value)) {
      elemErr.innerHTML = "Numbers not allowed";
      elemErr.classList.remove("hide");
      elemCont.classList.add("error");
    } else if (elem.value == "") {
      elemErr.innerHTML = "Enter your name";
      elemErr.classList.remove("hide");
      elemCont.classList.add("error");
    }
  }

  nameFunc(fnameInp, fnameErr, fnameCont);
  nameFunc(lnameInp, lnameErr, lnameCont);

  if (!validateEmail(emailInp.value)) {
    emailCont.classList.add("error");
    emailErr.classList.remove("hide");
  } else {
    emailCont.classList.remove("error");
    emailErr.classList.add("hide");
  }

  if (passInp.value.length <= 6) {
    passCont.classList.add("error");
    passErr.classList.remove("hide");
  } else {
    passCont.classList.remove("error");
    passErr.classList.add("hide");
  }
};

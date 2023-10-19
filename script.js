const display = document.querySelector(".display");
const equalbutton = document.querySelector("#equalbutton");
const buttoms = document.querySelectorAll(".buttom");
const operators = document.querySelectorAll(".operators");
const acbutton = document.querySelector("#AC");
const cbutton = document.querySelector("#C");
const text = display.textContent;

for (var i = 0; i < buttoms.length; i++) {
  buttoms[i].addEventListener("click", function () {
    var currentButton = this;
    if (
      currentButton == equalbutton ||
      currentButton == acbutton ||
      currentButton == cbutton
    ) {
    } else {
      if (
        display.textContent == "" &&
        (this.textContent == "+" ||
          this.textContent == "-" ||
          this.textContent == "=" ||
          this.textContent == "*" ||
          this.textContent == "/")
      ) {
        display.textContent = "";
        return;
      }

      let n = display.textContent.length;
      if (
        (display.textContent[n - 1] == "+" ||
          display.textContent[n - 1] == "-" ||
          display.textContent[n - 1] == "*" ||
          display.textContent[n - 1] == "/" ||
          display.textContent[n - 1] == "=") &&
        (this.textContent == "+" ||
          this.textContent == "-" ||
          this.textContent == "*" ||
          this.textContent == "/" ||
          this.textContent == "=")
      ) {
        display.textContent += "";
        return;
      }
      display.textContent += currentButton.textContent;
    }
  });
}

acbutton.addEventListener("click", function () {
  display.textContent = "";
});

cbutton.addEventListener("click", function () {
  console.log(display.textContent);
  display.textContent = display.textContent.substr(
    0,
    display.textContent.length - 1
  );
});

equalbutton.addEventListener("click", function () {
  display.style.display = "flex";

  display.style.justifyContent = "end";
  display.style.alignItems = "end";
  display.style.marginRight = "2px";
  display.style.fontSize = "100px";

  display.textContent = eval(display.textContent);
});

const display = document.querySelector(".display");
const equalbutton = document.querySelector("#equalbutton");
const buttoms = document.querySelectorAll(".buttom");
const acbutton = document.querySelector("#AC");
const cbutton = document.querySelector("#C");
for (var i = 0; i < buttoms.length; i++) {
  buttoms[i].addEventListener("click", function () {
    var currentButton = this; // Store the current button in a variable

    if (
      currentButton == equalbutton ||
      currentButton == acbutton ||
      currentButton == cbutton
    ) {
      // Do nothing for these buttons
    } else {
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
  display.textContent = eval(display.textContent);
});

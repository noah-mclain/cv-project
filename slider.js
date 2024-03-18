// window.onload = function () {
//   var sections = document.querySelectorAll(".section");
//   var currentIndex = 0;

//   function revealNextSection() {
//     // Reveal the current text section
//     var revealText = sections[currentIndex].querySelector(".reveal-text");
//     revealText.style.maxHeight = revealText.scrollHeight + "px";

//     // Show the reveal bar for the current section
//     var revealBar = sections[currentIndex].querySelector(".reveal-bar");
//     revealBar.style.transform = "translateY(0)";

//     // Increment the index for the next iteration
//     currentIndex++;

//     // If there are more text sections, schedule the next reveal
//     if (currentIndex < sections.length) {
//       setTimeout(revealNextSection, 2000); // Adjust this value to match the transition duration in your CSS
//     }
//   }

//   // Start the reveal animation
//   revealNextSection();
// };

window.onload = function () {
  var revealTextElements = document.querySelectorAll(".reveal-text");
  revealTextElements.forEach(function (element) {
    element.classList.add("animate");
  });
};

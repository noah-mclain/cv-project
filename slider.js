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

// window.onload = function () {
//   var revealTextElements = document.querySelectorAll(".reveal-text");
//   revealTextElements.forEach(function (element) {
//     element.classList.add("animate");
//   });
// };

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

window.onload = async function () {
  var revealTextElements = document.querySelectorAll(".reveal-text");
  for (let element of revealTextElements) {
    var height = element.scrollHeight;

    var delayDuration = height / 100;
    // Apply the animation to the element
    element.classList.add("animate");

    // Apply the animation to the bar
    var revealBar = element.querySelector(".reveal-bar");
    revealBar.style.animation = `fill 5s forwards`;

    // Wait for the animation to complete before moving to the next element
    await delay(delayDuration * 1000);
  }
};

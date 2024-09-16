// const jobTitles = [
//   'freelancer',
//   'full stack developer',
//   'data analyst',
//   'web designer'
// ];

// let currentTitleIndex = 0;
// let currentCharIndex = 0;
// let isDeleting = false;
// let typingSpeed = 100;
// let pauseBetweenTitles = 200;

// function typeJobTitle() {
//   const jobTitleElement = document.getElementById('job-title');
//   const currentTitle = jobTitles[currentTitleIndex];

//   if (isDeleting) {
//     jobTitleElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
//     currentCharIndex--;
//   } else {
//     jobTitleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
//     currentCharIndex++;
//   }

//   if (!isDeleting && currentCharIndex === currentTitle.length) {
//     isDeleting = true;
//     typingSpeed = 50;
//     setTimeout(typeJobTitle, pauseBetweenTitles);
//   } else if (isDeleting && currentCharIndex === 0) {
//     isDeleting = false;
//     currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
//     typingSpeed = 100;
//     setTimeout(typeJobTitle, 500);
//   } else {
//     setTimeout(typeJobTitle, typingSpeed);
//   }
// }

// document.addEventListener('DOMContentLoaded', typeJobTitle);
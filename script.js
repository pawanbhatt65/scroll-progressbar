// const progressBar = document.getElementById("progressbar");
// progressBar.style.height = 1 + "%";

// const boxContainer = document.querySelector(".box-container");

// window.onscroll = () => {
//   const scroll = document.documentElement.scrollTop;
//   const height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let scrolled = (scroll / height) * 100;

//   if (scrolled <= 1) {
//     progressBar.style.height = 1 + "%";
//   } else if (scrolled >= 2 && scrolled <= 99.9) {
//     progressBar.style.height = scrolled + "%";
//     progressBar.classList.remove("glow");
//   } else if (scrolled === 100) {
//     progressBar.style.height = scrolled + "%";
//     // 		Do something when reached 100% scroll
//     progressBar.classList.add("glow");
//   }
// };

const progressBar = document.getElementById("progressbar");
progressBar.style.height = "0%";

const boxContainer = document.querySelector(".box-container");
const boxContainerTop = boxContainer.offsetTop;
const boxContainerHeight = boxContainer.clientHeight;
const windowHeight = window.innerHeight;

window.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
  const scrollPosition = window.scrollY;
  const scrollEndPosition = boxContainerTop + boxContainerHeight;
  
  if (scrollPosition >= boxContainerTop && scrollPosition <= scrollEndPosition - windowHeight) {
    const scrolled =
      ((scrollPosition - boxContainerTop) / (scrollEndPosition - boxContainerTop - windowHeight)) * 100;
    progressBar.style.height = `${scrolled}%`;
    progressBar.classList.remove("glow");
  } else if (scrollPosition > scrollEndPosition - windowHeight) {
    progressBar.style.height = "100%";
    progressBar.classList.add("glow");
  } else {
    progressBar.style.height = "0%";
  }
}

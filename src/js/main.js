// let slider = document.getElementById("myRange");
// let output = document.getElementById("value");

// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// }

// Slider

let slideBook = document.querySelector('.slide__book'), // Menu-item
  slide = document.querySelector('.slide1'), //Menu
  tabBook = document.querySelector('.slide'); //Content

function hideTabBook(a) {
  for (let i = 0; i < a.length; i++) {
    tabBook[i].classList.remove('show');
    tabBook[i].classList.add('hide');
  }
}

hideTabBook(1);

function showTabBook(b) {
  if (tabBook[b].classList.contains('hide')) {
    tabBook[b].classList.remove('hide');
    tabBook[b].classList.add('show');
  }
}

slide.addEventListener('click', function (e) {
  let target = e.target;
  if (target && target.classList.contains('slide__book')) {
    for (let i = 0; i < slideBook.length; i++) {
      if (target == tabBook[i]) {
        hideTabBook(0);
        showTabBook(i);
        tabBook.classList.add('slide__book-active')
        break;
      }
    }
  }
});


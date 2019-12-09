
$(document).ready(function () {

  if ($("#myRange").is("#myRange") == 1) {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("value");


    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;

    };


    slider.addEventListener("mousemove", function () {
      let x = slider.value;
      let color = 'linear-gradient(90deg, #2b71d9 ' + x + '%, #f5f5f5 ' + x + '%)';
      slider.style.background = color;


      console.log(color);
    });
    function rangColor2() {
      let x = slider.value;
      let color = 'linear-gradient(90deg, #2b71d9 ' + x + '%, #f5f5f5 ' + x + '%)';
      slider.style.background = color;



    }
    rangColor2();

  } else {
    alert('У этого блока нет класса test1');
  }
}

);

//Slider

let slideBook = document.querySelector('.slide__book'), // Menu-item
  slide = document.querySelector('.slide1'), //Menu
  tabBook = document.querySelector('.slider'); //Content

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
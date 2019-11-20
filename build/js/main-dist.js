
$(document).ready(function () {
  let slider = document.getElementById("myRange");
  let output = document.getElementById("value");

  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;

  }


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
});
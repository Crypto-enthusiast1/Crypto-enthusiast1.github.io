document.addEventListener("DOMContentLoaded", function () {
   const images = ['url(src/img/photo1.JPG)', 'url(src/img/photo2.JPG)', 'url(src/img/photo3.JPG)', 'url(src/img/photo4.JPG)'];
   const descr = document.querySelector('.description');
   let index = 0;
   function changeImg() {
      document.body.style.background = images[index] + "center center/cover no-repeat";
      index = (index + 1) % images.length;
      if (index > 1) {
         descr.innerHTML = `Representative of the Dnipropetrovsk Association of Local Governments and the Dnipropetrovsk Region in the Alliance of the EU Committee of the Regions. </br> </br>
         <a href="tel:+32470504233"> +32 470 50 42 33</a></br>
         <a href="mailto:dir.bsnshub.bruxelles@gmail.com">dir.bsnshub.bruxelles@gmail.com</a>`
      } else {
         descr.innerHTML = `
         Head of business hub </br>
         <a href="tel:+32470504233"> +32 470 50 42 33</a></br>
         <a href="mailto:dir.bsnshub.bruxelles@gmail.com">dir.bsnshub.bruxelles@gmail.com</a> </br></br>

         Your representative in Europe, who is no less interested in your success than you are!`
      }
   }

   changeImg();

   setInterval(changeImg, 10000);
});
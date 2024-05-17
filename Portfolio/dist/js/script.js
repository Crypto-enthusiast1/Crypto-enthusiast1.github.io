document.addEventListener('DOMContentLoaded', () => {


   const menu = document.querySelector('.menu');
   const overflow = document.querySelector('.overflow');

   function mainMenuInPromoSection() {
      const btnBurger = document.querySelector('.burger');

      btnBurger.addEventListener('click', () => {
         menu.classList.add('active')
         overflow.classList.add('active_overflow')
         document.body.style.overflow = 'hidden';
      })
   }

   mainMenuInPromoSection();

   function closeMenu() {
      const close = document.querySelector('.close')

      close.addEventListener('click', () => {
         menu.classList.remove('active')
         overflow.classList.remove('active_overflow')
         document.body.style.overflow = '';
      })

      overflow.addEventListener('click', () => {
         menu.classList.remove('active')
         overflow.classList.remove('active_overflow')
         document.body.style.overflow = '';
      })

   }

   closeMenu()

   //Orange line

   const procentOfOrangeLine = document.querySelectorAll('.number');
   const allOrangeLine = document.querySelectorAll('.scale-orange');

   function setWidth() {
      if (procentOfOrangeLine.length === allOrangeLine.length) {

         procentOfOrangeLine.forEach((item, i) => {

            const percentText = item.textContent.trim();
            allOrangeLine[i].style.width = percentText;
         });
      } else {
         console.error('Количество элементов не совпадает, нельзя установить ширину');
      }
   }

   setWidth();





   new WOW().init();

});
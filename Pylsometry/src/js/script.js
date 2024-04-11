document.addEventListener('DOMContentLoaded', function () {
   document.cookie = "name=value; SameSite=None; Secure; path=/";

   $('.carousel__inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_rigth.png" alt="arrow"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               dots: true,
            },

         },
      ]
   });

   const btnMoreInfo = document.querySelectorAll('.item__link');
   const btnGetBack = document.querySelectorAll('.link-back');
   const catalogContent = document.querySelectorAll('.catalog-item__content');
   const catalogInfo = document.querySelectorAll('.catalog-item__info');

   function showInfoHideInfo() {

      for (let i = 0; i < btnMoreInfo.length; i++) {

         btnMoreInfo[i].addEventListener('click', (e) => {// Показ дополнительной инфы в карточке
            e.preventDefault();
            for (let k = 0; k < btnMoreInfo.length; k++) {
               catalogInfo[k].classList.remove('catalog-item__info-active');
               catalogContent[k].classList.add('catalog-item__content-active');
            }

            if (catalogContent[i].contains(e.target)) {
               catalogContent[i].classList.remove('catalog-item__content-active');
               catalogInfo[i].classList.add('catalog-item__info-active');
            }
         });

         btnGetBack[i].addEventListener('click', (e) => {// Скрытие доп. информции
            e.preventDefault();
            for (let k = 0; k < btnMoreInfo.length; k++) {
               catalogInfo[k].classList.remove('catalog-item__info-active');
               catalogContent[k].classList.add('catalog-item__content-active');
            }
            if (catalogInfo[i].contains(e.target)) {
               catalogContent[i].classList.add('catalog-item__content-active');
               catalogInfo[i].classList.remove('catalog-item__info-active');
            }
         });
      }
   }

   showInfoHideInfo()

   const allBtnOfCategory = document.querySelectorAll('.catalog__btn, .dropdown-item');
   const allCatalogItems = document.querySelectorAll('.catalog__item');

   function sortCategory() {
      for (let g = 0; g < allBtnOfCategory.length; g++) {

         allBtnOfCategory[g].addEventListener('click', (e) => {
            console.log(e.target)
            for (let g = 0; g < allBtnOfCategory.length; g++) {//Меняем класс активности у кнопок категорий
               allBtnOfCategory[g].classList.remove('active-btn');

               if (allBtnOfCategory[g].contains(e.target)) {
                  allBtnOfCategory[g].classList.add('active-btn');
               }
            }

            if (e.target.parentNode.classList.contains('run__btn') || e.target.classList.contains('run__btn')) {// Сортировка карточек по категории run
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'none';
                  if (allCatalogItems[i].getAttribute('data-category') === 'run') {
                     allCatalogItems[i].style.display = 'block';
                  }
               }

            } else if (e.target.parentNode.classList.contains('fitnes__btn') || e.target.classList.contains('fitnes__btn')) {// Сортировка карточек по категории fitnes
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'none';
                  if (allCatalogItems[i].getAttribute('data-category') === 'fitnes') {
                     allCatalogItems[i].style.display = 'block';
                  }
               }

            } else if (e.target.parentNode.classList.contains('triatlon__btn') || e.target.classList.contains('triatlon__btn')) {// Сортировка карточек по категории triatlon
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'none';
                  if (allCatalogItems[i].getAttribute('data-category') === 'triatlon') {
                     allCatalogItems[i].style.display = 'block';
                  }
               }
            } else if (e.target.parentNode.classList.contains('all__btn') || e.target.classList.contains('all__btn')) {// Показ карточек всех категорий
               for (let i = 0; i < allCatalogItems.length; i++) {
                  allCatalogItems[i].style.display = 'block';
               }
            }
         });
      };
   }

   sortCategory();

   const btnShowFullReview = document.querySelectorAll('.toggle__btn');

   function showFullReview() { //Развертывание и скрытие полного текста в отзыве
      btnShowFullReview.forEach(function (button) {
         button.addEventListener('click', function () {
            const textContainer = this.previousElementSibling;

            textContainer.classList.toggle('show');
            this.textContent = textContainer.classList.contains('show') ? 'Свернуть' : 'Развернуть';
         })
      })
   }

   showFullReview();

   //Modal

   const btnConsultation = document.querySelectorAll("[data-button='consultation']");
   const btnMakeOrder = document.querySelectorAll('[data-button="makeOrder"]');
   const modalClose = document.querySelectorAll('.modal__close');
   const btnUp = document.querySelector('.pageup');
   let scroll = calcScroll();

   function calcScroll() {
      let div = document.createElement('div');

      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);

      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;

   }

   btnConsultation.forEach((btn) => {
      btn.addEventListener('click', () => {
         document.querySelector('.overlay').style.display = 'block';
         document.querySelector('#consultation').style.display = 'flex';
         document.body.style.overflow = 'hidden';
         document.body.style.marginRight = `${scroll}px`
         btnUp.style.display = 'none';
      })
   });

   modalClose.forEach(function (btnCls) {
      btnCls.addEventListener('click', function () {
         document.querySelector('.overlay').style.display = 'none';
         this.parentNode.style.display = 'none';
         document.body.style.overflow = '';
         document.body.style.marginRight = `0px`
         btnUp.style.display = 'block';
         cleanInput()
      })
   });

   btnMakeOrder.forEach(function (btn) {
      btn.addEventListener('click', function () {
         const subHeader = this.parentNode.parentNode.querySelector('.subheader__item').textContent;
         document.querySelector('#order>.modal__descr').textContent = subHeader;
         document.querySelector('.overlay').style.display = 'block';
         document.querySelector('#order').style.display = 'flex';
         document.body.style.overflow = 'hidden';
         document.body.style.marginRight = `${scroll}px`
         btnUp.style.display = 'none';
      })
   });

   document.querySelector('.overlay').addEventListener('click', function (e) {
      if (e.target.classList.contains('overlay')) {
         this.style.display = 'none';
         document.querySelectorAll('.modal__overlay').forEach((modal) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`
            btnUp.style.display = 'block';
            cleanInput()
         });
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
         document.querySelector('.overlay').style.display = 'none';
         document.querySelectorAll('.modal__overlay').forEach((modal) => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`
            btnUp.style.display = 'block';
            cleanInput()
         });
      }
   });

   //Validate modal

   function validateForm(selector) {
      $(selector).validate({
         rules: {
            name: {
               required: true,
               minlength: 2
            },
            phone: "required",
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            name: {
               required: "Укажите своё имя",
               minlength: jQuery.validator.format("At least {0} characters required!")
            },
            phone: "Укажите ваш номер",
            email: {
               required: "Обязательно укажите вашу почту",
               email: "Почта должа быть в таком формате name@domain.com"
            }
         }
      });
   }

   validateForm('#consultation-form')
   validateForm('#consultation form')
   validateForm('#order form')

   function cleanInput() {
      document.querySelectorAll('form input').forEach((input) => {
         input.value = '';
      });
   }
   // Check code country
   const allInputs = document.getElementsByName('phone')

   allInputs.forEach((input) => {
      window.intlTelInput(input, {
         utilsScript: "js/utils.js",
         initialCountry: "auto",
         geoIpLookup: function (success, failure) {
            fetch("https://ipapi.co/json")
               .then(function (res) { return res.json(); })
               .then(function (data) { success(data.country_code); })
               .catch(function () { failure(); });
         },
         ContainerClass: 'hello'

      });
   })


   // Send data on server

   $('form').submit(function (e) {
      e.preventDefault();

      if (!$(this).valid()) {
         return;
      }

      $.ajax({
         type: 'POST',
         url: 'mailer/smart.php',
         data: $(this).serialize()
      }).done(function () {
         $(this).find('input').val('');
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn('slow');
         $('form').trigger('reset');
         setTimeout(() => {
            $('.overlay, #thanks').fadeOut();
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`
            btnUp.style.display = 'block';
         }, 4000);
      });
      return false


   });

   //Smooth scroll

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1200) {
         $('.pageup').fadeIn()
      } else {
         $('.pageup').fadeOut()
      }
   })

   //Первый вариант функции для прокрутки 

   $(document).ready(function () {

      $(".pageup").on('click', function (event) {

         if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;
            $('html, body').animate({
               scrollTop: $(hash).offset().top
            }, 800, function () {

               window.location.hash = hash;
            });
         }
      });
   });

   //Второй вариант функции для прокрутки 

   // $("a[href^='#']").click(function () {
   //    const _href = $(this).attr("href");
   //    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 600);
   //    return false;
   // });

   //Третий вариант функции для прокрутки 

   // let links = document.querySelectorAll('[href^="#"]'),
   //    speed = 0.6;

   // links.forEach(link => {
   //    link.addEventListener('click', function (event) {
   //       event.preventDefault();

   //       let widthTop = document.documentElement.scrollTop,
   //          hash = this.hash,
   //          toBlock = document.querySelector(hash).getBoundingClientRect().top,
   //          start = null;

   //       requestAnimationFrame(step);

   //       function step(time) {
   //          if (start === null) {
   //             start = time;
   //          }

   //          let progress = time - start,
   //             r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

   //          document.documentElement.scrollTo(0, r);

   //          if (r != widthTop + toBlock) {
   //             requestAnimationFrame(step);
   //          } else {
   //             location.hash = hash;
   //          }
   //       }
   //    });
   // });

});

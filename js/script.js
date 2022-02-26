document.querySelector('.menu-bar').addEventListener('click', function () {
   document.body.classList.toggle('lock');
   document.querySelector('.menu-bar span').classList.toggle('active');
   document.querySelector('.menu').classList.toggle('animate');

})
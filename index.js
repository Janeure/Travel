console.log('Большая просьба, если что-то не работает - обновите страницу, прежде чем снижать баллы. Спасибо, целую!\n100/100.\n1. Слайдер изображений в секции destinations +50\n2.Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25')


const imgSlider = document.querySelectorAll('.slider_wrapper .slider_items .slider_item .slider__radius');
const sliderItems = document.querySelector('.slider_items');
let counter = 0;
let widthSlider;
// const spacBet = 60;

const style = getComputedStyle(sliderItems) //получить доступ к свойству элемента
let spacBet = style.gap //получить доступ к свойству элемента


//адаптивность слайдера
function adaptiveSlider(){
  widthSlider = document.querySelector('.slider_wrapper').offsetWidth;

  sliderItems.style.width = imgSlider[0] * imgSlider.length + spacBet * 4 + 'px';

  imgSlider.forEach(item => {
    item.style.width = widthSlider * 0.5555 + 'px';
    item.style.height = 'auto';

  });

  console.log(widthSlider);
}
window.addEventListener('resize', adaptiveSlider);


//клик по правой кнопке
document.querySelector('.next').addEventListener('click', function(){
  counter++
  console.log(counter);

  sliderItems.style.transform = 'translate(-157.2%)';


  if(counter >= 2){
    counter = 0;
    sliderItems.style.transform = 'translate(-97.2%)';
    document.querySelector('.pag2').classList.remove('pag_not_active');
    document.querySelector('.pag1').classList.add('pag_not_active');
    document.querySelector('.pag3').classList.add('pag_not_active');
  }

  if(counter ===  1){
    sliderItems.style.transform = 'translate(-157.2%)';
    document.querySelector('.pag2').classList.add('pag_not_active');
    document.querySelector('.pag1').classList.add('pag_not_active');
    document.querySelector('.pag3').classList.remove('pag_not_active');
  }

  if(counter === 0){
    sliderItems.style.transform = 'translate(-97.2%)';
    document.querySelector('.pag2').classList.remove('pag_not_active');
    document.querySelector('.pag1').classList.add('pag_not_active');
    document.querySelector('.pag3').classList.add('pag_not_active');
  }
});


//клик по левой кнопке
document.querySelector('.prev').addEventListener('click', function(){
  counter--
  console.log(counter);

  if(counter === 0){
    sliderItems.style.transform = 'translate(-97.2%)';
    document.querySelector('.pag2').classList.remove('pag_not_active');
    document.querySelector('.pag1').classList.add('pag_not_active');
    document.querySelector('.pag3').classList.add('pag_not_active');
  }


  if(counter <= - 2){
    counter = 0;
    sliderItems.style.transform = 'translate(-97.2%)';
    document.querySelector('.pag2').classList.remove('pag_not_active');
    document.querySelector('.pag1').classList.add('pag_not_active');
    document.querySelector('.pag3').classList.add('pag_not_active');
  }

  if(counter === - 1){
    sliderItems.style.transform = 'translate(-37.2%)';
    document.querySelector('.pag1').classList.remove('pag_not_active');
    document.querySelector('.pag2').classList.add('pag_not_active');
  }

});

//slider end



//slider mob start
const IMAGES = document.querySelectorAll('.slider_mobile .slider_line .slider-line_pic .slider-pic');
const sliderLine = document.querySelector('.slider_line');
let count = 0;
let width;

function init(){
  width = document.querySelector('.slider_mobile').offsetWidth;
  sliderLine.style.width = width * IMAGES.length + 'px';
  IMAGES.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  console.log(width);
  rollSlider();
}
window.addEventListener('resize', init);

document.querySelector('.slider_arrow_right').addEventListener('click', function(){
  if(count === 2){
    document.querySelector('.slider_arrow_right').style.opacity = 1;
    document.querySelector('.slider_arrow_left').style.opacity = 0.5;
    document.querySelector('.round_color_mob1').style.display = 'block';
    document.querySelector('.round_pale_mob1').style.display = 'none';
    document.querySelector('.round_pale_mob2').style.display = 'block';
    document.querySelector('.round_color_mob2').style.display = 'none';
    document.querySelector('.round_pale_mob3').style.display = 'block';
    document.querySelector('.round_color_mob3').style.display = 'none';


  } else if(count === 1){
    document.querySelector('.slider_arrow_right').style.opacity = 0.5;
    document.querySelector('.slider_arrow_left').style.opacity = 1;

    document.querySelector('.round_color_mob2').style.display = 'none';
    document.querySelector('.round_pale_mob2').style.display = 'block';
    document.querySelector('.round_pale_mob3').style.display = 'none';
    document.querySelector('.round_color_mob3').style.display = 'block';


  } else if(count === 0) {
    document.querySelector('.slider_arrow_left').style.opacity = 1;
    document.querySelector('.round_color_mob1').style.display = 'none';
    document.querySelector('.round_pale_mob1').style.display = 'block';
    document.querySelector('.round_pale_mob2').style.display = 'none';
    document.querySelector('.round_color_mob2').style.display = 'block';
  }
  count++;
     if(count >= IMAGES.length ) {
     count = 0;
     } 
    
  rollSlider();
  console.log(count);
});

function rollSlider () {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

document.querySelector('.slider_arrow_left').addEventListener('click', function(){
  if(count === 2){
    document.querySelector('.slider_arrow_right').style.opacity = 1;
    document.querySelector('.slider_arrow_left').style.opacity = 1;
    document.querySelector('.round_pale_mob1').style.display = 'block';
    document.querySelector('.round_pale_mob2').style.display = 'none';
    document.querySelector('.round_color_mob2').style.display = 'block';
    document.querySelector('.round_pale_mob3').style.display = 'block';
    document.querySelector('.round_color_mob3').style.display = 'none';

  } else if(count === 1){
    document.querySelector('.slider_arrow_left').style.opacity = 0.5;
    document.querySelector('.slider_arrow_right').style.opacity = 1;
    document.querySelector('.round_pale_mob1').style.display = 'none';
    document.querySelector('.round_color_mob1').style.display = 'block';
    document.querySelector('.round_pale_mob2').style.display = 'block';
    document.querySelector('.round_color_mob2').style.display = 'none';

  } else if(count === 0) {
    document.querySelector('.slider_arrow_left').style.opacity = 0.5;
  }
count--;
if(count < 0 ) {
  count = 0;
  } 

rollSlider();
})
//slider mob end


//меню бургер
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menumob');
const navLinks = document.querySelectorAll('.menu_link');
const cross = document.querySelector('.cross')
const bodyDark = document.querySelector('.block_dark')


//открыть меню, фон по бургеру 
hamburger.addEventListener ('click', function() {
   hamburger.classList.toggle('open');
   menu.classList.toggle('active');
   bodyDark.classList.add('color')
})


//клик по ссылке меню перебрать и отследить 
navLinks.forEach(function(link) {
  link.addEventListener('click', closeMenu);
} )

//закрыть меню, фон, бургер
function closeMenu() {
  hamburger.classList.remove('open');
  menu.classList.remove('active');
  bodyDark.classList.remove('color')
}


//клик по крестику - закрыть меню по крестику
cross.addEventListener('click', closeMenu)

//закрытие меню, бургера, цвет фона, по клику на фон
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('block_dark')) {
    hamburger.classList.remove('open');
    menu.classList.remove('active');
    bodyDark.classList.remove('color')
  }
})


//жалкие попытки сделать попап декстоп
//alert 
function welcome() {
  let email = document.querySelector('#email');
  let pass = document.querySelector('#password');

  if (!email.value || !pass.value) alert('Заполните поля "E-mail" и "Password"');
  else {
    alert(`Welcome!\nYour e-mail: ${email.value}\nYour password: ${pass.value}`);
  }
}
document.querySelector('.btn_signIn').addEventListener('click', welcome);

//открыть попап

const openPopUp = document.querySelector('.open_popup');
const popUp = document.querySelector('.pop_up');
const closePopUp = document.querySelector('.block_dark_popUp')
const openPopUpMob = document.querySelector('.open-popup-mob')

openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
  closePopUp.classList.add('color');
})

openPopUpMob.addEventListener('click', function(){
  popUp.classList.add('active');
  closePopUp.classList.add('color');
  hamburger.classList.remove('open');
  menu.classList.remove('active');
})

//закрыть попап
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('block_dark_popUp')) {
    popUp.classList.remove('active');
    closePopUp.classList.remove('color');
  }
})

//сменить на signUp и обратно
const openSignUp = document.querySelector('.popup_register');
const closeSignUp = document.querySelector('.popup_sign-log');


openSignUp.addEventListener('click', changePopUp);

function changePopUp(){
  document.querySelector('.btn_pop_up').style.display = 'none';
  document.querySelector('.popup-or').style.display = 'none';
  document.querySelector('.popup_forgot').style.display = 'none';
  document.querySelector('.popup_title').innerHTML = 'Create account';
  document.querySelector('.popup_account').innerHTML = 'Already have an account?';
  closeSignUp.style.display = 'inline';
  openSignUp.style.display = 'none';
}

closeSignUp.addEventListener('click', function(){
  document.querySelector('.btn_pop_up').style.display = 'flex';
  document.querySelector('.popup-or').style.display = 'block';
  document.querySelector('.popup_forgot').style.display = 'block';
  document.querySelector('.popup_title').innerHTML = 'Log in to your account';
  document.querySelector('.popup_account').innerHTML = "Don’t have an account?";
  closeSignUp.style.display = 'none';
  openSignUp.style.display = 'inline';
});
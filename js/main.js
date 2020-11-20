var swiperMain = new Swiper('.main-container', {
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
    pagination: {
      el: '.orange-pagination',
      clickable: true,
    },
    // mousewheel: true,
});

var productSlider = new Swiper('.product-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  navigation: {
    nextEl: '.product-arrow-next',
    prevEl: '.product-arrow-prev',
  },
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.arrow-next_prod',
    prevEl: '.arrow-prev_prod',
  },
});
var galleryTop = new Swiper('.gallery-top', {

  thumbs: {
    swiper: galleryThumbs
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      thumbs: {
        swiper: galleryThumbs
      },
    }
  }
});


$('.add-to-cart').on('click', function() {
  var width = $(this).width();
  $(this).toggleClass('addedToCart');
    var main = $(this);
    if($(main).hasClass('addedToCart')){
      $(main).find('.cart-img').css({'transform': 'rotateZ('+(-30)+'deg)'})
    }
    $(this).find('.add-to-cart_text').fadeOut(function(){
      $(main).css({'width': 62 + "px"})
      .find($(main).hasClass('addedToCart') ? '.cart-img' : '.added');
      $(main).find($(main).hasClass('addedToCart') ? '.cart-img' : '.added').delay(300).animate({'left': 70+'px'}).fadeOut(function(){
        $(this).css({'left': 20+'px'});
        $(main).find($(main).hasClass('addedToCart') ? '.added' : '.cart-img').fadeIn(function(){
          setTimeout(function(){
            $(main).find('.add-to-cart_text').text($(main).hasClass('addedToCart') ? 'დამატებულია' : 'დამატება').fadeIn();          
            $(main).css({'width': width+ "px"});
            $(main).find($(main).hasClass('addedToCart') ? '.added' : '.cart-img').css({'left': 20+'px'});
            if($(main).hasClass('addedToCart')){
              $(main).find('.cart-img').css({'transform': 'rotateZ('+(0)+'deg)'});
            }
          })
        });
      })
    });
});

$('.burger-menu').on('click', function() {
  $(this).toggleClass('makeCross');
})


$('.breadcrumbs__item:not(:last-child)').after('<img src="images/breadcrumb-arrow.svg" />');

$(document).on("click",".plus",function() {
  var count = $(this).parent().find("input").val();
if (count < 0) {
  count = 0;
}
 else {
  count++;
}
$(this).parent().find("input").val(count);
});

$(document).on("click",".minus",function() {
var count = $(this).parent().find("input").val();
if (count <= 0) {
  count = 0;
} else {
  count--;
}
$(this).parent().find("input").val(count);
});


$('.pers-info').on('click', function() {
  $('.order_history-content').removeClass("active");
  $('.personal-info').removeClass("active");
  $('.change-password').removeClass("active");
  $(this).addClass("active");
  $('.order-history').removeClass("active");
  $('.log-out').removeClass("active");
});

$('.order-history').on('click', function() {
  $('.order_history-content').addClass("active");
  $('.personal-info').addClass("active");
  $('.change-password').addClass("active");
  $('.pers-info').removeClass("active");
  $('.log-out').removeClass("active");
  $(this).addClass("active");
});

$('.log-out').on('click', function() {
  $('.order-history').removeClass("active");
  $('.pers-info').removeClass("active");
  $(this).addClass("active");
});

$('.order-up').on('click', function() {
  $(this).next().slideToggle();
  $(this).toggleClass("active");
  $(this).parent().toggleClass("active");
});



$('.agree-rules').on('click', function() {
  $('.orange-checkbox').toggleClass('checked');
})

if($('.cartButton').width() < 220){ 
  $('.cartText').text('დამატება');
}else{
  $('.cartText').text('კალათაში დამატება');
}


const loginPage = document.querySelector('.login-container');
const userBtn = document.querySelector('.user');
const closeform = document.querySelector('.login_close');
const userLogin = document.querySelector('.login');
const loginBackground = document.querySelector('.login_background');

let showLogin = false; 

// userBtn.addEventListener('click', openLogin);

function openLogin() {
    if(!showLogin) {
      loginPage.classList.add('open');
      userLogin.classList.add('open');  
      loginBackground.classList.add('open');
      showLogin = true;
    }
}

// closeform.addEventListener('click', closeLogin);

function closeLogin() {
  // if(showLogin) {
    loginPage.classList.remove('open');
    userLogin.classList.remove('open');  
    loginBackground.classList.remove('open');
    regForm.classList.remove('open');
    passworContainer.classList.remove('open');
    showLogin = false;
  // }
}


const regButton = document.querySelector('.open-registration');
const regForm = document.querySelector('.registration-container');

regButton.addEventListener('click', openRegistration);

function openRegistration() {
  regForm.classList.add('open');
}


const passwordButton = document.querySelector('.pass-recovery-btn');
const passworContainer = document.querySelector('.pass-recovery-container');

passwordButton.addEventListener('click', openPassRecovery);

function openPassRecovery(e) {
  e.preventDefault();
  passworContainer.classList.add('open');
}



const backToAuthorize = document.querySelector('.login_back');
const backToImg = document.querySelector('.login_back_img');

backToAuthorize.addEventListener('click', closeRegistration);

function closeRegistration() {
  regForm.classList.remove('open');
  // backToImg.style.transform = 'rotate('+180+'deg)';
}

function closePassRecovery() {
  passworContainer.classList.remove('open');
}


function focusedLabel(elem) {
  $(elem).parent().addClass('focused');
}

function blurredLabel(elem) {
  if ($(elem).val() === "") {
    $(elem).parent().removeClass('focused');
  }
}


function delivery() {
  $('.delivery').addClass('active');
  $('.cart').removeClass('active');
  $('.cart_product').addClass('clear');
  $('.delivery-cart-bottom').addClass('active');
  $('.delivery-wrapper').addClass('active');
  $('.cart-bottom').addClass('clear');
}

function cart() {
  $('.cart').addClass('active');
  $('.delivery').removeClass('active');
  $('.cart_product').removeClass('clear');
  $('.delivery-cart-bottom').removeClass('active');
  $('.delivery-wrapper').removeClass('active');
  $('.cart-bottom').removeClass('clear');
}

function deleteProduct() {
  $('.cart_product__each').addClass('clear');
}


// function showMenu() {
//   $('.menu_background').toggleClass('open');
//   $('.menu-container').toggleClass('open');
//   $('.menu-inside').toggleClass('open');
// }

function showSubCategories(e) {
  e.preventDefault();
  $('.category-container').addClass('open');
}

function showMenu() {
  $('.menu-background').toggleClass('open');
  $('body').toggleClass('noScroll');
}

$('.cart_product__each').on('click', '.recycle-bin', function() {
  $(this).closest( ".cart_product__each" ).css("display", 'none');
})
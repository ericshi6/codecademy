$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').css('color', '#C3FF00');
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css('color', '#EFEFEF');
  })


  $('.login-button').on('mouseenter', () => {
    $('.login-button').css('color', '#C3FF00');
  })
  
  $('.login-button').on('mouseleave', () => {
    $('.login-button').css('color', '#EFEFEF');
  })

  // $('.login-form').on('mouseleave', () => {
  //   $('.login-form').hide();
  // })
  
  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
/////////////////////////////
  $('.more-details-button').on('click', event => {
    $(event.currentTarget).closest('.product-details').next().toggle()

    $(event.currentTarget).find('img').toggleClass('rotate')
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    
    $(event.currentTarget).siblings().removeClass('active')
    
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
    
    
  });
  
});
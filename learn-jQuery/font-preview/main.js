$(document).ready(() => {
  $('#text').on('keyup', event =>{
    $('.preview').html($(event.currentTarget).val());
  })

  $('#font').on('change', event => {
    $('.preview').css({
      fontFamily: $(event.currentTarget).val()
      })
    })

  $('#weight').on('change', event => {
    $('.preview').css({
      fontWeight: $(event.currentTarget).val()
    })
  })

  $('#size').on('keyup', event => {
    //a number isn't enough and you need to add px
    var fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css({
      fontSize: fontSize
    })
  })


})
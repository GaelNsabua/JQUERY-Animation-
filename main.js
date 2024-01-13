/* This part helps to run function as soon as the page is loaded */
$(document).ready(function(){
let t=0
$('.main button').on('click', ()=> {
  t=(t+1) 
  t>3 ? Next() : Start(t)
})
})

/* This part helps to show a new message when the user click on the button and to change button background color */
function Start(t){
  let h=$(`.main h2:eq(${t})`)
  let pColor=h.css('background-color')
  $('.main button').css('background-color',pColor)
  h.slideToggle(50)
}

/* This part helps to switch the page when we all the messages have been shown */
function Next(){
  $('body').css('background-image', 'url("/Images /Img2.jpg")')
  $('.main button').css('display', 'none')
  $('.main h2:eq(0)').text('You are a great person🥰')
  $('.main h2:eq(1)').text('I really love you💝')
  $('.main h2:eq(2)').text('Enjoy your day🥳')
  $('.main h2:eq(3)').text('Best friends forever🤗')
  /* This part helps to create a fade animation on elements */
  $('body').fadeOut(1000, function(){
    $(this).css('background-image', 'url("/Img1.jpg")')
  }).fadeIn(1000)
  /* This part helps to play the music */
  let music=$('audio')[0]
  music.play()
  Close()
}

/* This part helps to show the restart button after a moment and to reload the page when the user click on the button */
function Close(){
  setTimeout(function(){
    $('.main').append('<button>Restart</button>')
    $('.main h2').css('display','none')
    $('button').on('click', ()=>{
      location.reload()
    } )
  }, 8000)
}

//Hide the spoiler text
$('.spoiler span').hide();
//When the button is pressed
$('.spoiler button').click(function(){
  //Show the spoiler text
  $('.spoiler span').show();
  //hid the reveal spoiler button
  $('.spoiler button').hide();
})

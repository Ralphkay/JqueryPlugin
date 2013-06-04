//this will work after you have input your jquery lib file.

//using classes allows you to implement it several times in your code.



//style the cursor of the readMoreLink with jquery or css

;(function(){$('.readMoreLink).css({'cursor':'pointer'});

$('span.extraStory').hide();

$('span.readMoreLink').click(function(){
    $(this).next('span').show(0,function(){
    $(this).prev('span.readMoreLink').hide(0);//callback function to remove the readMoreLink class

});
});}()jquery)

//all is done and working just like facebook read more link. the number 0 makes everything seamlessly smooth. You even add effects to it. check jquery effects api documentation.

const menuToggle = document.querySelector( '.menu-toggle input');
const nav = document.querySelector( 'nav ul');

menuToggle.addEventListener('click',function() {
    nav.classList.toggle('slide')
});


// parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    console.log(wScroll)
});
window.onload = function(){
	function toggleOnMenuBtnClick () {
		document.querySelector('.span1').classList.toggle('span1_active')
		document.querySelector('.span2').classList.toggle('span2_active')
		document.querySelector('.span3').classList.toggle('span3_active')
		document.querySelector('.nav_xs').classList.toggle('show_nav_xs')
		if (document.querySelector('.nav_xs'). classList.contains('show_nav_xs')) {
			document.querySelector('.main_wrapper').style.overflow = 'hidden'
			document.querySelector('body').style.overflow = 'hidden'
		} else {
			document.querySelector('.main_wrapper').style.overflow = 'visible'
			document.querySelector('.main_wrapper').style.overflowX = 'hidden'
			document.querySelector('body').style.overflow = 'visible'
		}
	}
	document.querySelector('.nav_btn').addEventListener('click', toggleOnMenuBtnClick)
	let navXsLink = document.querySelectorAll('.nav_xs_link')
	for (let i=0; i<navXsLink.length; i++) {
		navXsLink[i].addEventListener('click', toggleOnMenuBtnClick)
	}
		//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	//плавний скролінг
  	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 200);
    return false;
	});

	//show/hide btn to top
	window.addEventListener('scroll', function() {
		let toTopBtn = document.querySelector('.to_top_btn')
		if (pageYOffset >= 50) {
			toTopBtn.classList.add('display_inline')
		} else {
			toTopBtn.classList.remove('display_inline')
		}
	})
}

	


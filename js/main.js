$(document).ready(function(){

	// UTM metki parser

  // Parse the URL
  function getParameterByName(name) {
      var url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  // Give the URL parameters variable names
  var source = getParameterByName('utm_source');
  var medium = getParameterByName('utm_medium');
  var campaign = getParameterByName('utm_campaign');
   
  $("#utm_source").val(source);
  $("#utm_medium").val(medium);
  $("#utm_campaign").val(campaign);

  // end UTM Metki Parser

	var leftMove = '145px';
	if (screen.width <= 450 )
	{
		leftMove = '113px';
		$('.toogleBtn').addClass('toogleBtn320');
		$('.blocks').addClass('blocks320');
		$('.switcher').addClass('switcher320');
	}

	document.querySelectorAll('.buttoncikLink[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});

	$(window).scroll(function() {

		$('.revealOnScroll').one('inview', function (event, visible) {
		    if (visible == true) 
		    {
		      $(this).addClass("animated slideInLeft");
		    }
		    if (visible == false) 
		    {
		      $(this).removeClass("slideInLeft");
		    }
		});

		$('.scr5Head1').one('inview', function (event, visible) {
		    if (visible == true) 
		    {
		      $(this).addClass("animated slideInLeft");
		    }
		});

		$('.scr5Head2').one('inview', function (event, visible) {
		    if (visible == true) 
		    {
		      $(this).addClass("animated slideInRight");
		    }
		});

	});


	$('.onlineBL').click(function()
	{

		if($(".switcher").css("left") != leftMove)
		{
			$('.liveBL').css('color', '#fff');
			$('.switcher').css('left', leftMove);
			$('.onlineBL').css('color', 'rgb(167,62,118)');

			$('.main_email_form1').attr('action', "mail1.php");
		}
	});


	$('.liveBL').click(function()
	{
		if($(".switcher").css("left") != "0px")
		{
			$('.onlineBL').css('color', '#fff');
			$('.switcher').css('left', '0px');
			$('.liveBL').css('color', 'rgb(167,62,118)');

			$('.main_email_form1').attr('action', "mail2.php");
		}
	});


});
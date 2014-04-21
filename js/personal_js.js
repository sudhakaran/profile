$(document).ready(function(e) {
    
	ww = document.body.clientWidth;
	
	/*****************Mobile Menu****************/
	
	$("#mobile_menu").click(function(){
	
	$(".header_main").toggleClass("active");
	 $(".header_main").slideToggle("slow");
  
  //console.log($(this));
         $(this).html(function(i,html) {
            if (html.indexOf('Show') != -1 ){
               html = html.replace('Show','Hide');
			   
            } else {
               html = html.replace('Hide','Show');
			 }
            return html;
        });
		Menu();
});

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	Menu();
});
	
/**************Focus scripts for contact form********************/
	$("#contact_form input, #contact_form textarea").focus(function()
	{
		$(this).parent().addClass("focus");
	});
	$("#contact_form input, #contact_form textarea").blur(function()
	{
		$(this).parent().removeClass("focus");
	});// focus scripts ends
	
	/********************Scoll the section*********************/
	$("#menu ul li a").click(function()
	{
		$("#resume").css("display", "none");
		var id=$(this).attr("href");
		$("html, body").animate({
			scrollTop: $(id).offset().top},1000);
				
			$("header.active").hide("slow");
			
			return false;
	}); // end of scroll section
	
	/**************Form submit validation**********************/
$("#contact_form").submit(function(e)
{
	url=$(this).attr("action");
	var name=$("#name").val();
	var email=$("#email").val();
	if(($.trim(name))=="" && ($.trim(email))=="")
	{
		$("#error_mail").show("slow");
		$("#error_name").show("slow");
		//alert("sorry");
	}
	else
	{
		$.ajax({
			type: "POST",
			url: url,
			data : $(this).serialize(),
			success: function( response){
				console.log(response);
			}
		});
		//$(this).submit();
		$("#contact_form")[0].reset();
	}
	return false;
});

/********************Form submit validation end*****************************/

$(window).scroll(function(){
if ($(this).scrollTop() > 300) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});

$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});

$("a").click(function()
	{
		var id=$(this).attr("href");
		//alert(id);
		$("html, body").animate({
			scrollTop: $(id).offset().top},1000);
				
			$("header.active").hide("slow");
			
			return false;
	}); // end of scroll section
		
$("a[href='#resume']").click(function()
{
	var rid=$(this).attr("href");
	$(rid).css("display","block");
	$("html, body").animate({
		scrollTop: $(rid).offset().top},1000);
			
	return false;
});
		
		
		
}); // end of document ready function




/****************Name validation function*****************************/
function namevalidate()
{
	var name=$("#name").val();
	if(name=="")
	{
		$("#error_name").show("slow");
	}
	else
	{
		$("#error_name").hide("slow");
	}
}//name validation ends

/*******************************Email validation function*******************************/
function emailvalidate()
{
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var v=$("#email").val();
		if( !emailPattern.test(v))
			$("#error_mail").show("slow");
	else
		$("#error_mail").hide("slow");
}
// email validation ends.

function Menu()
{
	if(ww > 768)
	{
	$("header").removeClass("active");
	}
	else
	{
		$("header").addClass("active");
	}
}



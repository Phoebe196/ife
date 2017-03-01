$(function(){
	$("#countries").on('click',function(){
		if ($('#country').is(':hidden')) {
			$('.options').hide();
			$('#country').show();
		}
		else{
			$('#country').hide();
		}
		$('.select').removeClass('selected');
		$(this).addClass('selected');
	});
	$("#provinces").on('click',function(){
		if ($('#province').is(':hidden')) {
			$('.options').hide();
			$('#province').show();
		}
		else{
			$('#province').hide();
		}
		$('.select').removeClass('selected');
		$(this).addClass('selected');
	});
	$("#cities").on('click',function(){
		if ($('#city').is(':hidden')) {
			$('.options').hide();
			$('#city').show();
		}
		else{
			$('#city').hide();
		}
		$('.select').removeClass('selected');
		$(this).addClass('selected');
	});
	$('.options span').on('click',function(){
		var text=$(this).text();
		var $select =$(this).parent().siblings();
		var value=$(this).attr('value');
		$select.text(text);
		$select.parent().attr('name',value);
	});
	$('#f_list').on('click',function() {
		$('#expdiv').animate({marginLeft:'0%'});
		
	});
	$('#s_list').on('click',function() {
		$('#expdiv').animate({marginLeft:'-100%'});
		
	});
	$('#t_list').on('click',function() {
		$('#expdiv').animate({marginLeft:'-200%'});
		
	});
})
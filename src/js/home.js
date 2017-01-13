//js seccionExperiencias
var posicion = 0;
	var imagenes = new Array();
	$(document).ready(function() {
		//alert(jQuery('.texto').html());
		var numeroImg = 6;
		if(numeroImg<=4){
			$('.flechaDer').css('display','none');
			$('.flechaIzq').css('display','none');
		}

		$('.flechaIzq').on('click',function(){
			if(posicion>0){
				posicion = posicion-1;
			}else{
				posicion = numeroImg-4;
			}
			$(".carruselExperiencias").animate({"left": -($('#tarjeta'+posicion).position().left)}, 600);
			return false;
	});

	$('.flechaIzq').hover(function(){
		$(this).css('opacity','0.5');
		},function(){
		$(this).css('opacity','1');
	});

	$('.flechaDer').hover(function(){
		$(this).css('opacity','0.5');
		},function(){
		$(this).css('opacity','1');
	});

	$('.flechaDer').on('click',function(){
		if(numeroImg>posicion+4){
			posicion = posicion+1;
		}else{
			posicion = 0;
		}
		$(".carruselExperiencias").animate({"left": -($('#tarjeta'+posicion).position().left)}, 600);
		return false;
	});

});

/*date picker parte nadia */
/*if ( $('[type="date"]').prop('type') != 'date' ) {
} */

if ( $('html').hasClass('no-touch') ) {
	var $input, $btn;
	$( ".date-wrapper" ).each(function( index ) {
		$input = $(this).find('input');
		$btn = $(this).find('.calendar-btn');
		$input.attr('type', 'text');
		var pickerStart = new Pikaday({
			field: $input[0],
			trigger: $btn[0],
			container: $(this)[0],
			format: 'DD/MM/YYYY',
			firstDay: 1
		});
		$btn.show();
	});
} else {
	$('.date-wrapper input').attr('type', 'date');
	$('.calendar-btn').hide();
}

/*select city*/
$(document).ready(function(touch){
	$(".custom-select").each(function(touch){
		$(this).wrap("<span class='select-wrapper'></span>");
		$(this).after("<span class='holder'></span>");
	});
	$(".custom-select").change(function(touch){
		var selectedOption = $(this).find(":selected").text();
		$(this).next(".holder").text(selectedOption);
	}).trigger('change');
});

/*Link desde home a search*/
$(".btnbus").click(function(){
	var ciudad = $('.ciudad').val();
	localStorage.setItem("la-ciudad", ciudad);
    var llegada = $('#datepicker-start').val();
    localStorage.setItem("fecha-llegada", llegada);
    var salida = $('#datepicker-end').val();
    localStorage.setItem("fecha-salida", salida);
    var huesped = $('.personas').val();
    localStorage.setItem("num-huesped", huesped);
    window.location.href = "search.html";
});
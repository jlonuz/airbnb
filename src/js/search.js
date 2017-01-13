/*Localstorage que devuelve los datos de home*/
$(document).ready(function(){
	var fechauno=localStorage.getItem("fecha-llegada");
	$(".llegada-home").val(fechauno);
	var fechados=localStorage.getItem("fecha-salida");
	$(".salida-home").val(fechados);
	var huesped=localStorage.getItem("num-huesped");
	$(".huesped-home").val(huesped);
	$('#mostrar-filtros').hide();
});

$('#mostrar').click(function(){
	$('#mostrar-filtros').show();
});

$('#aplicar-filtros').click(function(){
	$('#mostrar-filtros').hide();
})
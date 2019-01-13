/*alert('hola mundo!')*/
/*console.log('hola mundo')*/
/*document.getElementById("titulo").innerHTML	="holaaa"*/

/*var titulo = document.getElementById('titulo').innerHTML*/

$('.carousel').carousel()





$(document).ready(function(){

$('h1').click(function(){
	alert('soy un mensaje')
})

$('#hide').click(function(){
	$("#hideMe").hide()
});

$('#show').click(function(){
	$("#hideMe").show()

	
});

$('#toggle').click(function(){
	$("#hideMe").toggle()

	
});


$("btn1").click(function(){
	alert("Texto:"+$("#test").text());
});

$("btn2").click(function(){
	alert("HTML:"+$("#test").html());
});

$("button").click(function(){
	alert("value:"+$("#test").val());

});


$("#saludar").click(function(){
	var nombre=$('#nombre').val();
	var saludo= 'Hola,'+ nombre + '!';

	$('#saludo').find('p').html(saludo);
	console.log('Saludado!')
});

$("button").click(function(){
	$("h1").addClass("blue");
	$("#Heading").click(function(){

});


$("#ana").addClass("important");

});

});
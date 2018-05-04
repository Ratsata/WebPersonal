$(document).ready(function(){
	$('#frmContacto').submit(function(e){
		$("#btnEnviar").prop("disabled",true);
		$("#btnEnviar").text("Enviando...");
		$("#btnEnviar").toggleClass("btn-danger");

		var form = $('#frmContacto');
		var formData = form.serializeArray();
		e.preventDefault();
		$.ajax({
			type        : "POST",
			url			: "pages/controller.php?action=correo",
		    data		: formData,
			success 	: function(data)
			{
				setTimeout(function(){
    				$("#btnEnviar").prop("disabled",false);
    				$("#btnEnviar").text("Enviar");
    				$("#btnEnviar").toggleClass("btn-danger");
    				
    				if (data == "SUCCESS"){
						alertAjax("CORREO");
					}else{
						alertAjax("ERROR_MSJ","alertAjax","Inténtelo más tarde.");
					}
  				}, 2000);
		    },
		    error 		: function(data){ alert('Error al intentar procesar la informaci&oacute;n...'); }
	    });
	});
});

function alertAjax(value, divid, msj)
{
	divid = divid || "alertAjax";
	
	$("#" + divid).removeAttr('class');
	$("#" + divid).show();
	
	if($.trim(value)=="WARNING")
	{
		$("#" + divid).attr('class', 'alert alert-warning');
		$("#" + divid).html('<strong>Cuidado!</strong> Debe completar todos los campos');
	}
	else if($.trim(value)=="CORREO")
	{
		$("#" + divid).attr('class', 'alert alert-success');
		$("#" + divid).html('<strong>Envio Correcto!</strong> La informaci&oacute;n ha sido enviada exitosamente.');
	}
	else if($.trim(value)=="SUCCESS")
	{
		$("#" + divid).attr('class', 'alert alert-success');
		$("#" + divid).html('<strong>Ingreso correcto!</strong> La informaci&oacute;n ha sido ingresada exitosamente.');
	}
	else if($.trim(value)=="DELETE")
	{
		$("#" + divid).attr('class', 'alert alert-success');
		$("#" + divid).html('<strong>Eliminación correcta!</strong> Registro eliminado exitosamente.');
	}
	else if($.trim(value)=="LOGOUT")
	{
		$("#" + divid).attr('class', 'alert alert-danger');
		$("#" + divid).html('<strong>Error!</strong> El usuario ingresado no existe.');
	}
	else if($.trim(value)=="FILEERROR")
	{
		$("#" + divid).attr('class', 'alert alert-warning');
		$("#" + divid).html('<strong>Archivo incorrecto!</strong> El archivo no cumple con los requisitos para ser cargado.');
	}
	else if($.trim(value)=="ERROR_MSJ")
	{
		$("#" + divid).attr('class', 'alert alert-danger');
		$("#" + divid).html('<strong>Error!</strong> ' + msj);
	}
	else
	{
		$("#" + divid).attr('class', 'alert alert-danger');
		$("#" + divid).html('<strong>Error!</strong> Ha ocurrido un error al ingresar la informaci&oacute;n.');
	}
	$("#" + divid).fadeOut(10000);
}
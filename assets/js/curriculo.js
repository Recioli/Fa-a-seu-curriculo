var V_nome ="";
var V_endereco =""; 
var V_cidade = "";
var V_estado ="";
var V_cep ="";
var V_telefone =""; 
var V_celular ="";
var V_email ="";
var V_nacional ="";
var V_civil ="";
var V_objetivo ="";
var V_resumo_q =""; 
var V_escolaridade =""; 
var V_idiomas ="";
var V_complementar ="";
var V_informatica ="";
var mostra = false;
		
function mostraCurriculo(mostra){
	mostraCampos();
	if(mostra==true){
		
		$(".visualiza").hide();
		$(".base-visualiza").slideDown(800);
		   setTimeout(function() {
        $(".download").show();
    }, 800);
		
	}else{
		$(".base-visualiza").slideUp(800);
		$(".download").hide();
		$(".visualiza").show();
		}
	}

window.onload = function(){
	mostraCurriculo(false);
	$(".download").hide();	
}
		
function pegaCampos(){
		V_nome = $(".nome").val();
		V_endereco = $(".endereco").val();
		V_cidade = $(".cidade").val();
		V_estado = $(".estado").val();
		V_cep = $(".cep").val();
		V_telefone = $(".telefone").val();
		V_celular = $(".celular").val();
		V_email = $(".email").val();
		V_nacional = $(".nacionalidade").val();
		V_civil = $(".estadocivil").val();
		V_idade_m = $(".idade").val();
		V_objetivo = $(".objetivo").val();
		V_resumo_q = $(".resumo").val().trim()
										  .replace(/\n/g, "<br>")
		
		V_escolaridade = $(".escolaridade").val().trim()
											.replace(/\n/g, "<br>")
										
		V_idiomas = $(".idiomas").val();
		V_complementar = $(".complementar").val().trim()
										  .replace(/\n/g, "<br>")
										 
		
		V_informatica = $(".informatica").val().trim()
										 .replace(/\n/g, "<br>")										
}

function mostraCampos(){
	
		pegaCampos();
	
			var cidade_uf_cep = V_cidade.concat("-",V_estado,"-"," CEP: ",V_cep);
			var nacional_civil = V_nacional.concat("/ ",V_civil,"/ ",V_idade_m+" anos");
			var fone_cel = V_telefone.concat("/",V_celular);
			
				$("#campo-nome").html(V_nome);
				$("#campo-nacional-civil-idade").text(nacional_civil);
				$("#campo-endereco-cep").text("End: "+V_endereco);
				$("#campo-cidade-uf").text(cidade_uf_cep);
				$("#campo-fone").text("Tel: "+fone_cel);
				$("#campo-mail").text("E-mail: "+V_email);
				$("#campo-objetivo").text(V_objetivo);
				$("#campo-resumo").html(V_resumo_q);
				$("#campo-escolaridade").html(V_escolaridade);
				$("#campo-idiomas").text(V_idiomas)
				$("#campo-complementar").html(V_complementar);
				$("#campo-informatica").html(V_informatica);
}

function GeraPDF(){
	
			mostraCampos();
			
       html2canvas($("#curriculo_print"), {
            onrendered: function(canvas) {         
                var imgData = canvas.toDataURL('image/jpg');              
                var doc = new jsPDF('p', 'mm');
                doc.addImage(imgData, 'JPG',22, 25);
                doc.save('meu-curriculo.pdf');
            }
        });
}





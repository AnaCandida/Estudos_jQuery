let textForCopy = $(".textForCopy").text();
let wordNumber= textForCopy.split(/\S+/).length -1;
let hinnerWordNumber = $("#tamanho_frase");

hinnerWordNumber.text(wordNumber);


var  campo = $(".textInput");
campo.on("input", function(){
   var conteudo  = campo.val();
   var qtdPalavras = conteudo.split(/\S+/).length -1 ;
   var qtdCaracteres = conteudo.length;
   var contadorPalavras = $("#wordCounter").text(qtdPalavras)
    var contadorCaracteres =$("#caracterCounter").text(qtdCaracteres)


})

var tempoRestante =  $('#tempo_digitacao').text()

campo.one("focus", function(){
    
  var cronometroID =  setInterval(function(){
        tempoRestante--;
        $('#tempo_digitacao').text(tempoRestante)
       
       if (tempoRestante <1){
            campo.attr("disabled",true);
            clearInterval(cronometroID);
        }

        
     
    }, 1000);
})
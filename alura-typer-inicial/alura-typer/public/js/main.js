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
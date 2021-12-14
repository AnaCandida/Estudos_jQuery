var inicialTime =  $('#tempo_digitacao').text()
var typeField = $(".textInput");


$(document).ready(function(){
    initTextForCopySize();
    initCounters();
    initTimer();
    $('#restart').click(restart);    
})


function initTextForCopySize(){
    let textForCopy = $(".textForCopy").text();
    let wordNumber= textForCopy.split(/\S+/).length -1;
    let textForCopySize = $("#tamanho_frase");
    textForCopySize.text(wordNumber);
}


function initCounters(){
    typeField.on("input", function(){
       var conteudo  = typeField.val();
       var qtdPalavras = conteudo.split(/\S+/).length -1 ;
       var qtdCaracteres = conteudo.length;
       var contadorPalavras = $("#wordCounter").text(qtdPalavras)
        var contadorCaracteres =$("#caracterCounter").text(qtdCaracteres)
    
    
    })
    
}

function initTimer(){

var tempoRestante =  $('#tempo_digitacao').text()

typeField.one("focus", function(){
    
  var cronometroID =  setInterval(function(){
        tempoRestante--;
        $('#tempo_digitacao').text(tempoRestante)
       
       if (tempoRestante <1){
            typeField.attr("disabled",true);
            clearInterval(cronometroID);
        }

        
     
    }, 1000);
})

}

function restart(){
    
        typeField.attr("disabled", false);
        typeField.val("");
        $("#wordCounter").text("0");
        $("#caracterCounter").text("0");
        $('#tempo_digitacao').text(inicialTime);
        initTimer();
        initCounters();
    
    
}



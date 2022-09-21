var frase = $(".frase").text();
var numeroPalavras =  frase.split(/\S+/).length - 1;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

// captura o valor dos dados inseridos em quanto digita
var campo = $(".campo-digitacao");
campo.on("input",function(){
  var conteudo = campo.val();

  // substitui o valor de span da quantidade de palavras contando as pelavras
  var qtdPalavras = conteudo.split(/\S+/).length - 1;
  $("#contador-palavras").text(qtdPalavras);

  // conta os caracteres em quanto está digitanto
  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);

});

// "focus" garante que o campo de texto tenha sido selecionado
campo.on("focus", function(){
  console.log("Estou digitando!");
})

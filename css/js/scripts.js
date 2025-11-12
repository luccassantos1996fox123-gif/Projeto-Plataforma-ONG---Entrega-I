// scripts simples: ano automático + máscaras leves + validação
document.addEventListener('DOMContentLoaded', function(){
// ano no footer
var anoEls = document.querySelectorAll('#ano, #ano2');
anoEls.forEach(e => e.textContent = new Date().getFullYear());


// máscara simples CPF: 000.000.000-00
function maskCPF(v){
v = v.replace(/\D/g,'');
v = v.replace(/(\d{3})(\d)/,'$1.$2');
v = v.replace(/(\d{3})(\d)/,'$1.$2');
v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
return v;
}
// máscara telefone (00) 90000-0000
function maskTel(v){
v = v.replace(/\D/g,'');
v = v.replace(/^(\d{2})(\d)/,'($1) $2');
v = v.replace(/(\d{5})(\d)/,'$1-$2');
return v;
}
// máscara CEP 00000-000
function maskCEP(v){
v = v.replace(/\D/g,'');
v = v.replace(/(\d{5})(\d)/,'$1-$2');
return v;
}


var cpfEl = document.getElementById('cpf');
if(cpfEl) cpfEl.addEventListener('input', function(e){e.target.value = maskCPF(e.target.value)});
var telEl = document.getElementById('telefone');
if(telEl) telEl.addEventListener('input', function(e){e.target.value = maskTel(e.target.value)});
var cepEl = document.getElementById('cep');
if(cepEl) cepEl.addEventListener('input', function(e){e.target.value = maskCEP(e.target.value)});


// validação customizada ao submeter (apenas para comunicação - o professor pedirá validação nativa)
var form = document.getElementById('cadastroForm');
if(form){
form.addEventListener('submit', function(ev){
if(!form.checkValidity()){
ev.preventDefault();
form.reportValidity();
} else {
ev.preventDefault();
alert('Cadastro recebido (simulação). Verifique o console para dados.');
console.log('Dados do formulário:', new FormData(form));
}
});
}
});
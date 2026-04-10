// Essa parte aqui serve para fazer com que os campos apareçam ou desapareçam
const Morada = document.getElementById("Morada");
const DivPermissao = document.getElementById("DivPermissao"); 
const DivSeguranca = document.getElementById("DivSeguranca");
const QuintalSIm = document.getElementById("QuintalSIm");
const QuintalNao = document.getElementById("QuintalNao");
const Quintal = document.getElementById("Quintal");

function mostrarPermissao() {
    const valorMorada = Morada.value;

    if (valorMorada === "Ap") {
        DivPermissao.classList.remove("hidden");
        Quintal.classList.add("hidden");
        DivSeguranca.classList.add("hidden");
    } else if (valorMorada === "Casa") {
        DivPermissao.classList.add("hidden");
        Quintal.classList.remove("hidden");
        if (QuintalSIm.checked) {
            DivSeguranca.classList.remove("hidden");
        } else {
            DivSeguranca.classList.add("hidden");
        }
    } else {
        DivPermissao.classList.add("hidden");
        Quintal.classList.add("hidden");
        DivSeguranca.classList.add("hidden");
    }
}

Morada.addEventListener("change", mostrarPermissao);
QuintalSIm.addEventListener("change", mostrarPermissao);
QuintalNao.addEventListener("change", mostrarPermissao);


//Parte que o Icaro passou em sala
document.getElementById("FormAdocaoCaes").addEventListener("submit", function (e){
e.preventDefault();
let NomeUsuario = document.getElementById("NomeUsuario").value;
let EmailUsuario = document.getElementById("EmailUsuario").value;
let CpfUsuario = document.getElementById("CpfUsuario").value;
let IdadeUsuario = document.getElementById("IdadeUsuario").value;
let CidadeUsuario = document.getElementById("CidadeUsuario").value;
let Morada = document.getElementById("Morada").value;
let PetANTES = document.querySelector('input[name="Petantes"]:checked').value;
let PetSozinho = document.getElementById("PetSozinho").value;
let MotivoAdocao = document.getElementById("MotivoAdocao").value;
let QuererAnimal = document.getElementById("QuererAnimal").value;

if(PetSozinho>8) return alert("O pet nao pode ficar mais de 8 horas sozinho");
if(PetANTES==="false") return alert("VOcê poderá receber ajuda da ONG");
if(MotivoAdocao.toLowerCase() === "quero" || MotivoAdocao.toLowerCase() === "porque sim") return alert("O motivo da adoção não pode ser genérico.");
let CPFsCadastrados = ["12345678900", "98765432100", "11122233344"];
if (CPFsCadastrados.includes(CpfUsuario)) return alert("CPF já cadastrado. Por favor, informe um CPF diferente.");
if (QuererAnimal < 2) return alert("Decisão impulsiva");

document.getElementById("Botao").innerHTML="Cadastro realizado com sucesso!<br>" +"Nome" + NomeUsuario;
});
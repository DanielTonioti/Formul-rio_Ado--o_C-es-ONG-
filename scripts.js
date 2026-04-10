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

// Se o animal ficar mais de 8 horas sozinho por dia, o sistema deve exibir alert ou colocar justificativa
if(PetSozinho>8) return alert("O pet nao pode ficar mais de 8 horas sozinho");
// Caso o candidato nunca tenha tido pet, o sistema deve exibir uma mensagem informando que poderá haver acompanhamento da ONG
if(PetANTES==="false") return alert("VOcê poderá receber ajuda da ONG");
// O motivo da adoção não pode ser genérico (ex: "quero", "porque sim")
if(MotivoAdocao.toLowerCase() === "quero" || MotivoAdocao.toLowerCase() === "porque sim") return alert("O motivo da adoção não pode ser genérico.");
// O CPF não pode ser duplicado (simular uma lista de CPFs já cadastrados no código)
let CPFsCadastrados = ["12345678900", "98765432100", "11122233344"];
if (CPFsCadastrados.includes(CpfUsuario)) return alert("CPF já cadastrado. Por favor, informe um CPF diferente.");
// Caso o usuário informe que não tem condições financeiras, o envio deve ser bloqueado
document.getElementById("Botao").innerHTML="Cadastro realizado com sucesso!<br>" +"Nome" + NomeUsuario;
});
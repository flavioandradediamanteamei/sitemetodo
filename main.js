let player;
let verificado = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("meu-video", {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING && !verificado) {
    verificado = true;
    const intervalo = setInterval(() => {
      const tempoAtual = player.getCurrentTime();
      if (tempoAtual >= 220) {
        clearInterval(intervalo);
        const conteudo = document.getElementById("conteudo-revelado");
        conteudo.classList.add("mostrar");
        window.scrollTo({ top: conteudo.offsetTop, behavior: "smooth" });
      }
    }, 1000);
  }
}

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const dados = new FormData(e.target);
  const info = Object.fromEntries(dados);
  const numeroWhats = info.whatsapp.replace(/\D/g, "");

  if (!info.email.includes("@")) {
    alert("Digite um e‑mail válido.");
    return;
  }

  const opcaoSelecionada = document.querySelector('input[name="investimento"]:checked');
  if (!opcaoSelecionada) {
    alert("Por favor, selecione uma opção de investimento.");
    return;
  }

  const ganhosSelecionados = Array.from(document.querySelectorAll('input[name="ganho"]:checked')).map(el => el.value).join(", ");

  const texto = `🚀 Flávio Andrade, eu quero fazer parte desse movimento, fico no aguardo...

👤 Nome: ${info.nome}
📱 WhatsApp: ${numeroWhats}
📧 Email: ${info.email}
📍 Cidade: ${info.cidade}

💼 Já é líder? ${info.experiencia || "Não informado"}
💸 Já ganhou entre: ${ganhosSelecionados || "Não informado"}
🔥 Opção de investimento: ${opcaoSelecionada.value}`;

  const numeroFlavio = "13991545873";
  window.open("https://wa.me/" + numeroFlavio + "?text=" + encodeURIComponent(texto), "_blank");
});

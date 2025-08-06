let verificado = false;
let tempoAssistido = 0;

const vimeoIframe = document.createElement("iframe");
vimeoIframe.src = "https://player.vimeo.com/video/1107784309?autoplay=1&muted=0&title=0&byline=0&portrait=0";
vimeoIframe.frameBorder = "0";
vimeoIframe.allow = "autoplay; fullscreen; picture-in-picture";
vimeoIframe.allowFullscreen = true;
vimeoIframe.style.width = "100%";
vimeoIframe.style.height = "100%";
vimeoIframe.style.maxWidth = "800px";
vimeoIframe.style.aspectRatio = "16/9";
vimeoIframe.style.display = "block";
vimeoIframe.style.margin = "auto";

document.getElementById("meu-video").appendChild(vimeoIframe);

// Espera o Vimeo carregar para ativar o controle de tempo
vimeoIframe.addEventListener("load", () => {
  const player = new Vimeo.Player(vimeoIframe);

  const intervalo = setInterval(() => {
    player.getCurrentTime().then(function (seconds) {
      if (!verificado && seconds >= 220) {
        verificado = true;
        clearInterval(intervalo);
        const conteudo = document.getElementById("conteudo-revelado");
        conteudo.classList.add("mostrar");
        window.scrollTo({ top: conteudo.offsetTop, behavior: "smooth" });
      }
    });
  }, 1000);
});

// FORMULÁRIO DE ENVIO (sem alteração)
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

  const ganhosSelecionados = Array.from(document.querySelectorAll('input[name="ganho"]:checked'))
    .map(el => el.value)
    .join(", ");

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

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const dados = new FormData(e.target);
  const info = Object.fromEntries(dados);

  const opcaoSelecionada = document.querySelector('input[name="investimento"]:checked');
  if (!opcaoSelecionada) {
    alert("Por favor, selecione uma opção de investimento.");
    return;
  }

  const ganhosSelecionados = Array.from(
    document.querySelectorAll('input[name="ganho"]:checked')
  ).map((el) => el.value).join(", ");

  const texto = `🚀 Flávio Andrade, eu quero fazer parte desse movimento, fico no aguardo... Segue minhas informações para redirecionamento:

👤 Nome: ${info.nome}
📱 WhatsApp: ${info.whatsapp}
📧 Email: ${info.email}
📍 Cidade: ${info.cidade}

💼 Já é líder? ${info.experiencia || "Não informado"}
💸 Já ganhou entre: ${ganhosSelecionados || "Não informado"}

🔥 Opção de investimento: ${opcaoSelecionada.value}
`;

  const numeroFlavio = "13991545873"; // Seu número de WhatsApp
  const link = "https://wa.me/" + numeroFlavio + "?text=" + encodeURIComponent(texto);
  window.open(link, "_blank");
});

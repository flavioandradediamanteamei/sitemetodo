document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const dados = new FormData(e.target);
  const info = Object.fromEntries(dados);

  // Limpa o número de WhatsApp (remove parênteses, traços etc.)
  const numeroWhats = info.whatsapp.replace(/\D/g, '');

  // Validação simples de e-mail
  if (!info.email.includes("@")) {
    alert("Digite um e‑mail válido.");
    return;
  }

  // Validação da opção de investimento
  const opcaoSelecionada = document.querySelector('input[name="investimento"]:checked');
  if (!opcaoSelecionada) {
    alert("Por favor, selecione uma opção de investimento.");
    return;
  }

  // Pega os ganhos selecionados
  const ganhosSelecionados = Array.from(
    document.querySelectorAll('input[name="ganho"]:checked')
  ).map((el) => el.value).join(", ");

  // Texto final formatado
  const texto = `🚀 Flávio Andrade, eu quero fazer parte desse movimento, fico no aguardo... Segue minhas informações para redirecionamento:

👤 Nome: ${info.nome}
📱 WhatsApp: ${numeroWhats}
📧 Email: ${info.email}
📍 Cidade: ${info.cidade}

💼 Já é líder? ${info.experiencia || "Não informado"}
💸 Já ganhou entre: ${ganhosSelecionados || "Não informado"}

🔥 Opção de investimento: ${opcaoSelecionada.value}
`;

  // Número fixo do Flávio
  const numeroFlavio = "13991545873";
  const link = "https://wa.me/" + numeroFlavio + "?text=" + encodeURIComponent(texto);

  window.open(link, "_blank");
});

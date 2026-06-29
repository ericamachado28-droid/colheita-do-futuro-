// 1. DADOS SIMULADOS DA ESTUFA AUTOMATIZADA
const dadosColheita = {
  temperatura: 22.5,
  umidade: 68,
  nivelNutrientes: 94,
  previsaoColheita: 12 // dias restantes
};

// 2. INICIALIZAÇÃO DO SISTEMA
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌱 Sistema Bio-Digital da Colheita do Futuro Ativado.");
  
  // Inicia a atualização contínua de dados na tela
  iniciarMonitoramento();
  
  // Configura os botões de ação do painel
  configurarControles();
});

// 3. MONITORAMENTO EM TEMPO REAL (Simulação de Sensores)
function iniciarMonitoramento() {
  const tempElement = document.getElementById("sensor-temp");
  const umidElement = document.getElementById("sensor-umid");

  // Se os elementos existirem na página, atualiza os valores a cada 3 segundos
  setInterval(() => {
    // Pequenas oscilações para parecer real
    const novaTemp = (dadosColheita.temperatura + (Math.random() * 0.6 - 0.3)).toFixed(1);
    const novaUmid = Math.floor(dadosColheita.umidade + (Math.random() * 4 - 2));

    if (tempElement) tempElement.innerText = `${novaTemp}°C`;
    if (umidElement) umidElement.innerText = `${novaUmid}%`;
  }, 3000);
}

// 4. CONTROLES E INTERAÇÕES DO USUÁRIO
function configurarControles() {
  const btnRegar = document.getElementById("btn-irrigar");
  const btnColher = document.getElementById("btn-colher");

  if (btnRegar) {
    btnRegar.addEventListener("click", () => {
      // Efeito visual e feedback técnico
      btnRegar.innerText = "⚡ IRRIGANDO EM ANDAMENTO...";
      btnRegar.disabled = true;
      btnRegar.style.boxShadow = "0 0 25px #00f0ff"; // Brilho azul de água/tecnologia

      setTimeout(() => {
        alert("💧 Irrigação hidropônica de precisão concluída com sucesso!");
        btnRegar.innerText = "ATIVAR IRRIGAÇÃO";
        btnRegar.disabled = false;
        btnRegar.style.boxShadow = "";
      }, 2000);
    });
  }

  if (btnColher) {
    btnColher.addEventListener("click", () => {
      alert(`🛸 Drones acionados! Previsão de colheita otimizada para daqui a ${dadosColheita.previsaoColheita} dias.`);
    });
  }
}

// 5. ANIMAÇÃO SUAVE DE ENTRADA (Scroll Reveal simplificado)
const cards = document.querySelectorAll(".card-cyber");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});

window.onload = () => {
    const btnSim = document.getElementById('btnSim');
    const btnNao = document.getElementById('btnNao');
    const container = document.getElementById('hearts-container');
    
    // Novos elementos para o aviso personalizado
    const modal = document.getElementById('customAlert');
    const btnClose = document.getElementById('closeModal');

    const heartTypes = ['❤️', '💖', '💝', '💕', '💗', '💓', '💘'];

    // --- FUNÇÃO DOS CORAÇÕES ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-small');
        const randomType = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.innerHTML = randomType;
        
        heart.style.left = Math.random() * 95 + "vw";
        const duration = Math.random() * 2.5 + 1.5;
        heart.style.animationDuration = duration + "s";
        const size = Math.random() * 20 + 10; 
        heart.style.fontSize = size + "px";
        
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, duration * 1000);
    }

    setInterval(createHeart, 50);

    // --- LÓGICA DOS BOTÕES ---

    // Botão Sim: Redireciona para o vídeo/página
    btnSim.addEventListener('click', () => {
        window.location.href = "https://www.youtube.com/watch?v=lp-EO5I6OHQ"; 
    });

    // Botão Não: Abre o modal de aviso bonitão
    btnNao.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Fechar o modal ao clicar no botão "Entendido"
    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar o modal se o usuário clicar fora da caixa branca (no fundo escuro)
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};
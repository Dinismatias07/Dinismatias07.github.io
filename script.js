window.onload = () => {
    const btnSim = document.getElementById('btnSim');
    const btnNao = document.getElementById('btnNao');
    const container = document.getElementById('hearts-container');
    
    // Modais e botões de fecho
    const modalNao = document.getElementById('customAlert');
    const btnCloseNao = document.getElementById('closeModal');
    
    const modalSim = document.getElementById('modalSim');
    const btnConfirmarSim = document.getElementById('btnConfirmarSim');

    const heartTypes = ['❤️', '💖', '💝', '💕', '💗', '💓', '💘'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-small');
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 95 + "vw";
        const duration = Math.random() * 2.5 + 1.5;
        heart.style.animationDuration = duration + "s";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, duration * 1000);
    }
    setInterval(createHeart, 50);

    // --- LÓGICA DOS BOTÕES ---

    // Botão SIM: Abre o aviso positivo
    btnSim.addEventListener('click', () => {
        modalSim.style.display = 'flex';
    });

    // MUDANÇA AQUI: Ao clicar no botão de confirmação, apenas fecha o modal
    btnConfirmarSim.addEventListener('click', () => {
        modalSim.style.display = 'none';
    });

    // Botão NÃO: Abre o aviso negativo
    btnNao.addEventListener('click', () => {
        modalNao.style.display = 'flex';
    });

    // Fechar modal do Não
    btnCloseNao.addEventListener('click', () => {
        modalNao.style.display = 'none';
    });

    // Fechar ao clicar fora dos modais
    window.onclick = (event) => {
        if (event.target == modalNao) modalNao.style.display = 'none';
        if (event.target == modalSim) modalSim.style.display = 'none';
    };
};
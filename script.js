// --- ELEMENTOS DO DOM ---
const bodyElement = document.body; // Referência ao body
const backgroundVideo = document.getElementById('background-video'); // Referência ao vídeo
const backgroundMusic = document.getElementById('background-music'); // Referência para a música
const musicToggleButton = document.getElementById('music-toggle-btn'); // Botão Play/Pause música
const volumeSlider = document.getElementById('volume-slider');       // Controle de volume
const menuInicial = document.getElementById('menu-inicial');
const quizContainer = document.getElementById('quiz-container');
const resultadoContainer = document.getElementById('resultado-container');

const categoriaButtons = document.querySelectorAll('.btn-categoria');
const perguntaTexto = document.getElementById('pergunta-texto');
const categoriaAtualSpan = document.getElementById('categoria-atual');
const progressoSpan = document.getElementById('progresso');
const midiaContainer = document.getElementById('midia-container');
const imagemPergunta = document.getElementById('imagem-pergunta');
const audioPergunta = document.getElementById('audio-pergunta');
const opcoesContainer = document.getElementById('opcoes-container');
const feedbackDiv = document.getElementById('feedback');
const proximaBtn = document.getElementById('proxima-btn'); // Ainda usado para reiniciar, mas não para avançar perguntas
const pontuacaoFinalSpan = document.getElementById('pontuacao-final');
const reiniciarBtn = document.getElementById('reiniciar-btn');
const timeLeftSpan = document.getElementById('time-left');      // Span do tempo
const timerDisplay = document.getElementById('timer-display');    // Container do tempo para estilização
// --- DADOS DO QUIZ (EXEMPLOS - SUBSTITUA PELOS SEUS!) ---
// IMPORTANTE: Coloque suas imagens em pastas como 'img/cenas/', 'img/atores/'
// e seus áudios em 'audio/ost/'
const todasPerguntas = [
    // Categoria: Cena
    {
        categoria: 'cena',
        texto: 'Qual dorama é representado por esta cena?',
        midia: 'img/cenas/cena1.png', // SUBSTITUA
        tipoMidia: 'imagem',
        opcoes: ['Goblin', 'Descendentes do Sol', 'Pousando no Amor', 'Pretendente Surpresa'],
        respostaCorreta: 'Pretendente Surpresa'
    },
    {
        categoria: 'cena',
        texto: 'De qual dorama é esta cena icônica?',
        midia: 'img/cenas/cena2.png', // SUBSTITUA
        tipoMidia: 'imagem',
        opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Itaewon Class', 'Start-Up'],
        respostaCorreta: 'Advogada Extraordinária'
    },
    {
      categoria: 'cena',
      texto: 'De qual dorama é esta cena icônica?',
      midia: 'img/cenas/cena3.png', // SUBSTITUA
      tipoMidia: 'imagem',
      opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Pousando no Amor', 'Start-Up'],
      respostaCorreta: 'Pousando no Amor'
  },
  {
    categoria: 'cena',
    texto: 'De qual dorama é esta cena icônica?',
    midia: 'img/cenas/cena4.png', // SUBSTITUA
    tipoMidia: 'imagem',
    opcoes: ['Beleza Verdadeira', 'Advogada Extraordinária', 'Itaewon Class', 'Start-Up'],
    respostaCorreta: 'Beleza Verdadeira'
},
{
  categoria: 'cena',
  texto: 'De qual dorama é esta cena icônica?',
  midia: 'img/cenas/cena5.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Itaewon Class', 'Tudo Bem Não Ser Normal'],
  respostaCorreta: 'Tudo Bem Não Ser Normal'
},
{
  categoria: 'cena',
  texto: 'De qual dorama é esta cena icônica?',
  midia: 'img/cenas/cena6.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Rainha das Lágrimas', 'Itaewon Class', 'Start-Up'],
  respostaCorreta: 'Rainha das Lágrimas'
},
{
  categoria: 'cena',
  texto: 'De qual dorama é esta cena icônica?',
  midia: 'img/cenas/cena7.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Desgraça ao seu dispor', 'Start-Up'],
  respostaCorreta: 'Desgraça ao seu dispor'
},
{
  categoria: 'cena',
  texto: 'De qual dorama é esta cena icônica?',
  midia: 'img/cenas/cena8.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Medicos em Colapso', 'Advogada Extraordinária', 'Itaewon Class', 'Start-Up'],
  respostaCorreta: 'Medicos em Colapso'
},
{
  categoria: 'cena',
  texto: 'De qual dorama é esta cena icônica?',
  midia: 'img/cenas/cena9.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Itaewon Class', 'My Demon'],
  respostaCorreta: 'My Demon'
},
{
  categoria: 'cena',
  texto: 'De qual dorama é esta cena icônica?',
  midia: 'img/cenas/cena10.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Vejo Você na Próxima Vida', 'Start-Up'],
  respostaCorreta: 'Vejo Você na Próxima Vida'
},
    // Categoria: Ator/Atriz
    {
        categoria: 'ator',
        texto: 'De qual dorama é este personagem?',
        midia: 'img/atores/cena1.png', // SUBSTITUA
        tipoMidia: 'imagem',
        opcoes: ['Love Alarm', 'Advogada Extraordinária', 'Vejo Você na Próxima Vida', 'Start-Up'],
        respostaCorreta: 'Love Alarm'
    },
    {
        categoria: 'ator',
        texto: 'De qual dorama é este personagem ?',
        midia: 'img/atores/cena2.png', // SUBSTITUA
        tipoMidia: 'imagem',
        opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Start-Up'],
        respostaCorreta: 'Beleza Verdadeira'
    },
    {
      categoria: 'ator',
      texto: 'De qual dorama é este personagem?',
      midia: 'img/atores/cena3.png', // SUBSTITUA
      tipoMidia: 'imagem',
      opcoes: ['Vincenzo', 'O Amor Mora ao Lado', 'Beleza Verdadeira', 'Start-Up'],
      respostaCorreta: 'O Amor Mora ao Lado'
  },
  {
    categoria: 'ator',
    texto: 'De qual dorama é este personagem?',
    midia: 'img/atores/cena4.png', // SUBSTITUA
    tipoMidia: 'imagem',
    opcoes: ['Amanhã', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Start-Up'],
    respostaCorreta: 'Amanhã'
},
{
  categoria: 'ator',
  texto: 'De qual dorama é este personagem?',
  midia: 'img/atores/cena5.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Start-Up'],
  respostaCorreta: 'Advogada Extraordinária'
},
{
  categoria: 'ator',
  texto: 'De qual dorama é este personagem?',
  midia: 'img/atores/cena6.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Vejo Você na Próxima Vida', 'Beleza Verdadeira', 'Start-Up'],
  respostaCorreta: 'Vejo Você na Próxima Vida'
},
{
  categoria: 'ator',
  texto: 'De qual dorama é este personagem?',
  midia: 'img/atores/cena7.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Start-Up'],
  respostaCorreta: 'Beleza Verdadeira'
},
{
  categoria: 'ator',
  texto: 'De qual dorama é este personagem?',
  midia: 'img/atores/cena8.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Pretendente Surpresa', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Start-Up'],
  respostaCorreta: 'Pretendente Surpresa'
},
{
  categoria: 'ator',
  texto: 'De qual dorama é este personagem?',
  midia: 'img/atores/cena9.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Rainha das Lágrimas'],
  respostaCorreta: 'Rainha das Lágrimas'
},
{
  categoria: 'ator',
  texto: 'De qual dorama é este personagem?',
  midia: 'img/atores/cena10.png', // SUBSTITUA
  tipoMidia: 'imagem',
  opcoes: ['Vincenzo', 'Advogada Extraordinária', 'Beleza Verdadeira', 'Start-Up'],
  respostaCorreta: 'Advogada Extraordinária'
},

    // Categoria: OST
    {
        categoria: 'ost',
        texto: 'De qual dorama é esta trilha sonora?',
        midia: 'audio/ost/alovesobeautiful.mp3', // SUBSTITUA
        tipoMidia: 'audio',
        opcoes: ['Descendentes do Sol', 'A Love So Beautiful', 'Boys Over Flowers', 'Secret Garden'],
        respostaCorreta: 'A Love So Beautiful'
    },
    {
        categoria: 'ost',
        texto: 'A qual dorama pertence esta música?',
        midia: 'audio/ost/arainhadaslágrimas.mp3', // SUBSTITUA
        tipoMidia: 'audio',
        opcoes: ['Rainha das Lágrimas', 'My Love from the Star', 'Descendentes do Sol', 'Healer'],
        respostaCorreta: 'Rainha das Lágrimas'
    },
    {
      categoria: 'ost',
      texto: 'De qual dorama é esta trilha sonora?',
      midia: 'audio/ost/belezaverdadeira.mp3', // SUBSTITUA
      tipoMidia: 'audio',
      opcoes: ['Descendentes do Sol', 'A Love So Beautiful', 'Beleza Verdadeira', 'Secret Garden'],
      respostaCorreta: 'Beleza Verdadeira'
  },
  {
    categoria: 'ost',
    texto: 'De qual dorama é esta trilha sonora?',
    midia: 'audio/ost/desgraça.mp3', // SUBSTITUA
    tipoMidia: 'audio',
    opcoes: ['Descendentes do Sol', 'A Love So Beautiful', 'Boys Over Flowers', 'Desgraça ao seu dispor'],
    respostaCorreta: 'Desgraça ao seu dispor'
},
{
  categoria: 'ost',
  texto: 'De qual dorama é esta trilha sonora?',
  midia: 'audio/ost/pousandonomor.mp3', // SUBSTITUA
  tipoMidia: 'audio',
  opcoes: ['Descendentes do Sol', 'Pousando no Amor', 'Boys Over Flowers', 'Secret Garden'],
  respostaCorreta: 'Pousando no Amor'
},
{
  categoria: 'ost',
  texto: 'De qual dorama é esta trilha sonora?',
  midia: 'audio/ost/quandootelefonetoca.mp3', // SUBSTITUA
  tipoMidia: 'audio',
  opcoes: ['Quando o Telefone Toca', 'A Love So Beautiful', 'Boys Over Flowers', 'Secret Garden'],
  respostaCorreta: 'Quando o Telefone Toca'
},
{
  categoria: 'ost',
  texto: 'De qual dorama é esta trilha sonora?',
  midia: 'audio/ost/vejovocênapróximavida.mp3', // SUBSTITUA
  tipoMidia: 'audio',
  opcoes: ['Descendentes do Sol', 'A Love So Beautiful', 'Vejo Você na Próxima Vida', 'Secret Garden'],
  respostaCorreta: 'Vejo Você na Próxima Vida'
},
];

// -// --- ESTADO DO QUIZ ---
let perguntasCategoriaAtual = [];
let perguntasEmbaralhadas = [];
let indicePerguntaAtual = 0;
let pontuacao = 0;
let categoriaSelecionada = '';
const TOTAL_PERGUNTAS_POR_QUIZ = 10; // Você pode ajustar se tiver menos perguntas em alguma categoria
const FEEDBACK_DELAY = 3000; // Tempo (ms) para mostrar feedback antes de avançar

// --- CONFIGURAÇÕES E ESTADO DO TIMER ---
const TIMER_DURATION = 15; // Segundos por pergunta
let timerInterval = null; // Para guardar o ID do setInterval
let timeLeft = TIMER_DURATION;

// --- API DE FALA (SpeechSynthesis) ---
const synth = window.speechSynthesis;
let vozes = [];

function carregarVozes() {
    vozes = synth.getVoices();
    const vozPreferida = vozes.find(voz => voz.lang === 'pt-BR');
    console.log("Vozes disponíveis:", vozes);
    console.log("Voz preferida (pt-BR):", vozPreferida);
}
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = carregarVozes;
}
carregarVozes();

function falar(texto) {
    if (!texto) return; // Não tenta falar se o texto for vazio
    if (synth.speaking) {
        console.warn('SpeechSynthesis cancelando fala anterior.');
        synth.cancel();
        // Pequeno delay para evitar problemas de cancelamento rápido
        setTimeout(() => falar(texto), 100);
        return;
    }
    const utterThis = new SpeechSynthesisUtterance(texto);
    utterThis.onerror = function (event) {
        console.error('Erro no SpeechSynthesis:', event);
    }
    const vozBrasileira = vozes.find(voz => voz.lang === 'pt-BR');
    if (vozBrasileira) {
        utterThis.voice = vozBrasileira;
    } else {
        utterThis.lang = 'pt-BR'; // Fallback de idioma
        console.warn("Voz pt-BR não encontrada, usando fallback.");
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
}

// --- FUNÇÕES DE CONTROLE DA MÚSICA DE FUNDO ---

function updateMusicButtonIcon() {
    const icon = musicToggleButton.querySelector('i');
    if (!icon) return; // Segurança
    if (backgroundMusic.paused) {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
}

function tryPlayBackgroundMusic() {
    if (backgroundMusic.paused) {
        const playPromise = backgroundMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                console.log("Música de fundo iniciada.");
                updateMusicButtonIcon();
            }).catch(error => {
                console.warn("Autoplay da música de fundo bloqueado:", error);
                updateMusicButtonIcon(); // Garante ícone de Play se bloqueado
            });
        } else {
             updateMusicButtonIcon();
        }
    } else {
        updateMusicButtonIcon(); // Garante que o ícone esteja correto se já estava tocando
    }
}

function stopBackgroundMusic() {
    if (!backgroundMusic.paused) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        console.log("Música de fundo parada.");
    }
     updateMusicButtonIcon();
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        tryPlayBackgroundMusic();
    } else {
        backgroundMusic.pause();
        updateMusicButtonIcon();
    }
}

function adjustVolume() {
    backgroundMusic.volume = volumeSlider.value;
}

// --- FUNÇÕES DO TIMER ---

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    if(timerDisplay) timerDisplay.classList.remove('low-time');
}

function startTimer() {
    stopTimer();
    timeLeft = TIMER_DURATION;
    if(timeLeftSpan) timeLeftSpan.textContent = timeLeft;
    if(timerDisplay) timerDisplay.classList.remove('low-time');

    timerInterval = setInterval(() => {
        timeLeft--;
        if(timeLeftSpan) timeLeftSpan.textContent = timeLeft;

        if (timeLeft <= 5 && timeLeft > 0) { // Adiciona classe de tempo baixo
            if(timerDisplay) timerDisplay.classList.add('low-time');
        }

        if (timeLeft <= 0) {
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    console.log("handleTimeout chamado.");
    stopTimer();

    const todosBotoesOpcao = opcoesContainer.querySelectorAll('.btn-opcao');
    todosBotoesOpcao.forEach(btn => btn.disabled = true);

    if (!audioPergunta.paused) audioPergunta.pause();

    const perguntaAtual = perguntasEmbaralhadas[indicePerguntaAtual];
    if (!perguntaAtual) return; // Segurança
    const respostaCorreta = perguntaAtual.respostaCorreta;

    feedbackDiv.textContent = `Tempo esgotado! A resposta era: ${respostaCorreta}`;
    feedbackDiv.style.color = '#dc3545';
    todosBotoesOpcao.forEach(btn => {
        if (btn.innerText === respostaCorreta) {
            btn.classList.add('correct');
        }
    });

    falar(`Tempo esgotado! A resposta certa era: ${respostaCorreta}`);

    proximaBtn.classList.add('hidden'); // Garante que o botão Próxima esteja escondido
    console.log("Tempo esgotado. Agendando próxima pergunta...");
    setTimeout(proximaPergunta, FEEDBACK_DELAY);
}


// --- FUNÇÕES PRINCIPAIS DO QUIZ ---

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function iniciarQuiz(categoria) {
    categoriaSelecionada = categoria;
    perguntasCategoriaAtual = todasPerguntas.filter(p => p.categoria === categoria);

    // Ajusta o número total se houver menos de 10 perguntas
    const numPerguntas = Math.min(perguntasCategoriaAtual.length, TOTAL_PERGUNTAS_POR_QUIZ);

    if (numPerguntas === 0) {
        alert(`Não há perguntas suficientes para a categoria: ${categoria}`);
        return;
    }
    console.warn(`Iniciando quiz de ${categoria} com ${numPerguntas} perguntas.`);

    perguntasEmbaralhadas = embaralharArray([...perguntasCategoriaAtual]).slice(0, numPerguntas);

    indicePerguntaAtual = 0;
    pontuacao = 0;

    stopBackgroundMusic(); // Para a música tema
    bodyElement.classList.remove('menu-active', 'results-active');
    bodyElement.classList.add('quiz-active');

    menuInicial.classList.replace('visible', 'hidden');
    resultadoContainer.classList.replace('visible', 'hidden');
    quizContainer.classList.replace('hidden', 'visible');
    proximaBtn.classList.add('hidden'); // Garante que o botão não apareça

    mostrarPergunta();
}

function mostrarPergunta() {
    console.log("Mostrando pergunta:", indicePerguntaAtual + 1);
    // Para áudio da pergunta anterior, se houver
    if (!audioPergunta.paused) {
       audioPergunta.pause();
       audioPergunta.currentTime = 0;
    }

    feedbackDiv.textContent = '';
    feedbackDiv.style.color = ''; // Reseta cor
    proximaBtn.classList.add('hidden'); // Esconde botão
    opcoesContainer.innerHTML = ''; // Limpa opções

    if (indicePerguntaAtual >= perguntasEmbaralhadas.length) {
        stopTimer();
        mostrarResultados();
        return;
    }

    const pergunta = perguntasEmbaralhadas[indicePerguntaAtual];
    if (!pergunta) { // Verificação extra
        console.error("Erro: Pergunta não encontrada no índice", indicePerguntaAtual);
        mostrarResultados(); // Vai para os resultados em caso de erro
        return;
    }

    // Atualiza informações
    let nomeCategoria = '';
    if (pergunta.categoria === 'cena') nomeCategoria = "Adivinhe pela Cena";
    else if (pergunta.categoria === 'ator') nomeCategoria = "Reconheça o Ator/Atriz";
    else if (pergunta.categoria === 'ost') nomeCategoria = "Trilha Sonora Misteriosa";

    categoriaAtualSpan.textContent = `Categoria: ${nomeCategoria}`;
    progressoSpan.textContent = `Pergunta ${indicePerguntaAtual + 1} de ${perguntasEmbaralhadas.length}`;
    perguntaTexto.textContent = pergunta.texto;

    // Mostra mídia
    imagemPergunta.classList.add('hidden');
    audioPergunta.classList.add('hidden');
    audioPergunta.src = '';
    imagemPergunta.src = '';

    if (pergunta.tipoMidia === 'imagem') {
        imagemPergunta.src = pergunta.midia;
        imagemPergunta.alt = pergunta.texto;
        imagemPergunta.classList.remove('hidden');
    } else if (pergunta.tipoMidia === 'audio') {
        audioPergunta.src = pergunta.midia;
        audioPergunta.classList.remove('hidden');
    }

    // Cria botões de opção
    const opcoesEmbaralhadas = embaralharArray([...pergunta.opcoes]);
    opcoesEmbaralhadas.forEach(opcao => {
        const button = document.createElement('button');
        button.innerText = opcao;
        button.classList.add('btn-opcao');
        // Adiciona listener para chamar selecionarResposta
        button.addEventListener('click', () => selecionarResposta(button, opcao, pergunta.respostaCorreta));
        opcoesContainer.appendChild(button);
    });

    startTimer(); // Inicia o timer para esta pergunta
}

function selecionarResposta(botaoClicado, respostaSelecionada, respostaCorreta) {
    console.log("Resposta selecionada.");
    stopTimer();

    const todosBotoesOpcao = opcoesContainer.querySelectorAll('.btn-opcao');
    todosBotoesOpcao.forEach(btn => btn.disabled = true);

    if (!audioPergunta.paused) audioPergunta.pause();

    feedbackDiv.style.color = ''; // Reseta cor

    if (respostaSelecionada === respostaCorreta) {
        pontuacao++;
        botaoClicado.classList.add('correct');
        feedbackDiv.textContent = "Correto!";
        falar("Parabéns! Você acertou!");
    } else {
        botaoClicado.classList.add('incorrect');
        feedbackDiv.textContent = `Errado! A resposta era: ${respostaCorreta}`;
        feedbackDiv.style.color = '#dc3545';
        todosBotoesOpcao.forEach(btn => {
            if (btn.innerText === respostaCorreta) {
                btn.classList.add('correct');
            }
        });
        falar(`Você errou! A resposta certa era: ${respostaCorreta}`);
    }

    proximaBtn.classList.add('hidden'); // Garante que o botão Próxima esteja escondido
    console.log("Resposta selecionada. Agendando próxima pergunta...");
    setTimeout(proximaPergunta, FEEDBACK_DELAY);
}

function proximaPergunta() {
    console.log("proximaPergunta chamada.");
    // O botão já deve estar escondido, não precisamos mexer nele aqui
    indicePerguntaAtual++;
    mostrarPergunta();
}

function mostrarResultados() {
    console.log("Mostrando resultados.");
    stopTimer(); // Garante que qualquer timer residual pare
    stopBackgroundMusic(); // Garante que a música de fundo não toque (caso reinicie rápido)

    bodyElement.classList.remove('menu-active', 'quiz-active');
    bodyElement.classList.add('results-active');

    quizContainer.classList.replace('visible', 'hidden');
    resultadoContainer.classList.replace('hidden', 'visible');
    pontuacaoFinalSpan.textContent = `Sua pontuação: ${pontuacao} de ${perguntasEmbaralhadas.length}`;
    falar(`Quiz finalizado! Você acertou ${pontuacao} de ${perguntasEmbaralhadas.length} perguntas.`);
}

function reiniciarQuiz() {
    console.log("Reiniciando quiz.");
    stopTimer(); // Para timer se estiver ativo

    bodyElement.classList.remove('quiz-active', 'results-active');
    bodyElement.classList.add('menu-active');
    tryPlayBackgroundMusic(); // Tenta tocar a música tema novamente

    resultadoContainer.classList.replace('visible', 'hidden');
    menuInicial.classList.replace('hidden', 'visible');
    // O botão próxima já está escondido
}


// --- EVENT LISTENERS ---

// Botões de Categoria
categoriaButtons.forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.getAttribute('data-categoria');
        iniciarQuiz(categoria);
    });
});

// Botão Reiniciar Quiz
reiniciarBtn.addEventListener('click', reiniciarQuiz);

// Controles de Música
if(musicToggleButton) musicToggleButton.addEventListener('click', toggleMusic);
if(volumeSlider) volumeSlider.addEventListener('input', adjustVolume);

// Botão Próxima Pergunta (NÃO é mais usado para avançar perguntas, mas pode ser útil para outras coisas no futuro)
// proximaBtn.addEventListener('click', proximaPergunta); // Removido ou comentado

// --- INICIALIZAÇÃO ---
carregarVozes(); // Carrega vozes da API de Fala

// Define estado inicial, ajusta volume e tenta tocar música
bodyElement.classList.add('menu-active');
if(volumeSlider) adjustVolume(); // Define volume inicial do player baseado no slider
tryPlayBackgroundMusic(); // Tenta tocar a música tema

console.log("K-Quiz Mania pronto!");
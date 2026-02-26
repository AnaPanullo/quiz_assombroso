const cardInner = document.querySelector(".card-inner")
const perguntaEl = document.getElementById("pergunta")
const opcoes = document.querySelectorAll(".opcao")
const feedback = document.getElementById("feedback")
const card = document.querySelector(".card")
const respostaTexto = document.getElementById("resposta-texto")
const respostaImagem = document.getElementById("resposta-imagem")
const btnProximo = document.getElementById("btn-proximo")
const capa = document.getElementById("card-cape")
const btnIniciar = document.getElementById("btn-iniciar")


let acertos = 0
let erros = 0
let indiceAtual = 0

const perguntas = [
  {
    texto: "No filme “A família Addams”, o que eles colocam na bebida de coco, quando eles se casam?",
    opcoes: ["Laranja", "Limão", "Ameixa"],
    correta: 1,
    imagem: "imagens/addams.png"
  },
  {
    texto: "No filme “A casa monstro”, por quantos anos o senhor Epaminondas ficou preso à casa?",
    opcoes: ["58 anos", "45 anos", "18 anos"],
    correta: 1,
    imagem: "imagens/A_Casa_monstro.png"
  },

  
{
  texto: "No filme “Coraline”, quem é a vilã?",
  opcoes: ["A outra mãe", "A mãe", "Coraline"],
  correta: 0,
  imagem: "imagens/outra_mae.png"
},
{
  texto: "No filme “O estranho mundo de Jack”, quem é o personagem principal?",
  opcoes: ["Dr. Finklestein", "Lock", "Jack"],
  correta: 2,
  imagem: "imagens/jack.png"
},
{
  texto: "No filme “A noiva cadáver”, que cor de batom ela usa?",
  opcoes: ["Vermelho", "Azul", "Rosa"],
  correta: 2,
  imagem: "imagens/batom.png"
},
{
  texto: "No filme “O estranho mundo de Jack”, qual roupa Jack estava usando no começo do filme?",
  opcoes: ["Roupa de Espantalho", "Roupa de Vampiro", "Roupa de Abóbora"],
  correta: 0,
  imagem: "imagens/halloween.png"
},

{
  texto: "No filme “Frankenweenie”, quem salvou o Victor?",
  opcoes: ["O Senhor Bürgermeister", "O Sparky", "O Senhor Rzykruski"],
  correta: 1,
  imagem: "imagens/Sparky.png"
},
{
  texto: "No filme “A casa monstro”, o que a menina queria vender para a babá de DJ?",
  opcoes: ["Doces de Halloween", "Saquinhos de chocolate", "Latas de biscoitos"],
  correta: 0,
  imagem: "imagens/biscoito.png"
},
{
  texto: "No filme “O estranho mundo de Jack”, qual o nome da cidade que o personagem encontrou?",
  opcoes: ["Cidade do Halloween", "Cidade das Caveiras", "Cidade do Natal"],
  correta: 2,
  imagem: "imagens/natal.png "
},
{
  texto: "No filme “Frankenweenie”, quem é o melhor amigo de Victor?",
  opcoes: ["Sparky", "Bob", "Toshiaki"],
  correta: 0,
  imagem: "imagens/Frankenweenie.png"
},
{
  texto: "No filme “A família Addams”, Mãozinha aparece segurando uma bandeja com taças. Quantas taças há na bandeja?",
  opcoes: ["Duas taças", "Três taças", "Cinco taças"],
  correta: 0,
  imagem: "imagens/mao.png"
},
{
  texto: "No filme “Hotel Transilvânia”, está sendo comemorado o aniversário de quantos anos da Mavis?",
  opcoes: ["118 anos", "132 anos", "111 anos"],
  correta: 0,
  imagem: "imagens/mavis_118.png"
},
{
  texto: "No filme “A casa monstro”, quem é o diretor do filme?",
  opcoes: ["Pierre Coffin", "Henry Selick", "Gil Kenan"],
  correta: 2,
  imagem: "imagens/filme.png"
},
{
  texto: "No filme “A noiva cadáver”, o que Victor estava desenhando?",
  opcoes: ["Ele mesmo", "A Emili", "Uma borboleta"],
  correta: 2,
  imagem: "imagens/borboleta.png"
},
{
  texto: "No filme “A família Addams”, ao chegar na casa, por onde a avó entra?",
  opcoes: ["Pela porta", "Pela janela", "Pela chaminé"],
  correta: 1,
  imagem: "imagens/vovo.png"
},
{
  texto: "No filme “A noiva cadáver”, por qual motivo Lord Barkis matava as noivas?",
  opcoes: ["Por diversão", "Por vingança", "Pela herança"],
  correta: 2,
  imagem: "imagens/barkis.png"
},
{
  texto: "No filme “A noiva cadáver”, quantos esqueletos há na banda que toca no bar?",
  opcoes: ["8 esqueletos", "5 esqueletos", "10 esqueletos"],
  correta: 0,
  imagem: "imagens/banda.png"
},
{
  texto: "No filme “O estranho mundo de Jack”, quem anda com Jack no cemitério?",
  opcoes: ["O Bicho Papão", "O prefeito", "O Zero"],
  correta: 2,
  imagem: "imagens/zero.png"
},
{
  texto: "No filme “A casa monstro”, qual é o total de pessoas engolidas ou quase engolidas pela casa?",
  opcoes: ["5 pessoas", "13 pessoas", "7 pessoas"],
  correta: 0,
  imagem: "imagens/casa.png"
},
{
  texto: "No filme “Hotel Transilvânia”, em que ano o Drácula constrói o hotel?",
  opcoes: ["1880", "1932", "1895"],
  correta: 2,
  imagem: "imagens/castelo.png"
},
{
  texto: "No filme “Frankenweenie”, quais são os três primeiros símbolos da placa do carro que atropelou Sparky?",
  opcoes: ["TT2", "SI3", "TG2"],
  correta: 0,
  imagem: "imagens/carro.png"
},
{
  texto: "No filme “ParaNorman”, quem transformou os juízes em zumbis?",
  opcoes: ["O Norman", "O tio Prenderghast", "A menina Aggie"],
  correta: 2,
  imagem: "imagens/menina_bruxa.png"
},
{
  texto: "No filme “A casa monstro”, quem jogou a bola no quintal do Senhor Epaminondas?",
  opcoes: ["Bocão", "DJ", "Ela rola sozinha"],
  correta: 2,
  imagem: "imagens/bola.png"
},
{
  texto: "No filme “Coraline”, o que chama a atenção dela para a porta secreta?",
  opcoes: ["Um livro misterioso", "Um botão brilhante", "Uma chave antiga"],
  correta: 2,
  imagem: "imagens/chave_coraline.png"
},
{
  texto: "No filme “Coraline”, o que os outros pais têm no lugar dos olhos?",
  opcoes: ["Botões", "Pérolas", "Espelhos"],
  correta: 0,
  imagem: "imagens/pais.png"
},
{
  texto: "No filme “Coraline”, qual é o nome do gato que a ajuda?",
  opcoes: ["Garfield", "Senhor Bigodes", "Ele não tem nome"],
  correta: 2,
  imagem: "imagens/gato.png"
},
{
  texto: "No filme “Frankenweenie”, o que Victor usa para trazer seu cachorro de volta à vida?",
  opcoes: ["Um feitiço", "Um raio", "Um soro secreto"],
  correta: 1,
  imagem: "imagens/raio.png"
},
{
  texto: "No filme “Frankenweenie”, qual é o jogo que as crianças estão jogando quando acontece o acidente com o Sparky?",
  opcoes: ["Basquetebol", "Beisebol", "Queimada"],
  correta: 1,
  imagem: "imagens/basebol.png"
},
{
  texto: "No filme “ParaNorman”, qual é o poder especial que Norman tem?",
  opcoes: ["Falar com fantasmas", "Ler mentes", "Controlar o tempo"],
  correta: 0,
  imagem: "imagens/Paranorman.png"
},
{
  texto: "No filme “ParaNorman”, por que os zumbis aparecem na cidade?",
  opcoes: ["Por causa da maldição", "Porque Norman chamou", "Por causa da contaminação"],
  correta: 0,
  imagem: "imagens/zumbi.png"
},
{
  texto: "No filme “ParaNorman”, quem é Aggie?",
  opcoes: ["A professora", "A irmã de Norman", "Uma menina bruxa"],
  correta: 2,
  imagem: "imagens/menina.png"
},
{
  texto: "No filme “Hotel Transilvânia”, o que Mavis deseja fazer após sua festa?",
  opcoes: ["Conhecer o mundo dos humanos", "Casar com Jonathan", "Herdar o hotel"],
  correta: 0,
  imagem: "imagens/mundo_humano.png"
},
{
  texto: "No filme “Hotel Transilvânia”, quem é o dono do hotel?",
  opcoes: ["Frankenstein", "O Homem Invisível", "Conde Drácula"],
  correta: 2,
  imagem: "imagens/Dracula.png"
},
{
  texto: "No filme “A família Addams”, onde o casal decide morar no início da história?",
  opcoes: ["Numa cidade moderna", "Num hospício abandonado", "Num castelo na praia"],
  correta: 1,
  imagem: "imagens/hospicio.png"
},
{
  texto: "No filme “A família Addams”, o que Wandinha começa a conhecer quando vai para a escola?",
  opcoes: ["Um novo tipo de magia", "A vida normal das pessoas", "A história da família"],
  correta: 1,
  imagem: "imagens/escola_wandinha.png"
},
{
  texto: "No filme “A família Addams”, quem era a verdadeira vilã da história?",
  opcoes: ["A Wandinha", "A senhora Margot", "A Mortícia"],
  correta: 1,
  imagem: "imagens/margo.png"
},
]

function embaralharPerguntas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
function carregarPergunta() {
  const p = perguntas[indiceAtual]

  perguntaEl.innerText = p.texto
  feedback.innerText = ""

  card.classList.remove("virada", "acertou", "errou")
  respostaImagem.style.display = "block"
  respostaImagem.src = ""

  opcoes.forEach((botao, index) => {
    botao.innerText = `${String.fromCharCode(97 + index)}) ${p.opcoes[index]}`
    botao.disabled = false
  })

  btnProximo.style.display = "none"
}

opcoes.forEach(botao => {
  botao.addEventListener("click", () => responder(botao))
})

function responder(botao) {
  const escolha = Number(botao.dataset.opcao)
  const perguntaAtual = perguntas[indiceAtual]
  const acertou = escolha === perguntaAtual.correta

  // trava cliques
  opcoes.forEach(b => (b.disabled = true))

  // remove estados anteriores
  card.classList.remove("acertou", "errou")

  if (acertou) {
    acertos++
    card.classList.add("acertou")
    feedback.innerText = ""
    feedback.style.color = "green"
    tocarSom(true)
  } else {
    erros++
    card.classList.add("errou")
    feedback.innerText =""
    feedback.style.color = "red"
    tocarSom(false)
  }

  // espera animação antes de virar
  setTimeout(() => {
    mostrarResposta(acertou)
  }, 800)
}

function mostrarResposta(acertou) {
  const p = perguntas[indiceAtual]

  respostaTexto.innerText = acertou
    ? "Parabéns, você acertou 🎉"
    : "Que pena, você errou 😢"

  respostaImagem.src = p.imagem

  card.classList.add("virada")
  btnProximo.style.display = "block"
}

btnProximo.addEventListener("click", () => {
  indiceAtual++

  if (indiceAtual < perguntas.length) {
    carregarPergunta()
  } else {
    mostrarFim()
  }
})

function tocarSom(acertou) {
  const audio = new Audio(acertou ? "sounds/correct.wav" : "sounds/incorrect.wav")
  audio.play()
}

/* ---------- INÍCIO ---------- */

capa.style.display = "flex"
cardInner.style.display = "none"

btnIniciar.addEventListener("click", () => {
  capa.style.display = "none"
  cardInner.style.display = "block"

  indiceAtual = 0
  acertos = 0
  erros = 0

  embaralharPerguntas(perguntas)
  carregarPergunta()
})

/* ---------- FIM DO QUIZ ---------- */

function mostrarFim() {
  card.classList.add("virada")
  respostaImagem.style.display = "none"

  respostaTexto.innerHTML = `
    <h2>Fim do Quiz 👻</h2>
    <p>✅ Acertos: <strong>${acertos}</strong></p>
    <p>❌ Erros: <strong>${erros}</strong></p>
    
    <p>Obrigado por jogar 🎃</p>
  `

  btnProximo.style.display = "none"

  const antigos = document.querySelector(".botoes-fim")
  if (antigos) antigos.remove()

  const container = document.createElement("div")
  container.className = "botoes-fim"

  /* ----- JOGAR NOVAMENTE ----- */
  const btnReiniciar = document.createElement("button")
  btnReiniciar.innerText = "Jogar de novo 🔮"
   btnReiniciar.classList.add("btn-roxo")

  btnReiniciar.addEventListener("click", () => {
    indiceAtual = 0
    acertos = 0
    erros = 0

    const antigos = document.querySelector(".botoes-fim")
    if (antigos) antigos.remove()

    respostaImagem.src = ""
    respostaImagem.style.display = "block"
    card.classList.remove("virada")

    embaralharPerguntas(perguntas)
    carregarPergunta()
  })

  /* ----- FINALIZAR JOGO ----- */
  const btnFinalizar = document.createElement("button")
  btnFinalizar.innerText = "Finalizar jogo 🕯"
  btnFinalizar.classList.add("btn-laranja")


  btnFinalizar.addEventListener("click", () => {
  const antigos = document.querySelector(".botoes-fim")
  if (antigos) antigos.remove()

  // reset geral do jogo
  indiceAtual = 0
  acertos = 0
  erros = 0

  respostaImagem.src = ""
  card.classList.remove("virada")

  capa.style.display = "flex"
  cardInner.style.display = "none"
})


  container.appendChild(btnReiniciar)
  container.appendChild(btnFinalizar)

  document.querySelector(".card-back").appendChild(container)
}



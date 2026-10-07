let produtos = [
    {
    nome:"Caneca",
    preco: 30,
    categoria: "casa",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_962994-MLB116212569197_082026-F-caneca-homem-aranha-500ml-marvel-zona-criativa-filme-oficial.webp"
    },
    
    {
    nome:"Agenda",
    preco: 45,
    categoria: "Papelaria",
     imagem:"https://http2.mlstatic.com/D_NQ_NP_2X_797271-MLB103490386630_012026-F-kit-papelaria-fofa-kawaii-25-itens-material-escolar-premium.webp"
    },

    {
     nome:"Garrafa",
     preco: 50,
     categoria: "Casa",
     imagem:"https://http2.mlstatic.com/D_NQ_NP_2X_628453-MLB112899311490_072026-F-garrafa-termica-350ml-infantil-hello-kitty--grave-seu-nome.webp"
    },

    {
      nome: "Caderno",
      preco: 25,
      categoria: "Papelaria",
      imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_829043-MLB115729505665_082026-F-caderno-inteligente-a4-grande-disco-pautado-80-fls-escolar.webp"
    }
]


let areaProdutos = document.querySelector("#produtos")

produtos.forEach(function(produto){
    areaProdutos.innerHTML += `
        <div class="card">
            <img src="${produto.imagem}">
            <h2> ${produto.nome}</h2>
            <p>${produto.categoria}</p>
            <p class="preco">R$ ${produto.preco}</p>

            <button onclick="adicionarCarrinho('${produto.nome}')">
                Adicionar ao carrinho
            </button>
       </div>
    `;
})


let busca= document.querySelector("#buscar")

function mostrarProdutos(lista){
    areaProdutos.innerHTML = ""

    if(lista.lenght === 0){
        areaProdutos.innerHTML = `
            <p>Nenhum produto encontrado. </p>
        `

        return
    }
}
    
busca.addEventListener("input", function(){

    let texto = busca.ariaValueMax.toLowerCase()

    let encontrados = produtos.filter(function(produto){
        return produto.nome
            .toLowerCase()
            .includes(texto)
    })

    mostrarProdutos(encontrados)
})

let carrinho = []

let areaCarrinho = document.querySelector("#carrinho")
let totalCarrinho = document.querySelector("#total")

function adicionarCarrinho(nomeProduto){
    let produtoEscolhido = produtos.find(function(produto){
        return produto.nome === nomeProduto
    })

    carrinho.push(produtoEscolhido)

    mostrarCarrinho()
}

function mostrarCarrinho(){
    areaCarrinho.innerHTML = ""
    let total = 0

    carrinho.forEach(function(item){
        areaCarrinho.innerHTML += `
        <div class="item-carinho">
            <span>${item.nome}</span>
            <span>
            R4 ${item.preco.toFixed(2)}
            </span>

            </div>
        `
        total = total  + item.preco


    });

    totalCarrinho.innerText = 
        "Total: R$" + total.toFixed(2)
}
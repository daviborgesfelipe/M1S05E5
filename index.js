/*class define a estrutura*/
class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}

tipo_produto = "Lanche"
/*apartir new que é criado um objeto concreto apartir da class Produto */
const umProduto = new Produto (tipo_produto, 135000, false, 3 );
console.log(umProduto)

/**/ 
class Pedidos {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;


    constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.dataPedido = dataPedido;
        this.estaPago = estaPago;
        this.listaProdutos = listaProdutos;
        this.nomeCliente = nomeCliente;
    }

    adicionarProduto(umProduto) {
        this.listaProdutos.push(umProduto)
    }
}

let data_atual = new Date().toLocaleDateString();
let listaProdutos = [];
let tipoProduto = { Lanche: "Mac" }
/*apartir new que é criado um objeto concreto apartir da class Pedidos */
const pedido = new Pedidos (13, data_atual, false, listaProdutos, "Davi Borges");


console.log(pedido)



// function veiculo() {
//     return {
//     nome,
//     preco,
//     emEstoque,
//     quantidade,

//     buzinar: () => {},
//     }
// }
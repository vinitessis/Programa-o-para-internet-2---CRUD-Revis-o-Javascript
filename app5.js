let listaProdutos = [];

function inserir(produto){
    listaProdutos.push(produto);
}

function atualizar(id, nome, preco) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            prod.nome = nome;
            prod.preco = preco;
        }
    }
}

function deletar(id) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            listaProdutos.splice((id - 1), 1);
        }       
    }
}
function buscarPorId(id) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            return prod;
        }
    }    
}

function listar(){
    return listaProdutos;
}

let produto1 = {id:1, nome: "prod1", preco:100};
inserir(produto1);
let produto2 = {id:2, nome: "prod2", preco:100};
inserir(produto2);
let produto3 = {id:3, nome: "prod3", preco:100};
inserir(produto3);
let produto4 = {id:4, nome: "prod4", preco:100};
inserir(produto4);
let produto5 = {id:5, nome: "prod5", preco:100};
inserir(produto5);
let produto6 = {id:6, nome: "prod6", preco:100};
inserir(produto6);

console.log(listar());
console.log(atualizar(1, "Coca-Cola", 10));
console.log(atualizar(2, "Gasolina", 7));
console.log(atualizar(3, "Feijão", 5));
console.log(atualizar(4, "Fuzil", 1000));
console.log(atualizar(5, "Maconha", 40));
console.log(atualizar(6, "Coronavac", 99));
console.log(listar());
console.log(deletar(4));
console.log(listar());
console.log(buscarPorId(2));
console.log(buscarPorId(5));




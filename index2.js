//Desafio do felipão #03
class hero { // Classe contendo as informações do heroi
    constructor(nome,idade,classe){
        this.nome=nome
        this.idade=idade
        this.classe=classe

    }
}

let guerreiro = new hero("Ragnar","20","Guerreiro")
let mago = new hero("Arquimedes","40","Mago")
let monge = new hero("Osvaldo","60","Monge")
let ninja = new hero("Rayabusa","30","Ninja")


//Classe que armazena as informações de ataque
class ataque {
    constructor(golpe){
        this.golpe=golpe;
    
    }    
}         
    
let GuerreiroAtaque= new ataque ("Espada")
let MagoAtaque= new ataque ("Magia")
let MongeAtaque= new ataque("Artes Marciais")
let NinjaAtaque = new ataque("Shuriken")


// Saída
console.log(`O ${guerreiro.classe} atacou usando ${GuerreiroAtaque.golpe}`)
console.log(`O ${mago.classe} atacou usando ${MagoAtaque.golpe}`)
console.log(`O ${monge.classe} atacou usando ${MongeAtaque.golpe}`)
console.log(`O ${ninja.classe} atacou usando ${NinjaAtaque.golpe}`)


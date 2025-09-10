//nao entendi aonde eu usaria laços de repetiçao (for, while, do-while) 

//declaro variavel

let nomeHeroi = "mata-mosca"
let expHeroi = -1
let nivelHeroi = ""

//estrutura de decisao com operadores

if ((expHeroi >= 0) && (expHeroi <= 1000)){
  nivelHeroi = "ferro"
}else if ((expHeroi >= 1.001) && (expHeroi <= 2000)){
  nivelHeroi = "bronze"
}else if ((expHeroi >= 2.001) && (expHeroi <= 4000)){
  nivelHeroi = "prata"
}else if ((expHeroi >= 4001) && (expHeroi <= 6000)){
  nivelHeroi = "ouro"
}else if ((expHeroi >= 6001) && (expHeroi <= 8000)){
  nivelHeroi = "platina"
}else if ((expHeroi >= 8001) && (expHeroi <= 10000)){
  nivelHeroi = "diamante"
}else if ((expHeroi >= 10001) && (expHeroi <= 11000)){
  nivelHeroi = "radiante"
}else if (expHeroi >= 11001){
  nivelHeroi = "imortal"
}else{
  nivelHeroi = "Madeira"
}

//output

console.log("O Heroi chamado " + nomeHeroi + " esta no nivel " + nivelHeroi)



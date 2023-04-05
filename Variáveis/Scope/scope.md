# Scope

* Escopo determina a visibilidade de alguma variável no JS 

# Block statement
```JS
// vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer código
// aqui fechamos o bloco
}
```
O bloco, também criará um novo escopo. Chmamos de `block-scoped`


## var 
```js
// var é blobal e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco?', x)

{
  var x = 0
}

console.log('> existe x depois do bloco?' x)
```

## let e const
```js
// const e let são locais e só funcionam no espaço onde foi criada
console.log('> existe y antes do bloco?', y)

{
  let y = 0
}

console.log('> existe y antes do bloco?', y)
```


// Example Module Extern lodash

const _ = require('lodash')

const alunos = [{
    nome: 'Joao',
    nota: 7.6
  },{
    nome: 'Maria',
    nota: 7.8
  },{
    nome: 'Jose',
    nota: 6
  }
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)

console.log(process.argv)

function temParam(param) {
  return process.argv.indexOf(param) !== -1
}

if(temParam('sexta-feira')){
  console.log('Sim hoje é sexta-feira')
}else{
  console.log('Não sei que dia é hoje')
}
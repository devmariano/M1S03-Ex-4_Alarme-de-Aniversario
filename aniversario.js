const birthday = '2023-03-01';
let intervalId;

function checkBirthday() {
  const now = new Date();
  //alterado para pegar a data atual 
  const diffInMs = new Date(birthday) - now;
  //Math.ceil para arredondar o dia 
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    console.log('Feliz aniversário!');
  } else {
    console.log(`Faltam ${diffInDays} dias para o aniversário.`);
  }
}

function startChecking() {
  intervalId = setInterval(checkBirthday, 3000);
}

function stopChecking() {
  clearInterval(intervalId);
}

// Chama a função startChecking para começar a verificação
startChecking();

// Adicionada função para interromper a execução do stardChecking
// Aguarda uma entrada do usuário via terminal
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (data) {
  // Verifica se o valor digitado é igual a 0
  if (data.trim() === '0') {
    // Se for igual, chama a função stopChecking e interrompe a verificação
    stopChecking();
    console.log('Verificação interrompida.');
    // Encerra o processos
    process.exit();
  }
});
console.log('Verifica quantos dias faltam para seus aniversario a cada 3 segundos.')
console.log(`Data inserida: ${birthday}`)
console.log('*** Digite 0 e de enter para parar o script')







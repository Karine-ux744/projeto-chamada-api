
import fetch from 'node-fetch';
const link_api = 'https://api.chucknorris.io/jokes/random';
async function funcao_piada() {
  try {
    const resposta_da_funcao = await fetch(link_api);
    if (!resposta_da_funcao.ok) {
      throw new Error(`Erro HTTP! Status: ${resposta_da_funcao.status}`);
    }
    const resultados_api = await resposta_da_funcao.json();
    console.log('piada');
    console.log(resultados_api.value);
  } catch (error) {
    console.error('erro!', error.message);
  }
}
funcao_piada();
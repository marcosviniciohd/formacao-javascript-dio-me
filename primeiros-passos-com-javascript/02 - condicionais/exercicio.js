const precoEtanol = 3.79;
const precoGasolina = 5.79;
const mediaComEtanol = 7.5;
const mediaComGasolina = 10;
const distancia = 500;
const combustivel = 'Gasolina';
const ltComEtanol = distancia / mediaComEtanol;
const ltComGasolina = distancia / mediaComGasolina;

if(combustivel === 'Etanol') {
    const valor = ltComEtanol * precoEtanol;
    console.log('Para percorrer a distância de ' + distancia + ' KMs com etanol, vc gastará ' + valor.toFixed(2) + ' reais');
} else {
    const valor = ltComGasolina * precoGasolina;
    console.log('Para percorrer a distância de ' + distancia + ' KMs com gasolina, vc gastará ' + valor.toFixed(2) + ' reais');
}

import json from './chamadas.json'

async function getTax(origem, destino){
//  console.log({origem, destino});
return new Promise((resolve, reject)=>{
     json.chamadas.map(e=>{
     
    if(e.origem === origem && e.destino === destino ){
        resolve(e);
     
   }
   return e;
 })
})

}
const calcula = async (origem, destino, planos, minutos) => {
    const taxas = await getTax(origem, destino);
    const tarifa = taxas.tarifa;
    const plano = parseInt(planos)

    if(parseInt(minutos) > plano){
        // console.log({origem, destino, planos, minutos, tarifa});
        const tempo_com_plano = minutos-plano;
        const a = tarifa/10;
        const b = parseFloat(tarifa)+parseFloat(a);
        const c = b*tempo_com_plano;
        // console.log({a,b,c});
        const total_com_plano = c;
        const total_sem_plano = taxas.tarifa*minutos;
        return {com_plano: total_com_plano.toFixed(2), sem_plano:total_sem_plano.toFixed(2)};

    }
    if(parseInt(minutos) <= plano){
        // console.log({origem, destino, planos, minutos, tarifa});
        const tempo_com_plano = 0;
        const a = tarifa/10;
        const b = parseFloat(tarifa)+parseFloat(a);
        const c = b*tempo_com_plano;
        // console.log({a,b,c});
        const total_com_plano = c;
        const total_sem_plano = taxas.tarifa*minutos;
        return {com_plano: total_com_plano.toFixed(2), sem_plano:total_sem_plano.toFixed(2)};
    }
        
}


export default calcula;
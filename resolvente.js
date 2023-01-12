function verificar() {

    let a = document.getElementById("num1");
    let b = document.getElementById("num2");
    let c = document.getElementById("num3");

    let delta = Number(b.value**2) - 4 * Number(a.value) * Number(c.value);
    console.log(delta); 
    
    if (delta < 0) {
        console.log('Delta menor que 0');
        document.getElementById('erro').innerHTML = 'ERRO, o valor da raiz é menor do que zero';

        erro.style.display = 'block';
        resultado1.style.display = 'none';
        resultado2.style.display = 'none';
    }

    else {
        b = Number(b.value) * -1;

        let raizDelta = Math.sqrt(delta);
        let res1 = (b + raizDelta) / (2 * Number(a.value));
        let res2 = (b - raizDelta) / (2 * Number(a.value));
        let vertice_x = b / (2 * Number(a.value));
        let vertice_y = (delta * -1) / (4 * Number(a.value))

        document.getElementById('resultado1').innerHTML = `x = ${res1}`;
        document.getElementById('resultado2').innerHTML = `x = ${res2}`;
        document.getElementById('vertice').innerHTML = `Vértice = ${vertice_x},${vertice_y}`;    
        
        erro.style.display = 'none';
        resultado1.style.display = 'block';
        resultado2.style.display = 'block';
    }
   
}

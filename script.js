function calcularPrecio() {
    // Obtener los valores de los ingredientes
    const polloCantidad = parseFloat(document.getElementById('pollo-cantidad').value) || 0;
    const polloPrecio = parseFloat(document.getElementById('pollo-precio').value) || 0;
    const carneCantidad = parseFloat(document.getElementById('carne-cantidad').value) || 0;
    const carnePrecio = parseFloat(document.getElementById('carne-precio').value) || 0;
    const quesoCantidad = parseFloat(document.getElementById('queso-cantidad').value) || 0;
    const quesoPrecio = parseFloat(document.getElementById('queso-precio').value) || 0;
    const jamonCantidad = parseFloat(document.getElementById('jamon-cantidad').value) || 0;
    const jamonPrecio = parseFloat(document.getElementById('jamon-precio').value) || 0;
    const morronCantidad = parseFloat(document.getElementById('morron-cantidad').value) || 0;
    const morronPrecio = parseFloat(document.getElementById('morron-precio').value) || 0;
    const verdeoCantidad = parseFloat(document.getElementById('verdeo-cantidad').value) || 0;
    const verdeoPrecio = parseFloat(document.getElementById('verdeo-precio').value) || 0;
    const sojaCantidad = parseFloat(document.getElementById('soja-cantidad').value) || 0;
    const sojaPrecio = parseFloat(document.getElementById('soja-precio').value) || 0;
    const caldoPrecio = parseFloat(document.getElementById('caldo-precio').value) || 0;
    const cebollaPrecio = parseFloat(document.getElementById('cebolla-precio').value) || 0;
    const tapasPrecio = parseFloat(document.getElementById('tapas-precio').value) || 0;
    const cajasCantidad = parseFloat(document.getElementById('cajas-cantidad').value) || 0;
    const cajasPrecio = parseFloat(document.getElementById('cajas-precio').value) || 0;
    const fondoPrecio = parseFloat(document.getElementById('fondo-precio').value) || 0;
    const aceiteCantidad = parseFloat(document.getElementById('aceite-cantidad').value) || 0;
    const aceitePrecio = parseFloat(document.getElementById('aceite-precio').value) || 0;

    // Precio total de leche
    const precioLeche = 1000;

    // Calcular el costo por kg para cada ingrediente
    const costoCarnePorKg = carnePrecio / carneCantidad;
    const costoPolloPorKg = polloPrecio / polloCantidad;
    const costoQuesoPorKg = quesoPrecio / quesoCantidad;
    const costoJamonPorKg = jamonPrecio / jamonCantidad;

    // Costos por 1 kg de cada ingrediente
    const costoCarne = costoCarnePorKg * 1;
    const costoPollo = costoPolloPorKg * 1;
    const costoJamonQueso = costoQuesoPorKg + costoJamonPorKg + precioLeche; 

    // Costos adicionales ajustados para 3 docenas
    const costoCebolla = cebollaPrecio / 6; // 2 kg de cebolla para 3 docenas (1/3 de 6 docenas)
    const costoCaldo = caldoPrecio / 6; // 2 caldos para 3 docenas
    const costoMorron = (morronPrecio / morronCantidad) / 4; // 150 gramos de morrón para 3 docenas 
    const costoSoja = sojaPrecio / (sojaCantidad / 100); // 125 gramos de soja para 3 docenas (1/2 de 250 gramos)
    const costoVerdeo = (verdeoPrecio / verdeoCantidad) / 4; // 125 gramos de verdeo para 3 docenas (1/2 de 250 gramos)
    const costoAceite = (aceitePrecio / aceiteCantidad) / 10; // 100 cc de aceite para 3 docenas (1/2 de 200 cc)
    const costoTapas = (tapasPrecio / 5) * 3; // Precio de 3 docenas
    const costoCajas = (cajasPrecio / cajasCantidad) * 3; // Precio de las cajas (no necesita ajuste)
    const costoFondoPizza = (fondoPrecio / 5) * 3; // 100 gramos de fondo de pizza para 3 docenas (1/2 de 200 gramos)

    // Sumar todos los costos
    const costoTotalCarne = costoCarne + costoCebolla + costoCaldo + costoMorron + costoSoja + costoVerdeo + costoAceite + costoTapas + costoCajas + costoFondoPizza;
    const costoTotalPollo = costoPollo + costoCebolla + costoCaldo + costoMorron + costoSoja + costoVerdeo + costoAceite + costoTapas + costoCajas + costoFondoPizza;
    const costoTotalJYQ = costoJamonQueso

    // Dividir el costo total entre 3 para obtener el costo por docena
    const costoPorDocenaCarne = costoTotalCarne / 3;
    const costoPorDocenaPollo = costoTotalPollo / 3;
    const costoPorDocenaJYQ = costoTotalJYQ / 3;

    const total = (costoPorDocenaCarne + costoPorDocenaPollo + costoPorDocenaJYQ) / 3
    // Establecer el precio de venta (margen de ganancia del 100%)
    const precioVenta = total * 2; // Ganancia del 100% significa duplicar el costo

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `El precio ideal por docena es: $${precioVenta.toFixed(2)}`;
}
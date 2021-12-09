$('body').prepend("<div>BUSCAR: <input id='busqueda' type='text'></div><hr>");

$('#busqueda').keyup(function (e) { 
    let value = e.target.value;
    let filtrados = gorra.filter(gorra => 
        vestido.color.includes(value.toUpperCase()) ||
        vestido.marca.includes(value.toUpperCase()));
    generarGorra(filtrados);
});

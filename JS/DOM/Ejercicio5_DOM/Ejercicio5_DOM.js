function informacion(elEvento) {
    var evento = elEvento || window.event;
    switch(evento.type) {
      case 'mousemove':
        document.getElementById('info').style.backgroundColor = '#FFFFFF';
        var coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;

        coordenadaXabsoluta = evento.pageX;
        coordenadaYabsoluta = evento.pageY;
        coordenadaXrelativa = evento.clientX;
        coordenadaYrelativa = evento.clientY;

        muestraInformacion(['Raton', 'Navegador ['+coordenadaXrelativa+', '+coordenadaYrelativa+']', 'Pagina ['+coordenadaXabsoluta+', '+coordenadaYabsoluta+']']);
        break;

      case 'keypress':
        document.getElementById('info').style.backgroundColor = '#CCE6FF';
        var caracter = evento.charCode || evento.keyCode;
        var letra = String.fromCharCode(caracter);
        var codigo = letra.charCodeAt(0);
        muestraInformacion(['Teclado', 'Caracter ['+letra+']', 'Codigo ['+codigo+']']);
        break;

      case 'click':
        document.getElementById('info').style.backgroundColor = '#FFFFCC';
        break;
    }
  }
  
  function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(var i=1; i<mensaje.length; i++) {
      document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
      document.getElementById('ocultar').style.display = 'none';
    }
  }
  
  document.onmousemove = informacion;
  document.onkeypress = informacion;
  document.onclick = informacion;
  

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// ---------------------------------------------------------------------

var nombre = getParameterByName("nombre");
var apellidos = getParameterByName("apellidos");
var email = getParameterByName("email")
var lado = getParameterByName("lado");
var nivelExperiencia = getParameterByName("listaDesplegable");

var checkbox1 = getParameterByName("t1");
var checkbox2 = getParameterByName("t2");
var checkbox3 = getParameterByName("t3");
var checkbox4 = getParameterByName("t4");
var checkbox5 = getParameterByName("t5");
var checkbox6 = getParameterByName("t6");
var checkbox7 = getParameterByName("t7");
var elementos = "";
if (checkbox1 != null) {
    elementos = elementos + checkbox1 + " ";
} 
if (checkbox2 != null) {
    elementos = elementos + checkbox2 + " ";
}
if (checkbox3 != null) {
    elementos = elementos + checkbox3 + " ";
}
if (checkbox4 != null) {
    elementos = elementos + checkbox4 + " ";
}
if (checkbox5 != null) {
    elementos = elementos + checkbox5 + " ";
}
if (checkbox6 != null) {
    elementos = elementos + checkbox6 + " ";
}
if (checkbox7 != null) {
    elementos = elementos + checkbox7;
}

var cometarios = getParameterByName("text_area");

// Muestra los datos en la página (Aqui es donde añadimos el mensaje para mostrar los datos en la pagina.)
document.write("<p><b>Nombre:</b> " + nombre + "</p>");
document.write("<p><b>Apellidos:</b> " + apellidos + "</p>");
document.write("<p><b>Email:</b> " + email + "</p>");
document.write("<p><b>Lado de aplicación:</b> " + lado + "</p>");
document.write("<p><b>Nivel de experiencia:</b> " + nivelExperiencia + "</p>");
document.write("<p><b>Tecnologías elegidas:</b> " + elementos + "</p>");
document.write("<p><b>Comentarios adicionales:</b> " + cometarios + "</p>");
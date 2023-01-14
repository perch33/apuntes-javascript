/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById("button");

button.addEventListener("click", () => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");

  xhr.addEventListener("load", (data) => {
    const dataJASON = JSON.parse(data.target.response);

    const list = document.getElementById("list");
    const imagen = document.getElementById("imagen");

    for (const userInfo of dataJASON) {
      const listItem = document.createElement("li");
      const imagenes = document.createElement("img");
      listItem.textContent = `${userInfo.id} ${userInfo.title}`;
      list.appendChild(listItem);
      imagenes.src = `${userInfo.url}`;
      imagen.appendChild(imagenes);
    }
  });

  xhr.send();
});

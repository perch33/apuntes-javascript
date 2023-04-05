/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

/* 
    FileReader.readAsDataURL()
    Comienza la lectura del contenido del objeto Blob, una vez terminada, el atributo result contiene un data: URL que representa los datos del fichero.

    FileReader.readAsText()
    Comienza la lectura del contenido del objeto Blob, una vez terminada, el atributo result contiene el contenido del fichero como una cadena de texto.
*/

const fileInput = document.getElementById("file");
const img = document.getElementById("img");
const images = document.getElementById("images");
const text = document.getElementById("text");

/* para leer texto TXT */

/* fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

 para acceder a file reader - leer texto 
  const fileReader = new FileReader();

  fileReader.readAsText(file);
  fileReader.addEventListener("load", (e) => {
    text.textContent = e.target.result;
  });
}); */

/* carga simple de imágenes */
/* fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];


  const fileReader = new FileReader();

  fileReader.readAsDataURL(file);
  fileReader.addEventListener("load", (e) => {
    img.setAttribute("src", e.target.result);
  });
});
 */

/* carga multiple de imágenes */
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;

  const fragment = document.createDocumentFragment();

  for (const file of files) {
    const fileReader = new FileReader();
    const img = document.createElement("img");
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", (e) => {
      img.setAttribute("src", e.target.result);
    });
    fragment.appendChild(img);
  }
  images.appendChild(fragment);
});

const fileInput = document.getElementById("file");
const progress = document.getElementById("progress");

/* primera forma */

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  /* para ver la barra de progreso, lo que importa es el loaded y total */
  fileReader.addEventListener("progress", (e) => {
    progress.style.width = Number.parseInt((e.loaded * 100) / e.total) + "%";
  });
  fileReader.addEventListener("loadend", () => {
    progress.style.width = "100%";
  });
});


/* Segunda Forma */

/* const root = document.documentElement;

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener("progress", (e) => {
    root.style.setProperty(
      "--bar-width",
      'Number.parseInt((e.loaded * 100) / e.total) + "%"'
    );
  });
  fileReader.addEventListener("loadend", () => {
    root.style.setProperty("--bar-width", "100%");
  });
});
 */
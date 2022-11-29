function cargarResults(results) {
  const contenedor = document.querySelector(".content");
  const template = document.querySelector("#template-card");

  for (const item of results) {
    //imagen
    const imagenEl = template.content.querySelector(".imagen");
    imagenEl.src = item.fields.image;

    //titulo
    const titleEl = template.content.querySelector(".titulo");
    titleEl.textContent = item.fields.titulo;

    //descripcion
    const descriptionEl = template.content.querySelector(".descripcion");
    descriptionEl.textContent = item.fields.descripcion;

    //url
    const urlEl = template.content.querySelector(".ver");
    urlEl.href = item.fields.url;

    //clone
    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function main() {
  fetch(
    "https://cdn.contentful.com/spaces/o191ztp8knl5/environments/master/entries?access_token=f-29-PMxDe-lbvmPiFoddeoxRea891nfsNqGf_lH-5Y"
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      cargarResults(datos.items);
    });
}

main();

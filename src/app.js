/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Tortugas del mundo");
  const Ninjas = [
    {
      id: 1,
      name: "Tortuga verde",
      info:
        "La tortuga verde es una especie típica de aguas tropicales, es la tortuga marina que presenta mayor número de hembras reproductoras a nivel mundial y es la segunda especie más abundante del Mediterráneo. Relativamente frecuente en el sur del estrecho de Gibraltar y en el Mediterráneo oriental. Las zonas de nidificación más importantes en el Mediterráneo son Turquía y Chipre.",
      imageUrl:
        "https://www.ucf.edu/wp-content/blogs.dir/20/files/2021/02/juvenile_green_sea_turtle_for_web.jpg"
    },
    {
      id: 2,
      name: "Tortuga carey",
      info:
        "La Tortuga Carey es una tortuga marina que se distribuye en zonas tropicales, así como en aguas subtropicales del Atlántico, Índico y Pacífico. Es un animal muy viajero, capaz de nidificar en al menos 70 países del mundo. ",
      imageUrl:
        "https://content.nationalgeographic.com.es/medio/2020/05/11/la-tortuga-carey-es-una-especie-en-peligro-de-extincion_c8021c30_1280x853.jpg"
    },
    {
      id: 3,
      name: "Tortuga boba",
      info:
        "La tortuga boba se localiza prácticamente en todos los mares y océanos cálidos del planeta, dependiendo de su ciclo de vida, es posible encontrarla tanto en mar abierto como en aguas poco profundas, zonas costeras, bahías y estuarios, acercándose únicamente a las playas de nacimiento para el desove. ",
      imageUrl:
        "https://content.nationalgeographic.com.es/medio/2022/12/15/son-tortugas-de-caparazon-duro_00000000_221215165937_1200x800.jpg"
    },
    {
      id: 4,
      name: "Tortuga Ninja",
      info:
        "La tortuga boba se localiza prácticamente en todos los mares y océanos cálidos del planeta, dependiendo de su ciclo de vida, es posible encontrarla tanto en mar abierto como en aguas poco profundas, zonas costeras, bahías y estuarios, acercándose únicamente a las playas de nacimiento para el desove. ",
      imageUrl:
        "https://content.nationalgeographic.com.es/medio/2022/12/15/son-tortugas-de-caparazon-duro_00000000_221215165937_1200x800.jpg"
    }
  ];
  let cardHTML = "";
  Ninjas.map((item, id) => {
    cardHTML += `
        <div key=${id} class="card" style="width: 18rem;">
          <img class="card-img-top" src=${item.imageUrl} alt=${item.name} />
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">
              ${item.info}
            </p>
            <a href="#" class="btn btn-primary">Saber más</a>
          </div>
        </div>
  `;
  });

  const cardNinjas = document.querySelector("#card");
  cardNinjas.innerHTML = cardHTML;
};

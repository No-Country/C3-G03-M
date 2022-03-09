<template>
<div class="containerAlquile">
    <div class="container lista-alquiler" id="cont-principal">
      <div
        class="row"
        v-for="prenda in Prendas"
        :key="prenda.id"
        :value="Prendas.id" id="loop"
      >
        <div class="col-lg-4 card rounded item" id="cardImg1">
          <img
            class="img-fluid imagenes-formato img-centrada card-img img-tamanio"
            id="img-1"
            :src="prenda.img"
            alt=""
          />
          <div class="card-img-overlay text-start mx-2" id="contenedorFavorito">
            <button class="btn-img btn card-title" id="btnFavorito">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                color="#FF3838"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12">
              <h4 class="text-capitalize">{{ prenda.descripcion }}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus culpa impedit earum labore consequuntur assumenda
                porro quod nostrum, voluptatem illum praesentium repellendus
                reprehenderit ipsam, nemo alias saepe sed dolores! Fugit.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h5>$ {{ prenda.precio }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
</template>

<script>
import axios from "axios";
export default {
  nmae: "Content",

  data: function () {
    return {
      Prendas: [],
    };
  },
  created: async function () {
    this.getPrendas();
  },

  methods: {
    getPrendas: async function () {
      axios
        .get(`https://accountbak.herokuapp.com/getPrendas/`, { headers: {} })
        .then((result) => {
          this.Prendas = result.data;
        })
        .catch((error) => alert("hubo un error al cargar los pedidos"));
    },
  },
};
</script>
<style>
.lista-alquiler {
  width: 900px;
  height: 750px;
  overflow: scroll;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 8px 10px 20px -10px rgb(189, 186, 186);
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
}

.lista-alquiler-h4 {
  height: 100px;
  width: 850px;
  border-radius: 10px;
  border: 1px solid rgb(228, 234, 253);
}

.lista-alquiler-h4:hover {
  background-color: rgb(117, 243, 201);
}

.containerAlquiler:hover {
  background-color: rgb(252, 191, 244);
}

.img-tamanio {
  height: 160px !important;
  width: 160px !important;
}

#cont-principal {
    transform: translate(0%,30%);

}

#loop{
    height: 36% !important;
}
</style>
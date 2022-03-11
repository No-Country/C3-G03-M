<template>
    <div class="row" id="tituloSegundo">
      <div class="col my-3 titulos-margen">
        <h4>Prendas para ti</h4>
      </div>
    </div>



  <div class="row" id="card-compra">
    <div
      class="col-lg-4 col-md-6 col-sm-10 card rounded zoom"
      id="cardImg1"
      v-for="prenda in Prendas"
      :key="prenda.id"
      :value="Prendas.id"
    >
      <img
        class="img-fluid img-centrada card-img-top"
        id="img-1"
        placeholder="img"
        :src="prenda.img"
      />
      <div class="card-img-overlay mx-2" id="contenedorFavorito">
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

      <div class="card-body mx-4">
        <div class="card-title">
          <h3 class="text-capitalize">{{ prenda.descripcion }}</h3>
        </div>

        <div class="card-text">
          <h1>$ {{ prenda.precio }}</h1>
        </div>
        <button class="btn btn-danger" type="submit" id="compra">
          Comprar
        </button>
      </div>
    </div>
  </div>



  <!-- <div
        class="col-lg-4 col-md-4 col-sm-4 card mx-4"
        v-for="prenda in Prendas"
        :key="prenda.id"
        :value="Prendas.id"
      >
        <img class="img card-img my-4" placeholder="img" :src="prenda.img" />
        <div class="card-body mx-4">
          <div class="card-title">
            <h3 class="text-capitalize">{{ prenda.descripcion }}</h3>
          </div>

          <div class="card-text">
            <h1>$ {{ prenda.precio }}</h1>
          </div>
        </div>
      </div>
    </div>-->
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
/* .lista-alquiler {
  width: 100%;
  height: 740px;
  overflow: scroll;
  margin-top: 50px;
  background-color: rgb(245, 241, 241);
} */

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
}

/* .lista-alquiler-h1 {
  display: inline-block;
  overflow: hidden;
  height: 400px;
  width: 400px;
  border: 1px solid rgb(235, 235, 245);
  margin-left: 15px;
  margin-top: 15px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 8px 10px 20px -10px rgb(189, 186, 186);
} */

.card:hover {
  background-color: rgb(98, 139, 129);
  box-shadow: 8px 10px 20px -10px rgb(134, 133, 133);
}

img {
  max-height: 350px;
}
.btn {
  color: #fff;
  border-color: #dc3545;
  z-index: 8;
}

.btn:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.card-img-overlay {
  height: 200px;
}

#card-compra {
  transform: translate(-50%, -25%);
}
/* .pedidos {
  border: 1px solid rgb(255, 252, 252);
  border-radius: 10px;
  background-color: rgb(245, 241, 241);
} */
</style>
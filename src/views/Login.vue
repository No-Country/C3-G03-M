<template>
     
    <!-- ###### Contenedor principal start #####-->
      <div class="container" id="contenido-card">
        <div class="card row "  id="contenido-card">
            <div class="container-fluid col-lg-10 col-md-10 col-sm-8">
                <div class="card-body">
                  <h5 class="card-title mt-4">¡Hola! Ingresa tu email y contraseña</h5>

                  <div class="mb-3 my-4">
                    <label for="exampleFormControlInput1" class="form-label">Direccion de Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                  </div>
               
                  <div class="text-center my-3">
                    <a href="#" class="btn btn-outline-danger btn-lg text-center mt-3" id="btn-comenzar">Comenzar</a>
                </div>
                
                </div>
                <div class="text-center my-2 mb-4">
                    <a href="#" class="btn link-danger">Crear cuenta</a>
                </div>

            </div>
          </div>
  
      </div>
      <!-- ###### Contenedor principal end #####-->

</template>
 <script>
 export default {
     name:"Login"
 }
 </script>

 <style>
 .imagenes-formato {
    border-radius: 1rem;
}

#contenido-card {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-box-shadow: 9px 5px 18px -10px rgba(0,0,0,0.85);
    -moz-box-shadow: 9px 5px 18px -10px rgba(0,0,0,0.85); 
}
 </style>
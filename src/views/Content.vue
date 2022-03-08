<template>

<div class="pedidos">
    <center>
         <div class="lista-alquiler">
   
    <h1
     class="lista-alquiler-h1"
     v-for="prenda in Prendas"
        :key="prenda.id"
        :value="Prendas.id">
        
        <center>
           <img class="img" placeholder ="img" :src="prenda.img"/> |{{prenda.descripcion}} |{{prenda.precio}}
           
        </center>
          
        
    </h1>
       
 
     </div>
    </center>
   
</div>
    
</template>

<script>
import axios from 'axios';
export default {
    nmae:"Content",

  data: function(){
        return {
            Prendas:[],
        }
    },
     created: async function() {
    this.getPrendas();
  },
    
    methods:{
        getPrendas: async function(){
           
           axios.get(`https://accountbak.herokuapp.com/getPrendas/`,
             {headers:{}}).then((result)=> {
                 this.Prendas = result.data;
             }).catch((error) => alert("hubo un error al cargar los pedidos"));
        }
    },
}
</script>
<style>
.lista-alquiler{
    width:900px;
    height:500px;
    overflow: scroll;
    margin-top:50px;
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

.lista-alquiler-h1{
    height:100px;
    width:850px;
    border-radius: 10px;
    border: 1px solid rgb(228, 234, 253);
}

.lista-alquiler-h1:hover{
    background-color:rgb(117, 243, 201);
}

.containerAlquiler:hover{
    background-color:rgb(252, 191, 244);
}
.img{
    height:50px;
    width:50px;
}
/* Estilo footer start */
#footer{
    background-color: #424242;
    width: 100%;
    height: 140px;
    position: unset;
    bottom: 0px;
   
  
}

.logo-footer {
   
    color: #FFFFFF; 
    font-size: 28px;
    font-style: normal;
    line-height: 40px;
    text-align: center;
    padding-top: 25px;
    
   
}

#hr {
    height: 2px;
    color: #ffffff;
    width: 70%;
    opacity: 0.5;
    margin-left: auto;
    margin-right: auto;

}

#iconosRedes {
    width: 150px;
    margin-left: auto;
    margin-right: auto;

}

/* Estilo footer end */
</style>
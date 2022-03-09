<template>

<div class="pedidos">
    <center>
         <div class="lista-alquiler">
   <div
     class="lista-alquiler-h1"
     v-for="prenda in Prendas"
        :key="prenda.id"
        :value="Prendas.id">
         <img class="img" placeholder ="img" :src="prenda.img"/>
         <div>
           <h3>{{prenda.descripcion}}</h3> 
         </div>
         
         <div>
           <h1>Valor:{{prenda.precio}}</h1>  
        </div>
          
    </div>
       
 
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
*{
    /*border: 1px solid;*/
}


.lista-alquiler{
    width:100%;
    height:740px;
    overflow: scroll;
    margin-top:50px;
    background-color: rgb(245, 241, 241);
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
    display: inline-block;
    overflow: hidden;
    height:400px;
    width:400px;
    border: 1px solid rgb(235, 235, 245);
    margin-left: 15px;
    margin-top: 15px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 8px 10px 20px -10px rgb(189, 186, 186);
}

.lista-alquiler-h1:hover{
    background-color:rgb(232, 236, 235);
    box-shadow: 8px 10px 20px -10px rgb(134, 133, 133);
}

.img{
    height:300px;
    width:100%;
}

.pedidos{
    border: 1px solid rgb(255, 252, 252);;
    border-radius: 10px;
    background-color: rgb(245, 241, 241);
}
</style>
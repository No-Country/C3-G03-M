<template>
   <body>
     <!-- ###### Contenedor principal start #####-->
   
      <div class="container-fluid" id="contenido">
        <div class="card row ">
            <div class="container-fluid col-lg-10 col-md-10 col-sm-8">
              <div class="card-body">
                <h5 class="card-title mt-4">¡Hola! Gracias por registrarte</h5>
    
                <form class="row g-3">
                  <div class="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <label for="validationDefault01" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="validationDefault01"  placeholder="Name" required>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <label for="validationDefault02" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" required>
                  </div>
    
                  <div class="col-lg-12 col-md-12 col-sm-12 ">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    </div>
                    <div class="input-group">
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                        required>
                    </div>
    
                    <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                      <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
                      <input type="password" class="form-control" id="inputPassword" placeholder="Password" required>
                    </div>
    
                    <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                        <label class="form-check-label" for="invalidCheck2">
                          Acepto terminos y condiciones
                        </label>
                      </div>
                    </div>
                    <div class="text-center my-3">
                      <button class="btn btn-outline-danger btn-lg text-center mt-3" type="submit">Comenzar</button>
                      <!-- <a href="#" class="btn btn-outline-danger btn-lg text-center mt-3" id="btn-comenzar">Comenzar</a> -->
                    </div>
    
                </form>
    
              </div>
                <div class="text-center my-2 mb-4">
                    <a href="#" class="btn link-danger">Ya tengo cuenta</a>
                </div>

            </div>
          </div>
  
    </div>
  
      <!-- ###### Contenedor principal end #####-->
</body>
</template>

<script>
export default {
  name: 'SingUp',
  components: {
    
  }
}
</script>

<style>

/* normalize.css */
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}
/**
 * Render the `main` element consistently in IE.
 */
main {
  display: block;
}
/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}
/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}
/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}
/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}
/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}
/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}
/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}
/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}
/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}
/* styles.css */
/* Estilos Navbar start */
body {
    width: 100%;
    height: 100%;
}
.sin-guion a {
    text-decoration:none;
}
.bg-navbar {
    background-color: #ffffff;
}
#logo, #btn-navbar {
    margin-left: auto;
    margin-right: auto;
}
.navbar-collapse {
    flex-grow:0.5 !important;
}
.navbar-light .navbar-brand {
    color:#FF3838 !important;
}
/* Estilos Navbar end */
.banner {
position: absolute;
height: 202px;
width: 100%;
left: 0px;
top: 76px;
background-image: url("https://source.unsplash.com/random/1440x202?sig=1" );
}
.titulo{
font-family: Rubik;
font-style: normal;
font-size: 30px;
line-height: 36px;
color: #FFFFFF; 
position: absolute;
height: 46px;
left: 6%;
top: 84px;
}
.buscador {
position: relative;
top: 181px;
left: auto;
right: auto;
display: none;
}
.titulos-margen {
    margin-left: 3% !important;
}
.sin-borde {
    border-left: none;
    border-top-right-radius: 0.5rem !important;
    border-bottom-right-radius: 0.5rem !important;
    background-color: #F5F5F5 !important;
}
.sin-borde img {
    border-radius: 1rem;
}
.borde-redondeado{
    border-top-left-radius: 0.5rem !important;
    border-bottom-left-radius: 0.5rem !important;
    border-right: none !important;
    background-color: #F5F5F5 !important;
}
.show > .nav-link,
.nav-link.active {
color: #FFFFFF;
}
.cont-nav {
    z-index: 1000;
    background-color: #FFFFFF;
}
#tituloSegundo{
    position: relative;
    margin-top: 240px;
}
#imgProducto  div{
    padding-bottom: 10px;
    width: auto;
   
}
.btn-img {
    position: absolute;
}
.card-img  {
    border-radius: 1.5rem !important;
    
}
#imgProductoDos div{
    padding-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  
}
#imgBanner2 {
    margin-left: auto;
    margin-right: auto;
}
/* Estilos Card start */
.imagenes-formato {
    border-radius: 1rem;
}
#contenido {
    
    width: 400px;
    height:635px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-42%);
    -webkit-box-shadow: 9px 5px 18px -10px rgba(0,0,0,0.85);
    -moz-box-shadow: 9px 5px 18px -10px rgba(0,0,0,0.85); 
}
#btnFavorito {
    border-radius: 2.5rem;
    border: 0;
    opacity: 1.2;
    margin-left: auto;
    margin-right: auto;
    overflow-anchor: none;
    padding: 10px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.582);
    cursor: pointer;
    width: 40px;
    /* left: 45%;
  */
}
.card {
    background-color: none !important;
    margin-bottom:100px;
}
#cardImg1 , #cardImg2, #cardImg3, #cardImg4, #cardImg5 {
    border: none;
    background-color: #fff0;
 
  
}
#cardImg4, #cardImg5 {
    width: 550px;
    height: 350px;
}
.zoom:hover .card-img {
    -webkit-transform:scale(1.3);
    transform:scale(1.3);
    transition-duration: 3s;
}
.zoom {
    overflow:hidden;
    
}
/* Estilos Card end */
/*Estilos de scroll doble start*/
.sc {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 800px;
    border-radius: 10px;
}
.scroll::-webkit-scrollbar {
    width: 8px;
    height: 0px;
   
}
.scroll::-webkit-scrollbar-thumb {
    background: #ff3838d8;
    border-radius: 5px;
    border-left: 1px solid #868686;
}
#scroll-2::-webkit-scrollbar{
    width: 8px;
    height: 0px;
}
.scroll::-moz-srollbar {
    width: 8px;
    height: 0px;
}
.scroll::-moz-srollbar-thumb {
    background: #FF3838;
    border-radius: 5px;
}
.scroll {
    width: 80%;
    overflow-x: hidden;
    overflow-y: scroll;
    /* background-color: #fcfcfc; */
    background-color: #424242;
    margin: 10%;
}
.item {
    width: 80%;
    height: 250px;
    margin: 10% auto;
}
/*Estilos de scroll doble end*/
/* Estilo footer start */
#footer{
    background-color: #424242;
    width: 100%;
    height: 140px;
    position: unset;
    bottom: 0px;
    position: absolute;
  
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

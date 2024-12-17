<template>
    
<footer>
<div class="footer">
<div class="row">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contato</a></li>
<li><a href="#">Serviços</a></li>
<li><a href="#">Privacidade e Políticas</a></li>
<li><a href="#">Termos e Condições</a></li>
<li><a href="#">Carreira</a></li>
</ul>
</div>

<div class="row">
HSR Camarões Copyright © 2024 HSR - Todos os Direitos Reservados || 
</div>
</div>
</footer>
</template>

<style scoped>


.footer{

background:#000;
padding: 20px 0px;
font-family: 'Play', sans-serif;
text-align:center;
z-index: 1000;
}

.footer .row{
width:100%;
padding:1px;
color:gray;
font-size:0.8em;
}

.footer .row a{
text-decoration:none;
color:gray;
transition:0.5s;
margin: 2px;
}

.footer .row a:hover{
color:#fff;
}

.footer .row ul{
width:100%;
}

.footer .row ul li{
display:inline-block;
margin:0px 30px;
}

.footer .row a i{
font-size:2em;
margin:0% 1%;
}

@media (max-width:720px){
.footer{
text-align:left;
padding:5%;
}
.footer .row ul li{
display:block;
margin:10px 0px;
text-align:left;
}
.footer .row a i{
margin:0% 3%;
}
}
</style>
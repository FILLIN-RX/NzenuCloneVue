<template>
    <nav class="w-100 p-0 ">
        <div class="row">
            <div class="col-lg-2 col-md-5 col-sm-2">
                <div class="row">
                    <div class="col-lg-4 col-md-2 col-sm-2">
                        <router-link class="nav-link" to="/">
                            <img src="../assets/logo_Nzenuhost1_copie_2_4x-8_rnfqnu.png" alt="">
                        </router-link>
                    </div>
                    <div class="col-lg-8 col-md-10 col-sm-10">
                        <div class="row logos">
                            <div class="col">
                                <p>Avis client</p>
                            </div>
                            <div class="col">
                                <p>L'hébergement web accessible à tous</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-7 col-sm-6 ">
                <div class="row RechercheWhois">
                    <div class="col contact2">
                        <div class="row non">
                            <div class="col-lg-1 col-sm-1 col-md-1"></div>
                            <div class="col"><a href="">657 882 614</a></div>
                        </div>
                        <div class="row non">
                            <div class="col-sm-1" style="display: flex; justify-content: center; align-items: center;">|</div>
                            <div class="col">
                                <a href="">671 087 727</a>
                            </div>
                        </div>
                        <div class="row non">
                            <div class="col"></div>
                            <div class="col">
                                <a href="">support</a>
                            </div>
                        </div>
                        <div class="row non">
                            <div class="col-lg-1 col-md-1 col-sm-1"></div>
                            <div class="col"><a href="">
                                Espace client
                            </a></div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <img src="../assets/b5faddc2-a770-4410-a6c1-7b2fd334e9f6.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row non">
                    <div class="col">
                        <p>Plus de 280 000 sites hébergés</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="row bg-light non">
            <ul>
                <li><router-link class="nav-link" to="/">Nom de domaine</router-link>
                    <div class="link-content">
                        <ul>
                            <li></li>
                            <li><router-link class="nav-link" to="/enregistrer">Enregistrer un nom de domaine</router-link></li>
                            <li><router-link class="nav-link" to="/transferrer">Transférer un nom de domaine</router-link></li>
                            <li><router-link class="nav-link" to="/RechercheWhois">Recherche Whois</router-link></li>
                        </ul>
                    </div>
                
                
                </li>
                <li><router-link class="nav-link" to="/RechercheWhois">Hebergement</router-link>
                    <div class="link-content">
                        <ul>
                            <li></li>
                            <li><router-link class="nav-link" to="/mutualiser">Hebergement mutualiser</router-link></li>
                            <li><router-link class="nav-link" to="/wordpress">Hebergement Wordpress</router-link></li>
                            <li><router-link class="nav-link" to="/prestashop">Hebergement Prestashop</router-link></li>
                            <li><router-link class="nav-link" to="/migration">Migration d'Hebergement</router-link></li>
                        </ul>
                    </div>
                
                
                
                
                </li>
                <li><router-link class="nav-link" to="/email">Email</router-link></li>
                <li><router-link class="nav-link" to="/certificat-ssk">Certificate SSL</router-link></li>
                <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
// rien besoin ici
</script>

<style scoped>
    template{
        color: black;
    }
    nav{
        background-color: #1045A5;
    }
    a{
        color: black;
        margin: 0;
        padding: 0;
    }
    img{
        width: 50px;
        height: 50px;
    }
    .logos{
        display: flex;
        align-items: center; 
        flex-direction: column; /* Added to center items vertically */
    }
    .contact2{
        display: flex;
        align-items: center; 
        justify-content: space-evenly;
         /* Added to center items vertically */
    }
    .contact2 a {
        margin-right: 10px;  /* Added margin to space out RechercheWhois links */
    }
    .RechercheWhois{
        display: flex;
        align-items: center; 
        flex-direction: column; /* Added to center items vertically */
    }
    .bg-primary{
        display: flex;
        justify-content: space-evenly; /* Added to center items horizontally */
    }
    .bg-light ul{  /* Added the missing dot for class selector */
        display: flex;
        justify-content: space-around; /* Added to center items horizontally */
        list-style-type: none;
        
        position: relative;


    }
    .bg-light li{  /* Added styles for list items in bg-light */
        margin: 0 ; /* Added margin for spacing */
    }
    .link-content ul{
         /* Hide the dropdown by default */
        position: absolute; /* Position it absolutely */
        background-color: white; /* Background color for dropdown */
        border: 1px solid #ccc; /* Border for dropdown */
        padding: 10px; /* Padding for dropdown */
        display: flex;
    
        flex-direction: column;
        text-align: left; /* Align text to the left */
    }
    .link-content {
    
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 10;
    }

    .nav-link:hover .link-content {
        display: block;
    }

    li:hover .link-content {
         display: block;
    }
/* pas de style pour le moment */
/* ton style perso si besoin */
    @media (max-width: 576px) {
        .logos {
            flex-direction: column;
            text-align: start;
        }
        .non{
            display: none;
        }
    }
    @media (min-width:999px) and (max-width: 1200px) {
        
        
    }
</style>
  
<template>
    <nav :class="{'scrolled-nav':scrollNav}">
        <div class="row container237">
            <div class=" col-md-5 col-sm-12 col-lg-6 logo1 text-start">
                <div class="row">
                    <div class="col-2 col-sm-2  m-0">
                        <router-link class="nav-link" to="/">
                            <img src="../assets/logo_Nzenuhost1_copie_2_4x-8_rnfqnu.png" class="logo" alt="">
                        </router-link>
                    </div>
                    <div class="col">
                        <div class="row logos">
                            <div class="col">
                                <p v-if="!mobile">Avis client </p><i class="bi bi-star-fill text-warning"></i>
                            </div>
                            <div class="col col-sm-12">
                                <p>L'hébergement web accessible à tous</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="icon" v-show="mobile">
                    <img @click="toggleMobileNav" :class="{ 'icon-active':mobileNav}" src="../assets/8604bcf1-d9e9-4924-ab99-89e8a04d5de4.svg" alt="">
            </div>
            <div  v-if="!mobile" class="col-lg-6 col-md-7 col-sm-6  ">
                <div class="row RechercheWhois">
                    <div class="col contact2">
                        <div class=" d-flex col justify-content-center align-items-center">
                            <img src="../assets/9b15aa35-ae1e-4ac0-a2bd-c6db8224f258.svg" alt="">
                            <a href="">657 882 614</a><span>|</span> <a href="">671 087 727</a>
                        </div>
                        <div class=" d-flex col justify-content-center align-items-center">
                            <img src="../assets/364b0b55-515d-4284-92b5-09681c8539ce.svg" alt="">
                            <a href="">support</a>
                        </div>
                        <div class=" d-flex col justify-content-center align-items-center">
                            <img src="../assets/6cce5943-9d6d-48e0-ba6b-74daddf11190.svg" alt="">
                            <router-link class="nav-link" to="/login">Espace client</router-link>
                        </div>
                        <div class="row" v-show="!mobile">
                            <div class="col-1">
                                <img src="../assets/b5faddc2-a770-4410-a6c1-7b2fd334e9f6.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>Plus de 280 000 sites hébergés</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="row bg-light">
            <ul v-show="!mobile">
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
                <li><router-link class="nav-link" to="/Dashboard">Blog</router-link></li>
            </ul>
            
            
            
        </div>
        <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown">
                    <li><router-link class="nav-link" to="/enregistrer">Enregistrer un nom de domaine</router-link></li>
                    <li><router-link class="nav-link" to="/transferrer">Transférer un nom de domaine</router-link></li>
                    <li><router-link class="nav-link" to="/RechercheWhois">Recherche Whois</router-link></li>
                    <li><router-link class="nav-link" to="/mutualiser">Hebergement mutualiser</router-link></li>
                    <li><router-link class="nav-link" to="/wordpress">Hebergement Wordpress</router-link></li>
                    <li><router-link class="nav-link" to="/prestashop">Hebergement Prestashop</router-link></li>
                    <li><router-link class="nav-link" to="/migration">Migration d'Hebergement</router-link></li>
                    <li><router-link class="nav-link" to="/email">Email</router-link></li>
                    <li><router-link class="nav-link" to="/certificat-ssk">Certificate SSL</router-link></li>
                    <li><router-link class="nav-link" to="/Dashboard">Blog</router-link></li>
                </ul>
            </transition>
    </nav>
</template>

<script >
    export default{
        data() {
            return {
                scrollNav:null,
                mobile:null,
                mobileNav:null,
                WindowWidth: null,
            };
        },
        created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
        },
        mounted() {
            window.addEventListener("scroll", this.updateScroll);
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav = !this.mobileNav
            },
            checkScreen(){
                this.WindowWidth = window.innerWidth;
                if (this.WindowWidth<=750) {
                    this.mobile = true;

                    return;
                    
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            },
            updateScroll(){
                const scrollPosition = window.scrollY;
                if (scrollPosition>50) {
                    this.scrollNav=true;
                    return;
                    
                }
                this.scrollNav = false;

            }

        },
    }
</script>

<style scoped>
    template{
        color: black;
    }
    nav{
        background-color: #1045A5;
        position: fixed;
        z-index: 999;
        transition: 500ms ease all;
        width: 100%;
        font-size: 1em;
        

         .mobile-nav-enter-active,
         .mobile-nav-leave-active {
            transition: 1s ease all;
         }

         .mobile-nav-enter-from,
         .mobile-nav-leave-to{
            transform: translateX(-250px);
         }
         .mobile-nav-enter-to {
            transform: translateX(0);
         }
        
    }
    a{
        color: black;
        margin: 0;
        padding: 0;
    }
    img{
        width: 40px;
        height: 50px;
    }
    .dropdown{
        flex-direction: column;
        justify-content: flex-start;
        text-align: start;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        padding-left: 30px;
        background-color: #fff;
        top: 0;
        left: 0;
        transition: 500ms ease all;

         li{
            list-style-type: none;
            margin: 10px;
            color: black ;
         }
    }
    .logos{
        display: flex;
        justify-content: flex-start;
        align-items: center; 
        flex-direction: column;
        flex-grow: 2; /* Added to center items vertically */

        & .col-sm-12{
            font-size: small;
            text-align: start;
        }
    }
    .contact2{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        align-items: center; 
        justify-content: space-evenly;

        .row{
            grid-template-columns: 1fr 3fr;
        }
         /* Added to center items vertically */
    }
    .contact2 a {
        margin-right: 10px;  /* Added margin to space out RechercheWhois links */
    }
    .RechercheWhois{
        display: flex;
        align-items: center; 
        flex-direction: column;
        justify-content: flex-end;
        text-align: end;
        flex: 2; /* Added to center items vertically */
        margin: 0;
        padding: 0;
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
    display: none;
    }

    .nav-link:hover .link-content {
        display: block;
    }

    li:hover .link-content {
         display: block;
    }
    .contact2 img{
        width: 20px;
    }
    .logo{
        width: 65px;
        height: 65px;
    }
    .icon {
    display: flex;
    align-items: center;
    position: relative; /* Remplacer absolute par relative */
    top: 0;
    margin: 5px;
    justify-content: flex-end; /* Corrected to use flex-end */
    right: 24px; /* Tu peux ajuster cette valeur si besoin */
    cursor: pointer;
    transition: 500ms ease all;
}

    .container237{
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex: 1;
        margin: 0;
        padding: 0;
        
    }
    .icon-active{
        transition: 500ms ease all;
        transform: rotate(90deg);
    }
    .scrolled-nav {
    
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);

        .logo{
            
                width: 45px;
                height: 45px;
            
        }
        .bg-light{
            display: none;
        }
    }
/* pas de style pour le moment */
/* ton style perso si besoin */
@media (max-width: 750px) {
        .container237 {
            flex-direction: column; /* Sur mobile, empiler les éléments verticalement */
            align-items: center; /* Alignement des éléments au centre */
        }
        .col-sm-8{
            font-size: small;
        }
        .logo1 {
            width: 100%;
        }

        .logos {
            width: 85%;
            text-align: right; 
            ;/* Alignement à droite pour le texte */
        }
        .logo {
        width: 60px; /* Taille réduite pour les petits écrans */
        height: 60px;
    }
        .bg-light ul {
            display: none; /* Cacher le menu principal pour mobile */
        }
        .icon {
        position: absolute; /* Permet à l'icône de flotter en haut à droite sur mobile */
        top: 10px;
        right: 10px;
    }
    }

    @media (min-width: 750px) {
        .logo {
            width: 90px;
            height: 90px;
        }
        .container237{
            padding: 0 15%;
        }
        .bg-light{
            padding: 0 15%;
        }
    }
    @media (max-width: 300px) {
        .logo {
            display: none;
        }
    }
        
    
</style>
  
<template>
  <nav :class="{ 'scrolled-nav': scrollNav }" class="fixed w-full">
    <div class="lg:px-40 flex md:h-20 h-15 justify-between bg-blue-900 space-y-3  py-4   index-90 text-white sm:px-5">
        
            <div class="flex py-5 space-y-5">
                <div class="items-center flex justify-center">
                    <router-link class="nav-link" to="/">
                    <img
                        src="../assets/logo_Nzenuhost1_copie_2_4x-8_rnfqnu.png"
                        class="w-20 items-center flex justify-center"
                        alt=""
                    />
                    </router-link>
                </div>
                <div class="items-center flex justify-center">
                    <div class="">
                    <div class="flex items-center space-x-2">
                        <p v-if="!mobile">Avis client</p>
                   
                    <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-yellow-500 w-5 h-5" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561=""><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-yellow-500 w-5 h-5" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561=""><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-yellow-500 w-5 h-5" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561=""><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-yellow-500 w-5 h-5" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561=""><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon text-yellow-500 w-5 h-5" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561=""><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path></svg>
                    </div>
                     </div>
                    <div class=" ">
                        <p>L'hébergement web accessible à tous</p>
                    </div>
                </div>  
            </div>
            
          </div>
        
    
      <div v-if="!mobile" >
        <div class="flex text-center">
          <div class="flex  space-x-5 space-y-1 ">
            <div class="flex space-x-2">
              <img
                src="../assets/9b15aa35-ae1e-4ac0-a2bd-c6db8224f258.svg"
                alt=""
              />
              <a href="">657 882 614</a><span>|</span>
              <a href="">671 087 727</a>
            </div>
            <div class="flex space-x-2">
              <img
                src="../assets/364b0b55-515d-4284-92b5-09681c8539ce.svg"
                alt=""
              />
              <a href="">support</a>
            </div>
            <div class="flex space-x-2">
              <img
                src="../assets/6cce5943-9d6d-48e0-ba6b-74daddf11190.svg"
                alt=""
              />
              <router-link class="nav-link" to="/login"
                >Espace client</router-link
              >
            </div>
            <div class="" v-show="!mobile">
              <div class="">
                <img
                  src="../assets/b5faddc2-a770-4410-a6c1-7b2fd334e9f6.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-center">
            <p>Plus de 280 000 sites hébergés</p>
          </div>
        </div>
      </div>
      <span class="i-heroicons-x-mark-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
      <svg xmlns="http://www.w3.org/2000/svg" @click="toggleMobileNav" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-8 h-8 cursor-pointer outline-none border p-1 rounded" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561=""><path fill="currentColor" d="M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h16q.425 0 .713.288T21 6t-.288.713T20 7zm0 12q-.425 0-.712-.288T3 18t.288-.712T4 17h16q.425 0 .713.288T21 18t-.288.713T20 19zm0-6q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13z"></path></svg>
    </div>

    <div class="bg-white">
      <ul v-show="!mobile" class="lg:px-40 flex justify-between font-bold text-blue-900">
        <li>
          <router-link class="nav-link" to="/">Nom de domaine</router-link>
          <div class="link-content">
            <ul>
              <li></li>
              <li>
                <router-link class="nav-link" to="/enregistrer"
                  >Enregistrer un nom de domaine</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/transferrer"
                  >Transférer un nom de domaine</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/RechercheWhois"
                  >Recherche Whois</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link class="nav-link" to="/RechercheWhois"
            >Hebergement</router-link
          >
          <div class="link-content">
            <ul>
              <li></li>
              <li>
                <router-link class="nav-link" to="/mutualiser"
                  >Hebergement mutualiser</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/wordpress"
                  >Hebergement Wordpress</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/prestashop"
                  >Hebergement Prestashop</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/migration"
                  >Migration d'Hebergement</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li><router-link class="nav-link" to="/email">Email</router-link></li>
        <li>
          <router-link class="nav-link" to="/certificat-ssk"
            >Certificate SSL</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/Dashboard">Blog</router-link>
        </li>
      </ul>
    </div>
    <transition name="mobile-nav">
      
      <ul v-show="mobileNav" class="dropdown space-y-3">
        <span
          class="i-heroicons-x-mark-20-solid flex-shrink-0 h-5 w-5 cursor-pointer"
          @click="toggleMobileNav"
          aria-hidden="true"
        ></span>
        <li class="bg-blue-900 w-full p-6 text-white">NzenuHost</li>
        <li>
          <router-link class="nav-link" to="/enregistrer"
            >Enregistrer un nom de domaine</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/transferrer"
            >Transférer un nom de domaine</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/RechercheWhois"
            >Recherche Whois</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/mutualiser"
            >Hebergement mutualiser</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/wordpress"
            >Hebergement Wordpress</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/prestashop"
            >Hebergement Prestashop</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/migration"
            >Migration d'Hebergement</router-link
          >
        </li>
        <li><router-link class="nav-link" to="/email">Email</router-link></li>
        <li>
          <router-link class="nav-link" to="/certificat-ssk"
            >Certificate SSL</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/Dashboard">Blog</router-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
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
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.WindowWidth = window.innerWidth;
      if (this.WindowWidth <= 750) {
        this.mobile = true;

        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
  },
};
</script>

<style scoped>
    .link-content{
        display: none;
    }
.fixed{
  z-index: 99;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}
.dropdown {
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    
    background-color: white;
    top: 0;
    left: 0;
    transition: 500ms ease all;


}
</style>

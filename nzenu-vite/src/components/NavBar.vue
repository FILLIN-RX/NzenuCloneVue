<template>
  <nav :class="{ 'scrolled-nav': scrollNav }">
    <div class="lg:px-40 flex md:h-20 h-15 justify-between bg-blue-900 space-y-3  text-white sm:px-5">
        
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
                    <div class="col">
                        <p v-if="!mobile">Avis client</p>
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
      <div class=" items-center flex justify-center" v-show="mobile">
                <img
                @click="toggleMobileNav"
                :class="{ 'icon-active': mobileNav }"
                src="../assets/8604bcf1-d9e9-4924-ab99-89e8a04d5de4.svg"
                alt=""
                />
            </div>
    </div>

    <div class="">
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
      <ul v-show="mobileNav" class="dropdown">
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
</style>

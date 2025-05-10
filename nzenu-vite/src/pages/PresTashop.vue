<template>
    <EntetePages  :titre="titre" :donnee="donnee" :photo="photo" backgroundColor="black"/>

    <section class="one">
        <h4 class="optionInclusMain">Pourquoi choisir notre hebergement Prestashop?</h4> 
   <div class="row align-items-center justify-content-center p-3 text-start">
  
        <CardOption
        :cardClass="['col-lg-3','col-sm-12','col-md-12','m-1']"
        title="Performance Exceptionnelle"
        content="Maximisez la vitesse de chargement de votre boutique en ligne grâce à notre infrastructure de pointe, assurant une expérience utilisateur fluide et réactive."
        />
    
        <CardOption
        :cardClass="['col-lg-3','col-sm-12','col-md-12','m-1']"
        title="Sécurité Renforcée"
        content="Votre tranquillité d'esprit est primordiale. Profitez de mesures de sécurité avancées et de certificats SSL pour protéger vos données et garantir la confiance de vos clients."
        />
    
        <CardOption
        :cardClass="['col-lg-3','col-sm-12','col-md-12','m-1']"
        title="Support Expert"
        content="Notre équipe de spécialistes PrestaShop est là pour vous guider à chaque étape. Bénéficiez d'un support technique avisé pour l'installation, la configuration et la maintenance de votre boutique en ligne."
        />
    
        <CardOption
        :cardClass="['col-lg-3','col-sm-12','col-md-12','m-1']"
        title="Mises à Jour Simplifiées"
        content="Restez à jour avec les dernières fonctionnalités de PrestaShop sans souci. Notre hébergement facilite les mises à jour pour une compatibilité et une sécurité constantes."
        />
    
        <CardOption
        :cardClass="['col-lg-3','col-sm-12','col-md-12','m-1']"
        title="Personnalisation Optimale"
        content="Profitez d'un accès complet aux paramètres du serveur, vous permettant de personnaliser l'environnement pour répondre précisément aux besoins de votre boutique."
        />
    
        <CardOption
        :cardClass="['col-lg-3','col-sm-12','col-md-12','m-1']"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
        />
   </div>
    </section>
    <section id="sectionForfait" style="background:#d1d5db; text-align: center;">
            <div class="forfait">
                <div class="row" id="first">
                    <div class="col-lg-6">
                        <h3>Prêt à Faire Décoller Votre Boutique PrestaShop ?</h3>
                        <p>Rejoignez des milliers de propriétaires de boutiques en ligne qui ont choisi notre hébergement web optimisé pour PrestaShop. Faites confiance à notre expertise pour garantir que votre boutique en ligne bénéficie de performances exceptionnelles, d'une sécurité solide et d'un support fiable. Lancez-vous dès aujourd'hui et commencez à offrir une expérience d'achat hors pair à vos clients.</p>

                    </div>

                </div>
                <div class="row" id="forfait">
                    <ChargerForfiat />
                </div>
                
            </div>
            
        </section>
</template>


<script setup>
   import EntetePages from '@/components/EntetePages.vue'
   import CardOption from '@/components/CardOption.vue'
   import ChargerForfiat from '../components/ChargerForfiat.vue';



   const titre = "Créez un site web professionnel avec notre hébergement PrestaShop";
   const donnee = "Choisissez notre hébergement PrestaShop pour bénéficier d’outils performants pour créer une boutique en ligne personnalisée et adaptée à vos besoins. Avec notre hébergement PrestaShop, vous pouvez vendre en ligne en toute sécurité et simplicité.";
   import photo from '@/assets/image (10).jpeg';
</script>

<style scoped>

    CardOption {
        min-height: 5rem;
        padding: 1rem; /* Adding padding for better spacing */
    }

    section{
        background-color: white;
    }
    #first{
        text-align: center;
        display: flex;
        justify-content: center;
    }


@media (min-width:999px) {
  .one{
    padding: 1% 10%;
  }
  

  
}

</style>
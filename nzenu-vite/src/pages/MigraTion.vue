<template>
  <EntetePages :titre="titre" :donnee="donnee" :photo="photo" />

  <section class="lg:px-40 text-center">
    <div class="flex justify-center text-center">
      <h4
        class="text-xl lg:text-3xl font-semibold lg:w-1/2 text-center items-center"
      >
        Pourquoi choisir NzenuHost pour la réussite de votre migration de site
        web
      </h4>
    </div>

    <div
      class="grid lg:grid-cols-3 gap-3 items-center justify-center p-3 text-start"
    >
      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
      />
      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
      />
      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
      />
    </div>
    <div class="text-center flex justify-center">
      <h4
        class="text-xl lg:text-3xl font-semibold lg:w-1/2 text-center items-center"
      >
        Comment Fonctionne la Migration Gratuite chez NzenuHost ?
      </h4>
    </div>

    <div
      class="grid lg:grid-cols-2 gap-3 items-center justify-center p-3 text-start"
    >
      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Performance Exceptionnelle"
        content="Maximisez la vitesse de chargement de votre boutique en ligne grâce à notre infrastructure de pointe, assurant une expérience utilisateur fluide et réactive."
      />

      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Sécurité Renforcée"
        content="Votre tranquillité d'esprit est primordiale. Profitez de mesures de sécurité avancées et de certificats SSL pour protéger vos données et garantir la confiance de vos clients."
      />

      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Support Expert"
        content="Notre équipe de spécialistes PrestaShop est là pour vous guider à chaque étape. Bénéficiez d'un support technique avisé pour l'installation, la configuration et la maintenance de votre boutique en ligne."
      />

      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Mises à Jour Simplifiées"
        content="Restez à jour avec les dernières fonctionnalités de PrestaShop sans souci. Notre hébergement facilite les mises à jour pour une compatibilité et une sécurité constantes."
      />

      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Personnalisation Optimale"
        content="Profitez d'un accès complet aux paramètres du serveur, vous permettant de personnaliser l'environnement pour répondre précisément aux besoins de votre boutique."
      />

      <CardOption
        class="bg-gray-200 p-4 space-y-2"
        backgroundColor="white"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
      > 
      <button class="text-2xl">
        flow fillin
      </button>
      </CardOption>
    </div>
  </section>
</template>

<script setup>
import EntetePages from "@/components/EntetePages.vue";
import CardOption from "@/components/CardOption.vue";

const titre =
  "Migration Gratuite : Transférez Votre Site en Toute Simplicité vers NzenuHost !";
const donnee =
  "Bienvenue chez NzenuHost, où nous rendons la migration de votre site web aussi simple que possible ! Si vous avez déjà un site hébergé ailleurs et que vous souhaitez profiter des avantages exceptionnels de NzenuHost, vous êtes au bon endroit. Nous offrons une migration gratuite pour que vous puissiez passer à notre service sans tracas ni frais supplémentaires.";
import photo from "@/assets/image (10).jpeg";
</script>

<style scoped></style>

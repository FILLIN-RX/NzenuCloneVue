<template>
  <div class="pt-15">
    <EntetePages :titre="titre" :donnee="donnee" :photo="photo" />

    <section class="bg-gray-200">
      <h4 class="lg:text-2xl lg:px-40 text-center font-semibold py-10">
        Avantages des E-mails Pro
      </h4>
      <div
        class="grid lg:px-40 lg:grid-cols-3 gap-3 items-center justify-center p-3 text-start"
      >
        <CardOption
          class="bg-white p-4 space-y-2"
          title="Identité de Marque"
          content="Communiquez avec vos clients à partir d'une adresse e-mail professionnelle liée à votre domaine, renforçant ainsi votre image de marque."
        />

        <CardOption
          class="bg-white p-4 space-y-2"
          title="Sécurité Améliorée"
          content="Protégez vos communications avec des fonctionnalités de sécurité avancées, notamment le filtrage des spams et la détection des logiciels malveillants."
        />

        <CardOption
          class="bg-white p-4 space-y-2"
          title="Collaboration éfficace"
          content="Facilitez la collaboration au sein de votre équipe en partageant des calendriers, des contacts et des documents directement depuis votre boîte de réception."
        />
      </div>
      <div>
        <h2 class="lg:text-2xl lg:px-40 text-center font-semibold my-10">
          Plans d'E-mails Pro
        </h2>
        <ChargerForfiat />
      </div>

      <section>
        <div
          class="sm:px-6 max-w-7xl lg:w-1/2 mx-auto text-center py-5 px-5 lg:px-0"
        >
          <p>
            Prêt à transformer votre communication professionnelle ? Obtenez dès
            aujourd'hui votre propre adresse e-mail personnalisée et sécurisée.
            Améliorez la crédibilité de votre entreprise, renforcez la
            collaboration interne et simplifiez vos communications. Rejoignez
            notre communauté d'entreprises prospères et commencez à profiter des
            avantages des e-mails professionnels
          </p>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import EntetePages from "@/components/EntetePages.vue";
import CardOption from "@/components/CardOption.vue";
import ChargerForfiat from "../components/ChargerForfiat.vue";

const titre = "Courriel d'affaire";
const donnee =
  "Découvrez comment nos solutions d'e-mails personnalisés peuvent renforcer la crédibilité de votre entreprise, améliorer la communication interne et externe, et accroître votre productivité..";
import photo from "@/assets/image__7_-removebg-preview (1).png";
</script>

<style scoped></style>

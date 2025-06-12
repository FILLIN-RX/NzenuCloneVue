<template>
  <div class="pt-15">

  
  <EntetePages :titre="titre" :donnee="donnee" :photo="photo" />

  <section class="lg:px-40 text-center bg-gray-200">
    <div class="flex justify-center text-center">
      <h4
        class="text-xl lg:text-3xl font-semibold lg:w-1/2 text-center items-center"
      >
        Pourquoi choisir NzenuHost pour la réussite de votre migration de site
        web
      </h4>
    </div>

    <div
      class="grid lg:grid-cols-3 gap-3 items-center  justify-center p-3 text-start"
    >
      <CardOption
        class="bg-white p-4 space-y-2"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
        icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm9.65-3L19 11.65l-1.4-1.425l-3.95 3.95l-3.65-3.65l-5 5l1.4 1.425l3.6-3.6L13.65 17Zm.1-5.5l.7-1.55l1.55-.7l-1.55-.7l-.7-1.55l-.7 1.55l-1.55.7l1.55.7l.7 1.55Z"></path></svg>"
      />
      <CardOption
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
        title="Fiabilité Éprouvée"
        content="Rejoignez des milliers de propriétaires de boutiques en ligne satisfaits qui ont choisi notre hébergement PrestaShop pour sa performance, sa sécurité et son support de qualité."
        icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"></path></g></svg>"
      />
      <CardOption
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
      icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-2h8v-7.1q0-2.925-2.037-4.962T12 4.9T7.038 6.938T5 11.9V18H2v-5.725h1l.075-1.325q.2-1.7.988-3.15t1.975-2.525T8.762 3.6T12 3t3.225.6t2.725 1.663t1.975 2.512t1 3.15l.075 1.35h1V18h-1v3zm-2-7q-.425 0-.712-.288T8 13t.288-.712T9 12t.713.288T10 13t-.288.713T9 14m6 0q-.425 0-.712-.288T14 13t.288-.712T15 12t.713.288T16 13t-.288.713T15 14m-8.975-1.55Q5.85 9.8 7.625 7.9T12.05 6q2.225 0 3.913 1.412T18 11.026Q15.725 11 13.813 9.8t-2.938-3.25q-.4 2-1.687 3.563T6.025 12.45"></path></svg>"
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
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
        icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v4.35l-6.025 6.025L13.1 13.5l-4.225 4.225L11.15 20zm8-7l8-5V6l-8 5l-8-5v2z"></path></svg>"
        title="Performance Exceptionnelle"
        content="Maximisez la vitesse de chargement de votre boutique en ligne grâce à notre infrastructure de pointe, assurant une expérience utilisateur fluide et réactive."
      />

      <CardOption
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
        icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><path d="M4.626 8.878a7.937 7.937 0 0 1 1.71-2.541a7.92 7.92 0 0 1 2.542-1.71a8.12 8.12 0 0 1 6.13-.041A2.49 2.49 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725c-2.431-.973-5.223-.958-7.635.059c-1.19.5-2.26 1.22-3.18 2.139A9.98 9.98 0 0 0 2 12h2c0-1.086.211-2.136.626-3.122zm14.747 6.244c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.973 9.973 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z" fill="currentColor"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538c2.502 0 4.538-2.036 4.538-4.538S14.502 7.462 12 7.462z" fill="currentColor"></path></svg>"
        title="Sécurité Renforcée"
        content="Votre tranquillité d'esprit est primordiale. Profitez de mesures de sécurité avancées et de certificats SSL pour protéger vos données et garantir la confiance de vos clients."
      />

      <CardOption
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
        icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.25 1a.75.75 0 0 1 .75.75V3h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2V1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 .75-.75M2.5 7.5v6h11v-6zm0-1.5h11V4.5h-11zm7.78 2.97a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-1.25-1.25a.75.75 0 1 1 1.06-1.06l.72.72l1.72-1.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path></svg>"
        title="Support Expert"
        content="Notre équipe de spécialistes PrestaShop est là pour vous guider à chaque étape. Bénéficiez d'un support technique avisé pour l'installation, la configuration et la maintenance de votre boutique en ligne."
      />

      <CardOption
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
        icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M24 11.021c0 1.013-2.462 1.833-5.5 1.833s-5.5-.82-5.5-1.833V9.188c0 1.012 2.462 1.833 5.5 1.833s5.5-.82 5.5-1.833"></path><path fill="currentColor" d="M18.5 6.137c-3.035 0-5.5-.825-5.5-1.833v3.64c0 1.009 2.465 1.834 5.5 1.834S24 8.953 24 7.944v-3.64c0 1.008-2.465 1.833-5.5 1.833"></path><path fill="currentColor" d="M24 1.833C24 .821 21.538 0 18.5 0S13 .82 13 1.833v1.223c0 1.012 2.462 1.833 5.5 1.833s5.5-.82 5.5-1.833M11 22.021c0 1.013-2.462 1.833-5.5 1.833S0 23.034 0 22.021v-1.833C0 21.2 2.462 22.02 5.5 22.02s5.5-.82 5.5-1.833Z"></path><path fill="currentColor" d="M5.5 17.137c-3.035 0-5.5-.825-5.5-1.833v3.64c0 1.009 2.465 1.834 5.5 1.834s5.5-.825 5.5-1.834v-3.64c0 1.008-2.465 1.833-5.5 1.833"></path><path fill="currentColor" d="M11 12.833C11 11.821 8.538 11 5.5 11S0 11.82 0 12.833v1.223c0 1.012 2.462 1.833 5.5 1.833s5.5-.82 5.5-1.833ZM20 21h-2v-2.59L15.41 21L14 19.59L16.59 17H14v-2h6z"></path></svg>"
        title="Mises à Jour Simplifiées"
        content="Restez à jour avec les dernières fonctionnalités de PrestaShop sans souci. Notre hébergement facilite les mises à jour pour une compatibilité et une sécurité constantes."
      />

      <CardOption
        class="bg-white p-4 space-y-2"
        backgroundColor="white"
        icon="<svg data-v-c3ad5561="" data-v-0f7d121c="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon my-icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm6.95-1.45L7.4 13l1.45-1.45l2.1 2.1l4.2-4.2l1.45 1.45zM4 18V6z"></path></svg>"
        title="Personnalisation Optimale"
        content="Profitez d'un accès complet aux paramètres du serveur, vous permettant de personnaliser l'environnement pour répondre précisément aux besoins de votre boutique."
      />

      <CardOption
        class="bg-white p-4 space-y-2"
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
  </div>
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

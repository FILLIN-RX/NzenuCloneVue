<template>
    
    <EntetePages  :titre="titre" :donnee="donnee" :photo="photo" backgroundColor="black"/>
    <RechercheDomaine backgroundColor="white" rechercher="Transferrer un nom de domaine" color="black" />
    
    
      <section class="optionInclus">
<p class="optionInclusMain">Option inclus gratuitement avec votre nom de domaine</p> 
<div class="row">

  <div class="col-sm-12 col-lg-3 col-md-12">
    <CardOption
      title="Tableau de Bord intuitif"
      content="Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics."
      :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21z&quot;></path></svg>'"
    />
  </div>

  <div class="col-sm-12 col-lg-3 col-md-12">
    <CardOption
      title="SSL gratuit Let's Encrypt"
      content="La sécurité est notre priorité. Obtenez gratuitement des certificats SSL pour chaque domaine que vous enregistrez chez nous. Assurez-vous que les données de vos utilisateurs sont cryptées et sécurisées dès le premier jour."
      :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon w-5 h-5&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 496 512&quot;><path fill=&quot;currentColor&quot; d=&quot;M248 43.4C130.6 43.4 35.4 138.6 35.4 256S130.6 468.6 248 468.6S460.6 373.4 460.6 256S365.4 43.4 248 43.4m-97.4 132.9c0-53.7 43.7-97.4 97.4-97.4s97.4 43.7 97.4 97.4v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6c0-82.1-124-82.1-124 0v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6zM389.7 380c0 9.7-8 17.7-17.7 17.7H124c-9.7 0-17.7-8-17.7-17.7V238.3c0-9.7 8-17.7 17.7-17.7h248c9.7 0 17.7 8 17.7 17.7zm-248-137.3v132.9c0 2.5-1.9 4.4-4.4 4.4h-8.9c-2.5 0-4.4-1.9-4.4-4.4V242.7c0-2.5 1.9-4.4 4.4-4.4h8.9c2.5 0 4.4 1.9 4.4 4.4m141.7 48.7c0 13-7.2 24.4-17.7 30.4v31.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-31.6c-10.5-6.1-17.7-17.4-17.7-30.4c0-19.7 15.8-35.4 35.4-35.4s35.5 15.8 35.5 35.4M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 478.3C121 486.3 17.7 383 17.7 256S121 25.7 248 25.7S478.3 129 478.3 256S375 486.3 248 486.3&quot;></path></svg>'"
    />
  </div>

  <div class="col-sm-12 col-lg-3 col-md-12">
    <CardOption
      title="DNS Anycast mondial et DNSSEC"
      content="Votre présence en ligne mérite une résolution DNS rapide et sécurisée. Bénéficiez de la technologie DNS Anycast mondial pour une performance optimale, et activez DNSSEC pour garantir l'authenticité et la fiabilité de vos enregistrements DNS."
      :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon w-5 h-5&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;M4.5 17.5h2v3h-2z&quot;></path><path fill=&quot;currentColor&quot; d=&quot;M20.998 14H3.002A2 2 0 0 0 1 16.002v5.996A2 2 0 0 0 3.002 24h17.996A2 2 0 0 0 23 21.998v-5.996A2 2 0 0 0 20.998 14M8 20.5A1.473 1.473 0 0 1 6.5 22H3v-6h3.5A1.473 1.473 0 0 1 8 17.5Zm6.5 1.5h-1.2l-2.55-3.5V22H9.5v-6h1.25l2.5 3.5V16h1.25Zm6.5-4.48h-3.5v.74H20a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-4v-1.5h3.51v-.74H17a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h4Z&quot;></path></svg>'"
    />
  </div>
  <div class="col-sm-12 col-lg-3 col-md-12">
    <CardOption
      title="Aucuns frais cachés"
      content="La transparence est notre engagement. Vous ne trouverez aucun frais cachés lors de l'enregistrement de votre nom de domaine. Notre tarification claire vous assure de savoir exactement ce que vous payez."
      :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class='icon w-4 h-4'><g fill='none' fill-rule='evenodd'><path d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z'/><path fill='currentColor' d='M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10M8 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2.337 8.021a1 1 0 0 0-.127-1.996c-2.21.14-4.195.858-5.651 1.813c-.728.478-1.348 1.031-1.796 1.63C2.32 17.057 2 17.755 2 18.5c0 1.535 1.278 2.346 2.495 2.763c1.28.439 2.99.638 4.832.707a1 1 0 0 0 .075-1.998c-1.791-.068-3.263-.26-4.258-.6c-.932-.32-1.11-.635-1.139-.81L4 18.5c0-.168.079-.454.363-.834c.279-.372.712-.774 1.293-1.156c1.161-.761 2.812-1.37 4.68-1.489ZM17 13.89c1.406 0 2.632.632 3.49 1.39a5.3 5.3 0 0 1 1.057 1.259c.252.427.453.94.453 1.462c0 .523-.2 1.035-.453 1.462a5.3 5.3 0 0 1-1.057 1.26c-.858.757-2.084 1.39-3.49 1.39s-2.632-.633-3.49-1.39a5.3 5.3 0 0 1-1.057-1.26C12.2 19.035 12 18.522 12 18s.2-1.035.453-1.462a5.3 5.3 0 0 1 1.057-1.26c.858-.757 2.084-1.39 3.49-1.39Zm0 2c-.803 0-1.577.368-2.167.889a3.3 3.3 0 0 0-.657.775a1.5 1.5 0 0 0-.155.339l-.02.087v.042l.02.087c.023.077.068.19.155.34c.144.243.366.517.657.774c.59.52 1.364.89 2.167.89s1.577-.37 2.167-.89a3.3 3.3 0 0 0 .657-.775c.087-.148.132-.262.155-.339l.02-.087L20 18l-.008-.058a1.4 1.4 0 0 0-.168-.39a3.3 3.3 0 0 0-.657-.774c-.59-.52-1.364-.89-2.167-.89Zm.087 1.115a.667.667 0 0 0 .91.91l.003.086a1 1 0 1 1-.913-.996'/></g></svg>`"
    />
  </div>

  <div class="col-sm-12 col-lg-3 col-md-12">
    <CardOption
      title="Redirections illimitées"
      content="Acheminez le trafic comme vous le souhaitez. Profitez de rediriger vos domaines vers d'autres URL sans limites. Gérez vos redirections pour une expérience utilisateur fluide."
      :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' class='icon w-5 h-5'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M11 .5L13.5 3h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H.5L3 13.5'/></svg>`"
    />
  </div>

  <div class="col-sm-12 col-lg-3 col-md-12">
    <CardOption
      title="Excellent rapport qualité/prix"
      content="Obtenez plus pour votre argent avec notre offre de qualité exceptionnelle. Notre formule imbattable vous permet d'accéder à des fonctionnalités puissantes à un prix abordable."
      :icon="`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='icon w-5 h-5'><path d='M442 107v141L229.2 451.7c8 8 20.8 12.3 28.8 12.3s22.8-3.7 31.4-12.3L480 272V144l-38-37z' fill='currentColor'/><path d='M384 48H224L44.3 235.6c-8 8-12 17.8-12.3 28.4-.3 11.3 3.7 23.3 12.3 31.9l123.8 123.6c8 8 20.8 12.5 28.8 12.5s22.7-3.9 31.3-12.5L416 240V80l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z' fill='currentColor'/></svg>`"
    />
  </div>
</div>
</section>
<ChargerForfait />

    
</template>

<script setup>
  import EntetePages from '@/components/EntetePages.vue'
  import CardOption from '@/components/CardOption.vue'
  import RechercheDomaine from '@/components/RechercheDomaine.vue'
  import ChargerForfait from '@/components/ChargerExtension.vue';
  import photo from '@/assets/image (5).jpeg';
  const titre = "Transférer Votre Nom de Domaine vers NzenuHost";
  const donnee = "Transférez facilement votre nom de domaine vers NzenuHost. Profitez d'un processus simple et sans interruption pour continuer à construire votre présence en ligne avec nous.";
 
</script>
 

<style>


.optionInclusMain {
font-size: 20px;
font-weight: 700;
}

.optionInclus .col-sm-12 {
text-align: left;
}

.optionInclus .col-sm-12 span {
color: rgb(50, 50, 151);
font-weight: 700;
}


.optionInclus {
display: flex;
flex-wrap: wrap;
flex-direction: column;
text-align: center;
padding:2% 0;
}

.optionInclus .row {
display: flex;
justify-content: center;
}

.optionInclus .row .col-lg-3 {
background-color: #D1D5DB;
margin: 5px ;
padding: 20px;
}



</style>
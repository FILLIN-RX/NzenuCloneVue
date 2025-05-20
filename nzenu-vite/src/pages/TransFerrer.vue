<template>
    <EntetePages  :titre="titre" :donnee="donnee" :photo="photo" backgroundColor="black"/>
    <RechercheDomaine backgroundColor="white" rechercher="Transferrer un nom de domaine" color="black" />
    <section class="optionInclus">
<p class="optionInclusMain">Option inclus gratuitement avec votre nom de domaine</p> 
<div>
  <div>
    <CardOption
      title="Tableau de Bord intuitif"
      content="Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics."
      :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21z&quot;></path></svg>'"
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
 

<style scoped>


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
background-color: #E5E7EB;
margin: 5px ;
padding: 20px;
}



</style>



<template>
    <EntetePages  :titre="titre" :donnee="donnee" :photo="photo"/>
   
   
   <div class="row align-items-center justify-content-center">
    <div class="col-lg-5 col-md-12 col-sm-12">
        <CardOption
            title="Hébergement WordPress"
            content="Profitez d'un hébergement optimisé pour WordPress, avec des performances exceptionnelles et une sécurité renforcée."
            image="<i class='bi bi-check2-all'></i>"
        />
    </div>
    <div class="col-lg-5 col-md-12 col-sm-12">
        <CardOption
        title="Tableau de Bord intuitif"
        content="Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics."
        :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21z&quot;></path></svg>'"
      />

    </div>
    <div class="col-lg-5 col-md-12 col-sm-12">
        <CardOption
        title="Tableau de Bord intuitif"
        content="Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics."
        :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21z&quot;></path></svg>'"
      />

    </div>
    <div class="col-lg-5 col-md-12 col-sm-12">
        <CardOption
        title="Tableau de Bord intuitif"
        content="Découvrez la simplicité de notre tableau de bord convivial qui vous permet de gérer facilement tous vos noms de domaine en un seul endroit. Gagnez du temps et prenez le contrôle total de vos configurations en quelques clics."
        :icon="'<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;M15 21q-.825 0-1.412-.587T13 19v-4q0-.825.588-1.412T15 13h4q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T13 9V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v4q0 .825-.587 1.413T9 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h4q.825 0 1.413.588T11 15v4q0 .825-.587 1.413T9 21z&quot;></path></svg>'"
      />

    </div>
   </div>
</template>


<script setup>
   import EntetePages from '@/components/EntetePages.vue'
   import CardOption from '@/components/CardOption.vue'



   const titre = "Hébergement WordPress Performant";
   const donnee = "Notre offre d'hébergement WordPress est conçue pour répondre aux besoins des sites web exigeants en termes de performance, de sécurité et de convivialité. Découvrez comment notre plateforme optimisée peut transformer votre expérience WordPress.";
   import photo from '@/assets/image (9).jpeg';
</script>
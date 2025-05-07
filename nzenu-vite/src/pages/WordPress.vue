


<template>
    <EntetePages  :titre="titre" :donnee="donnee" :photo="photo" backgroundColor="black"/>
    <div class="row justify-content-center mutualiser">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <h4>
                Créez un site web professionnel avec notre hébergement WordPress
            </h4>
            <p>
                Notre hébergement WordPress vous permet de créer facilement un site web à votre image, sans avoir besoin de connaissances techniques. Profitez de nos nombreux thèmes et plugins, ainsi que de notre support client 24/7.
            </p>
        </div>
    </div>
    <ChargerForfiat />
    <section>
        <h4 class="optionInclusMain">Pourquoi choisir WordPress?</h4> 
                <p>Que vous souhaitiez créer un blog, un site institutionnel, un portfolio numérique avec le CMS WordPress, vous êtes entre de bonnes mains.</p>
                    <span>Voici 4 bonnes raisons de vous lancer dans l’aventure</span>
   
   <div class="row align-items-center justify-content-center p-3 text-start">
    <div class="col-lg-5 col-md-12 col-sm-12 m-3 ">
        <CardOption
             backgroundColor="white"
            
            title="Simple d’utilisation"
            content="Grâce à son interface intuitive, vous pourrez, sans aucune connaissance technique, modifier le contenu de votre site internet.Vous aurez également la possibilité de faire évoluer l’organisation des pages, la place des textes ou des images, etc."
            :icon="'<svg data-v-c3ad5561 xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon text-primary-900 w-5 h-5&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;m12.7 14.05l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.15-2.1l-1.4 1.4zM6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z&quot;></path></svg>'"  
        />
    </div>
     
        <CardOption
        class="col-lg-5 col-md-12 col-sm-12 m-3"
         backgroundColor="white"
        title="Personnalisation"
        content="La force de WordPress réside également dans sa bibliothèque de thèmes. Un thème WordPress est un « style » de site que vous pouvez acquérir. Baladez-vous parmi ces différents thèmes pour trouver celui qui correspondra le mieux à vos objectifs. Vous y trouverez des modèles de sites graphiques, de portfolios ou encore de blogs WordPress."
        :icon="'<svg data-v-c3ad5561 xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon text-primary-900 w-5 h-5&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;m12.7 14.05l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.15-2.1l-1.4 1.4zM6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z&quot;></path></svg>'"  
        />


    <div class="col-lg-5 col-md-12 col-sm-12 m-3">
        <CardOption
         backgroundColor="white"
        title="Evolution"
        content="Vos besoins peuvent évoluer et WordPress l’a bien compris. Grâce à de nombreux plugins, développez votre activité au fur et à mesure. Envie de conquérir le marché international ? Pourquoi ne pas installer un plugin de traduction pour développer votre site en anglais ?"
        :icon="'<svg data-v-c3ad5561 xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon text-primary-900 w-5 h-5&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;m12.7 14.05l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.15-2.1l-1.4 1.4zM6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z&quot;></path></svg>'"  
        />

    </div>
    <div class="col-lg-5 col-md-12 col-sm-12 m-3">
        <CardOption
        backgroundColor="white"
        title="Optimisation"
        content="Avec WordPress, votre contenu est mis en valeur et cela se ressent sur votre référencement. Plus besoin de vous soucier de l’aspect responsive, tous les sites WordPress s’adaptent aux mobiles, tablettes, etc. Besoin d’être guidé dans l’optimisation de vos contenus ? Pensez aux plugins SEO pour ajouter des fonctionnalités à votre thème WordPress !"
        :icon="'<svg data-v-c3ad5561 xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; aria-hidden=&quot;true&quot; role=&quot;img&quot; class=&quot;icon text-primary-900 w-5 h-5&quot; width=&quot;1em&quot; height=&quot;1em&quot; viewBox=&quot;0 0 24 24&quot;><path fill=&quot;currentColor&quot; d=&quot;m12.7 14.05l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.15-2.1l-1.4 1.4zM6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z&quot;></path></svg>'"  
        />
    </div>
   </div>
    </section>

    
</template>


<script setup>
   import EntetePages from '@/components/EntetePages.vue'
   import CardOption from '@/components/CardOption.vue'
   import ChargerForfiat from '../components/ChargerForfiat.vue';



   const titre = "Hébergement WordPress Performant";
   const donnee = "Notre offre d'hébergement WordPress est conçue pour répondre aux besoins des sites web exigeants en termes de performance, de sécurité et de convivialité. Découvrez comment notre plateforme optimisée peut transformer votre expérience WordPress.";
   import photo from '@/assets/image (9).jpeg';
</script>

<style>

    CardOption {
        min-height: 5rem;
        padding: 1rem; /* Adding padding for better spacing */
    }

    section{
        background-color: #d1d5db;
    }
    .col-lg-5 .col-md-12 .col-sm-12 .m-3{
        background-color: white;
    }

</style>
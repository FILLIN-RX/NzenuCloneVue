



<template>
    <EntetePages  :titre="titre" :donnee="donnee" :photo="photo"/>

    <section>
        <h4 class="optionInclusMain">Avantages des E-mails Pro</h4> 
   <div class="row align-items-center justify-content-center p-3 text-start">
    <div class="col-lg-3 col-md-12 col-sm-12 m-1 ">
        <CardOption
            backgroundColor="white"
            title="Identité de Marque"
            content="Communiquez avec vos clients à partir d'une adresse e-mail professionnelle liée à votre domaine, renforçant ainsi votre image de marque."
        />
    </div>
    <div class="col-lg-3 col-md-12 col-sm-12 m-1">
        <CardOption
        backgroundColor="white"
        title="Sécurité Améliorée"
        content="Protégez vos communications avec des fonctionnalités de sécurité avancées, notamment le filtrage des spams et la détection des logiciels malveillants."
        />
    </div>
    <div class="col-lg-3 col-md-12 col-sm-12 m-1">
        <CardOption
        backgroundColor="white"
        title="Collaboration éfficace"
        content="Facilitez la collaboration au sein de votre équipe en partageant des calendriers, des contacts et des documents directement depuis votre boîte de réception."
        />
    </div>
    

   </div>
   <div>
        <h2>Plans d'E-mails Pro</h2>
        <ChargerForfiat />
   </div>
   
   <section>
        <div class="row  justify-content-center text-align-center">
            <div class="col-lg-6 col-md-12 col-sm-12 m-1 ">
                     <p>Prêt à transformer votre communication professionnelle ? Obtenez dès aujourd'hui votre propre adresse e-mail personnalisée et sécurisée. Améliorez la crédibilité de votre entreprise, renforcez la collaboration interne et simplifiez vos communications. Rejoignez notre communauté d'entreprises prospères et commencez à profiter des avantages des e-mails professionnels</p>
            </div>

        </div>
       
   </section>
    </section>
   

</template>


<script setup>
   import EntetePages from '@/components/EntetePages.vue'
   import CardOption from '@/components/CardOption.vue'
   import ChargerForfiat from '../components/ChargerForfiat.vue';



   const titre = "Courriel d'affaire";
   const donnee = "Découvrez comment nos solutions d'e-mails personnalisés peuvent renforcer la crédibilité de votre entreprise, améliorer la communication interne et externe, et accroître votre productivité..";
   import photo from '@/assets/image__7_-removebg-preview (1).png';
</script>

<style scoped>
    
    .col-lg-6{
        text-align: center;
        display: flex;
        justify-content: center;
    }
    CardOption {
        min-height: 5rem;
        padding: 1rem; /* Adding padding for better spacing */
    }

    section{
        background-color: #d1d5db;
    }

</style>
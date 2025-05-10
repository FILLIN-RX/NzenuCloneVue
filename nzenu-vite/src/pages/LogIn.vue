

<template>
        <section id="seConnecter">
        <div class="container">
            <div class="col-lg-6 col-md-12 col-sm-12 seConnecter">
                <h4>Se connecter et gérer son plan d'hébergement</h4>
                <form action="">
                    <div class="input-group">
                        <label for="userEmail">Votre adresse mail</label>
                        <input type="email" placeholder="Entrez votre adresse mail" id="userEmail">
                    </div>
                    <div class="input-group">
                        <label for="password">Votre mot de passe</label>
                        <input type="password" placeholder="Entrez votre mot de passe" id="password">
                        <div class="motDePasseOublier">
                            <router-link to="/Mot de passe">
                                Mot de passe oublier?
                            </router-link>
                           
                        </div>
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
                <hr>
                <div class="register-link">
                    Vous n'avez pas de compte? <a href="">Créer un compte</a>.
                </div>
            </div>
            <div class="col-lg-6 col-image">
                <img src="../assets/image (5).png" alt="">
            </div>
        </div>
    </section>






</template>


<script setup>





</script>

<style scoped>

#seConnecter{
    padding: 3% 3% 5% 1%;
    margin: 0;
    background-color: #d1d1d1;
    min-height: 24rem;
}

.container{
    display: flex;
    justify-content: space-evenly;
    padding: 0%;
    
}
.seConnecter{
    padding: 2%;
    background-color: white;
    display: flex;
    flex-direction: column;

    text-align: center;
}
#seConnecter form{
    text-align: start;
}
#seConnecter .col-lg-12{
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
}
.motDePasseOublier{
    text-align: right;
    margin: 0 0 5px 0;
    width: 100%;
}

form input{
    min-height: 30px;
    width: 100%;
    font-size: 16px;
    border: 2px solid #ccc;
    margin:  9px 0;

}
form input::placeholder{
    color: gray;
    font-size: 14px;
    opacity: 0.8; 
    font-weight: 500;
}
#seConnecter button{
    color: blue;
    background-color: aqua;
    width: 100%;
    border: 1px solid aqua;
    min-height: 30px;
    font-weight: bold;
    font-size: 15px;

}
#seConnecter button:hover{
    background-color: white;
    color: rgb(47, 47, 129);
    border: 1px solid  rgb(47, 47, 129);

}


@media (max-width: 576px) {
  
    .col-image{
        display: none;
    }
 
    
  }

  /* Tablette */
  @media (max-width: 992px) {
   
    .col-image{
        display: none;
    }
  }
  
  


</style>
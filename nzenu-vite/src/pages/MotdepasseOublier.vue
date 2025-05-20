<template>
  <section id="seConnecter">
    <div class="container">
      <div class="seConnecter">
        <h4>Mot de passe oublié?</h4>
        <p>
          Veillez entrer votre adresse mail enfin de Reinitialiser votre mots de
          passe.
        </p>
        <form action="">
          <div class="input-group">
            <label for="userEmail">Votre adresse mail</label>
            <input
              type="email"
              placeholder="Entrez votre adresse mail"
              id="userEmail"
            />
          </div>

          <div class="motDePasseOublier">
            <a href="">jai le code de verification</a>
          </div>

          <button type="submit">Renvoyer le code</button>
        </form>
        <hr />
        <div class="register-link">
          Vous avez un compte? <a href="">Se connecter</a>.
        </div>
      </div>
      <div class="col-image">
        <img src="../assets/image (5).png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.seConnecter {
  padding: 2%;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.motDePasseOublier {
  text-align: left;
  margin: 0 0 5px 0;
}

#seConnecter {
  padding: 3% 3% 5% 1%;
  margin: 0;
  background-color: #e5e7eb;
  min-height: 24rem;
}

.container {
  display: flex;
  justify-content: space-evenly;
  padding: 0%;
}
.seConnecter {
  padding: 2%;
  background-color: white;
  display: flex;
  flex-direction: column;

  text-align: center;
}
#seConnecter form {
  text-align: start;
}
#seConnecter .col-lg-12 {
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.motDePasseOublier {
  text-align: right;
  margin: 0 0 5px 0;
  width: 100%;
}

form input {
  min-height: 30px;
  width: 100%;
  font-size: 16px;
  border: 2px solid #ccc;
  margin: 9px 0;
}
form input::placeholder {
  color: gray;
  font-size: 14px;
  opacity: 0.8;
  font-weight: 500;
}
#seConnecter button {
  color: blue;
  background-color: aqua;
  width: 100%;
  border: 1px solid aqua;
  min-height: 30px;
  font-weight: bold;
  font-size: 15px;
}
#seConnecter button:hover {
  background-color: white;
  color: rgb(47, 47, 129);
  border: 1px solid rgb(47, 47, 129);
}

@media (max-width: 576px) {
  .col-image {
    display: none;
  }
}

/* Tablette */
@media (max-width: 992px) {
  .col-image {
    display: none;
  }
}
</style>

<template>
  <section
    class="bg-gray-200 lg:flex justify-center pt-15 items-center py-10 lg:px-40 px-5"
    id="seConnecter"
  >
    <div class="flex space-x-2 w-full">
      <div class="bg-white p-5 w-full space-y-8 relative lg:w-1/2">
        <h4 class="uppercase text-center">
          Se connecter et gérer son plan d'hébergement
        </h4>
        <form class="space-y-3" action="">
          <div class="w-full lg:flex lg:space-x-2 space-x-0">
            <div class="space-y-2 lg:w-1/2">
              <label for="">Prenom</label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                placeholder="Entrez votre prenom"
                class="border w-full p-2 outline-none"
              />
            </div>
            <div class="space-y-2 lg:w-1/2">
              <label for="">Nom</label>
              <input
                type="text"
                name="nom"
                id="nom"
                placeholder="Entrez votre nom"
                class="border w-full p-2 outline-none"
              />
            </div>
          </div>
          <div class="space-y-1">
            <label for="userEmail">Votre adresse mail</label>
            <input
              type="email"
              class="border w-full p-2 outline-none"
              placeholder="Entrez votre adresse mail"
              id="userEmail"
            />
          </div>
          <div class="input-group space-y-5">
            <label for="password">Votre mot de passe</label>
            <div class="flex items-center border p-2">
              <input
                type="password"
                class="bg-transparent w-full border-none outline-none"
                placeholder="Entrez votre mot de passe"
                id="password"
              />
              <svg
                data-v-c3ad5561=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon cursor-pointer w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6C5.188 6 1 12 1 12s4.188 6 11 6s11-6 11-6s-4.188-6-11-6m0 10c-3.943 0-6.926-2.484-8.379-4c1.04-1.085 2.862-2.657 5.254-3.469A3.96 3.96 0 0 0 8 11a4 4 0 0 0 8 0a3.96 3.96 0 0 0-.875-2.469c2.393.812 4.216 2.385 5.254 3.469c-1.455 1.518-4.437 4-8.379 4"
                ></path>
              </svg>
            </div>
            <label for="password">Confirmez votre mot de passe</label>
            <div class="flex items-center border p-2">
              <input
                type="password"
                class="bg-transparent w-full border-none outline-none"
                placeholder="Entrez votre mot de passe"
                id="password"
              />
              <svg
                data-v-c3ad5561=""
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon cursor-pointer w-5 h-5"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6C5.188 6 1 12 1 12s4.188 6 11 6s11-6 11-6s-4.188-6-11-6m0 10c-3.943 0-6.926-2.484-8.379-4c1.04-1.085 2.862-2.657 5.254-3.469A3.96 3.96 0 0 0 8 11a4 4 0 0 0 8 0a3.96 3.96 0 0 0-.875-2.469c2.393.812 4.216 2.385 5.254 3.469c-1.455 1.518-4.437 4-8.379 4"
                ></path>
              </svg>
            </div>
            <div class="flex justify-end">
              <router-link to="/Mot de passe">
                Mot de passe oublier?
              </router-link>
            </div>
          </div>
          <div class="space-y-1 text-center">
            <button
              class="px-2 py-1 bg-[#93F5F6] text-[#1045A5] font-bold hover:bg-white border border-white hover:border-blue-900 w-full"
              type="submit"
            >
              Se connecter
            </button>
          </div>
          <div class="border border-sky-900"></div>
        </form>

        <div class="text-center space-x-2">
          Vous avez déja un compte ?
          <router-link to="login"
            ><a class="font-semibold hover:underline" href="">Se connecter</a
            >.</router-link
          >
        </div>
      </div>
      <div class="hidden lg:block w-1/2">
        <img src="../assets/image (5).png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>

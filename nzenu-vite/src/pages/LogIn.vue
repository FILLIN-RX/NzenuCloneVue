<template>
  <section
    class="bg-gray-200 lg:flex justify-center items-center pt-15 py-10 lg:px-40 px-5"
    id="seConnecter"
  >
    <div class="flex space-x-2 w-full">
      <div class="bg-white p-5 w-full space-y-8 relative lg:w-1/2">
        <h4 class="uppercase text-center">
          Se connecter et gérer son plan d'hébergement
        </h4>
        <form class="space-y-3" action="">
            
          <div class="space-y-2">
            <label for="userEmail">Votre adresse mail</label>
            <input
              type="email"
              class="border w-full p-2 outline-none"
              placeholder="Entrez votre adresse mail"
              id="userEmail"
            />
          </div>
          <div class="input-group space-y-2">
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
          Vous n'avez pas de compte?
          <router-link to="registration"
            ><a class="font-semibold hover:underline" href="">Créer un compte</a
            >.
          </router-link>
        </div>
      </div>
      <div class="col-lg-6 col-image">
        <img src="../assets/image (5).png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>

<template>
  <div class="bg-gray-200 px-5 h-screen">
    <p class="text-start">
      <router-link to="/" class="text-red-800 items-center flex"><svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon items-center" style=""
          width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
          <path fill="currentColor" d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21z"></path>
        </svg><span>retour sur le site</span></router-link>
    </p>

    <div class="mx-auto p-6 flex space-x-5 bg-white rounded-lg">
      <!-- En-tête FF -->

      <div class="w-1/3 space-y-5">
        <div class="border border-gray-200 rounded shadow pb-1">
          <div class="bg-blue-500 p-3 relative h-24 mx-auto w-full rounded-t">
            <div class="absolute inset-x-0 top-14 flex flex-col justify-center items-center">
              <p
                class="uppercase bg-gray-600 text-white font-bold flex justify-center items-center w-20 h-20 rounded-full text-2xl border border-4 shadow">
                ff</p>
            </div>
          </div>
          <div class="mt-10 text-center">
            <p class=" font-bold">{{ prenom }} {{ nom }}</p>
            <p class="underline flex">{{ email }}</p>
            <p class=""><span>Client depuis le</span> 20/04/2025</p>
          </div>
        </div>


        <div class="border border-gray-200 rounded-lg shadow p-3 space-y-5">
          <div class="flex items-center space-x-1">
            <h1 class="font-medium">Email vérifiée</h1><svg data-v-c3ad5561="" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-5 h-5 text-red-500"
              width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m5.793-4.207a1 1 0 0 1 1.414 0L12 10.586l2.793-2.793a1 1 0 1 1 1.414 1.414L13.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414L12 13.414l-2.793 2.793a1 1 0 0 1-1.414-1.414L10.586 12L7.793 9.207a1 1 0 0 1 0-1.414">
              </path>
            </svg>
          </div>
          <div class="space-y-1"><button
              class=" py-2 px-2 w-full bg-[#93F5F6] text-1 flex text-blue-800  border border-white "><span class="">Cliquer pour
                vérifier mon Email</span><!----></button>
            <p class="flex justify-end text-sm cursor-pointer">J'ai le code de vérification</p>
          </div><!---->
        </div>
      </div>

      <!-- Section Profile -->
      <div class="mb-8 lg:w-full space-y-5">
        <div class="p-2 w-full border border-gray-200 rounded-xl">
          <h2 class="text-xl space-x-1 items-center flex font-bold mb-4">
            <svg data-v-c3ad5561="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true" role="img" class="icon w-5 h-5 text-blue-500" width="1em" height="1em"
              viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z">
                </path>
                <circle cx="12" cy="7" r="3"></circle>
              </g>
            </svg><span>Profile</span>
          </h2>

          <div class="grid grid-cols-2 gap-4 mb-3">
            <div class="w-full">
              <p class="text-sm">Prénom</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" v-model="prenom" name="" placeholder="fillin" id="" />
              </div>
            </div>
            <div>
              <p class="text-sm">Nom de famille</p>

              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" v-model="nom" placeholder="fillin" id="" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p class="text-sm">Email</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" placeholder="djeutchouruxel@gmail.com"
                  v-model="email" id="" />
              </div>
            </div>
            <div>
              <p class="text-sm">Téléphone</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" placeholder="fillin" id="" />
              </div>
            </div>
          </div>

          <div class="mb-3">
            <p class="text-sm">Mot de passe</p>
            <div class="border rounded border-gray-200">
              <input class="w-full py-1 px-2" type="text" name="" v-model="password" placeholder="Fillin" id="" />
            </div>
          </div>

          <div class="flex items-center mt-4">
            <svg data-v-c3ad5561="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true" role="img" class="icon text-red-500" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z">
              </path>
            </svg>
            <label for="passwordCheck" class="text-sm text-red-500 text-black">
              Entrer le mot de passe si vous souhaitez modifier.
            </label>
          </div>
        </div>

        <!-- Section Autres informations -->
        <div class="p-2 w-full border border-gray-200 rounded-xl">
          <h1 class="font-bold flex items-center space-x-2">
            <svg data-v-c3ad5561="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true" role="img" class="icon w-5 h-5 text-blue-500" width="1em" height="1em"
              viewBox="0 0 16 16">
              <g fill="currentColor">
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z">
                </path>
                <path
                  d="m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0">
                </path>
              </g>
            </svg><span>Autres informations</span>
          </h1>

          <div class="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p class="text-black text-sm">Entreprise</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" placeholder="Entreprise" id="" />
              </div>
            </div>
            <div>
              <p class="text-black text-sm">Code Postal</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" placeholder="Code Postal" id="" />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p class="text-black text-sm">Adresse</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" placeholder="Addresse" id="" />
              </div>
            </div>
            <div>
              <p class="text-sm">Ville</p>
              <div class="border rounded border-gray-200">
                <input class="w-full py-1 px-2" type="text" name="" placeholder="Ville" id="" />
              </div>
            </div>
          </div>

        </div>
        <div class="text-center">
          <button
            class="px-4 py-2 bg-[#93F5F6] text-blue-800 font-bold hover:bg-white border border-white  hover:border-blue-800">
            Mettre à jour
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = "UserProfileExact";
const password = ref("Fillin2378");
const email = ref("djeutchouruxel@gmail.com");
const prenom = ref("fillin");
const nom = ref("flow");
</script>

<style scoped>
/* Style spécifique pour correspondre exactement à l'image */
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #d1d5db;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #2563eb;
  border-color: #2563eb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
</style>

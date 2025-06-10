<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-lg">
    <!-- En-tête FF -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">FF</h1>
      <p class="text-lg font-medium">fillin flow</p>
      <p class="text-gray-600">djeutchouruxel@gmail.com</p>
      <p class="text-sm text-gray-500 mt-1">Client depuis le 20/04/2025</p>
      
      <div class="flex items-center mt-3 text-green-600">
        <span>Email vérifiée 😊</span>
      </div>
      
      <div class="flex space-x-4 mt-2">
        <button class="text-blue-600 text-sm underline">Cliquer pour vérifier mon Email</button>
        <button class="text-blue-600 text-sm underline">J'ai le code de vérification</button>
      </div>
    </div>

    <!-- Section Profile -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Profile</h2>
      
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p class="text-gray-500 text-sm">Prénom</p>
          <p class="font-medium">fillin</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Nom de famille</p>
          <p class="font-medium">flow</p>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p class="text-gray-500 text-sm">Email</p>
          <p class="font-medium">djeutchouruxel@gmail.com</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Téléphone</p>
          <p class="font-medium">Téléphone</p>
        </div>
      </div>
      
      <div class="mb-3">
        <p class="text-gray-500 text-sm">Mot de passe</p>
        <p class="font-medium">Fillin2378</p>
      </div>
      
      <div class="flex items-center mt-4">
        <input type="checkbox" id="passwordCheck" class="mr-2">
        <label for="passwordCheck" class="text-sm text-gray-700">
          Entrer le mot de passe si vous souhaitez modifier.
        </label>
      </div>
    </div>

    <!-- Section Autres informations -->
    <div>
      <h2 class="text-xl font-bold mb-4">Autres informations</h2>
      
      <div class="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p class="text-gray-500 text-sm">Entreprise</p>
          <p class="font-medium">Entreprise</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Code Postal</p>
          <p class="font-medium">Code Postal</p>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p class="text-gray-500 text-sm">Adresse</p>
          <p class="font-medium">Adresse</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Ville</p>
          <p class="font-medium">Ville</p>
        </div>
      </div>
      
      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Mettre à jour
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileExact'
}
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
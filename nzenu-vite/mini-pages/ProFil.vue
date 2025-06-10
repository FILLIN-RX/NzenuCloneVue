<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <!-- Section En-tête du profil -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <div class="text-2xl font-bold text-blue-800">FF</div>
        <div>
          <h1 class="text-xl font-semibold">fillin flow</h1>
          <p class="text-gray-600">djeutchouruxel@gmail.com</p>
          <p class="text-sm text-gray-500">Client depuis le 20/04/2025</p>
        </div>
      </div>

      <div class="flex items-center space-x-2 text-green-600 mb-4">
        <span>Email vérifiée 😊</span>
      </div>

      <div class="flex space-x-4">
        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Cliquer pour vérifier mon Email
        </button>
        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
          J'ai le code de vérification
        </button>
      </div>
    </div>

    <!-- Section Profil -->
    <div class="mb-8">
      <h2 class="text-lg font-bold mb-4 border-b pb-2">Profile</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Prénom</label>
          <div class="p-2 bg-gray-100 rounded">fillin</div>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Nom de famille</label>
          <div class="p-2 bg-gray-100 rounded">flow</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <div class="p-2 bg-gray-100 rounded">djeutchouruxel@gmail.com</div>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Téléphone</label>
          <div class="p-2 bg-gray-100 rounded">Téléphone</div>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-medium mb-1">Mot de passe</label>
        <div class="p-2 bg-gray-100 rounded">Fillin2378</div>
      </div>

      <div class="flex items-center space-x-2">
        <input type="checkbox" id="passwordCheck" class="rounded text-blue-600">
        <label for="passwordCheck" class="text-sm text-gray-700">
          Entrer le mot de passe si vous souhaitez modifier.
        </label>
      </div>
    </div>

    <!-- Section Autres informations -->
    <div>
      <h2 class="text-lg font-bold mb-4 border-b pb-2">Autres informations</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Entreprise</label>
          <div class="p-2 bg-gray-100 rounded">Entreprise</div>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Code Postal</label>
          <div class="p-2 bg-gray-100 rounded">Code Postal</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Adresse</label>
          <div class="p-2 bg-gray-100 rounded">Adresse</div>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-medium mb-1">Ville</label>
          <div class="p-2 bg-gray-100 rounded">Ville</div>
        </div>
      </div>

      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Mettre à jour
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  // Vous pouvez ajouter des données réactives ici si nécessaire
  // data() {
  //   return {
  //     user: {
  //       firstName: 'fillin',
  //       lastName: 'flow',
  //       email: 'djeutchouruxel@gmail.com',
  //       // etc...
  //     }
  //   }
  // }
}
</script>
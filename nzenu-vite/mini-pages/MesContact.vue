<template>
    <div class="bg-gray-200 px-5 h-screen">
      <p class="text-start">
    <router-link to="/" class="text-red-800 items-center flex"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="icon items-center"
        style=""
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        data-v-c3ad5561=""
      >
        <path
          fill="currentColor"
          d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21z"
        ></path></svg
      ><span>retour sur le site</span></router-link
    >
  </p>
    <div class="space-y-5 p-3 bg-white rounded-md">
  <div>
    <h1 class="flex items-center space-x-2">
      <svg
        data-v-c3ad5561=""
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="icon text-blue-500 w-5 h-5"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5m3.5 14c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5z"
        ></path></svg
      ><span>Listes de vos contacts</span>
    </h1>
    <div class="flex justify-end">
      <button
        class="bg-green-800 px-2 py-1 rounded-lg text-white font-bold hover:bg-green-900 flex items-center space-x-2"
      >
        <span
          data-v-c3ad5561=""
          class="icon w-5 h-5"
          style="font-size: 1em; line-height: 1em; width: 1em; height: 1em"
          ></span
        ><span>Nouveau Contact</span>
      </button>
    </div>
  </div>
  <div class="p-5 border border-gray-200 space-y-5">
    <div
      class="pagination_wrapper--top justify-between md:flex xs:flex-col items-center"
    >
      <!---->
      <div class="flex">
        <div class="flex w-64 border rounded-md shadow-sm border-gray-200">
          <div class="relative flex p-2">
            <input
              type="search"
              name="search"
              class="dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2 dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"
            />
            <div
              class="dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="dt-h-5 dt-w-5 dt-text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="1em"
                height="1em"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination_size_wrapper w-full flex justify-end sm:w-auto">
        <div>
          <select
            name="per_page"
            class="dt__pagination_size block w-full bg-gray-100 pl-3 pr-5 py-2 text-base border border-gray-300 sm:text-sm rounded-md outline-none focus:ring-1 focus:ring-inset"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
    </div>
    <div class="table_wrapper overflow-auto">
      <table class="table min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr class="table__thead__tr">
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              S.N.
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Nom
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Prénom
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Pays
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              NID
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Adresse
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Code Postal
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Téléphone
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Email
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Créer le
            </th>
            <th
              scope="col"
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="dt__table__tbody">
          <tr class="dt__table__row dt-bg-white">
            <tablebodycell colspan="2"
              >Aucun enregistrement disponible</tablebodycell
            >
          </tr>
        </tbody>
      </table>
    </div>
</div>
    </div>
    </div>
</template>

<style scoped>
.primary {
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 1px 3px 3px rgb(92, 88, 88);
}
select {
  width: 4rem;
  padding: 0.5rem;
  border-radius: 5px;
}
input {
  border-radius: 5px;
}
th {
  padding: 1rem;
  background-color: #eaecf0;
  border-bottom: 1px solid;
}
</style>

<template>
  <section
    class="bg-slate-900 sm:p-0 p-5"
    :style="{ background: backgroundColor }"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-40  text-white font-medium flex items-center"
    >
      <div class="flex lg:justify-between">
        <div class="lg:w-1/2 lg:mr-auto flex items-center">
          <div class="space-y-3">
            <div class="space-y-3">
              <h1 class="lg:text-4xl text-xl">{{ titre }}</h1>
              <p>{{ donnee }}</p>
            </div>
            <div class="lg:flex lg:space-x-5 space-y-3 lg:space-y-0">
              <div class="flex space-x-2">
                <svg
                  data-v-c3ad5561=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon w-5 h-5 rounded-full bg-white text-red-500"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                  ></path>
                </svg>

                <p>Support d'experts 24/7</p>
              </div>

              <div class="flex space-x-2">
                <svg
                  data-v-c3ad5561=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon w-5 h-5 rounded-full bg-white text-red-500"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                  ></path>
                </svg>

                <div class="col">
                  <p>Garantie de disponibilité: 99.99%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img
            :src="photo"
            laoding="lazy"
            class="ml-auto lg:block hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titre: {
      String,
    },
    donnee: {
      String,
    },
    photo: {
      String,
    },
    backgroundColor: {
      type: String,
      default: "#0b1120",
    },
  },
};
</script>

<style>
@media (min-width: 999px) {
  #sectionRealiser {
    padding: 0 15%;
  }
}
</style>

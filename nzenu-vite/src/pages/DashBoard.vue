<template>
    <div>
        <nav class="sticky top-0 w-full z-30 lg:px-40">
            <div class="flex justify-between items-center lg:px-10 px-3 bg-blue-800">
                <img class="logo" src="../assets/logo_Nzenuhost1_copie_2_4x-8_rnfqnu.png" alt="" />
                <div class="flex items-center space-x-3">
                    <div class="items-center space-x-1 lg:block hidden text-white">
                        <span>votre solde:</span><span class="font-bold">0 FCFA</span>
                    </div>
                    <div class="relative">
                        <div class="relative">
                            <div>
                                <!--[--><span class="inline-flex rounded-md"><button type="button"
                                        class="inline-flex items-center px-1 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                        <span class="uppercase">fillin flow</span><svg
                                            class="ml-2 -mr-0.5 h-5 w-5 font-bold text-red-800" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                        </svg></button></span><!--]-->
                            </div>
                            <div style="" class="fixed inset-0 z-40"></div>
                            <div style="" class="w-48 origin-top-right right-0 absolute z-50 mt-2 rounded-md shadow-lg">
                                <div class="py-1 bg-white p-5 rounded-md ring-1 ring-black ring-opacity-5">
                                    <!--[-->
                                    <div class="block px-2 py-2 text-xs text-gray-400">
                                        Gérer mon compte
                                    </div>
                                    <div
                                        class="px-2  flex items-center py-2 hover:bg-gray-200 cursor-pointer space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="icon block" style="" width="1em" height="1em" viewBox="0 0 14 14"
                                            data-v-c3ad5561="">
                                            <g fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="m11 9l2-.5l.5 2"></path>
                                                <path
                                                    d="M13 8.5A6.76 6.76 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2">
                                                </path>
                                                <path d="M1 5.5C1.84 3.2 4.42 1 7 1h0a6 6 0 0 1 5.64 4"></path>
                                            </g>
                                        </svg><button>Recharge</button>
                                    </div>
                                    <a href="/clients/profile"
                                        class="px-2 space-x-2 flex py-2 items-center hover:bg-gray-200"><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="icon w-5 h-5" style="" width="1em" height="1em" viewBox="0 0 24 24"
                                            data-v-c3ad5561="">
                                            <path fill="currentColor"
                                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4">
                                            </path>
                                        </svg><button>Profile</button></a>
                                    <div class="border-t border-gray-200"></div>
                                    <div class=" flex items-center py-2 hover:bg-gray-200 cursor-pointer space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            class="icon h-5 w-5" style="" width="1em" height="1em" viewBox="0 0 24 24"
                                            data-v-c3ad5561="">
                                            <path fill="currentColor"
                                                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.1.788-3.912t2.137-3.163l1.4 1.4q-1.1 1.1-1.712 2.55T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.675-.612-3.125t-1.713-2.55l1.4-1.4q1.35 1.35 2.138 3.163T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-9V2h2v11z">
                                            </path>
                                        </svg><button>Fermer la session</button>
                                    </div>
                                    <!--]-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="icon" v-show="mobile">
                    <img @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }"
                        src="../assets/8604bcf1-d9e9-4924-ab99-89e8a04d5de4.svg" alt="" />
                </div>
            </div>
        </nav>

        <div class="flex lg:px-40 w-full">
            <div v-show="!mobile" class="p-5 text-black bg-sky-950 h-screen">
                <div class="text-white flex space-x-2">
                    <div class="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style="" width="1em"
                            height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
                            <path fill="currentColor" d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                                opacity=".3"></path>
                            <path fill="currentColor"
                                d="M3 13h8V3H3zm2-8h4v6H5zm8 16h8V11h-8zm2-8h4v6h-4zM13 3v6h8V3zm6 4h-4V5h4zM3 21h8v-6H3zm2-4h4v2H5z">
                            </path>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="/dashbaord" class="nav-link text-decoration-none"
                            active-class="active">Dashbaord</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2">
                    <div class="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style="" width="1em"
                            height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
                            <path fill="currentColor"
                                d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5m3.5 14c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5z">
                            </path>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="/contact" class="nav-link text-decoration-none"
                            active-class="active">Contact</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2">
                    <div class="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style="" width="1em"
                            height="1em" viewBox="0 0 48 48" data-v-c3ad5561="">
                            <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                                <path fill="currentColor" stroke-linecap="round"
                                    d="m4 24l8.571 18L24 29zm40 0l-8.571 18L24 29zM13 42h22L24 29z"></path>
                                <path d="M12 26L24 4l12 22"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="">
                        <router-link to="commande">Commandes</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2">
                    <div class="col-2">
                        <svg width="2em" height="1.3em" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                            class="icon w-5 h-5" data-v-5eaad1d1="" style="" viewBox="0 0 24 24" data-v-c3ad5561="">
                            <path fill="currentColor"
                                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m6.918 6h-3.215a49 49 0 0 0-.565-3.357A8.05 8.05 0 0 1 18.918 8m-5.904-3.928c.068.352.387 2.038.645 3.928h-3.318c.258-1.89.577-3.576.645-3.928C11.319 4.029 11.656 4 12 4s.681.029 1.014.072M14 12c0 .598-.043 1.286-.109 2h-3.782c-.066-.714-.109-1.402-.109-2s.043-1.286.109-2h3.782c.066.714.109 1.402.109 2M8.862 4.643A49 49 0 0 0 8.297 8H5.082a8.05 8.05 0 0 1 3.78-3.357M4.263 10h3.821C8.033 10.668 8 11.344 8 12s.033 1.332.085 2H4.263C4.097 13.359 4 12.692 4 12s.098-1.359.263-2m.819 6h3.215c.188 1.424.42 2.65.565 3.357A8.05 8.05 0 0 1 5.082 16m5.904 3.928A77 77 0 0 1 10.341 16h3.318a78 78 0 0 1-.645 3.928c-.333.043-.67.072-1.014.072s-.681-.029-1.014-.072m4.152-.571c.145-.707.377-1.933.565-3.357h3.215a8.05 8.05 0 0 1-3.78 3.357M19.737 14h-3.821c.051-.668.084-1.344.084-2s-.033-1.332-.085-2h3.821c.166.641.264 1.308.264 2s-.097 1.359-.263 2">
                            </path>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="domaine" class="nav-link text-decoration-none" active-class="active">Nom de
                            domaine</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2"">
                    <div class="col-1">
                        <svg width="25" height="35" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                            class="icon w-5 h-5" data-v-5eaad1d1="" style="" viewBox="0 0 24 24" data-v-c3ad5561="">
                            <g fill="none">
                                <path stroke="currentColor" stroke-width="1.5"
                                    d="M2 18c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 19.398 2 18.932 2 18Zm0-6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12Zm0-6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6Z">
                                </path>
                                <circle cx="5" cy="12" r="1" fill="currentColor" opacity=".5"></circle>
                                <circle cx="5" cy="6" r="1" fill="currentColor" opacity=".5"></circle>
                                <circle cx="5" cy="18" r="1" fill="currentColor" opacity=".5"></circle>
                            </g>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="hebergement" class="nav-link text-decoration-none"
                            active-class="active">Hebergement Web</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2">
                    <div class="col-1">
                        <svg width="25" height="35" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                            class="icon w-5 h-5" data-v-5eaad1d1="" style="" viewBox="0 0 496 512" data-v-c3ad5561="">
                            <path fill="currentColor"
                                d="M248 43.4C130.6 43.4 35.4 138.6 35.4 256S130.6 468.6 248 468.6S460.6 373.4 460.6 256S365.4 43.4 248 43.4m-97.4 132.9c0-53.7 43.7-97.4 97.4-97.4s97.4 43.7 97.4 97.4v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6c0-82.1-124-82.1-124 0v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6zM389.7 380c0 9.7-8 17.7-17.7 17.7H124c-9.7 0-17.7-8-17.7-17.7V238.3c0-9.7 8-17.7 17.7-17.7h248c9.7 0 17.7 8 17.7 17.7zm-248-137.3v132.9c0 2.5-1.9 4.4-4.4 4.4h-8.9c-2.5 0-4.4-1.9-4.4-4.4V242.7c0-2.5 1.9-4.4 4.4-4.4h8.9c2.5 0 4.4 1.9 4.4 4.4m141.7 48.7c0 13-7.2 24.4-17.7 30.4v31.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-31.6c-10.5-6.1-17.7-17.4-17.7-30.4c0-19.7 15.8-35.4 35.4-35.4s35.5 15.8 35.5 35.4M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 478.3C121 486.3 17.7 383 17.7 256S121 25.7 248 25.7S478.3 129 478.3 256S375 486.3 248 486.3">
                            </path>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="ssl" class="nav-link text-decoration-none" active-class="active">Certificate
                            SSL</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2">
                    <div class="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style="" width="1em"
                            height="1em" viewBox="0 0 512 512" data-v-c3ad5561="">
                            <circle cx="432" cy="160" r="64" fill="currentColor"></circle>
                            <path
                                d="M225 160H33.799c-11.1 0-13.898 3-11.299 10.5 1.5 4.4 8.4 8.1 12.5 10.2 11 5.8 163.799 89.1 169.5 92.1 5.699 3 11.5 4.4 20.5 4.4s14.799-1.4 20.5-4.4c3.79-1.995 72.625-39.497 121.559-66.107C357.594 193.551 352 177.433 352 160H225z"
                                fill="currentColor"></path>
                            <path
                                d="M293.199 273.3l82.201 92.5c2 2 2.898 4.4 1.799 5.601-1.199 1.1-3.799.5-5.9-1.4l-98.6-83.2c-14.9 9.601-25.4 16.2-27.199 17.2-7.701 3.9-13.1 4.4-20.5 4.4s-12.801-.5-20.5-4.4c-1.9-1-12.301-7.6-27.201-17.2l-98.6 83.2c-2 2-4.699 2.6-5.9 1.4C71.6 370.3 72.5 367.8 74.5 365.8l82.1-92.5c-48.7-31.5-123.1-83.9-131.301-88.1C16.5 180.7 16 186 16 190.1v205c0 9.3 13.699 20.9 23.5 20.9h371c9.799 0 21.5-11.7 21.5-20.9V240c-21.726 0-41.416-8.673-55.832-22.729-26.001 17.902-57.808 39.754-82.969 56.029z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="email pro" class="nav-link text-decoration-none" active-class="active">Email
                            Pro</router-link>
                    </div>
                </div>
                <div class="text-white flex space-x-2">
                    <div class="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style="" width="1em"
                            height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
                            <path fill="currentColor"
                                d="M6 12.05q0 .4.05.788t.175.762q.125.425-.025.813t-.525.562q-.4.2-.787.038t-.513-.588q-.2-.575-.288-1.175T4 12.05q0-3.35 2.325-5.7T12 4h.175l-.9-.9Q11 2.825 11 2.4t.275-.7t.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.7.275t-.7-.275T11 7.6t.275-.7l.9-.9H12Q9.5 6 7.75 7.763T6 12.05m12-.1q0-.4-.05-.787t-.175-.763q-.125-.425.025-.812t.525-.563q.4-.2.787-.037t.513.587q.2.575.288 1.175t.087 1.2q0 3.35-2.325 5.7T12 20h-.175l.9.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.9.9H12q2.5 0 4.25-1.762T18 11.95">
                            </path>
                        </svg>
                    </div>
                    <div class="col">
                        <router-link to="/renouvellement" class="nav-link text-decoration-none"
                            active-class="active">renouvellement</router-link>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-lg-9 column2">
                <RouterView />
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown">
                    <div class="text-white flex space-x-2">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style=""
                                width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
                                <path fill="currentColor" d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                                    opacity=".3"></path>
                                <path fill="currentColor"
                                    d="M3 13h8V3H3zm2-8h4v6H5zm8 16h8V11h-8zm2-8h4v6h-4zM13 3v6h8V3zm6 4h-4V5h4zM3 21h8v-6H3zm2-4h4v2H5z">
                                </path>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="/dashbaord" class="nav-link text-decoration-none"
                                active-class="active">Dashbaord</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style=""
                                width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
                                <path fill="currentColor"
                                    d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5m3.5 14c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5z">
                                </path>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="/contact" class="nav-link text-decoration-none"
                                active-class="active">Contact</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style=""
                                width="1em" height="1em" viewBox="0 0 48 48" data-v-c3ad5561="">
                                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                                    <path fill="currentColor" stroke-linecap="round"
                                        d="m4 24l8.571 18L24 29zm40 0l-8.571 18L24 29zM13 42h22L24 29z"></path>
                                    <path d="M12 26L24 4l12 22"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="commande" class="nav-link text-decoration-none"
                                active-class="active">Commandes</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-2">
                            <svg width="2em" height="1.3em" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="icon w-5 h-5" data-v-5eaad1d1="" style="" viewBox="0 0 24 24" data-v-c3ad5561="">
                                <path fill="currentColor"
                                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m6.918 6h-3.215a49 49 0 0 0-.565-3.357A8.05 8.05 0 0 1 18.918 8m-5.904-3.928c.068.352.387 2.038.645 3.928h-3.318c.258-1.89.577-3.576.645-3.928C11.319 4.029 11.656 4 12 4s.681.029 1.014.072M14 12c0 .598-.043 1.286-.109 2h-3.782c-.066-.714-.109-1.402-.109-2s.043-1.286.109-2h3.782c.066.714.109 1.402.109 2M8.862 4.643A49 49 0 0 0 8.297 8H5.082a8.05 8.05 0 0 1 3.78-3.357M4.263 10h3.821C8.033 10.668 8 11.344 8 12s.033 1.332.085 2H4.263C4.097 13.359 4 12.692 4 12s.098-1.359.263-2m.819 6h3.215c.188 1.424.42 2.65.565 3.357A8.05 8.05 0 0 1 5.082 16m5.904 3.928A77 77 0 0 1 10.341 16h3.318a78 78 0 0 1-.645 3.928c-.333.043-.67.072-1.014.072s-.681-.029-1.014-.072m4.152-.571c.145-.707.377-1.933.565-3.357h3.215a8.05 8.05 0 0 1-3.78 3.357M19.737 14h-3.821c.051-.668.084-1.344.084-2s-.033-1.332-.085-2h3.821c.166.641.264 1.308.264 2s-.097 1.359-.263 2">
                                </path>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="domaine" class="nav-link text-decoration-none" active-class="active">Nom de
                                domaine</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-1">
                            <svg width="25" height="35" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="icon w-5 h-5" data-v-5eaad1d1="" style="" viewBox="0 0 24 24" data-v-c3ad5561="">
                                <g fill="none">
                                    <path stroke="currentColor" stroke-width="1.5"
                                        d="M2 18c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 15 4.068 15 5 15h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 19.398 2 18.932 2 18Zm0-6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 4.068 9 5 9h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12Zm0-6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6Z">
                                    </path>
                                    <circle cx="5" cy="12" r="1" fill="currentColor" opacity=".5"></circle>
                                    <circle cx="5" cy="6" r="1" fill="currentColor" opacity=".5"></circle>
                                    <circle cx="5" cy="18" r="1" fill="currentColor" opacity=".5"></circle>
                                </g>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="hebergement" class="nav-link text-decoration-none"
                                active-class="active">Hebergement Web</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-1">
                            <svg width="25" height="35" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                class="icon w-5 h-5" data-v-5eaad1d1="" style="" viewBox="0 0 496 512"
                                data-v-c3ad5561="">
                                <path fill="currentColor"
                                    d="M248 43.4C130.6 43.4 35.4 138.6 35.4 256S130.6 468.6 248 468.6S460.6 373.4 460.6 256S365.4 43.4 248 43.4m-97.4 132.9c0-53.7 43.7-97.4 97.4-97.4s97.4 43.7 97.4 97.4v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6c0-82.1-124-82.1-124 0v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6zM389.7 380c0 9.7-8 17.7-17.7 17.7H124c-9.7 0-17.7-8-17.7-17.7V238.3c0-9.7 8-17.7 17.7-17.7h248c9.7 0 17.7 8 17.7 17.7zm-248-137.3v132.9c0 2.5-1.9 4.4-4.4 4.4h-8.9c-2.5 0-4.4-1.9-4.4-4.4V242.7c0-2.5 1.9-4.4 4.4-4.4h8.9c2.5 0 4.4 1.9 4.4 4.4m141.7 48.7c0 13-7.2 24.4-17.7 30.4v31.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-31.6c-10.5-6.1-17.7-17.4-17.7-30.4c0-19.7 15.8-35.4 35.4-35.4s35.5 15.8 35.5 35.4M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 478.3C121 486.3 17.7 383 17.7 256S121 25.7 248 25.7S478.3 129 478.3 256S375 486.3 248 486.3">
                                </path>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="ssl" class="nav-link text-decoration-none"
                                active-class="active">Certificate SSL</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style=""
                                width="1em" height="1em" viewBox="0 0 512 512" data-v-c3ad5561="">
                                <circle cx="432" cy="160" r="64" fill="currentColor"></circle>
                                <path
                                    d="M225 160H33.799c-11.1 0-13.898 3-11.299 10.5 1.5 4.4 8.4 8.1 12.5 10.2 11 5.8 163.799 89.1 169.5 92.1 5.699 3 11.5 4.4 20.5 4.4s14.799-1.4 20.5-4.4c3.79-1.995 72.625-39.497 121.559-66.107C357.594 193.551 352 177.433 352 160H225z"
                                    fill="currentColor"></path>
                                <path
                                    d="M293.199 273.3l82.201 92.5c2 2 2.898 4.4 1.799 5.601-1.199 1.1-3.799.5-5.9-1.4l-98.6-83.2c-14.9 9.601-25.4 16.2-27.199 17.2-7.701 3.9-13.1 4.4-20.5 4.4s-12.801-.5-20.5-4.4c-1.9-1-12.301-7.6-27.201-17.2l-98.6 83.2c-2 2-4.699 2.6-5.9 1.4C71.6 370.3 72.5 367.8 74.5 365.8l82.1-92.5c-48.7-31.5-123.1-83.9-131.301-88.1C16.5 180.7 16 186 16 190.1v205c0 9.3 13.699 20.9 23.5 20.9h371c9.799 0 21.5-11.7 21.5-20.9V240c-21.726 0-41.416-8.673-55.832-22.729-26.001 17.902-57.808 39.754-82.969 56.029z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="email pro" class="nav-link text-decoration-none"
                                active-class="active">Email Pro</router-link>
                        </div>
                    </div>
                    <div class="text-white flex space-x-2">
                        <div class="col-1">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="icon w-5 h-5" data-v-b2bd2a7f="" style=""
                                width="1em" height="1em" viewBox="0 0 24 24" data-v-c3ad5561="">
                                <path fill="currentColor"
                                    d="M6 12.05q0 .4.05.788t.175.762q.125.425-.025.813t-.525.562q-.4.2-.787.038t-.513-.588q-.2-.575-.288-1.175T4 12.05q0-3.35 2.325-5.7T12 4h.175l-.9-.9Q11 2.825 11 2.4t.275-.7t.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.7.275t-.7-.275T11 7.6t.275-.7l.9-.9H12Q9.5 6 7.75 7.763T6 12.05m12-.1q0-.4-.05-.787t-.175-.763q-.125-.425.025-.812t.525-.563q.4-.2.787-.037t.513.587q.2.575.288 1.175t.087 1.2q0 3.35-2.325 5.7T12 20h-.175l.9.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.6-2.6q-.3-.3-.3-.7t.3-.7l2.6-2.6q.275-.275.7-.275t.7.275t.275.7t-.275.7l-.9.9H12q2.5 0 4.25-1.762T18 11.95">
                                </path>
                            </svg>
                        </div>
                        <div class="col">
                            <router-link to="renouvellement" class="nav-link text-decoration-none"
                                active-class="active">renouvellement</router-link>
                        </div>
                    </div>
                </ul>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            scrollNav: null,
            mobile: null,
            mobileNav: null,
            WindowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.WindowWidth = window.innerWidth;
            if (this.WindowWidth <= 750) {
                this.mobile = true;

                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrollNav = true;
                return;
            }
            this.scrollNav = false;
        },
    },
};
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

.dropdown {
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    padding-left: 30px;
    background-color: #fff;
    top: 0;
    left: 0;
    transition: 500ms ease all;


}




nav img {
    width: 65px;
    height: 65px;
}

.column1 {
    background-color: #082f49;
    height: 30rem;
}
</style>

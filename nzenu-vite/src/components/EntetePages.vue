
<template>
    <section id="sectionRealiser">
            <div class="col-lg-6 col-md-12">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>{{ titre }}</h1>
                        <p>{{ donnee }}</p>
                    </div>
                </div>
                <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-lg-5">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <svg style="color:red;border-radius:7px" width="20" data-v-c3ad5561="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-5 h-5 rounded-full bg-white text-red-500"  height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"></path></svg>
                                        </div>
                                        <div class="col">
                                            <p>Support d'experts 24/7</p>
                                        </div>
                                    </div>
    
                                </div>
                                <div class="col-md-12 col-sm-12 col-lg-5">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <svg style="color:red;border-radius:7px" width="20" data-v-c3ad5561="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-5 h-5 rounded-full bg-white text-red-500" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"></path></svg>
                                        </div>
                                        <div class="col">
                                             <p>Garantie de disponibilité: 99.99%</p>
                                        </div>
                                    </div>
    
                                   
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
            <div class="col-lg-4">


                <img :src="photo" alt="">
            </div>
    </section>
</template>


<script>
    export default{
        props:{
            titre:String,
            donnee:String,
            photo:String
        }
    }







</script>



<style>

#sectionRealiser {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right ;
  background-color: #0b1120; 
  min-height: 20rem;
  font-weight: bold;
  color: white;
  text-align: left;
}



</style>
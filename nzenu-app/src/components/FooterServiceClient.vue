<template>
    <section class="supportClient">
        <div class="row">
            <div class="d-flex justify-content-center col-md-3 col-lg-3 col-sm-12 center">
                <img src="../assets/image.jpeg" alt="">
            </div>
            <div class="col-md-6 col-lg-9 col-sm-12" id="supportClientRow2">
                <div class="row">
                    <h5>Support client personnalisé 7J/7</h5>
                    <p>
                        Nous mettons à votre disposition, un support client qualifié, formé continuellement pour vous aider dans la mise en œuvre de vos projets web.
                    </p>
                    <div class="col-md-3 col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-2"><svg widths="50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon w-8 h-8 rounded-full bg-water-leaf-200 text-primary-900 p-1" style="" width="4em" height="1em" viewBox="0 0 512 512" data-v-c3ad5561=""><path fill="currentColor" d="m426.24 127.72l-10.94 10.94a29.67 29.67 0 0 1-42-42l10.94-10.94L314.52 16l-88 88l-4 12.09l-12.09 4L16 314.52l69.76 69.76l10.94-10.94a29.67 29.67 0 0 1 42 42l-10.94 10.94L197.48 496l194.4-194.4l4-12.09l12.09-4l88-88Zm-208.56 5.43l21.87-21.87l33 33l-21.88 21.87Zm43 43l21.88-21.88l32.52 32.52l-21.88 21.88Zm42.56 42.56l21.88-21.88l32.52 32.52l-21.84 21.93Zm75.57 75.56l-33-33l21.87-21.88l33 33Z"></path></svg></div>
                            <div class="col">
                                Assistance tickets <br>
                                7 jours sur 7
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-2"></div>
                            <div class="col">
                                Assistance téléphonique <br>
                                (+237) 657 882 614 | Lun-Ven 9H-19H
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-2"></div>
                            <div class="col">
                                Chat en direct <br>
                                Lun-Ven 10H-20H | Sam-Dim 10H-18H
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="containerm" id="firstfootercontainer">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-lg-3">
                    Plus éfficace. Plus de service. Plus de possibilités <br>
                    <label for="language">Changer de langue</label><br>
                    <select name="language" id="language" style="width: 50%;">
                        <option value="french">french</option>
                        <option value="english">english</option>
                    </select>
                </div>
                <div class="col-md-12 col-sm-12 col-lg-3">
                    HÉBERGEMENT & PRODUCTS <br>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-3">
                    CONTACTEZ-NOUS <br>
                </div>
                <div class="col-md-12 col-sm-12 col-lg-3">
                    <div class="row">
                        <div class="col">
                            Réseau sociaux<br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            moyen de payement disponibles <br>
                            <div class="row">
                                <div class="col">
                                    <img src="../assets/image (3).jpeg" alt="">
                                </div>
                                <div class="col">
                                    <img src="../assets/image (3).png" alt="">
                                </div>
                                <div class="col">
                                    <img src="../assets/image (2).png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="containern">
            Copyright <span></span>2025 
            NzenuHost By NZENU SARL
        </div>
    </footer>
</template>
<script>



</script>

<style>

.seulement p{
  text-align: left;
  background-color: #d1d5db;
}
.supportClient{
  display: flex;
  flex-wrap: wrap;
}
#supportClientRow2{
  display: flex;
  flex-wrap: wrap;
  
}
.supportClient {
  background-color: #060642;
  color: #fff;
}

.supportClient img {
  border-radius: 400px;
 max-width: 300px;
  border: 4px solid rgb(107, 107, 194);
  display: flex;
  flex-shrink: 2;
}




/* Mobile */
@media (max-width: 576px) {
  #firstfootercontainer{
    padding: 0% 1%;
  }

#sectionRealiser .col-lg-4{
  display: none;
}
#supportClientRow2{
  display: flex;
  text-align: start;
  justify-content: left;
}
#supportClientRow2 .row p{
    text-align: start;
}
#supportClientRow2 img {
  max-width: 100%;
  height: auto;
}
}
/* Tablette */
@media (max-width: 992px) {
  #firstfootercontainer{
    padding: 1% 5%;
  }
#supportClientRow2{
  display: flex;
  text-align: start;
  justify-content: left;
}
#supportClientRow2 .row p{
    text-align: start;
}
#supportClientRow2 img {
  max-width: 100%;
  height: auto;
}


#sectionRealiser .col-lg-4{
  display: none;
}

}

/* Ordinateur */
@media (min-width: 993px) {
  #firstfootercontainer{
    padding: 2% 10%;
  }
  .supportClient{
    padding: 2% 10%;
  }

  


}






</style>
<template>
    <v-container>
      <div class='background'>
        <div class='topbanner'>
            <img class='topbanner' contain width='65%' src='../assets/top.gif'>
        </div>
        <div class="main">

            <div class='headerimage'>
                <h1><img class='headerimage1' contain width='35px' src='../assets/GameAssets/contact.png'>Contact Us<img class='headerimage2' contain width='35px' src='../assets/GameAssets/contact.png'></h1>
            </div>

            <p class = 'description'>
                If you're looking to get in touch with us, feel free to message any of the following links at your convenience. They are monitored on a weekly basis, and we will try to respond as quickly as we can!
            </p>

            <hr class='break'>

            <p class = 'description'>
                <img style='vertical-align:middle;' contain height="17px" src='../assets/ContactUs/twitter.jpg'> Twitter - <a href='https://twitter.com/osrsbotdetector'>@Osrsbotdetector</a>
                <br>
                <img style='vertical-align:middle;' contain height="17px" src='../assets/ContactUs/discord.png'>Discord - <a href='https://discord.com/invite/botdetector'>Bot Detector Plugin Discord</a>
                <br>
                <img style='vertical-align:middle;' contain height="17px" src='../assets/ContactUs/gmail.png'>Email - <a href='osrsbotdetector@gmail.com'>osrsbotdetector@gmail.com</a>
            </p>

          </div>
            <div class='bottombanner'>
              <img class='bottombanner' contain width='65%' src='../assets/bottom.gif'>
            </div>
        </div>
    </v-container>
</template>

<style scoped>

div.headerimage {
  position: relative;
  text-align: center;
  padding-top: 10px;
}

img.headerimage1 {
  position: relative;
  right: 10px;
  top: 5px;
}

img.headerimage2 {
  position: relative;
  left: 10px;
  transform: scaleX(-1);
  top: 5px;
}

img.topbanner {
  position: relative;
  z-index: 2;
}

div.topbanner {
  position: relative;
  text-align: center;
}

img.bottombanner {
  position: relative;
  z-index: 2;
}

div.bottombanner {
  position: relative;
  text-align: center;
}

div.background {
    background-image: url('../assets/background.jpg');
    background-position: center;
    background-repeat: repeat-y;
    background-size: 75%;
}

div.main {
  margin-top: -1%;
  margin-bottom: -1%;
  width: 60%;
  text-align: center;
  padding-bottom: 300px;
  margin-right: auto;
  margin-left: auto;
  color: #1F1B12;
  background-color: #B9A170;
}

hr.break {
  border: solid #63A266;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin:auto;

}

div.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-bottom:1%;
  padding-top:10px;
}

p.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}

</style>
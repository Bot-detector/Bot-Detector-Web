<template>
    <v-container>
        <div class='background'>
            <div class='topbanner'>
                <img class='topbanner' contain width='88%' src='../assets/top.gif'>
            </div>
        <div class='main'>
            <div>
              <div class='headerimage'>
                <h1><img class='headerimage1' contain width='35px' src='../assets/GameAssets/Skull.png'>Banned Accounts<img class='headerimage2' contain width='35px' src='../assets/GameAssets/Skull.png'></h1>
              </div>
                <p class = 'description'>
                    Uh oh, you caught us! We'll be building this page soon enough. Check back later!
                </p>
            </div>

            <hr class='break'>

            <div class='description'>
                <p>bans go here</p>
            </div>
        </div>
        <div class='bottombanner'>
            <img class='bottombanner' contain width='88%' src='../assets/bottom.gif'>
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
  transform: scaleX(-1);
}
img.headerimage2 {
  position: relative;
  left: 10px;
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
    width: 900px;
    margin-right: auto;
    margin-left: auto;
    background-image: url('../assets/background.jpg');
    background-position: center;
    margin-top: -2%;
    padding-top: 2%;
    padding-bottom: 1%;
    background-repeat: repeat-y;
    background-size: 100%;
}


div.main {
    margin-top: -2%;
    padding-top: 1%;
    margin-bottom: -1%;
    width: 85%;
    text-align: center;
    padding-bottom: 500px;
    margin-right: auto;
    margin-left: auto;
    color: #1F1B12;
    background-image: url('../assets/backdrop.gif');
    background-repeat: repeat-y;
    background-position: center;
    background-size: 100%;
}

hr.break {
  border: solid #6B7B17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin:auto;

}

span.link{
  color: #1b180c;
  font-weight:bold;
}


p.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}

div.description {
  text-align: left;
  padding-right:5%;
  padding-left:5%;
  padding-bottom:1%;
  padding-top:10px;
}
</style>
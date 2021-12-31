<template>
    <v-container>
        <div class='background'>
            <div class='topbanner'>
                <img class='topbanner' contain width='65%' src='../assets/top.gif'>
            </div>
        <div class="main">
            <div class='headerimage'>
                <h1><img class='headerimage1' contain width='35px' src='../assets/GameAssets/runefullhelm.png'>OSRS Account Search<img class='headerimage2' contain width='35px' src='../assets/GameAssets/runefullhelm.png'></h1>
            </div>
            <p class = 'description'>
                If you would like to learn more about an Old School Runescape account, type in the name below. We cannot provide information with 24 hours of a sighting of a player, therefore we cannot provide latest locations and latest gear information for an account.
            </p>
            <hr class='break'>

            <div class = 'enterrsn'>
                <label style='font-size: 20px;'>Account Name: </label>
                <input type="text" class='enterrsn' id="RSN" name="RSN" required minlength="1" maxlength="12" size=20px>
            </div>

            <br>

            <div class='field'>
                <body class='field'>Account Status: </body>
                <body class='field'>Ban Date: </body>
                <body class='field'>Plugin Prediction: </body>
                <body class='field'>First Seen by the Plugin: </body>
                <body class='field'>Last Seen by the Plugin: </body>
            </div>
            
        </div>
        <div class='bottombanner'>
            <img class='bottombanner' contain width='65%' src='../assets/bottom.gif'>
        </div>
        </div>
    </v-container>
</template>

<script>
</script>

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

input.enterrsn {
    border:2px solid #1F1B12; 
    text-align: center;
    float: center;
}

div.enterrsn {
    margin-left: 5%;
    float: left;
    text-align: left;
    vertical-align: bottom;
}

div.field {
    margin-left: 5%;
    margin-top: 2%;
}

p.field {
    text-align: left;
    margin-top: 0px;
}

div.main {
    margin-top: -1%;
    margin-bottom: -1%;
    width:60%;
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
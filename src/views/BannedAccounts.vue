<script setup lang="ts">

</script>

<template>
      <main>
        <div>
          <div class="headerimage">
            <h1>
              <img
                class="headerimage1"
                contain
                width="35px"
                src="../assets/images/GameAssets/Skull.png"
              />Banned Accounts<img
                class="headerimage2"
                contain
                width="35px"
                src="../assets/images/GameAssets/Skull.png"
              />
            </h1>
          </div>
          <p class="description">
            A list of all accounts that have been banned since February 28th
            2021. Missing an account? Contact us!
          </p>
        </div>

        <hr class="break" />

        <div class="description">
          <p></p>
        </div>
      </main>
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

hr.break {
  border: solid #6b7b17;
  width: 80%;
  border-width: 1px;
  height: 1px;
  margin: auto;
}

span.link {
  color: #1b180c;
  font-weight: bold;
}

p.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-top: 10px;
}

div.description {
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-top: 10px;
}
</style>

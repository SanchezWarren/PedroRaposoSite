<template>

  <LoadSpinner />
  <SideBar v-if="isSideBar()" />
  <NavBar />
  <TheContent v-if="!isSideBar()" />
  
</template>

<script>

import NavBar from '@/components/UI/NavBar.vue';
import SideBar from '@/components/UI/SideBar.vue';
import TheContent from '@/components/UI/TheContent.vue'
import LoadSpinner from '@/components/UI/LoadSpinner.vue'

export default {
  components: {
    NavBar,
    SideBar,
    TheContent,
    LoadSpinner
    
  },
  data() {
    return {
      isMobile: null,
      isLoading: false,
      page: null,
    };
  },
  created() {
    this.$store.dispatch("loadData");
    this.createWindowEventListener();
    this.updateWindowSize();
    document.title = "Pedro Raposo";
  },
  methods: {
    isSideBar() { return this.$store.getters.getIsHome /* && this.isMobile || 
                          !this.$store.getters.getIsHome && !this.isMobile ||
                          this.$store.getters.getIsHome && !this.isMobile */},
    createWindowEventListener() {
      if (window.attachEvent) {
        //IE < v9
        window.attachEvent("onresize", this.updateWindowSize);
      } else if (window.addEventListener) {
        window.addEventListener("resize", this.updateWindowSize);
      } else {
        //The browser does not support Javascript event binding
      }
    },
    updateWindowSize() {
      var screenSizeW = document.documentElement.clientWidth;
      //var screenSizeH = document.documentElement.clientHeight;
      if (screenSizeW < 900) {
        this.$store.commit('setMobile', true);
      } else {
        this.$store.commit('setMobile', false);
      }
    },
  }
};
</script>

<style>
@font-face {
  font-family: LoraRegular;
  src: local('LoraRegular'), url('./assets/Lora-Regular.ttf') format('truetype');
}
@font-face {
  font-family: LoraBold;
  src: local('LoraBold'), url('./assets/Lora-Bold.ttf') format('truetype');
}
@font-face {
  font-family: Metropolis;
  src: local('Metropolis'), url('./assets/Metropolis-Regular.ttf') format("truetype");
}
@font-face {
  font-family: Metropolis-ExtraBold;
  src: local('Metropolis-Bold'), url('./assets/Metropolis-ExtraBold.otf') format("opentype");
}

* {
  box-sizing: border-box;
}

:root {
  --side-width: 100vw;
  --main-bg-color: rgb(232 246 249);
  --bar-color: white;
  --link-color: #558696;

}


h1 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Metropolis;
  font-weight: 100;
  font-size: 5vw;
  line-height: 3.2vw;
  letter-spacing: 0.4vw;
  margin: 0;
}
h2 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Metropolis;
  font-weight: 100;
  font-size: 5vw;
  line-height: 3.2vw;
  letter-spacing: 0.4vw;
  margin: 0;
}

html, p, pre {
  font-family: Metropolis;
  font-size: 3vw;
  color: black;
  font-weight: 100;
  line-height: 1.5;
  letter-spacing: 0.1vh;
  text-align: left;
  
}



.main-content, 
.main-content p{
  font-size: 4vw;
  line-height: 1.5;
  letter-spacing: 0.1vh;
  text-align: left;
  margin: 0;
}
.main-footer img{ display: none;}
.main-footer p:first-of-type{ display: none; }
.main-footer p{ color: grey;}

table{
  width: 100%;
  border: 0;
}

table td{
  background: var(--main-bg-color);
    padding: 4vh;
    margin: 1vh 0;
    border-radius: 9px;
    border: 0;
}
@keyframes show-up {
  0% { bottom: -8vw; opacity: 0;}
  100% { bottom: 0vw; opacity: 1;}
}
table td {
  position: relative;
  animation: show-up 1s;
  overflow: hidden;
}


a {
  text-decoration: none;
  color: var(--link-color);
}

#app {
  position: absolute;
}

body {
  margin: 0;
  overflow-x: hidden;
}

#side-nav img {
  height: auto;
  max-width: 80vw;
  align-self: center;
} 
#side-nav p:first-of-type {
  display: flex;
  justify-content: center;
  height: 100%;
} 

.footer-button p, .footer-button a{
  font-size: 1vw;
  width: 100%;
  text-align: center;
  color: white;
  font-family: Metropolis;
}





/* MEDIA QUERIES */
/* PARA JÁ, UM BREAKPOINT A PARTIR DE 900PX */
@media screen and (min-width: 900px) {
  :root {
   /*  --side-width: 20vw; */
  }

  html,
  h1{
    font-size: 1.8vw;
    line-height: 2.6vw;
    letter-spacing: 0.1vw;
    margin: 0;
  }
  h2 {
    font-size: 0.7vw;
    line-height: 0.7vw;
    letter-spacing: 0.1vw;
    margin: 0;
  }

  p, pre {
    font-size: 0.8vw;
    
  }

  #side-nav img:first-of-type{
    height: auto;
    max-width: 22vw;
    margin-right: 3vw;
  }

  .main-content, .main-content p, .main-content pre{
  font-size: 0.8vw;
  letter-spacing: 0.1vh;
  
}
}
</style>

<template>

  <div id="side-nav" v-html="getContent()">   
  </div>
  <div class="footer-button red-bar" v-html="$store.getters.getPage('cvFile')"></div>
</template>

<script>

export default {
  data() {
    return {
      content: null
    };
  },

  methods: {
    getContent() { return this.content= this.$store.getters.getPage("contactInfo") }
  },
  
}
</script>



<style scoped>
#side-nav {
  position: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-evenly;
    flex-wrap: nowrap;
    padding: 15vh 10vw 0;
    width: var(--side-width);
    /* height: 100vh; */
    background-color: 0;
}

#side-nav h1 {
  color: white;
  margin: 0;
}


.footer-button{
  display: none;
  position: fixed;
  bottom: 0px;
}
.red-bar {
  justify-content: space-between;
  align-items: center;
  padding: 0vh 0vw;
  width: 100vw;
  height: 8vw;
  background-color: var(--bar-color);
}




.title {
  white-space: nowrap;
  padding-right: 4vw;
}

a {
  display: flex;
  align-items: baseline;
  flex-direction: column;
}



/* MEDIA QUERIES */
/* PARA JÁ, UM BREAKPOINT A PARTIR DE 900PX */
@media screen and (min-width: 900px) {
  #side-nav{
    height: 100vh;
    padding: 20vh 20vw;
    flex-wrap: wrap;
  }

  .footer-button{
    display: flex;

  }
  .red-bar{
    width: var(--side-width);
    height: 1.7vw;
  }

}
</style>

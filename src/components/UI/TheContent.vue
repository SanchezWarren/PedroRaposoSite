<template>
  
  <h1 class="content-title"> {{ getSection().title }}</h1>
  
  <div class="main-content" v-html="getContent()"></div>

  <div v-if="!$store.getters.getIsMobile" class="main-footer" v-html="getFooter()"></div>
  
</template>

<script>
export default {
  data() {
    return {
      content: null
    };
  },

  methods: {
    getContent() {
      return (this.content = this.$store.getters.getPage(this.$store.getters.getSchema ));
    },
    getSection(){
      return this.$store.getters.getMenuSelected
    },
    getFooter() { return this.content= this.$store.getters.getPage("contactInfo") }
  },
  watch:{
    content(){
      console.log("changeddd");
    }
  }
};
</script>

<style scoped>

.content-title{
  width: 100%;
  text-align: center;
  padding: 16vh 3vw 0;
  color: grey;
}

.main-content {
  padding: 5vh 3vw 20vh;
  width: 100vw;
  height: auto;
  margin: 0;
}

.main-footer{
  display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: #f7f7f7;
    height: 20vh;
    color: grey;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


/* MEDIA QUERIES */
/* PARA JÁ, UM BREAKPOINT A PARTIR DE 900PX */
@media screen and (min-width: 900px) {
  .main-content {
    padding: 5vh 20vw 20vh;
    width: 100vw;
    height: auto;
    margin: 0;
    min-height: 62vh;
  }
  .content-title{
  
  padding: 23vh 3vw 0;
  
}
}
</style>

<template>
  <transition name="fade">
    <div class="load-msg" v-if="checkLoading()">
      
      <h3>... LOADING ...</h3>
      
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isLoad: true,
    };
  },

  methods: {
    checkLoading() {
      if(this.isLoad) 
        if (this.$store.getters.isLoaded) this.changeLoad(); 
     
      return this.isLoad
    },
    
    async changeLoad() {
      console.log("pasé");
        const delay = t => new Promise(resolve => setTimeout(resolve, t));
        delay(500).then( () => {this.isLoad= false; console.log('Hello')});
    }
  }
};
</script>

<style scoped>
.load-msg{
  opacity: 40;
  position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: white;
    
}

h3{
  font-family: "Roboto";
  font-weight: 100;
  font-size: 5vw;
  line-height: 3.2vw;
  letter-spacing: 0.4vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


@media screen and (min-width: 900px) {

  h3{
  font-size: 1vw;
  }

}


</style>

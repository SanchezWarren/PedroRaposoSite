<template>
  <div id="nav">
    <a href="/" class="title"><h1 class="title-name">Pedro Raposo</h1></a>
    
    <burguer-menu>
      <div class="elements-bar">
        <div class="line"></div>
        <div class="items">
          <div
            class="red-bar"
            v-for="(item, index) in getItems()"
            :key="item.id"
            @click="changeTo(item.component)"
          >
            <h2
              class="menu-item"
              :class="[
                index === 0 ? 'first-item' : '',
                item.component === $store.getters.getSchema &&
                !$store.getters.getIsHome
                  ? 'selected-item'
                  : ''
              ]"
            >
              {{ item.title }}
            </h2>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </burguer-menu>
  </div>
</template>

<script>
import BurguerMenu from '@/components/UI/BurguerMenu.vue';

export default {
  components: {
    BurguerMenu
  },
  data() {
    return {
      menuItems: null
    };
  },

  methods: {
    getItems() {
      return (this.menuItems = this.$store.getters.getMenuItems);
    },
    changeTo(schema) {
      this.$store.commit('setSchema', schema);
      this.$store.commit('setNotHome');
      document.getElementById('myCheckBox').checked= false;
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 3vh 0vw 3vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 2;
}

.title-name {
  z-index: 1;
  text-align: center;
  margin-bottom: 2vh;
}

.red-bar > .title-name {
  font-weight: 800;
  letter-spacing: 0.9vw;
}

.red-bar > h1 {
  padding: 3vw;
}

.line {
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 20vh 0;
}

.red-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0vh 0vw;
  /* width: 100vw; */
  height: 8vw;
  background-color: var(--bar-color);
}

.cont-bar {
  height: 90%;
  background-color: transparent;
}
.cont-bar > .red-bar {
  z-index: -1;
}
.elements-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0vh 0vw;
  height: 100%;
}

.menu-item {
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 1.5vh;
  color: grey;
  text-transform: uppercase;
  white-space: nowrap;
}

.selected-item {
  background: var(--main-bg-color);
  transition: background 1s;
  color: var(--link-color);
}

/* MEDIA QUERIES */
/* PARA JÁ, UM BREAKPOINT A PARTIR DE 900PX */
@media screen and (min-width: 900px) {
  .cont-bar {
    height: auto;
  }
  .red-bar {
    flex-direction: row;
    height: 1.7vw;
  }
  .red-bar > .title-name {
    letter-spacing: 0.6vw;
    padding: 0;
  }
  .elements-bar {
    flex-direction: row;
    position: relative;
    padding: 3vh 30vw;
    height: 1.7vw;
  }
  .line {
    padding: 0 9vw;
    width: 9vw;
    border-bottom: 1px solid lightgrey;
    margin: 0 3vw;
  }

  .items {
    display: flex;
    flex-direction: row;
    height: auto;
    padding: 0;
  }

  .menu-item {
    width: 100%;
    text-align: center;
  }
}
</style>

<!--
 Burguer menu for Vue

navigation items should go into the <slot>
and they should have a click event with at least
document.getElementById('myCheckBox').checked= false;
to close after you click

example :

  <div class="menu-item" @click="changeTo(item.component)"></div>

  changeTo(schema) {

      this.$store.commit('navigateTo', schema);
      document.getElementById('myCheckBox').checked= false;
      window.scrollTo(0, 0);
    }
-->  

<template>
  <div>
    <!-- element for the burguer icon --> 
    <label for="myCheckBox">
      <img
        v-if="$store.getters.getIsMobile"
        class="burguer-icon"
        alt="Burguer Menu"
        src="@/assets/burger-menu.svg"
      />
    </label>
    <input id="myCheckBox" ref="checkbox" type="checkbox" />

    <!-- container for the navigation elements -->
    <ul   
      class="menu-primary"
      :class="{ 'menu-desktop': !$store.getters.getIsMobile, 'menu-mobile': $store.getters.getIsMobile }"
    >
      <slot></slot>  <!-- slot where all the navigation menus will come somehow -->
       
    </ul>

    
  </div>
</template>

<style scoped>

/* BURGUER MENU */
/* HEADER STYLES */
.menu-primary{
  margin: 0;
  padding: 0;
}
.menu-mobile {
  display: none;
  align-items: center;
}
.menu-desktop {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-decoration: none;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  text-decoration: none;
  background-color: white;
  align-items: center;
  align-self: center;
}

.burguer-icon {
  position: relative;
  height: 5vh;
  z-index: 4;
  cursor: pointer;
}

#myCheckBox {
  display: none;
}
/* dropdown fullscreen */
#myCheckBox:checked + .menu-primary {
  display: flex;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: -1;
    padding: 0;
}

</style>

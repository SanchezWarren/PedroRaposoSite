import { createStore } from "vuex";

const store = createStore({
    state: {
      flameLink: null,
      isLoaded: false,
      isHome: true,
      isMobile: null,
      selectedSchema: "publishedPapers"
    },

    mutations: {
        setData: (state, data) => { state.flameLink= data; state.isLoaded= true;},
        setSchema: (state, schema)  => state.selectedSchema= schema,
        setNotHome: (state) => state.isHome= false,
        setMobile: (state, param) => state.isMobile= param,
    },
    actions: {
        loadData(context) { // get data from Firebase DB
            this.isLoading = true;
            fetch('https://raposo-cv-default-rtdb.europe-west1.firebasedatabase.app/flamelink.json')
              .then(response => { if (response.ok) { return response.json(); }})
              .then(data => {
                this.isLoading = false;
                context.commit('setData', data);
                
              });
          }
    },

    getters: {
        isLoaded: (state) => state.isLoaded,
        getPage: (state) => (page) => state.isLoaded ? state.flameLink.environments.production.content[page]['en-US'].content : null,
        getSchema: (state) => state.isLoaded ? state.selectedSchema : null,
        getMenuItems: (state) => state.isLoaded ? state.flameLink.environments.production.navigation.mainMenu['en-US'].items : null, 
        getIsHome: (state) =>  state.isHome,
        getIsMobile: (state) =>  state.isMobile,
        getMenuSelected:  (state) =>  
          state.isLoaded ?
          state.flameLink.environments.production.navigation.mainMenu['en-US'].items.find( x => x.component === state.selectedSchema) 
          : null,
      },

  })

  export default  store;
// Function that allows to initialize Vue.js
Vue.createApp({
    data() {
        return {
            message: "Hello Word Vue",
            title: "Infobulle",
            date: new Date(),	
        }
    }
}).mount('#app') 
// mount specifies that the Vue app will display in the div with id="app"
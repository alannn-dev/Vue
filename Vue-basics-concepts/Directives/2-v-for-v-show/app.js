// Function that allows to initialize Vue.js
Vue.createApp({
    data() {
        return {
            tab:[
                {nom: "Dupont", note: 12, groupe: "A"},
                {nom: "Aubin", note: 8, groupe: "B"},
                {nom: "François", note: 14, groupe: "B"},
                {nom: "Martin", note: 9, groupe: "A"}
            ] 
        }
    }
}).mount('#app') 
// mount specifies that the Vue app will display in the div with id="app"
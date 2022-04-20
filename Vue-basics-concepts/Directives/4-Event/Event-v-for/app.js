
const app = {

    data() {
        return {
            parties: []
        }
    },
    methods: {
        addText(){
            this.parties.push(' '+ document.getElementById("plume").value);			
        }
    }
};

Vue.createApp(app).mount("#app");

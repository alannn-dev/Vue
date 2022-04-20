// Function that allows to initialize Vue.js

const app = {
    data() {
        return {
            title: 'Click me!'
        }
    },
    methods: {
        btnClicked() {
            this.title = 'Clicked!'
        }
    }
};

Vue.createApp(app).mount("#app");

// mount specifies that the Vue app will display in the div with id="app"
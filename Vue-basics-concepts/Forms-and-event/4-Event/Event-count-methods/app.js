// Function that allows to initialize Vue.js

const app = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        countUp() {
            this.count++;
        },
        countDown() {
            this.count--;
        }
    }
};

Vue.createApp(app).mount("#app");
// mount specifies that the Vue app will display in the div with id="app"
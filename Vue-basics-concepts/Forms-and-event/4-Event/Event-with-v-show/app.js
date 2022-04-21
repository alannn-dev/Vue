// Function that allows to initialize Vue.js

const app = {

		data() {
			return {
				visible: false
			}
		},
		methods: {
			noSpace () {
				this.visible=true;
			}
		}
	};

Vue.createApp(app).mount("#app");
// mount specifies that the Vue app will display in the div with id="app"
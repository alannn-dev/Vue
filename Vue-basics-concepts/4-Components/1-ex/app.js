const appli = {
	data() {
		return {
			valeurchamp: 'Grand titre'
		}
	}
};

const app=Vue.createApp(appli);

app.component("titre",{
	props: ['valeur'],
	template: "<h1>{{valeur}}</h1>"
})

app.mount("#app");
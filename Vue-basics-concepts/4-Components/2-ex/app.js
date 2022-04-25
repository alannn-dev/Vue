const appli = {
		data() {
			return {
				question: false,
				dico:[]
			}
		},
		methods: {
			ajout: function(){
				this.question=true;
			},
			ok: function(){
				let tt = document.getElementById('chpterme').value;
				let dd = document.getElementById('chpdefinition').value;
				this.dico.push({terme: tt, definition: dd});
				this.question=false;
			}
		}
	};

const app = Vue.createApp(appli);

app.component("maligne",{
	props: ['entree'],
	template: "<p><b>{{entree.terme}}&#8239;: </b>{{entree.definition}}.</p>"
});

app.mount("#app");

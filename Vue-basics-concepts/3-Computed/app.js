const app = {

    data () {
        return {
            nb1: 42,
            nb2: 35,

            nom: "Deblouze",
			prenom: "Agathe"
    }
},
    computed: {
        unitsAndTens() {
                let dnb1 = Math.trunc(this.nb1/10);
                let unb1 = this.nb1-dnb1*10;
                let dnb2 = Math.trunc(this.nb2/10);
                let unb2 = this.nb2-dnb2*10;
                return 10*dnb1+unb2;
        },

        // Get + Set
        nomComplet : {
			get () {
				return this.prenom+' '+this.nom;
			},
			set (prenom_nom) {
				let nom = prenom_nom.split(" ");
				this.prenom = nom[0];
				this.nom = nom[1];
			}
		}
    }
};

Vue.createApp(app).mount("#app");


const appli = {
    data() {
        return {
            gp: 'A',
            tab:[
                    {nom: "Dupont", note: 12, groupe: "A"},
                    {nom: "Aubin", note: 8, groupe: "B"},
                    {nom: "François", note: 14, groupe: "B"},
                    {nom: "Cochin", note: 9, groupe: "A"},
                ]
        }
    },
    methods: {
        rale () {
            this.visible = true;
        }
    }
};

const app = Vue.createApp(appli);

app.component("tableau",{
    props : ["grp", "liste"],
    template: '<h2>Groupe {{grp}}</h2><table><tr><th scope="col">id étudiant</th><th scope="col">Nom</th><th scope="col">Note</th></tr><tr v-for="(etudiant, item) in liste" v-show="etudiant.groupe.indexOf(grp)"><td>{{item}}</td><td>{{etudiant.nom}}</td><td>{{etudiant.note}}</td></tr></table>'
})

app.mount("#app");

const app = {

    data () {
        return {
            nb1: 42,
            nb2: 35
    }
},
    computed: {
        unitsAndTens() {
                let dnb1 = Math.trunc(this.nb1/10);
                let unb1 = this.nb1-dnb1*10;
                let dnb2 = Math.trunc(this.nb2/10);
                let unb2 = this.nb2-dnb2*10;
                return 10*dnb1+unb2;
        }
    }
};

Vue.createApp(app).mount("#app");

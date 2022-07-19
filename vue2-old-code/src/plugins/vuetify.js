import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: '#778899',
                secondary: '#886227',
                accent: '#FCA311',
                error: '#F96855',
                info: '#FCA311',
                success: '#228B22',
                links: '#adb5bd'
            },
        },

        dark: true
    }
});

import Vue from 'vue';
import Vuex from 'vuex';

import championshipModule from './modules/championshipModule';
import myClub from './modules/clubModule';
import newsModule from './modules/newsModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        championshipModule,
        myClub,
        newsModule
    }
})

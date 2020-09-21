import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        championship: 'Campeonato Brasileiro',
        clubName: 'Hcode Treinamentos',
        news: [
            {
                id: 1,
                title: 'Começam treinos para a nova temporada',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias, ut voluptatum corporis explicabo, consequatur ipsum facere magnam et dicta tenetur maxime aspernatur delectus laborum deserunt beatae optio eum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe recusandae voluptatum dolores totam inventore praesentium nemo suscipit aliquid repellat cupiditate rerum culpa eveniet magnam, rem quos ducimus esse quasi?',
                date: '2020-09-20',
                img: 'news1.jpg',
                imgInfo: 'Notícia 1'
            },
                    {
                id: 2,
                title: 'Jogo de quarta-feira termina empatado',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias, ut voluptatum corporis explicabo, consequatur ipsum facere magnam et dicta tenetur maxime aspernatur delectus laborum deserunt beatae optio eum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe recusandae voluptatum dolores totam inventore praesentium nemo suscipit aliquid repellat cupiditate rerum culpa eveniet magnam, rem quos ducimus esse quasi?',
                date: '2020-09-21',
                img: 'news2.jpg',
                imgInfo: 'Notícia 2'
            },
            {
                id: 3,
                title: 'A inauguração do novo estádio será na semana que vem',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias, ut voluptatum corporis explicabo, consequatur ipsum facere magnam et dicta tenetur maxime aspernatur delectus laborum deserunt beatae optio eum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe recusandae voluptatum dolores totam inventore praesentium nemo suscipit aliquid repellat cupiditate rerum culpa eveniet magnam, rem quos ducimus esse quasi?',
                date: '2020-10-02',
                img: 'news2.jpg',
                imgInfo: 'Notícia 2'
            }
        ]
    },
    getters: {
        getChampionship(state) {
            return state.championship;
        },
        getClubName(state) {
            return state.clubName;
        },
        getNews(state) {
            return state.news;
        }
    },
    mutations: {
        setChampionship(state, newValue) {
            state.championship = newValue;
        },
        setClubName(state, newValue) {
            state.clubName = newValue;
        }
    },
    actions: {
        changeChampionship(context, value) {
            context.commit('setChampionship', value);
        },
        updateClubName(context, value) {
            context.commit('setClubName', value);
        }
    }
})

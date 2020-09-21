<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual
            v-for="notice in news"
            :key="notice.id"
            :img-name="notice.img"
            :img-info="notice.imgInfo"
            :news-title="notice.title"
            :news-content="notice.content"
            :news-date="notice.date"
            />
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'

export default {
    components: {
        HcodeSectionNewsIndividual,
    },
    data() {
        return {
            news: []
        }
    },
    created() {
        this.news = [
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
    }
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}
</style>

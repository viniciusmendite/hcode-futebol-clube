<template>
    <section>
        <div class="container">
            <HcodeSectionNewsIndividual
            img-name="news1.jpg"
            img-info="Notícia 1"
            news-title="Começam treinos para a nova temporada"
            news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias, ut voluptatum corporis explicabo, consequatur ipsum facere magnam et dicta tenetur maxime aspernatur delectus laborum deserunt beatae optio eum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe recusandae voluptatum dolores totam inventore praesentium nemo suscipit aliquid repellat cupiditate rerum culpa eveniet magnam, rem quos ducimus esse quasi?"
            news-date="20/09/2020"
            />

            <HcodeSectionNewsIndividual
            img-name="news2.jpg"
            img-info="Notícia 2"
            news-title="Jogo de quarta-feira termina empatado"
            news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias, ut voluptatum corporis explicabo, consequatur ipsum facere magnam et dicta tenetur maxime aspernatur delectus laborum deserunt beatae optio eum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe recusandae voluptatum dolores totam inventore praesentium nemo suscipit aliquid repellat cupiditate rerum culpa eveniet magnam, rem quos ducimus esse quasi?"
            news-date="21/09/2020"
            />
            <HcodeSectionNewsIndividual
            img-name="news3.jpg"
            img-info="Notícia 3"
            news-title="A inauguração do novo estádio será na semana que vem"
            news-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo alias, ut voluptatum corporis explicabo, consequatur ipsum facere magnam et dicta tenetur maxime aspernatur delectus laborum deserunt beatae optio eum culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus saepe recusandae voluptatum dolores totam inventore praesentium nemo suscipit aliquid repellat cupiditate rerum culpa eveniet magnam, rem quos ducimus esse quasi?"
            news-date="02/10/2020"
            />
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'

export default {
    components: {
        HcodeSectionNewsIndividual,
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

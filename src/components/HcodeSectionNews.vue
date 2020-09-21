<template>
    <section class="section-news">
        <div class="container">
            <HcodeSectionNewsIndividual
            v-for="notice in news"
            :key="notice.id"
            :img-name="notice.img"
            :img-info="notice.imgInfo"
            :news-date="notice.date"
            >
            <template #title>
                <h2 @click="goToPage('/notice')">{{notice.title}}</h2>
            </template>

            <template #content>
                <p>{{notice.content | truncate(200)}}</p>
            </template>

            </HcodeSectionNewsIndividual>
        </div>
    </section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
import { mapGetters } from 'vuex';

export default {
    components: {
        HcodeSectionNewsIndividual,
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })
    },
    methods: {
        goToPage(page) {
            this.$router.push(page);
        }
    }
}
</script>

<style>
.section-news {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}
</style>

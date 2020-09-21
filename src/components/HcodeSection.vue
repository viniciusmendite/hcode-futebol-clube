<template>
  <div>
      <div class="container">
          <div class="row mt-5">
              <h3>Você está vendo notícias do: {{championship}}</h3>
          </div>
      </div>

    <transition name="fade-view" mode="out-in">
        <router-view></router-view>
    </transition>
    <!-- <component :is="currentComponent"></component> -->

    <div class="container">
        <div class="row my-club mt-5">
            <div class="col-6">
                <h2>Seu clube é: {{myClub}}</h2>
            </div>
            <div class="col-6">
                <HcodeInput  />
            </div>
        </div>
    </div>

  </div>
</template>

<script>
// import HcodeSectionBanner from './HcodeSectionBanner';
import HcodeInput from './HcodeInput';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    // HcodeSectionBanner,
    // HcodeSectionNews: () => import('./HcodeSectionNews'),
    HcodeInput
  },
  props: {
      currentComponent: String
  },
  computed: {
    // busca atraves dos getters
    ...mapGetters({
        championship: 'getChampionship',
        myClub: 'getClubName'
    })

    // buscando através do mapState
    // ...mapState({
    //     championship: 'championship',
    //     myClub: 'clubName'
    // })

    // buscando de forma direta no store
    //   championship() {
    //       return this.$store.state.championship;
    //   },
    //   myClub() {
    //       return this.$store.state.clubName;
    //   }
  }
};
</script>

<style scoped>
.fade-view-enter,.fade-view-leave-to {
    opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active {
    transition: opacity .3s ease-in-out;
}
</style>

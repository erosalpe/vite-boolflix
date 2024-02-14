<script>
    import FilmList from './Main/FilmList.vue'
    export default {
        name: "MainComponent",
        components:{
            FilmList,
        }
    }

</script>






<template>
  <main>
      <FilmList/>
  </main>
  


</template>








<style lang="scss" scoped>
    main{
        background-color: rgb(22, 22, 22);
        padding-top: 5rem;
    }




</style>
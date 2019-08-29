<template>
    <div class="out">
<!--        头组件-->
        <v-header></v-header>
        <div class="container">
            <router-view/>
        </div>
        <v-footer></v-footer>
    </div>

</template>

<script>
    import vHeader from '../components/header';
    import vFooter from '../components/footer';
    export default {
        components:{
            'v-header':vHeader,
            'v-footer':vFooter,
        }
    }
</script>

<style scoped>

</style>
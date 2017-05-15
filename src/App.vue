<template>
    <div id="app">
        <div class="header">
            <ul class="application">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/push/Saber">Blog</router-link></li>
            </ul>
            <div class="state">
                <router-link to="/login">Login</router-link>
                <router-link to="/reg">Reg</router-link>
                <router-link to="/push/myblog">MyBlog</router-link>
            </div>
        </div>
        <router-view class="view"></router-view>
        <wake-button></wake-button>
    </div>
</template>

<script>
    import WakeButton from './components/WakeChat.vue'
    export default {
        name: 'app',
        components: { WakeButton }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
    }
    .application {
        float: left;
    }
    .application li {
        font-size: 2em;
        display: inline;
        list-style-type: none;
        padding: 5px;
    }
    .state {
        float: right;
        font-size: 2em;
        padding-right: 20px;
    }
    .view {
        clear: both;
    }
</style>

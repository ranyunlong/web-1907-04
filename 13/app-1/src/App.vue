<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <button @click="change">修改number</button>
    <!-- <router-view/> -->
    {{num}}
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    // mapGetters 因为是取数据 所以直接添加到computed里
    computed: {
        ...mapGetters([
            "num"
        ])
    },
    // mapActions mapMutations 都是放到方法里面
    methods: {
        ...mapActions([
            "CHANGE_NUM"
        ]),
        ...mapMutations([
            "changeNumber",
        ]),
        change() {
            // this.CHANGE_NUM()
            this.$store.dispatch("CHANGE_NUM", Math.random());
            // this.$store.commit("changeNumber", Math.random())
        }
    },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

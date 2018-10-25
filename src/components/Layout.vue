<template>
    <div id="layout">
        <div>Layout</div>
        <img src="../assets/logo.png">
        <helloworld></helloworld>
    </div>
</template>

<script>
import helloworld from "@/components/helloworld/HelloWorld";

export default {
    data() {
        return {
            fullScreen: false
        };
    },
    components: {
        helloworld
    },
    methods: {}
};
</script>

<style scoped lang="less">
#layout {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

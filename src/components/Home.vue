<template>
    <div>
        <div class="raw">
            <div id = 'home' class="dol-sm-12 text-center">
                <div class="background">
                    <h1 style="color: pink">欢迎大家品尝烤肉！</h1>
                    <h2 style="color: pink">这里有你非常喜欢的烤肉！</h2>
                    <button @click="goToMenu" class = 'btn btn-success'>Let's order</button>
                </div>
            </div>

               <div id = 'home' class="dol-sm-12 text-center">
                <div class="background">
                    <h1 style="color: pink">欢迎大家品尝烤肉！</h1>
                    <h2 style="color: pink">这里有你非常喜欢的烤肉！</h2>
                    <button @click="goToMenu" class = 'btn btn-success'>Let's order</button>
                </div>
            </div>

        </div>
        <router-view ></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        goToMenu(){
            //跳转到上一次浏览的页面
            // this.$router.go(-1);

            // 跳转到指定的地址
            // this.$router.replace('/menu');

            //指定跳转路由的名字下
            // this.$router.replace({name:'menuLink'});

            //通过push进行跳转(最常用)
            // this.$router.push('/menu');
            this.$router.push({name:'menuLink'});
        }
    }
}
</script>

<style>
#home{
    background: url('../../src/assets/kao.jpg') no-repeat;
    background-position: center;
    background-color: #000000;
    padding: 10%;
    height: 85vh;
}
h1, h2 {
    margin:6%;
}
.background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vh;
    margin: 0 auto;
    padding: 20px,0px;
}
</style>

<template>
    <div>
        <div class="raw">
            <div id = 'home' class="dol-sm-12 text-center">
                <div class="background">
                    <h1>欢迎大家</h1>
                </div>
            </div>
        </div>
        <h1>Home</h1>
        <button @click="goToMenu" class = 'btn btn-success'>Let's back</button>
        <router-view></router-view>
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

<template>
    <div class="card  text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class = 'card-text'>联系我们</h4>
            <p class="card-text">760612141@qq.com</p>
        </div>
         <ul class = 'navbar-nav'>
            <router-link  to='/personName'>联系人</router-link>
            <router-link  to='/phone'>电话</router-link>
            <router-view></router-view>
        </ul>
    </div>
</template>

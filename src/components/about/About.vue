<template>
    <div class = 'container'>
        <div class = 'row md-5'>
            <div class="col-4">
                <!-- 导航-->
                <div class="list-group">
                    <router-link tag = 'li' calss = 'nav-link' to = "history">
                        <a class = 'list-group-item list-group-item-action'>历史订单</a>    
                    </router-link>
                    <router-link tag = 'li' calss = 'nav-link' to = "about/contact">
                        <a class = 'list-group-item list-group-item-action'>联系我们</a>    
                    </router-link>
                    <router-link tag = 'li' calss = 'nav-link' to = "orderingGuide">
                        <a class = 'list-group-item list-group-item-action'>点餐文档</a>    
                    </router-link>
                    <router-link tag = 'li' calss = 'nav-link' to = "delivery">
                        <a class = 'list-group-item list-group-item-action'>快递信息</a>    
                    </router-link>
                </div>
            </div>

            <div class="col-8">
                <!-- 导航对应的内容-->
                <router-view></router-view>
            </div>
        </div>
    </div>


</template>

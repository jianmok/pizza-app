<template>
  <div>
    <div class="raw">
      <div id="home" class="dol-sm-12 text-center">
        <div class="background">
          <h1 style="color: pink">欢迎大家品尝烤肉！</h1>
          <h2 style="color: pink">这里有你非常喜欢的烤肉！</h2>
          <button @click="goToMenu" class="btn btn-success">Let's order</button>
        </div>
      </div>

      <!-- <div id="home" class="dol-sm-12 text-center">
        <div class="background">
          <h1 style="color: pink">欢迎大家品尝烤肉！</h1>
          <h2 style="color: pink">这里有你非常喜欢的烤肉！</h2>
          <button @click="goToMenu" class="btn btn-success">Let's order</button>
        </div>
      </div>-->
      <br>
      <div class="info">
        <h1>简介</h1>
        <h3>烤肉（barbecues），是一道菜品，制作原料有猪肉、牛肉、蔬菜、海鲜等。独具风味，历史悠久，有浓郁的香味和鲜美的味道，可大大提高食欲。值得一提的是，现代烤肉与刀耕火种时的烤肉并不相同。据《汉代画象全集》可知，早在两汉时期就有体系完备的烤肉烤食讲究 [1]</h3>
        <h1>历史延伸</h1>
        <h3>《汉代画象全集》初集中,就有两幅图画,一幅选自朱鲔石室的画象石(见图一),一幅选自孝堂山墓道石刻(见图二),这两幅图画都是描摹古代人们烤肉的情况的,都是汉代作品,(关于朱鲔石室的年代,也有人认为晚至魏晋。</h3>
        <h3>位于北京宣武门内大街的烤肉宛和什刹海北岸的烤肉季，是北京最负盛名两家烤肉店。两店一南一北，素有南宛北季之称。烤肉宛始建于康熙二十五年。最初是店主宛某带着伙计，手推小车，上置烤肉炙子，在宣武门到西革一带沿街售卖烤肉。咸丰年间，在宣武门内大街设立了固定的门面，专营烤牛肉。烤好的牛肉质嫩味鲜，馨香诱人。烤肉季开业于同治未年，店主叫季德彩，起初在风景优美的什刹海银锭桥边设摊卖烤肉。到了1920 年，才在什刹海北岸建立了店铺，专营烤羊肉。烤出的羊肉含浆滑美，令人久食不厌。</h3>
        <h1>营养价值</h1>
        <h3>肉类含蛋白质丰富，一般在10-20%之间。瘦肉比肥肉含蛋白质多。肉类食品含蛋白质是优质蛋白质，不仅含有的必需氮基酸全面、数量多，而且比例恰当，接近于人体的蛋白质，容易消化吸收。</h3>
        <h3>
          肉类中含糖量较低，平均只有1-5%。按照中医的理论，猪肉性能微寒、有解热功能，补肾气虚弱；牛肉性温，可滋养脾胃、强健筋骨；羊肉性热，适于体虚胃寒的人食用。
          肉类经烹调后，可制成多种多样的美味佳肴，又有浓郁的香味和鲜美的味道，可大大提高食欲。
        </h3>
        <h1>国内情况</h1>
        <h3>黄家烤肉是山东传统风味名吃，与章丘大葱、龙山小米、明水香稻并称“章丘四大特产”。</h3>
        <h3>著名的黄家烤肉，发源于章丘古城－－绣惠镇。黄家烤肉系明末黄氏祖传，迄今300余年的历史，因其整猪烤炙，制作工艺独特，皮酥柔嫩，清香可口，早在清朝时就颇有名气，并由著名商贾孟洛川带入宫廷，受到慈禧太后的褒奖。</h3>
        <h3>与其它东北城市相比，齐齐哈尔保留着更多的东北本色，这里的人喜欢大碗喝酒大块吃肉，这里的人直爽好客。烤肉的这种吃法，透吐着粗狂与豪放，这正好与齐齐哈尔人性味相投，于是，这种吃法，才在齐齐哈尔找到了最好的土壤。</h3>
        <h3>炭火调整好，先用肥肉擦拭盖板，目的是不让肉沾锅，肉摊在铁板上，听得吱吱有声，这时肉表面已经变了颜色，翻一下，再听它吱吱响，就可以吃了。烤得好的肉，外表变色，内里鲜红，这时最鲜，最嫩，最有肉的本味。胆子小的人，怕见那红红的血色，惟恐不熟，结果吃不出最好味道。</h3>
        <h3>随着时间推移，原先的炭火烤肉已经越来越少了。时代在发展，所以一批新时期的“健康烧烤”涌现出来。比如说“今日阳光”、“完美生活”等等，都给了齐齐哈尔人一种新的选择。也让外来人更懂得齐齐哈尔烤肉的美好。</h3>
        <h3>齐齐哈尔烤肉的蘸料是非常有讲究的。烤肉料非常好吃，让人在不吃烤肉的时候也忍不住拿它拌饭。</h3>
      </div>
      <br>
      <br>
      <br>
      <di class="end">
        <div class="line"></div>
        <div class="endInfo">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav" style="font-size: 15px">
              <li>信息</li>
              <li>信息</li>
              <li>信息</li>
              <li>信息</li>
            </ul>
          </nav>
        </div>
      </di>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    data(){
      return{
        ifSee: true
      }
    },
    goToMenu() {
      //跳转到上一次浏览的页面
      // this.$router.go(-1);

      // 跳转到指定的地址
      // this.$router.replace('/menu');

      //指定跳转路由的名字下
      // this.$router.replace({name:'menuLink'});

      //通过push进行跳转(最常用)
      // this.$router.push('/menu');
      //   this.$router.push({ name: "menuLink" });
      document.querySelector("button").onclick = function() {
        function scrollWindow(){
          window.scrollTo({
          top: 10000,
          behavior: "smooth"
        });
        }
      function scrollWindow1(){
          window.scrollTo({
          top: -100,
          behavior: "smooth"
        });
        }
      function scrollWindow2(){
          window.scrollTo({
          top: -200,
          behavior: "smooth"
        });
        }
      scrollWindow().then(data => {
        scrollWindow1(data).then(data1 => {
          scrollWindow2();
        })}
      )

      };
　　}
  }
};
</script>

<style>
#home {
  background: url("../../src/assets/kao.jpg") no-repeat;
  background-position: center;
  background-color: #000000;
  padding: 10%;
  height: 85vh;
}
h1,
h2 {
  margin: 6%;
}
h1 {
  background-color: bisque;
}
h3 {
  text-indent: 50px;
}
.line {
  border: black solid;
  height: 1px;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vh;
  margin: 0 auto;
  padding: 20px, 0px;
}
</style>

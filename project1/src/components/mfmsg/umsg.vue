<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="12"><div class="grid-content ep-bg-purple" >
        <!-- <img src="../../assets/women1.png" style="position: relative;left:0px;width:400px"> -->
        <el-carousel indicator-position="outside" style="border-radius: 10px;">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      <h3>昵称：黄花大闺女</h3>
      <h3>年龄：19</h3>
      <h3>描述：</h3>
      <p>在这区域将会展示当前人物的信息以下是示例:我觉得差太多了
        现实看有点偏紫色 她说每个人色感不一样 上面写奶茶色就给我
        拿奶茶色 说要是觉得差很多 让我自己去指甲油墙挑</p>
      </div></el-col>

      <el-col :span="12"><div class="grid-content ep-bg-purple-light" >
        <h3>帖子</h3>
        <div data-v-5ead6da6="" data-v-78bb2ed8="" class="note-content">
          <div data-v-5ead6da6="" id="detail-title" class="title">这个深夜又多了一个心碎女孩</div>
          <div data-v-5ead6da6="" id="detail-desc" class="desc"><span data-v-5ead6da6="">
            下单这个面的时候，我就在想，这个面可以买，就当我的救命面，哪天我如果深夜饿了，它既方便，又好吃，还小份，真是一晚救我于水火的好面！
            <br><br>时光飞逝，终于到了这一天，饿的眼冒金星的我突然想起了储存箱里这一盒面，我幸福的飞奔过去，仔细的阅读做法，谨慎的跟随步骤，终于虔诚的等待起来
            <br><br>1分钟，2分钟，3分钟……叮的一声！我如同主人回家的快乐小狗，朝微波炉飞扑过去
            <br><br>塑料融化的餐盒
            <br>震耳欲聋的沉默
            <br><br>皇上，你害的世兰好苦啊！！！
            <br><br>#日清芝士培根意面我恨你 </span><!----><!---->
            <a data-v-240fba8a="" data-v-5ead6da6="" target="_blank" class="tag tag-search" href="/search_result?keyword=%25E6%25B7%25B1%25E5%25A4%259C%25E5%2581%25B7%25E5%2590%2583&amp;type=54&amp;source=web_note_detail_r10">#深夜偷吃</a>
            <span data-v-5ead6da6=""> </span><!----><!----><a data-v-240fba8a="" data-v-5ead6da6="" target="_blank" class="tag tag-search" href="/search_result?keyword=%25E5%25B4%25A9%25E6%25BA%2583&amp;type=54&amp;source=web_note_detail_r10">#崩溃</a>
            <span data-v-5ead6da6=""></span><!----></div><div data-v-5ead6da6="" class="bottom-container"><span data-v-5ead6da6="" class="date">2023-09-19 广东</span><!---->
            </div>
           </div>
           <el-input v-model="input" placeholder="回复" />
      </div></el-col>
    </el-row>
  </el-card>
  <el-button class="butt" type="warning" :icon="Star" circle ></el-button>
</template>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.butt{
  position:fixed;
  right: 8%;
  width: 50px;
  height: 50px;
}
.box-card {
  position: relative;
  top:20px;
  width: 1080px;
  height: 610px;
}
.note-content{
  text-align: left;
  padding: 10px 20px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>


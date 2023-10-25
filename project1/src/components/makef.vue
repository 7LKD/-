<template>
  <!-- <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    > -->
    <div class="cardp">
    <div class="cards" >
      <el-card  :body-style="{ padding: '0px' }">
        <img
          src="/public/women1.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>黄花大闺女1</span>
          <div class="bottom">
            <!-- <time class="time">{{ currentDate }}</time> -->
            <p style="line-height:23px">在这区域将会展示当前人物的信息以下是示例:我觉得差太多了
               现实看有点偏紫色 她说每个人色感不一样 上面写奶茶色就给我
               拿奶茶色 说要是觉得差很多 让我自己去指甲油墙挑 </p>
            <el-button  @click="$router.push('/umsg')" text class="button">了解更多</el-button>
          </div>
        </div>
      </el-card>
      </div>
    <!-- </el-col>
  </el-row> -->
      
  <div class="cards" >
    <el-card  :body-style="{ padding: '0px' }">
      <img
        src="/public/women2.png"
        class="image"
      />
      <div style="padding: 14px">
        <span>黄花大闺女2</span>
        <div class="bottom">
          <!-- <time class="time">{{ currentDate }}</time> -->
          <p style="line-height:23px">在这区域将会展示当前人物的信息以下是示例:我觉得差太多了
             现实看有点偏紫色 她说每个人色感不一样 上面写奶茶色就给我
             拿奶茶色 说要是觉得差很多 让我自己去指甲油墙挑 </p>
          <el-button @click="$router.push('/umsg')" text class="button">了解更多</el-button>
        </div>
      </div>
    </el-card>
    </div>
    

    <div class="cards" >
      <el-card  :body-style="{ padding: '0px' }">
        <img
          src="/public/women3.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>黄花大闺女3</span>
          <div class="bottom">
            <!-- <time class="time">{{ currentDate }}</time> -->
            <p style="line-height:23px">在这区域将会展示当前人物的信息以下是示例:我觉得差太多了
               现实看有点偏紫色 她说每个人色感不一样 上面写奶茶色就给我
               拿奶茶色 说要是觉得差很多 让我自己去指甲油墙挑 </p>
            <el-button @click="$router.push('/umsg')" text class="button">了解更多</el-button>
          </div>
        </div>
      </el-card>
      </div>
      <div>
        <el-button type="primary" @click="$router.push('/fabu')" plain>发布我的</el-button>
        <el-button type="success" @click="$router.push('/shoucang')" plain>我的收藏</el-button>
      </div>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.cards{
  width: 300px;
  float: left;
  padding: 20px 20px;
  
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.cardp{
  position: relative;

  top:40px;
}
</style>

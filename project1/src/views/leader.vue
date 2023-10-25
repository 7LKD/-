<template>
  <div >
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      class="leader2"
      text-color="#000"
      active-text-color="#000"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$router.push('/leader/yajay')">姚佳宇大富翁</el-menu-item>
      <el-menu-item index="2" @click="$router.push('/test')">博客</el-menu-item>
      <!-- <el-sub-menu class=" background-color:antiquewhite;" index="2" >
        <template #title>校园一线牵</template>
        <el-menu-item index="2-1">博客</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>One more thing</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu> 
      </el-sub-menu> -->
      <el-menu-item index="3" disabled>敬请期待</el-menu-item>
      <el-menu-item index="4" @click="$router.push('/leader/tryhands')">试试手气！</el-menu-item>
      <el-menu-item index="5" @click="$router.push('/leader/makef')">交友广场</el-menu-item>

      <el-menu-item index="7" @click="$router.push('/leader/chateach')">看上眼就聊聊</el-menu-item>
      <!-- <el-menu-item index="8" ><a href="http://localhost:8080">聊聊？</a></el-menu-item> -->

      <el-sub-menu index="6" style="position:absolute; right:2%">
        <template #title>用户xxx</template>
        <el-menu-item index="6-1"  @click="$router.push('/login')">退出登录</el-menu-item>
        <el-menu-item index="6-2"  @click="$router.push('/dashboard')">我的主页</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
  <el-main><router-view></router-view></el-main>

  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute,useRouter } from 'vue-router';
  const activeIndex = ref('1')
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style scoped>
 
  .leader2{
    position:fixed ;
    z-index: 10; 
    top:3px;
    left:0.5%; 
    width:99%; 
    border-radius:10px ;
    background-color:rgba(0, 0, 139, 0.559);  
    box-shadow: 0 5px 15px rgba(20, 20, 20, 0.208);
    backdrop-filter: blur(20px);
    
  }
  .hid{
    background-color:antiquewhite;
  }

</style>
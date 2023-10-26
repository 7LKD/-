<template>
    <br><br>
    <div class="container">
        <n-button @click="back">返回</n-button>
        <!-- 标题 -->
        <n-h1>{{blogInfo.title}}</n-h1>
        <!-- 文章内容 -->
        <div class="blog-content">
            <div v-html="blogInfo.content"> </div>
        </div>
    </div>
</template>

<script setup>
import {ref,reactive,inject,onMounted,computed} from 'vue'
import {AdminStore} from '../../stores/AdminStore'
import { useRoute,useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

const message = inject("message")
const dialog = inject("dialog")
const axios = inject("axios")

const blogInfo = ref([])

onMounted(() => {
    loadBlog();
})
const loadBlog = async () => {
    
    let res = await axios.get("/blog/detail?id=" + route.query.id)
    blogInfo.value = res.data.rows[0];
}

const back = () => {
    router.push("/test");
}

</script>



<style>
.blog-content img{
    max-width: 100% !important;
}
</style>


<style scoped> 
.container{
    width: 1200px;
    margin: 0 auto;
}
</style>
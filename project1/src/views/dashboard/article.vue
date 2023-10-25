<template>
  <br>
  <div>
    <h1>帖子管理一蹦子</h1>
    <n-tabs default-value="oasis" justify-content="start" type="line">
      <n-tab-pane name="oasis" tab="帖子列表">
        <div v-for="(blog,index) in blogListinfo"  style="margin-bottom:15px">
          <n-card :title="blog.title">
            {{ blog.content }}

            <template #footer>
              <n-space align="center">
                <div>发布时间: {{blog.create_time}}</div>
                <n-button>删除</n-button>
                <n-button>修改</n-button>
              </n-space>
            </template>
            
          </n-card>
        </div>

        <n-space>
          <div @click="toPage(pageNum)" v-for="pageNum in pageInfo.pageCount">
            <div :style="'color:'+(pageNum==pageInfo.page?'blue':'')">{{ pageNum }}</div>
            
          </div>
        </n-space>

      </n-tab-pane>
      <n-tab-pane name="add" tab="添加帖子">
        
        <n-form>
          <n-form-item  label="标题">
            <n-input v-model:value="addArticle.title" placeholder="输入标题哦" />
          </n-form-item>
          <n-form-item  label="分类">
            <n-select v-model:value="addArticle.categoryId" :options="categoryOptions" />
          </n-form-item>

          <n-form-item  label="帖子内容">
            <!-- <n-input v-model:value="addArticle.content" placeholder="输入一下内容呗" /> -->
            <rich-text-editor v-model="addArticle.content"></rich-text-editor>
          </n-form-item>
          <n-form-item  label="">
              <n-button @click="add">提交</n-button>
          </n-form-item>
        </n-form>
        
      </n-tab-pane>
      <n-tab-pane name="update" tab="修改">
        <n-form>
          <n-form-item  label="标题">
            <n-input v-model:value="updateArticle.title" placeholder="输入标题哦" />
          </n-form-item>
          <n-form-item  label="分类">
            <n-select v-model:value="updateArticle.categoryId" :options="categoryOptions" />
          </n-form-item>

          <n-form-item  label="帖子内容">
            <!-- <n-input v-model:value="addArticle.content" placeholder="输入一下内容呗" /> -->
            <rich-text-editor v-model="updateArticle.content"></rich-text-editor>
          </n-form-item>
          <n-form-item  label="">
              <n-button @click="update">提交</n-button>
          </n-form-item>
        </n-form>
      </n-tab-pane>
    </n-tabs>
  </div>
  <!-- {{ addArticle.content }} -->
</template>

<script setup>
import {ref,reactive,inject,onMounted} from 'vue'
import {AdminStore} from '../../stores/AdminStore'
import { useRoute,useRouter } from 'vue-router';
import RichTextEditor from '../../components/RichTextEditor.vue'
const router = useRouter()
const route = useRoute()

const message = inject("message")
const dialog = inject("dialog")
const axios = inject("axios")

const adminStore = AdminStore()

const addArticle = reactive({
  categoryId:0,
  title:"",
  content:"hello",

})

const updateArticle = reactive({
  id:0,
  categoryId:0,
  title:"",
  content:"hello",

})

const categoryOptions = ref([])
const blogListinfo = ref([])

const pageInfo = reactive({
    page: 1,
    pageSize: 3,
    pageCount: 0,
    count: 0,
})

onMounted(() => {
  //刚开始先加载select框里面的数据
  loadCategorys()
  //先加载服务端的博客
  loadBlogs()
})

const loadCategorys = async()=>{
  let res = await axios.get("/category/list")
  categoryOptions.value = res.data.rows.map((item)=>{
    return{
      label:item.name,
      value:item.id
    }
  })
}

const loadBlogs = async()=>{
  // let res = await axios.get(`/blog/search?page=${pageInfo.page}&pageSize=${pageInfo.pageSize}`)
  let res = await axios.post(`/blog/search`,{page:pageInfo.page,pageSize:pageInfo.pageSize})
  let temp_rows = res.data.data.rows;
  for (let row of temp_rows) {
        row.content += "..."
        let d = new Date(row.create_time)
        row.create_time = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    }
    blogListinfo.value = temp_rows;
    // pageInfo.count = res.data.data.count;
    // pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
    pageInfo.count = res.data.data.count;
    pageInfo.pageCount =parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize >0 ? 1:0)//向下取整
    
    console.log(res)
}

const add = async () =>{
  let res = await axios.post("/blog/_token/add", addArticle)
    if (res.data.code == 200) {
        message.success(res.data.msg)
    } else {
        message.error(res.data.msg)
    }
}

const toPage= async(pageNum)=>{
  pageInfo.page = pageNum;
  loadBlogs()
}
</script>

<style>

</style>
<template>
  <!-- <h2>试试手气！！！</h2> -->
  <br><br><br>

  <div class="setting">
    <h2>随机区间设置</h2>
    <h3 style="text-align: left; padding:0px 20px">年龄设置</h3>
    <div class="slider-demo-block" style="width:90%" >
      <el-slider v-model="value" range show-stops :max="40" :min = "18"/>
    </div>
    <h3 style="text-align: left; padding:0px 20px">地域设置</h3>
    <div class="m-4" style="width:60%">
      <el-cascader v-model="valuex" :options="options" @change="handleChange" />
    </div>
    <h3 style="text-align: left; padding:0px 20px">性别设置</h3>
    <div style="padding:20px 20px">
      <el-radio-group v-model="radio1" >
        <el-radio style="background-color:rgb(239, 239, 81);" label="1" size="large" border>男</el-radio>
        <el-radio style="background-color:rgb(239, 239, 81);" label="2" size="large" border>女</el-radio>
      </el-radio-group>
    </div>
    <el-button  type="primary" round>刷新</el-button>
  </div>

  <div>
    <img style="position:absolute;left:600px" class="pit" :src="a">

      <div class="txtit">
        <div style="padding:0px 10px; width:600px ;">
        <h2>信息描述</h2>
        <p>姓名:  xxx</p>
        <p>年龄:  18+</p>
        <p>性别:  sex</p>
        <p>描述:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
      </div>
  </div>
  <br>
  <div class="but">
    <el-button round>不喜欢</el-button><br><br>
    <el-button type="primary" @click="nextp()" round>下一张</el-button><br><br>
    <el-button type="danger" round>❤</el-button><br>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('2') //性别
let num =1;

const valuex = ref([]) //地域
const value = ref([19, 28]) // 年龄范围
let a = `/women${num}.png` // 图片路径

const handleChange = (value) => {
  console.log(value)
}


const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]


function nextp() {
  if(num <= 3)
    num = num + 1;
  else num = 1;
  a = `/women${num}.png`
  console.log(num)
}

</script>

<style>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.setting{
  position:absolute;
  float: left;
  left: 1%;
  width: 400px;
  height: 600px;
  background-color:rgb(255, 190, 92);
  border-radius: 10px;
}

.pit{
  border-radius: 10px;
  width: 600px;
  height: 400px;

}
.txtit{
  text-align: left;
  position: absolute;
  top:500px;
  left:450px;
  width: 50%;
  height: 400px;
  border-radius: 10px;
  background-color:rgb(246, 227, 191)
}
.but{
  position:fixed;
  top:70%;
  right: 10%;
  padding: 0 20px;
}
</style>
!<!--  -->
<template>
  <div class=''>
    <h1>新建分类</h1>
    <div class="fbi_content">
      <el-form
        :model="model"
        label-width="120px"
        @submit.native.prevent="save"
      >
        <el-form-item label="分类名称">
          <el-input
            v-model="model.title"
            placeholder="请输入分类"
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button
            type="primary"
            native-type="submit"
          >保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      model: {
        title: ""
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    save() {
      if(this.model.title==''){
        this.$message.error('分类不能为空啊少年');
        return 
      }
      axios
        .post("http://localhost:3000/addartype", {
          data: this.model
        })
        .then((res) => {
          if(res.data.state==0){
          this.$message({
          message: res.data.message,
          type: 'success'
        });
        this.$router.push('/category/AticalList')
          }else{
             this.$message.error(res.data.message);
          }

        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
.fbi_content {
  width: 50%;
  margin-top: 50px;
}
</style>
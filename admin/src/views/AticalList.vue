<!--  -->
<template>
  <div class=''>
    <h1>文章分类列表</h1>
    <el-table
      :data="tableData"
      stripe
      style="width: 80%"
    >
      <el-table-column
        prop="_id"
        label="ID"
        width="350"
      >
      </el-table-column>
      <el-table-column
        prop="TypeName"
        label="文章分类名称"
      >
      </el-table-column>
       <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small" @click="showconfirm(scope.row)">删除</el-button>
      </template>
    </el-table-column>

    </el-table>

    <el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>删除后信息将不可回复，确认要删除么</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="delitemf()">确 定</el-button>
  </span>
</el-dialog>
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
      tableData:[],
      centerDialogVisible: false,
      delitem:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gettypelist() {
      axios.get("http://localhost:3000/aticaltypelist").then((res) => {
          this.tableData = res.data.list
           
            // console.log(JSON.stringify(res.data.list))
      });
    },
    showconfirm(item){
          this.centerDialogVisible =true;
          this.delitem = item._id;
    //     var url = 'http://localhost:3000'
    //    axios.get(url+'/deltypebyid?id='+item._id).then((res) => {
    //       this.tableData = res.data.list
           
    //         // console.log(JSON.stringify(res.data.list))
    //   });
    },
    delitemf(){
             var url = 'http://localhost:3000'
            axios.get(url+'/deltypebyid?id='+this.delitem).then(response=>{
                 this.centerDialogVisible =false;
                 this.delitem =""
                    if(response.data.code == 200 && response.data.message ){
                         this.goodsInfo = response.data.message 
                    }else{
                         // continue regardless of error
                    }
                    console.log( this.goodsInfo)
                })
                .catch(error=>{
                    console.log(error)
                })  
    }
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      this.gettypelist()
  }
};
</script>
<style  scoped>
</style>
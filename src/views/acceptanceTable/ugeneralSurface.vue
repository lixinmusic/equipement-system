<template>
  <div class="app-container">
    <!--外部容器 -->
    <el-container>
       <!-- 顶部搜索 -->
     
        <div class="filter-container">
          
            <div class="formSearch">
            <el-form :inline="true">
              <el-row>
                <el-col :span="6">
                <el-form-item label="固定资产编号" >
                <el-input v-model="listQuery.fixedAssetCode"  placeholder="请输入固定资产编号" clearable></el-input>
                </el-form-item>
                </el-col>

                <el-col :span="6">
                <el-form-item label="设备名称">
                <el-input class="minier-input" v-model="listQuery.equipmentName" placeholder="请输入设备名称" clearable></el-input>
                </el-form-item>
                </el-col>

                <el-col :span="6">
                <el-form-item label="型号规格">
                <el-input class="minier-input" v-model="listQuery.model" placeholder="请输入型号规格" clearable></el-input>
                </el-form-item>
                </el-col>
              </el-row>

              <el-row>
              <el-col :span="6" >
              <el-form-item label="使用公司" prop="radio"> 
              <el-input v-model="radio" maxlength="8" :disabled='siteCodeState' style="width:190px" class="enter medium-input" placeholder="请选择使用公司" ></el-input>
              <div class="buttonplace" id="buttstyps" @click="treeco">选择</div>
              <div class="buttonplacest" id="buttstyps" @click="clears">清空</div>
              </el-form-item>
              </el-col>
              <el-col :span="6">
              <el-form-item label="使用工厂" prop="yesno"> 
              <el-input v-model="yesno" maxlength="8" style="width:190px" class="enter medium-input" :disabled='siteCodeState' placeholder="请选择使用工厂" ></el-input>
              <div class="buttonplace" id="buttstyps" @click="manufactory">选择</div>
              <div class="buttonplacest" id="buttstyps" @click="poacksty">清空</div>
              </el-form-item>
              </el-col>
               <el-col :span="6">
              <el-form-item label="使用部门" prop="postyly">
              <el-input v-model="postyly" style="width:190px" :disabled='siteCodeState'  maxlength="32" class="enter medium-input" placeholder="请选择使用部门" ></el-input>
              <div class="buttonplace" id="buttstyps" @click="treesection">选择</div>
              <div class="buttonplacest" id="buttstyps" @click="clearsection">清空</div>
              </el-form-item>     
              </el-col>

                
            <el-col :span="6">
                <el-form-item>
                <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
                </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            </div>
          
        </div>
    
      <!-- 内容容器 -->
    
          <!-- 主要区域容器 -->
          <el-main style="padding:20px 0px">
            <el-button class="filter-item" @click="derivation" type="primary" icon="el-icon-edit" v-if="addnewly">导出</el-button>
            <!-- <el-button  style="margin: 10px 10px;" type="primary" v-waves @click="drag">拖拽完成</el-button> -->

            <el-table :data="lookList" v-loading="listLoading" border fit highlight-current-row
              style="width: 100%;min-height:auto;margin-top:8px" height="500" :header-cell-style="{background:'oldlace'}">
                 <el-table-column  align="center" label="序号" min-width="80" type="index"></el-table-column>

               <el-table-column prop="fixedAssetCode" align="center" label="固定资产编号" min-width="100">
                 </el-table-column>
                <el-table-column prop="companyName" align="center" label="使用公司" min-width="80">
                    
                 </el-table-column>
              <el-table-column prop="factoryName" align="center" label="使用工厂" min-width="80">
                 </el-table-column>
               <el-table-column prop="divisionName" align="center" label="使用部门" min-width="80">
                 </el-table-column>
               <el-table-column prop="contractNumber" align="center" label="合同编号" min-width="80">
                 </el-table-column>
                <el-table-column prop="buyers" align="center" label="供应商" min-width="80">
                 </el-table-column>
                <el-table-column prop="equipmentName" align="center" label="设备名称" min-width="80">
                 </el-table-column>
                <el-table-column prop="model" align="center" label="型号规格" min-width="80">
                 </el-table-column>
                <el-table-column prop="unit" align="center" label="单位" min-width="80">
                 </el-table-column>
                <el-table-column prop="amount" align="center" label="数量" min-width="80">
                 </el-table-column>
                <el-table-column prop="unpackingDate" align="center" label="设备到厂时间(开箱时间)" min-width="80">
                <template slot-scope="scope">
                  {{scope.row.unpackingDate!==null?scope.row.unpackingDate.substring(0,10):''}}
                 </template>
                 </el-table-column>
                <el-table-column prop="installDate" align="center" label="设备安装完成时间" min-width="80">
                <template slot-scope="scope">
                  {{scope.row.installDate!==null?scope.row.installDate.substring(0,10):''}}
                 </template>
                 </el-table-column>

                <!-- <el-table-column label="新设备1周试用" align="center">
                <el-table-column prop="requestTime" align="center" label="要求完成时间" min-width="80">
                <template slot-scope="scope">
                  {{scope.row.equipOneWeekPlan.requestTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="realTime" align="center" label="实际完成时间" min-width="80">
                 <template slot-scope="scope">
                  {{scope.row.equipOneWeekPlan.realTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="delayDays" align="center" label="评价延期天数" min-width="80">
                 <template slot-scope="scope">
                  {{scope.row.equipOneWeekPlan.delayDays}}
                 </template>
                 </el-table-column>
                 </el-table-column> -->

                <el-table-column label="新设备评价" align="center">
                <el-table-column prop="requestTime" align="center" label="要求完成时间" min-width="80">
                <template slot-scope="scope">
                  {{scope.row.equipOneMonthPlan.requestTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="realTime" align="center" label="实际完成时间" min-width="80">
                 <template slot-scope="scope">
                  {{scope.row.equipOneMonthPlan.realTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="delayDays" align="center" label="评价延期天数" min-width="80">
                 <template slot-scope="scope">
                  {{scope.row.equipOneMonthPlan.delayDays}}
                 </template>
                 </el-table-column>
                 </el-table-column>

                <el-table-column label="新设备验收" align="center">
                <el-table-column prop="requestTime" align="center" label="要求完成时间" min-width="80">
                <template slot-scope="scope">
                  {{scope.row.equipThreeWeekPlan.requestTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="realTime" align="center" label="实际完成时间" min-width="80">
                 <template slot-scope="scope">
                   {{scope.row.equipThreeWeekPlan.realTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="delayDays" align="center" label="评价延期天数" min-width="80">
                 <template slot-scope="scope">
                  {{scope.row.equipThreeWeekPlan.delayDays}}
                 </template>
                 </el-table-column>
                 </el-table-column>

                <el-table-column label="新设备质保验收" align="center">
                <el-table-column prop="requestTime" align="center" label="要求完成时间" min-width="80">
                <template slot-scope="scope">
                   {{scope.row.equipTwelveMonthPlan.requestTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="realTime" align="center" label="实际完成时间" min-width="80">
                 <template slot-scope="scope">
                   {{scope.row.equipTwelveMonthPlan.realTime}}
                 </template>
                 </el-table-column>
                 <el-table-column prop="delayDays" align="center" label="评价延期天数" min-width="80">
                 <template slot-scope="scope">
                  {{scope.row.equipTwelveMonthPlan.delayDays}}
                 </template>
                 </el-table-column>
                 </el-table-column>
                   
            
            </el-table>
          </el-main>
          <!-- 底栏容器 -->
          <el-footer>
            <!-- 分页 -->
            <div class="pagination-container">
              <el-pagination background 
              @size-change="handleSizeChange" 
              @current-change="handleCurrentChange" 
              :current-page="listQuery.pageNum" 
              :page-sizes="[5,10,15,20]" 
              :page-size="listQuery.pageSize" 
              layout="total, sizes, prev, pager, next, jumper" 
              :total="total">
              </el-pagination>
            </div>
          </el-footer>
           <!-- 使用公司的弹框 -->
          <el-dialog width="50%" :close-on-click-modal="false" title="使用公司" :visible.sync="treeFormVisible" append-to-body>
          <el-container>
					<el-aside width="500px">
          <span style="margin-left:20px;color:red" >{{radio}}</span>
          <el-tree :data="datast" :props="defaultProps" default-expand-all @node-click="handleNodeClick" check-strictly ref="tree" node-key="orgCode" show-checkbox highlight-current @check-change="handleClick"></el-tree>
          </el-aside>
					</el-container>

           <div slot="footer" class="dialog-footer">
              <el-button @click="treeFormVisible = false">取消</el-button>
              <el-button type="primary" @click="treeFormVisible = false">确认</el-button>
            </div>
          </el-dialog>
           <!-- 使用部门的弹框 -->
           <el-dialog width="50%" :close-on-click-modal="false" title="使用部门" :visible.sync="treeDepartment" append-to-body>
           <el-container>
	         <el-aside width="500px"> 
           <span style="margin-left:20px;color:red" >{{postyly}}</span> 
           <el-tree :data="datalisy" :props="terrdef" @node-click="handleNodeClickst" check-strictly ref="treefrom" node-key="orgCode" show-checkbox highlight-current @check-change="hlsoClick"></el-tree>
           </el-aside>
	         </el-container>
           <div slot="footer" class="dialog-footer">
              <el-button @click="treeDepartment = false">取消</el-button>
              <el-button type="primary" @click="treeDepartment = false">确认</el-button>
            </div>
          </el-dialog>

           <!-- 使用工厂的弹框 -->
           <el-dialog  width="50%" :close-on-click-modal="false" title="使用工厂" :visible.sync="treeworks" append-to-body>
           <el-container>
	         <el-aside width="500px">
           <span style="margin-left:20px;color:red" >{{yesno}}</span>  
           <el-tree :data="plantlisy" :props="terrplant" @node-click="handleNodeClickworks" check-strictly ref="treeplisy" node-key="orgCode" show-checkbox highlight-current @check-change="hocheckck"></el-tree>
           </el-aside>
	         </el-container>
           <div slot="footer" class="dialog-footer">
              <el-button @click="treeworks = false">取消</el-button>
              <el-button type="primary" @click="treeworks = false">确认</el-button>
            </div>
          </el-dialog>
    </el-container>
  </div>
</template>

<script>
import { fetchList, derivationst, dendrogram, section,works } from '@/api/acceptanceTable/ugeneralSurface'
import waves from '@/directive/waves' // 水波纹指令
import { fetchButton } from '@/api/common/button'
import { menuList } from '@/store/modules/permission'//按钮权限

export default {
  name: 'ugeneralSurface',
  directives: {
    waves
  },
  data() {
    return {
      listyst: [],
      lookList: [],
      grite: '',
      total: null,
      listQuery: {
        pageNum: 1,
        pageSize: 10
      },
      value13: [], // 设备安装完成时间
      weekdates: [], // 新设备一周计划完成时间
      // 导出字段
      listQueryst: {
        divisionCode: '',
        equipmentName: '',
        factoryCode: '',
        fixedAssetCode: '',
        model: '',
        companyCode: ''
      },
      // 按钮权限
      addnewly: false, // 新
      edit: false, // 编
      cutout: false, // 删
      // 使用公司树的数据
      i:0,
      datast: [],
      defaultProps: {
        children: 'children',
        label: 'orgFullName'
      },
      // 使用工厂树的数据
      plantlisy: [],
      terrplant: {
        children: 'children',
        label: 'orgFullName'
      },
      // 使用部门树的数据
      datalisy: [],
      setlist:[],
      terrdef: {
          children: 'children',
          label: 'orgFullName'
      },

      orgwork:'',//使用工厂的编号
      orgsection:'',//使用部门的编号
      checkedId :null,
      checkedIds:null,
      checkedIdst:null,

      radio: '', // 使用公司
      yesno: '', // 使用工厂
      postyly:'',//使用部门
      listLoading: true, // 远程搜索加载动画
      treeFormVisible: false, // 使用公司树选择
      treeDepartment: false, // 使用部门树选择
      treeworks: false, // 使用工厂树选择
      siteCodeState: true, // 禁用状态
      // 弹框显示
      dialogFormVisible: false,
      popTitle: '',
      dialogStatus: '',

      // 弹框内输入框不填显示的提示信息
      rules: {
        // staCode: [{ required: true, message: '请输入岗位编码', trigger: 'change' }],
        // staName: [{ required: true, message: '请输入岗位名称', trigger: 'change' }]
      },
      downloadLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.getAA()
    this.getbttonst()
   /*  this.sectionst()
    this.treecostypo()
    this.manuftory() */
  },

  methods: {
    // 按钮的权限
    getbttonst() {
		menuList.forEach(item => {
        item.children.forEach(e=>{
          if(e.name == "ugeneralSurface"){
            this.menuCode = e.code
          }
        })
      })
      const determine = {
        menuCode: this.menuCode,
        type: 'web'
      }
      fetchButton(determine).then(response => {
        if (response.data.code == 200) {
          const authority = response.data.data
          for (var i = 0; i < authority.length; i++) {
            if (authority[i].buttonName == '导出') {
              this.addnewly = true
            } 
          }
        } else {
          this.$notify({
            title: '警告',
            message: response.data.msg,
            type: 'warning',
            duration: 3000
          })
        }
      })
    },

    // 表格的接口
    getAA() {
      this.lookList = []
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
      if (response.data.code == 200) {
         if(response.data.data!=null && response.data.data.list!=null){
        this.listyst = response.data.data.list
        for (var i = 0; i < this.listyst.length; i++) {
          this.lookList.push(this.listyst[i])
        }
        console.log(this.lookList)
        this.total = response.data.data.total
        this.$nextTick(() => {
          this.listLoading = false
        })
       }
        this.listLoading = false
      }else{
         this.listyst = []
         this.total = 0
         this.$notify({
            title: '警告',
            message: response.data.msg,
            type: 'warning',
            duration: 3000
          })
          this.listLoading = false
       }
     })
   },

    // 导出
    derivation() {
        this.listQueryst.companyCode = this.listQuery.companyCode
        this.listQueryst.divisionCode = this.listQuery.divisionCode
        this.listQueryst.equipmentName = this.listQuery.equipmentName
        this.listQueryst.factoryCode = this.listQuery.factoryCode
        this.listQueryst.fixedAssetCode = this.listQuery.fixedAssetCode
        this.listQueryst.model = this.listQuery.model
      derivationst(this.listQueryst).then(response => {
        if (response.data.code == 200) {
			  const liststyp = response.data.data
        console.log(liststyp)
        window.location.href = liststyp
				}else if(response.data.code == 400002){
            this.$notify({
						title: '警告',
						message: response.data.msg,
						type: 'warning',
						duration: 3000
          			})
				}else {
				  	this.$notify({
						title: '警告',
						message: response.data.msg,
						type: 'warning',
						duration: 3000
          })
			  	}
      })
    },

  // 使用公司清空按钮
    clears(){
    this.listQuery.companyCode=''
    this.radio=''
    this.treeFormVisible = false
    },
    // 使用部门清空按钮
    clearsection(){
    this.listQuery.divisionCode=''
    this.postyly = ''
    this.treeDepartment = false
    },
    poacksty(){
     this.listQuery.factoryCode = ''
     this.yesno = ''
     this.treeworks = false
    },

    // 树状图的接口
    treecostypo() {
      this.datast.splice(0)
      dendrogram('').then(response => {
        this.datast.push(response.data.data)
         
         for(var i=0;i<this.datast.length;i++){
            if(this.datast[i].orgType =="部门"){
               this.datast[i].disabled = true
             }
          /*  console.log(this.datast[i].children) */
           for(var j=0;j<this.datast[i].children.length;j++){
            /*  console.log(this.datast[i].children[j]) */
             const child = this.datast[i].children[j]
             if(child.orgType =="部门"){
               child.disabled = true
             }
             if(child.children!==null){
               for(var p=0;p<child.children.length;p++){
                 if(child.children[p].orgType =="部门"){
                  child.children[p].disabled = true
             }
               }
             }
           }
         }
      })
    },
     // 使用公司的树选择按钮
     treeco(){
      this.treeFormVisible = true
      this.treecostypo()
     },
     // 设置树状图单选
    handleClick(data, checked, node) {
     this.i++;
     if(this.i%1==0){
       if(checked == true){
         console.log(checked)
         console.log(data)
         this.$refs.tree.setCheckedNodes([]);
         this.$refs.tree.setCheckedNodes([data]);
         this.listQuery.companyCode = data.orgCode
         this.radio = data.orgFullName
         this.orgwork = data.orgCode
       }else{
          this.$refs.tree.setCheckedNodes([]);
       }
     }
    },
    // 树状图的点击方法
    handleNodeClick(data, checked, node) {
       this.checkedId = data.id;
      
    },
    // 使用工厂的树
    manuftory() {
      this.plantlisy.splice(0)
      const orgCodes ={
        orgCode:this.orgwork
      } 
      works(orgCodes).then(response => {
        this.plantlisy.push(response.data.data)
        for(var i=0;i<this.plantlisy.length;i++){
            if(this.plantlisy[i].orgType =="部门"){
               this.plantlisy[i].disabled = true
             }
           for(var j=0;j<this.plantlisy[i].children.length;j++){
             const child = this.plantlisy[i].children[j]
             if(child.orgType =="部门"){
               child.disabled = true
             }
             if(child.children!==null){
               for(var p=0;p<child.children.length;p++){
                 const child1 = child.children[p]
                 if(child.children[p].orgType =="部门"){
                  child.children[p].disabled = true
                }
                if(child1.children!=null){
                  for(var o=0;o<child1.children.length;o++){
                    const child2 = child1.children[o]
                    if(child1.children[o].orgType == "部门"){
                      child1.children[o].disabled = true
                    }
                    if(child2.children!=null){
                      for(var q = 0;q<child2.children.length;q++){
                        const child3 = child2.children[q]
                        if(child2.children[q].orgType == "部门"){
                          child2.children[q].disabled = true
                        }
                        if(child3.children!=null){
                          for(var r=0;r<child3.children.length;r++){
                            if(child3.children[r].orgType == "部门"){
                              child3.children[r].disabled = true
                            }
                          }
                        }
                      }
                    }
                  }
                }
               }
             }
           }
         }
      })
     },  
      //工厂点击选择按钮的弹窗
        manufactory(){
          if( this.radio==''){
          this.$notify({
            title: '提示',
            message: '请选择使用公司',
            type: 'warning',
            duration: 3000
            })
          return
          }else{  
          this.treeworks = true
          this.manuftory()
          }
        },
    //  工厂设置树状图单选
     hocheckck(data, checked, node){
      this.i++;
     if(this.i%1==0){
      if(checked == true){
         console.log(checked)
         console.log(data)
        this.checkedIds = data.id;
        this.$refs.treeplisy.setCheckedNodes([]);
        this.$refs.treeplisy.setCheckedNodes([data]);
        this.listQuery.factoryCode = data.orgCode
        this.yesno = data.orgFullName
        this.orgsection = data.orgCode
       }
     }
     },

    handleNodeClickworks(data) {
     this.checkedIds = data.id;
    //  this.$refs.tree.setCheckedNodes([data]);
    
    },
   



    // 使用部门树接口
    sectionst() {
      this.datalisy.splice(0)
       const orgCodest ={
        orgCode:this.orgsection
      } 
      section(orgCodest).then(response => {
        this.setlist.push(response.data.data)
        this.setlist.children = response.data.data
         this.datalisy=[
           {     
             orgFullName:this.yesno,
             children: this.setlist.children,
             orgType:'公司'
           }
           ]
        // this.datalisy.push(response.data.data)
        console.log(this.datalisy)
        console.log(234567)
        for(var i=0;i<this.datalisy.length;i++){
             
          if(this.datalisy[i].orgType =="公司"){
             this.datalisy[i].disabled = true
          }
          for(var j=0;j<this.datalisy[i].children.length;j++){
            const childsty = this.datalisy[i].children[j]
            if(childsty.orgType=="公司"){
               childsty.disabled = true
            }
            if(childsty.children!==null){
              for(var p=0;p<childsty.children.length;p++){
                const rosyt =childsty.children[p]
                if(rosyt.orgType =="公司"){
                 rosyt.disabled = true
               }
               if(rosyt.children!==null){
                 for(var k=0;k<rosyt.children.length;k++){
                   const postdis = rosyt.children[k]
                   if(postdis.orgType=="公司"){
                     postdis.disabled = true
                   }
                 }
               }
              }
            }
          }
        }  
      })
    },
    // 使用部门树按钮
     treesection(){
       if( this.yesno==''){
          this.$notify({
            title: '提示',
            message: '请选择使用工厂',
            type: 'warning',
            duration: 3000
            })
          return
       }else{ 
      this.treeDepartment = true
      this.sectionst()
       }
     },



      hlsoClick(data, checked, node){
       this.i++;
     if(this.i%1==0){
     if(checked == true){
         console.log(checked)
         console.log(data)
        this.checkedIdst = data.id;
        this.$refs.treefrom.setCheckedNodes([data]);
        this.listQuery.divisionCode = data.orgCode
        this.postyly = data.orgFullName
       }
     }
    },

    handleNodeClickst(data) {
      this.checkedIdst = data.id;
    },
    
    
    

    // 搜索
    handleFilter() {
      this.listQuery.pageNum = 1
      this.getAA()
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.getAA()
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val
      this.getAA()
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    }
  }
}
</script>
<style>
.buttonplace{
height:36px;
background:#409EFF;
color:#fff;
border:1px solid #fff;
position:absolute;
right:0;
top:0;
border-radius: 5px;
}
.buttonplacest{
height:36px;
background:#409EFF;
color:#fff;
border:1px solid #fff;
position:absolute;
right:-50px;
top:0;
border-radius: 5px;
}
.fiutr {
  float: left;
}
.seat {
  margin-left: 50px;
  padding-right: 15px;
}
.inline-input {
  width: 200px;
  
}
.futiop{
text-decoration:underline
}
.formSearch {
  width: 100%;
  background: #fafafa;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  padding: 18px 10px 0;
  margin-bottom: 15px;
}
.square{
width: 0;
height: 0;
border-width: 18px;
border-style: solid;
border-color: #409EFF transparent transparent transparent;
margin:0 auto;
cursor: pointer;
}
#buttstyps{
   width:42px;
   height:36px;
   cursor:pointer;
   text-align:center;
 }
.tonesquare{
width: 0;
height: 0;
border-width: 18px;
border-style: solid;
border-color: transparent transparent #409EFF transparent;
margin:0 auto;
cursor: pointer;
}
.el-tree-node__content:hover {
  background-color: #6dc6fa;
  border-radius:3%
} 
</style>

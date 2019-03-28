<template>
    <div class="user-wrapper">
        <el-table border striper :data="tableData">
            <el-table-column label="姓名" align="center" prop="name"></el-table-column>
            <el-table-column label="性别" align="center" prop="sex"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.$http.get('/user').then(res => {
      console.log(res.data)
      this.tableData = res.data
    })
  }
}
</script>

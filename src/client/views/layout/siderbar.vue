<template>
    <div class="siderbar-wrapper">
      <el-menu class="el-menu-demo" unique-opened router :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="sub">
          <template slot="title">系统管理</template>
          <el-menu-item index="/system/user">用户管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'siderbar',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.siderbar-wrapper {
  width: 200px;
  height: 100%;
}
.el-submenu .el-menu-item {
  min-width: 0px;
}
</style>


<template>
  <el-container class="container">
    <el-header>element-ui 组件</el-header>

    <el-container class="content">
        <!--左侧菜单-->
        <el-aside width="200px">
          <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
              router
              default-active="/basic/layout"
              :background-color="variables.menuBg"
              :text-color="variables.menuText"
              :active-text-color="variables.menuActiveText"
            >
              <el-submenu
                v-for="(item, index) in menu"
                :key="index"
                :index="item.path"
              >
                <template slot="title">
                  <i :class="`el-icon-${item.meta.icon}`" />
                  <span>{{item.meta.title}}</span>
                </template>
                <el-menu-item
                  v-for="(subItem, subIndex) in item.children"
                  :key="subIndex"
                  :index="`${item.path}/${subItem.path}`"
                >
                  <i :class="`el-icon-${subItem.meta.icon}`" />
                  <span slot="title">{{subItem.meta.title}}</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <!--主体-->
        <el-main>
          <el-scrollbar wrap-class="scrollbar-wrapper">
            <router-view/>
          </el-scrollbar>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menu } from '@/assets/js/menu'
import variables from '@/assets/styles/variables.less'

export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  computed: {
    menu () {
      return menu
    },
    variables () {
      console.log(111, variables)
      return variables
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    height: 100%;
    //头部
    header {
      border-bottom: 1px solid #ccc;
      line-height: 60px;
      color: @red;
    }

    .content {
      //左侧菜单
      &>aside {
        height: calc(100vh - 60px);
        overflow-x: hidden;
        background-color: #304156;
      }
      //主体
      &>main {
        height: calc(100vh - 60px);
      }
    }

    //& ::v-deep .el-scrollbar__wrap{
    //  overflow-x: hidden;
    //}
  }
</style>

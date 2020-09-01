<template>
  <div>
    <el-row>
      <el-cascader
        v-model="value"
        clearable
        :options="options"
        filterable
        placeholder="选择"
        :show-all-levels="false"
        :collapse-tags="true"
        :props="{ expandTrigger: 'hover', value: 'id', multiple: true }"
        @change="handleChange"
      >
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf">({{ data.children.length }}</span>
        </template>
      </el-cascader>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Cascader',
  data () {
    return {
      value: [],
      options: [
        {
          id: 'zhinan',
          label: '指南',
          children: [
            {
              id: 'shejiyuanze',
              label: '设计原则',
              disabled: true,
              children: [
                {
                  id: 'yizhi',
                  label: '一致'
                },
                {
                  id: 'fankui',
                  label: '反馈'
                },
                {
                  id: 'xiaolv',
                  label: '效率'
                },
                {
                  id: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              id: 'daohang',
              label: '导航',
              children: [
                {
                  id: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  id: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          id: 'zujian',
          label: '组件',
          children: [
            {
              id: 'basic',
              label: 'Basic',
              children: [
                {
                  id: 'layout',
                  label: 'Layout 布局'
                },
                {
                  id: 'color',
                  label: 'Color 色彩'
                },
                {
                  id: 'typography',
                  label: 'Typography 字体'
                },
                {
                  id: 'icon',
                  label: 'Icon 图标'
                },
                {
                  id: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              id: 'form',
              label: 'Form',
              children: [
                {
                  id: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  id: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  id: 'input',
                  label: 'Input 输入框'
                },
                {
                  id: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  id: 'select',
                  label: 'Select 选择器'
                },
                {
                  id: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  id: 'switch',
                  label: 'Switch 开关'
                },
                {
                  id: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  id: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  id: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  id: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  id: 'upload',
                  label: 'Upload 上传'
                },
                {
                  id: 'rate',
                  label: 'Rate 评分'
                },
                {
                  id: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              id: 'data',
              label: 'Data',
              children: [
                {
                  id: 'table',
                  label: 'Table 表格'
                },
                {
                  id: 'tag',
                  label: 'Tag 标签'
                },
                {
                  id: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  id: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  id: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  id: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              id: 'notice',
              label: 'Notice',
              children: [
                {
                  id: 'alert',
                  label: 'Alert 警告'
                },
                {
                  id: 'loading',
                  label: 'Loading 加载'
                },
                {
                  id: 'message',
                  label: 'Message 消息提示'
                },
                {
                  id: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  id: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              id: 'navigation',
              label: 'Navigation',
              children: [
                {
                  id: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  id: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  id: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  id: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  id: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              id: 'others',
              label: 'Others',
              children: [
                {
                  id: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  id: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  id: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  id: 'card',
                  label: 'Card 卡片'
                },
                {
                  id: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  id: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          id: 'ziyuan',
          label: '资源',
          children: [
            {
              id: 'axure',
              label: 'Axure Components'
            },
            {
              id: 'sketch',
              label: 'Sketch Templates'
            },
            {
              id: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(1111)
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>

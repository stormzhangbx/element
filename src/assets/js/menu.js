import { deepCopy } from '@/assets/js/utils'
export const menu = [
  {
    meta: { icon: 'location', title: 'Basic' },
    path: '/basic',
    component: 'Empty',
    children: [
      {
        meta: { icon: 'menu', title: 'Layout 布局' },
        path: 'layout',
        component: 'basic/layout/index'
      },
      {
        meta: { icon: 'menu', title: 'Container 布局容器' },
        path: 'container',
        component: 'basic/container/index'
      },
      {
        meta: { icon: 'menu', title: 'Color 色彩' },
        path: 'color',
        component: 'basic/color/index'
      },
      {
        meta: { icon: 'menu', title: 'Typography 字体' },
        path: 'typography',
        component: 'basic/typography/index'
      },
      {
        meta: { icon: 'menu', title: 'Border 边框' },
        path: 'border',
        component: 'basic/border/index'
      },
      {
        meta: { icon: 'menu', title: 'Icon 图标' },
        path: 'icon',
        component: 'basic/icon/index'
      },
      {
        meta: { icon: 'menu', title: 'Button 按钮' },
        path: 'button',
        component: 'basic/button/index'
      },
      {
        meta: { icon: 'menu', title: 'Link 文字链接' },
        path: 'link',
        component: 'basic/link/index'
      }
    ]
  },
  {
    meta: { icon: 'check', title: 'Form' },
    path: '/form',
    component: 'Empty',
    children: [
      {
        meta: { icon: 'menu', title: 'Radio 单选框' },
        path: 'radio',
        component: 'form/radio/index'
      },
      {
        meta: { icon: 'menu', title: 'Checkbox 多选框' },
        path: 'checkbox',
        component: 'form/checkbox/index'
      },
      {
        meta: { icon: 'menu', title: 'Input 输入框' },
        path: 'input',
        component: 'form/input/index'
      },
      {
        meta: { icon: 'menu', title: 'InputNumber 计数器' },
        path: 'inputNumber',
        component: 'form/inputNumber/index'
      },
      {
        meta: { icon: 'menu', title: 'Select 选择器' },
        path: 'select',
        component: 'form/select/index'
      },
      {
        meta: { icon: 'menu', title: 'Cascader 级联选择器' },
        path: 'cascader',
        component: 'form/cascader/index'
      },
      {
        meta: { icon: 'menu', title: 'Switch 开关' },
        path: 'switch',
        component: 'form/switch/index'
      },
      {
        meta: { icon: 'menu', title: 'Slider 滑块' },
        path: 'slider',
        component: 'form/slider/index'
      },
      {
        meta: { icon: 'menu', title: 'TimePicker 时间选择器' },
        path: 'timePicker',
        component: 'form/timePicker/index'
      },
      {
        meta: { icon: 'menu', title: 'DatePicker 日期选择器' },
        path: 'datePicker',
        component: 'form/datePicker/index'
      },
      {
        meta: { icon: 'menu', title: 'DateTimePicker 日期时间选择器' },
        path: 'dateTimePicker',
        component: 'form/dateTimePicker/index'
      },
      {
        meta: { icon: 'menu', title: 'Upload 上传' },
        path: 'upload',
        component: 'form/upload/index'
      },
      {
        meta: { icon: 'menu', title: 'Rate 评分' },
        path: 'rate',
        component: 'form/rate/index'
      },
      {
        meta: { icon: 'menu', title: 'ColorPicker 颜色选择器' },
        path: 'colorPicker',
        component: 'form/colorPicker/index'
      },
      {
        meta: { icon: 'menu', title: 'Transfer 穿梭框' },
        path: 'transfer',
        component: 'form/transfer/index'
      },
      {
        meta: { icon: 'menu', title: 'Form 表单' },
        path: 'form',
        component: 'form/form/index'
      }
    ]
  },
  {
    meta: { icon: 'close', title: 'Data' },
    path: '/data',
    component: 'Empty',
    children: [
      {
        meta: { icon: 'menu', title: 'Table 表格' },
        path: 'table',
        component: 'data/table/index'
      },
      {
        meta: { icon: 'menu', title: 'Tag 标签' },
        path: 'tag',
        component: 'data/tag/index'
      },
      {
        meta: { icon: 'menu', title: 'Progress 进度条' },
        path: 'progress',
        component: 'data/progress/index'
      },
      {
        meta: { icon: 'menu', title: 'Tree 树形控件' },
        path: 'tree',
        component: 'data/tree/index'
      },
      {
        meta: { icon: 'menu', title: 'Pagination 分页' },
        path: 'pagination',
        component: 'data/pagination/index'
      },
      {
        meta: { icon: 'menu', title: 'Badge 标记' },
        path: 'badge',
        component: 'data/badge/index'
      },
      {
        meta: { icon: 'menu', title: 'Avatar 头像' },
        path: 'avatar',
        component: 'data/avatar/index'
      }
    ]
  },
  {
    meta: { icon: 'delete', title: 'Notice' },
    path: '/notice',
    component: 'Empty',
    children: [
      {
        meta: { icon: 'menu', title: 'Alert 警告' },
        path: 'alert',
        component: 'notice/alert/index'
      },
      {
        meta: { icon: 'menu', title: 'Loading 加载' },
        path: 'loading',
        component: 'notice/loading/index'
      },
      {
        meta: { icon: 'menu', title: 'Message 消息提示' },
        path: 'message',
        component: 'notice/message/index'
      },
      {
        meta: { icon: 'menu', title: 'MessageBox 弹框' },
        path: 'messageBox',
        component: 'notice/messageBox/index'
      },
      {
        meta: { icon: 'menu', title: 'Border 边框' },
        path: 'border',
        component: 'notice/border/index'
      },
      {
        meta: { icon: 'menu', title: 'Notification 通知' },
        path: 'notification',
        component: 'notice/notification/index'
      }
    ]
  },
  {
    meta: { icon: 'edit', title: 'Navigation' },
    path: '/navigation',
    component: 'Empty',
    children: [
      {
        meta: { icon: 'menu', title: 'NavMenu 导航菜单' },
        path: 'navMenu',
        component: 'navigation/navMenu/index'
      },
      {
        meta: { icon: 'menu', title: 'Tabs 标签页' },
        path: 'tabs',
        component: 'navigation/tabs/index'
      },
      {
        meta: { icon: 'menu', title: 'Breadcrumb 面包屑' },
        path: 'breadcrumb',
        component: 'navigation/breadcrumb/index'
      },
      {
        meta: { icon: 'menu', title: 'PageHeader 页头' },
        path: 'pageHeader',
        component: 'navigation/pageHeader/index'
      },
      {
        meta: { icon: 'menu', title: 'Border 边框' },
        path: 'border',
        component: 'navigation/border/index'
      },
      {
        meta: { icon: 'menu', title: 'Dropdown 下拉菜单' },
        path: 'dropdown',
        component: 'navigation/dropdown/index'
      },
      {
        meta: { icon: 'menu', title: 'Steps 步骤条' },
        path: 'steps',
        component: 'navigation/steps/index'
      }
    ]
  },
  {
    meta: { icon: 'share', title: 'Others' },
    path: '/others',
    component: 'Empty',
    children: [
      {
        meta: { icon: 'menu', title: 'Dialog 对话框' },
        path: 'dialog',
        component: 'others/dialog/index'
      },
      {
        meta: { icon: 'menu', title: 'Tooltip 文字提示' },
        path: 'tooltip',
        component: 'others/tooltip/index'
      },
      {
        meta: { icon: 'menu', title: 'Popover 弹出框' },
        path: 'popover',
        component: 'others/popover/index'
      },
      {
        meta: { icon: 'menu', title: 'Popconfirm 气泡确认框' },
        path: 'popconfirm',
        component: 'others/popconfirm/index'
      },
      {
        meta: { icon: 'menu', title: 'Card 卡片' },
        path: 'card',
        component: 'others/card/index'
      },
      {
        meta: { icon: 'menu', title: 'Carousel 走马灯' },
        path: 'carousel',
        component: 'others/carousel/index'
      },
      {
        meta: { icon: 'menu', title: 'Collapse 折叠面板' },
        path: 'collapse',
        component: 'others/collapse/index'
      },
      {
        meta: { icon: 'menu', title: 'Timeline 时间线' },
        path: 'timeline',
        component: 'others/timeline/index'
      },
      {
        meta: { icon: 'menu', title: 'Divider 分割线' },
        path: 'divider',
        component: 'others/divider/index'
      },
      {
        meta: { icon: 'menu', title: 'Calendar 日历' },
        path: 'calendar',
        component: 'others/calendar/index'
      },
      {
        meta: { icon: 'menu', title: 'Image 图片' },
        path: 'image',
        component: 'others/image/index'
      },
      {
        meta: { icon: 'menu', title: 'Backtop 回到顶部' },
        path: 'backtop',
        component: 'others/backtop/index'
      },
      {
        meta: { icon: 'menu', title: 'InfiniteScroll 无限滚动' },
        path: 'infiniteScroll',
        component: 'others/infiniteScroll/index'
      },
      {
        meta: { icon: 'menu', title: 'Drawer 抽屉' },
        path: 'drawer',
        component: 'others/drawer/index'
      }
    ]
  }
]

const loadView = (view) => {
  return () => import(`@/views/${view}`)
}

export const getRoutes = (list) => {
  const newList = deepCopy(list)
  return newList.filter(item => {
    item.component = loadView(item.component)
    if (item.children && item.children.length) {
      item.children = getRoutes(item.children)
    }
    return true
  })
}

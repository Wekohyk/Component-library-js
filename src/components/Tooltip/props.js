export default {
  // 提示内容
  content: String,
  // 触发方式
  trigger: {
    type: String,
    default: 'hover',
  },
  // 出现位置
  placement: {
    type: String,
    default: 'left',
  },
  // 自定义触发
  manual: {
    type: Boolean,
    default: false,
  },
  // 延时打开
  openDelay: {
    type: Number,
    default: 100,
  },
  // 延时关闭
  closeDelay: {
    type: Number,
    default: 100,
  },
};

export const collapseProps = {
  // 获父组件v-model的绑定值
  modelValue: {
    typeof: Array,
    default: [],
  },
  // 是否开启手风琴模式
  accordion: {
    type: Boolean,
    default: false,
  },
};

export const collapseItemProps = {
  name: {
    type: String,
    required: true,
  },
  title: String,
  disabled: {
    type: Boolean,
    default: false,
  },
};

// 这个key作为 provide/inject 的标识, 通过依赖注入的方式让子组件找到父组件
export const collapseContextKey = Symbol('collapseContextKey');

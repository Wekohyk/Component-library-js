// 通过 jsx 的方式渲染 vNode
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true,
    },
  },
  setup(props) {
    return () => props.vNode;
  },
});

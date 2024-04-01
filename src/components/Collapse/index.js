import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';

// 为组件提供 install 方法，供组件对外按需引入
Collapse.install = app => {
  app.component(Collapse.name, Collapse);
};
CollapseItem.install = app => {
  app.component(CollapseItem.name, CollapseItem);
};

export default {
  Collapse,
  CollapseItem,
};

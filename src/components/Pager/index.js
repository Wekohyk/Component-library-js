import Pager from './Pager.vue';

// 为组件提供 install 方法，供组件对外按需引入
Pager.install = app => {
  app.component(Pager.name, Pager);
};

export default Pager;

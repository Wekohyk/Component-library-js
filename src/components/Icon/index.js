import Icon from './Icon.vue';

// 为组件提供 install 方法，供组件对外按需引入
Icon.install = app => {
  app.component(Icon.name, Icon);
};

export default Icon;

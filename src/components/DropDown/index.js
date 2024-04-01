import DropDown from './DropDown.vue';

// 为组件提供 install 方法，供组件对外按需引入
DropDown.install = app => {
  app.component(DropDown.name, DropDown);
};

export default DropDown;

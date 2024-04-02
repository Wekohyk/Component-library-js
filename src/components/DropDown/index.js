import Dropdown from './Dropdown.vue';

// 为组件提供 install 方法，供组件对外按需引入
Dropdown.install = app => {
  app.component(Dropdown.name, Dropdown);
};

export default Dropdown;

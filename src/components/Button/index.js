import Button from './Button.vue';

// 为组件提供 install 方法，供组件对外按需引入
Button.install = app => {
  app.component(Button.name, Button);
};

export default Button;

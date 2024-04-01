import Card from './Card.vue';

// 为组件提供 install 方法，供组件对外按需引入
Card.install = app => {
  app.component(Card.name, Card);
};

export default Card;

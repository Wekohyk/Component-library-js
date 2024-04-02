/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(fas);

// 引入样式
import './assets/styles/index.scss';

// 引入自定义组件
import Icon from './components/Icon';
import Button from './components/Button';
import Card from './components/Card';
import Dialog from './components/Dialog';
import Pager from './components/Pager';
import Collapse from './components/Collapse';
import CollapseItem from './components/Collapse';
import Dropdown from './components/Dropdown';

// 提供一个 install 方法
const componentsArr = [
  Icon,
  Button,
  Card,
  Dialog,
  Pager,
  Collapse,
  CollapseItem,
  Dropdown,
];

// 对外提供的 install 方法
const install = app => {
  // 遍历、注册所有组件
  componentsArr.forEach(component => {
    app.component(component.name, component);
  });
  // font-awesome-icon 组件需要单独注册
  app.component('font-awesome-icon', FontAwesomeIcon);
};

// 导出 install 方法 -> 这里导出分为两种情况
// 全部导出
export default install;
// 按需导出
export {
  install,
  Icon,
  Button,
  Card,
  Dialog,
  Pager,
  Collapse,
  CollapseItem,
  Dropdown,
};

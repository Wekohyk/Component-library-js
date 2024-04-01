import './assets/styles/index.scss';

import { createApp } from 'vue';
import i18n from './lang/index';
import App from './App.vue';
import router from './router';

// 引入样式文件
import './assets/styles/index.scss';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(fas);

// 引入自定义组件
import Icon from './components/Icon/Icon.vue';
import Button from './components/Button/Button.vue';
import Card from './components/Card/Card.vue';
import Dialog from './components/Dialog/Dialog.vue';
import Pager from './components/Pager/Pager.vue';
import Collapse from './components/Collapse/Collapse.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import DropDown from './components/DropDown/DropDown.vue';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
// 注册自定义组件
app.component('Weko-Icon', Icon);
app.component('Weko-Button', Button);
app.component('Weko-Card', Card);
app.component('Weko-Dialog', Dialog);
app.component('Weko-Pager', Pager);
app.component('Weko-Collapse', Collapse);
app.component('Weko-CollapseItem', CollapseItem);
app.component('Weko-DropDown', DropDown);

app.use(router);
app.use(i18n);

app.mount('#app');

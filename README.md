# JS组件库的使用

组件库示例: https://jscomponents.wekooo.com

```js
// vue-i18n 国际化的使用方法
$t('xxxxxx');
```

## 组件库使用方法

项目入口文件(main.js)中

```js
import componentLibraryJs from 'component-library-js';
import 'component-library-js/style.css';

const app = createApp(App);
app.use(componentLibraryJs);
app.mount('#app');
```

## Icon组件的使用

为了提升用户体验感，简洁用户写法，所以对元素 属性中的代码进行了省略，**用户只需要写 fa- 后面的内容**。

```vue
<!-- 普通引入 -->
<Weko-Icon icon="user-secret"></Weko-Icon>
<!-- 设置不同的大小 -->
<Weko-Icon icon="user-secret" size="2xs"></Weko-Icon>
<!-- 旋转与翻转 -->
<Weko-Icon icon="user-secret" rotation="90" size="xl"></Weko-Icon>
<!-- 动画效果 -->
<Weko-Icon icon="user-secret" size="xl" beat></Weko-Icon>
<!-- 添加自定义属性 -->
<Weko-Icon icon="user-secret" size="xl" type="primary"></Weko-Icon>
```

**使用方法与 fontawesome 类似**，详细可查看 [fontawesome 文档](https://docs.fontawesome.com/web/use-with/vue/style)

**支持的属性**

| 属性名       | 作用             | 类型             | 是否必须 | 默认值 |
| ------------ | ---------------- | ---------------- | -------- | ------ |
| icon         | 设置图标         | String           | 是       | 无     |
| size         | 图标大小         | String           | 否       | 无     |
| rotation     | 旋转             | [String, Number] | 否       | 无     |
| flip         | 翻转             | [String, Number] | 否       | 无     |
| beat         | beat动画         | Boolean          | 否       | 无     |
| beat-fade    | beat-fade动画    | Boolean          | 否       | 无     |
| bounce       | bounce动画       | Boolean          | 否       | 无     |
| fade         | fade动画         | Boolean          | 否       | 无     |
| shake        | shake动画        | Boolean          | 否       | 无     |
| spin         | spin动画         | Boolean          | 否       | 无     |
| spin-reverse | spin-reverse动画 | Boolean          | 否       | 无     |
| spin-pulse   | spin-pulse动画   | Boolean          | 否       | 无     |
| type         | 主题类型         | String           | 否       | 无     |
| color        | 自定义颜色       | String           | 否       | 无     |

**主题类型设置方法**

```scss
// 主题颜色设置
$colors: (
  primary: #409eff,
  success: #67c23a,
  warning: #e6a23c,
  danger: #f56c6c,
  info: #909399,
);
```

```vue
<!-- 使用组件的位置 -->
<Weko-Icon icon="user-secret" type="primary"></Weko-Icon>
```

### 支持的图标

支持图标与 [fontawesome](https://fontawesome.com/search?s=solid&f=classic&o=r) 中图标相同

## Button组件的使用

**使用方法**

```Vue
<!-- 默认展示 -->
<Weko-Button>默认按钮</Weko-Button>
<!-- 朴素按钮 -->
<Weko-Button plain>默认按钮</Weko-Button>
<!-- 圆角按钮 -->
<Weko-Button round>默认按钮</Weko-Button>
<!-- 禁用状态 -->
<Weko-Button disabled>默认按钮</Weko-Button>
<!-- 等待状态 -->
<Weko-Button loading>默认按钮</Weko-Button>
<!-- 图标按钮 -->
<Weko-Button icon="file">默认按钮</Weko-Button>
<!-- 不同尺寸的按钮 -->
<Weko-Button icon="file" size="small">默认按钮</Weko-Button>
<!-- 圆形按钮 -->
<Weko-Button type="danger" circle>验</Weko-Button>
<!-- 按钮事件 -->
<Weko-Button type="primary" @click="clickHandler" ref="btnRef">主要按钮</Weko-Button>
<script setup lang=js>
  import { ref } from 'vue'
	const btnRef = ref(null)
  const clickHandler = () => {
    window.alert('button click')
    console.log(btnRef.value.ref) // 获取到元素本身
  }
</script>
```

**支持的属性**

| 属性名   | 作用       | 类型    | 是否必须 | 默认值  |
| -------- | ---------- | ------- | -------- | ------- |
| type     | 主题颜色   | String  | 否       | default |
| size     | 大小       | String  | 否       | 无      |
| plain    | 是否朴素   | Boolean | 否       | false   |
| round    | 是否圆角   | Boolean | 否       | false   |
| circle   | 是否圆形   | Boolean | 否       | false   |
| disabled | 是否禁用   | Boolean | 否       | false   |
| loading  | 是否加载中 | Boolean | 否       | false   |
| icon     | 图标       | String  | 否       | 无      |

**支持的事件**

| 事件名 | 作用     |
| ------ | -------- |
| click  | 点击事件 |

## Card组件的使用

**使用方法**

```vue
<!-- 第一张卡片 -->
<Weko-Card imgSrc="/images/card1.webp" :summary="$t('cardText3')"></Weko-Card>

<!-- 第二张卡片 -->
<Weko-Card imgSrc="/images/card2.webp" :summary="$t('cardText4')">
  <!-- 插槽内部的内容样式由自己决定 -->
  <template #footer>
    <div class="footer">
      <div class="level">{{ $t('cardText1') }}</div>
      <div class="price">{{ $t('cardMoney') + '20' }}</div>
    </div>
  </template>
</Weko-Card>

<!-- 第三张卡片 -->
<Weko-Card imgSrc="/images/card3.webp" :width="368" :imgHeight="90">
  <div>{{ $t('cardText2') }}</div>
  <!-- 插槽内部的内容样式由自己决定 -->
  <template #footer>
    <div class="footer-custom">
      <div class="level">{{ $t('cardFooter1') }}</div>
      <div>⚡️</div>
      <div class="level">{{ $t('cardFooter2') }}</div>
    </div>
  </template>
</Weko-Card>
```

**支持的属性**

| 属性名    | 作用     | 类型   | 是否必须 | 默认值 |
| --------- | -------- | ------ | -------- | ------ |
| width     | 卡片宽度 | Number | 否       | 无     |
| imgSrc    | 卡片链接 | String | 是       | 无     |
| imgHeight | 图片高度 | Number | 否       | 无     |
| summary   | 卡片摘要 | String | 否       | 无     |

## Dialog 组件的使用

**使用方法**

```vue
<!-- 点击 button 后触发 dialog -->
<Weko-Button type="primary" @click="visible = true">
  {{ $t('firstDialog') }}
</Weko-Button>
<Weko-Button type="success" @click="visible2 = true">
  {{ $t('secondDialog') }}
</Weko-Button>
<Weko-Button type="info" @click="visible3 = true">
  {{ $t('thirdDialog') }}
</Weko-Button>

<!-- 第一个对话框 -->
<Weko-Dialog v-model:visible="visible" @close="visible = false">
  {{ $t('dialogText') }}
</Weko-Dialog>
<!-- 第二个对话框 -->
<Weko-Dialog
  v-model:visible="visible2"
  @close="visible2 = false"
  :title="$t('dialogBasicName')"
  top="30vh"
  width="90%"
>
  {{ $t('dialogText') }}
</Weko-Dialog>
<!-- 第三个对话框 -->
<Weko-Dialog v-model:visible="visible3" @close="visible3 = false">
  {{ $t('dialogText') }}
  <template #footer>
    <Weko-Button type="danger" @click="visible3 = false">
      {{ $t('off') }}
    </Weko-Button>
    <Weko-Button type="warning" @click="visible3 = false">
      {{ $t('sure') }}
    </Weko-Button>
  </template>
</Weko-Dialog>

<!-- 声明控制对话框显示和隐藏的属性 -->
<script>
import { ref } from 'vue';
const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
</script>
```

**支持的属性**

| 属性名  | 作用           | 类型    | 是否必填 | 默认值  |
| ------- | -------------- | ------- | -------- | ------- |
| title   | 标题           | String  | 否       | ''提示" |
| width   | 宽度           | String  | 否       | 50%     |
| top     | 距离上方的距离 | String  | 否       | 15vh    |
| visible | 是否可见       | Boolean | 否       | false   |

**支持的事件**

| 事件名 | 作用       |
| ------ | ---------- |
| close  | 关闭对话框 |

## Pager组件的使用

**使用方法**

```vue
<!-- 总页数 total 大于页码最大显示数 pager-count, 此时无法全部显示 -->
<Weko-Pager
  :total="20"
  :currentPage="currentPage1"
  @current-change="page => (currentPage1 = page)"
></Weko-Pager>
<!-- 总页码数 total 小于等于页码最大显示数 pager-count, 可以全部显示 -->
<Weko-Pager
  :total="10"
  :currentPage="currentPage2"
  @current-change="page => (currentPage2 = page)"
></Weko-Pager>
<!-- 页码最大显示数 pager-count 是可以调整的 -->
<Weko-Pager
  :total="12"
  :pager-count="15"
  :currentPage="currentPage3"
  @current-change="page => (currentPage3 = page)"
></Weko-Pager>
<!-- 调整主题颜色 -->
<Weko-Pager
  :total="20"
  :currentPage="currentPage4"
  type="warning"
  @current-change="page => (currentPage4 = page)"
></Weko-Pager>
<!-- 调整大小 -->
<Weko-Pager
  :total="20"
  :currentPage="currentPage6"
  size="large"
  @current-change="page => (currentPage6 = page)"
></Weko-Pager>
```

**支持的属性**

| 属性名      | 作用       | 类型   | 是否必须 | 默认值 |
| ----------- | ---------- | ------ | -------- | ------ |
| total       | 总页码数   | Number | 否       | 0      |
| currentPage | 当前页码数 | Number | 否       | 1      |
| pageCount   | 页码最大数 | Number | 否       | 10     |
| type        | 主题类型   | String | 否       | 无     |
| size        | 大小       | String | 否       | 无     |

**支持的事件**

| 事件名         | 作用           |
| -------------- | -------------- |
| current-change | 改变当前的页数 |

## Collapse组件的使用

**使用方法**

```vue
<!-- 折叠面板 -->
<Weko-Collapse v-model="openedValue" @change="changeHandle">
  <Weko-CollapseItem name="a" title="home">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, non.
  </Weko-CollapseItem>
  <Weko-CollapseItem name="b" title="about">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ducimus.
  </Weko-CollapseItem>
  <Weko-CollapseItem name="c" title="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
  </Weko-CollapseItem>
  <Weko-CollapseItem name="d" title="contact" disabled>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
  </Weko-CollapseItem>
</Weko-Collapse>
<!-- 手风琴模式 -->
<Weko-Collapse v-model="openedValue2" @change="changeHandle" accordion>
  <Weko-CollapseItem name="a" title="home">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, non.
  </Weko-CollapseItem>
  <Weko-CollapseItem name="b" title="about">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ducimus.
  </Weko-CollapseItem>
  <Weko-CollapseItem name="c" title="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
  </Weko-CollapseItem>
  <Weko-CollapseItem name="d" title="contact">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
  </Weko-CollapseItem>
</Weko-Collapse>
<!-- 自定义标题
代码过于长，就不放在文章中了，有需要可以去 GitHub 仓库查看源码
-->
```

**支持的属性**

_Collapse_ 对应的属性

| 属性名     | 作用                      | 类型    | 是否必填 | 默认值 |
| ---------- | ------------------------- | ------- | -------- | ------ |
| modelValue | 获取父组件v-model绑定的值 | Array   | 否       | [ ]    |
| accordion  | 是否开启手风琴模式        | Boolean | 否       | false  |

_CollapseItem_ 对应的属性

| 属性名   | 作用     | 类型    | 是否必填 | 默认值 |
| -------- | -------- | ------- | -------- | ------ |
| name     | 标题     | String  | 是       | 无     |
| title    | 标题     | String  | 否       | 无     |
| disabled | 是否禁用 | Boolean | 否       | false  |

**支持的事件**

| 事件名 | 作用                   |
| ------ | ---------------------- |
| change | 折叠面板发生改变时触发 |

## Tooltip组件的使用

**使用方法**

```vue
<!-- 不同方向 -->
<Weko-Tooltip content="this is a test" placement="top" @visible-change="handle">
  <Weko-Button type="primary">top</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="bottom">
  <Weko-Button type="warning">bottom</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="left">
  <Weko-Button type="danger">left</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="right">
  <Weko-Button type="success">right</Weko-Button>
</Weko-Tooltip>
<!-- 切换触发模式 -->
<Weko-Tooltip content="this is a test" placement="top" trigger="click">
  <Weko-Button type="primary">top</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="bottom" trigger="click">
  <Weko-Button type="warning">bottom</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="left" trigger="click">
  <Weko-Button type="danger">left</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="right" trigger="click">
  <Weko-Button type="success">right</Weko-Button>
</Weko-Tooltip>
<!-- 手动触发模式 -->
<Weko-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
  <Weko-Button type="primary">right</Weko-Button>
</Weko-Tooltip>
<Weko-Button @click="openHandler">打开提示框</Weko-Button>
<Weko-Button @click="closeHandler">关闭提示框</Weko-Button>
<script setup lang="js">
const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}
</script>
<!-- 延时触发 -->
<Weko-Tooltip content="this is a test" placement="top :open-delay="2000" :close-delay="2000" @visible-change="handle">
  <Weko-Button type="primary">top</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip
  content="this is a test"
  placement="bottom"
  :open-delay="2000"
  :close-delay="2000"
>
  <Weko-Button type="warning">bottom</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
  <Weko-Button type="danger">left</Weko-Button>
</Weko-Tooltip>
<Weko-Tooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
  <Weko-Button type="success">right</Weko-Button>
</Weko-Tooltip>
```

**支持的属性**

| 属性名     | 作用       | 类型    | 是否必须 | 默认值 |
| ---------- | ---------- | ------- | -------- | ------ |
| content    | 提示内容   | String  | 否       | 无     |
| trigger    | 触发方式   | String  | 否       | hover  |
| placement  | 出现位置   | String  | 否       | left   |
| manual     | 自定义触发 | Boolean | 否       | false  |
| openDelay  | 延时打开   | Number  | 否       | 100    |
| closeDelay | 延时关闭   | Number  | 否       | 100    |

**支持的事件**

| 事件名         | 作用         |
| -------------- | ------------ |
| visible-change | 提示是否显示 |

## Dropdown组件

**使用方法**

```vue
<!-- 基础用法 -->
<Weko-Dropdown
  placement="bottom"
  trigger="click"
  :menu-options="options"
  @visible-change="visibleChangeHandler"
  @select="selectHandler"
  hideAfterClick
>
  <Weko-Button type="primary">点击打开下拉菜单</Weko-Button>
</Weko-Dropdown>
<!-- 手动打开和关闭 -->
<Weko-Dropdown
  placement="bottom"
  trigger="click"
  manual
  :menu-options="options"
  @visible-change="visibleChangeHandler"
  @select="selectHandler"
  ref="dropdownRef"
>
  <Weko-Button type="primary">手动打开下拉菜单</Weko-Button>
</Weko-Dropdown>
<Weko-Button @click="openClick">打开</Weko-Button>
<Weko-Button @click="closeClick">关闭</Weko-Button>
<!-- 支持VNode节点 -->
<Weko-Dropdown
  placement="bottom"
  trigger="click"
  :menu-options="options2"
  @visible-change="visibleChangeHandler"
  @select="selectHandler"
>
  <Weko-Button type="primary">点击打开下拉菜单</Weko-Button>
</Weko-Dropdown>
<script setup lang="js">
import { ref, h } from 'vue';
const options = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
];
const options2 = [
  { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
];
const dropdownRef = ref(null);

// 下拉列表显示改变时对应的回调函数
const visibleChangeHandler = status => {
  console.log('visibleChangeHandle', status);
};
// 选择具体下拉项目时对应的回调函数
const selectHandler = item => {
  console.log('selectHandler', item);
};

const openClick = () => {
  dropdownRef.value.show();
};
const closeClick = () => {
  dropdownRef.value.hidden();
};
</script>
```

**支持的属性**

| 属性名          | 作用                | 类型    | 是否必须 | 默认值 |
| --------------- | ------------------- | ------- | -------- | ------ |
| tooltip所有属性 | 继承tooltip所有属性 | /       | /        | /      |
| menuOptions     | 下拉内容条目数组    | Array   | 是       | 无     |
| hideAfterClick  | 点击条目后隐藏      | Boolean | 否       | false  |

**支持的事件**

| 事件名           | 作用                   |
| ---------------- | ---------------------- |
| _visible-change_ | 显示状态改变后触发     |
| _select_         | 选择了具体的某一个项目 |

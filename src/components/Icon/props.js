export default {
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String
  },
  // 旋转属性
  rotation: {
    type: [Number, String]
  },
  // 翻转属性
  flip: {
    type: [Number, String]
  },
  // 动画相关属性
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  // 自定义属性
  type: {
    type: String
  }
}

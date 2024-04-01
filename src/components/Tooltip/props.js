export default {
  content: String,
  trigger: {
    type: String,
    default: 'hover',
  },
  placement: {
    type: String,
    default: 'left',
  },
  manual: {
    type: Boolean,
    default: false,
  },
  openDelay: {
    type: Number,
    default: 100,
  },
  closeDelay: {
    type: Number,
    default: 100,
  },
};

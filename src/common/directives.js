import copy from "./v-copy";

// 自定义指令
const directives = {
  copy
};
// 批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  }
};

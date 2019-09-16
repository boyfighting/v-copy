import Vue from "vue";
import App from "./App.vue";
import { Button, Input } from "ant-design-vue";
import Directives from "../src/common/directives";

Vue.component(Button.name, Button);
Vue.use(Directives);
Vue.use(Input);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

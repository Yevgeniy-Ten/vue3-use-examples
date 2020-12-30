import {createApp} from "vue"
import App from "./containers/App.vue"
import router from "@/routes/routes";
import store from "@/store/store";

createApp(App).use(router).use(store).mount("#app")

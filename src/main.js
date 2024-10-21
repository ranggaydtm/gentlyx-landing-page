import "./assets/css/index.css";
import { createApp } from "vue";
import App from "@/App.vue";
import Navbar from "@components/navbar/Navbar.vue";
import Footer from "@components/footer/Footer.vue";
import LandingPage from "@pages/LandingPage.vue";

const app = createApp(App);

app.component("Navbar", Navbar);
app.component("LandingPage", LandingPage);
app.component("Footer", Footer);

app.mount("#app");

// createApp(App).mount("#app");

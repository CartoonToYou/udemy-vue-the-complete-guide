import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

import Stocks from "./components/stocks/Stocks.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header: Header,
      default: Home,
    },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    components: {
      header: Header,
      default: Portfolio,
    },
  },
  {
    path: "/stocks",
    name: "stocks",
    components: {
      header: Header,
      default: Stocks,
    },
    children: [
      // {
      //   path:
      // }
    ],
  },
];

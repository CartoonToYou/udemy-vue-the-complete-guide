import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log(data);
        const { stocks, funds, stockPortfolio } = data;
        const portfolio = { stockPortfolio, funds };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
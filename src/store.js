import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
import { appAxios } from "./lib/app-axios";

const store = createStore({
  state: () => ({
    records: [],
    searchRecords: "",
  }),

  mutations: {
    getRecords(state, records = []) {
      state.records = records;
    },

    getSearchRecords(state, searchValue) {
      state.searchRecords = searchValue;
    },
  },

  actions: {
    async getRecords({ commit }) {
      let resultRecords = [];
      let recordsData = [];
      let recordsCols = [];
      const records = [];

      try {
        recordsCols = await appAxios.get("/cols").then((res) => res.data);
        recordsData = await appAxios.get("/data").then((res) => res.data);
      } catch (err) {
        console.log(err);
      }

      await recordsData.forEach((recordData) => {
        resultRecords = recordData.reduce((records, data, index) => {
          records[recordsCols[index]] = data;

          return records;
        }, {});

        records.push(resultRecords);
      });
      commit("getRecords", records);
    },
  },

  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
});

export default store;

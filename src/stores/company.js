import { defineStore } from "pinia";

export const useCompanyStore = defineStore("company", {
  state: () => ({
    items: [
      {
        title: "Только проверенные бренды",
        about: "Бренды, проверенные временем и качеством",
        img: "/icons/company.svg",
      },
      {
        title: "Только проверенные бренды",
        about: "Бренды, проверенные временем и качеством",
        img: "/icons/company.svg",
      },
      {
        title: "Только проверенные бренды",
        about: "Бренды, проверенные временем и качеством",
        img: "/icons/company.svg",
      },
      {
        title: "Только проверенные бренды",
        about: "Бренды, проверенные временем и качеством",
        img: "/icons/company.svg",
      },
    ],
  }),
  getters: {
    company: (state) => state.items,
  },
});

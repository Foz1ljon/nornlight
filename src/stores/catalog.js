import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalog", {
  state: () => ({
    items: [
      {
        title: "Люстры",
        price: 540,
        img: "/images/catalog1.png",
      },
      {
        title: "Светильники",
        price: 540,
        img: "/images/catalog2.png",
      },
      {
        title: "Бра",
        price: 540,
        img: "/images/catalog3.png",
      },
      {
        title: "Торшеры",
        price: 540,
        img: "/images/catalog4.png",
      },
      {
        title: "Настольные лампы",
        price: 540,
        img: "/images/catalog5.png",
      },
      {
        title: "Споты",
        price: 540,
        img: "/images/catalog6.png",
      },
    ],
  }),
  getters: {
    catalog: (state) => state.items,
  },
});

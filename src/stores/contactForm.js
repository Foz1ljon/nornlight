// src/stores/contactForm.js

import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const useContactFormStore = defineStore("contactForm", {
  state: () => ({
    isShowContact: false,
    form: {
      fullname: "",
      phone: "",
    },
  }),
  actions: {
    // SHow Contact Form

    toggleContact() {
      this.isShowContact = !this.isShowContact;
    },

    //  Clear form

    resetForm() {
      this.form.fullname = "";
      this.form.phone = "";
    },

    //  Send form

    send() {
      if (!this.form.fullname || !this.form.phone) {
        toast("All fields are required!", {
          theme: "auto",
          type: "error",
          pauseOnFocusLoss: false,
          autoClose: 2000,
          dangerouslyHTMLString: true,
        });
      } else {
        toast("Successfully sent", {
          theme: "auto",
          type: "success",
          pauseOnFocusLoss: false,
          autoClose: 2000,
          dangerouslyHTMLString: true,
        });
        this.resetForm();
      }
    },
  },
});

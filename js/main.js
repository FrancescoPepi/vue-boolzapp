const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,

      chatActive: 0,
      filterChat: "",
      // messageInput: "",
      newMessage: {
        date: "",
        message: "".trim(),
        status: "sent",
      },
      // ultimoAccess:
      //   contacts[chatActive].messages[contacts[chatActive].messages.length - 1]
      //     .date,
    };
  },
  methods: {
    activeChat(index) {
      this.chatActive = index;
    },
    pushMessage() {
      if (this.newMessage.message <= 2) {
        console.log("errore");
        return;
      }
      const newMessageCopy = { ...this.newMessage };
      const date = new Date();
      let h, min;
      h = date.getHours();
      min = date.getMinutes();
      newMessageCopy.date = h + ":" + min;
      this.contacts[this.chatActive].messages.push(newMessageCopy);
      this.newMessage.message = "";
    },
    // provaX(x) {
    //   if (x.date.length < 9 && x.status == "received") {
    //     this.ultimoAccess = x.date;
    //   }
    // },
  },
}).mount("#app");

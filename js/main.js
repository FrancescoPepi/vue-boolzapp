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
        message: "",
        status: "sent",
      },
    };
  },
  methods: {
    activeChat(index) {
      this.chatActive = index;
    },
    pushMessage() {
      if (this.newMessage.message.length <= 2) {
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
    },
  },
}).mount("#app");

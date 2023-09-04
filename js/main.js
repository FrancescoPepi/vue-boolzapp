const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      ultimoMsg: contacts[0].messages[2].message,
      ultimoAccess: contacts[0].messages[2].date,
      messaggi: contacts[0].messages,
      chatActive: 0,
    };
  },
  methods: {
    activeChat(index) {
      this.chatActive = index;
    },
  },
}).mount("#app");

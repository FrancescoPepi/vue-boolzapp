const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,

      copyOver: false,
      preferiteOver: false,
      chatActive: 0,
      filterChat: "",
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
      newMessageReceived: {
        date: "",
        message: "Ti risponderemo a breve",
        status: "received",
      },
      // ultimoAccess:
      //   contacts[chatActive].messages[contacts[chatActive].messages.length - 1]
      //     .date,
    };
  },
  methods: {
    // aggiornamento index
    activeChat(index) {
      this.chatActive = index;
    },
    pushMessage() {
      // controllo se il messaggio non ha spazzi inizio e fine  e se è minore di 2 caratteri
      if (
        this.newMessage.message.length <= 2 ||
        !this.newMessage.message.trim()
      ) {
        console.error("errore");
        return;
      }
      // assegnazione nuovo messaggio nuova data ed invio
      const newMessageCopy = { ...this.newMessage };
      const date = new Date();
      let h, min;
      h = date.getHours();
      min = date.getMinutes();
      // controllo doppia cifra orario
      if (h <= 9) h = "0" + h;
      if (min <= 9) min = "0" + min;
      newMessageCopy.date = h + ":" + min;
      // push nuovo messaggio in object
      this.contacts[this.chatActive].messages.push(newMessageCopy);
      // svuotare campo di input
      this.newMessage.message = "";
      setTimeout(this.receivedMessage, 1000);
    },
    receivedMessage() {
      const ultimoMessage = document.querySelectorAll(".message");
      // controllo se ha già risposto
      if (
        ultimoMessage[ultimoMessage.length - 1].classList.contains("received")
      )
        return;
      // assegnazione nuovo messaggio nuova data ed invio
      const newMessageReceivedCopy = { ...this.newMessageReceived };
      const date = new Date();
      let h, min;
      h = date.getHours();
      min = date.getMinutes();
      // controllo doppia cifra orario
      if (h <= 9) h = "0" + h;
      if (min <= 9) min = "0" + min;
      newMessageReceivedCopy.date = h + ":" + min;
      // push nuovo messaggio in object
      this.contacts[this.chatActive].messages.push(newMessageReceivedCopy);
    },
    deleteMessage(index) {
      this.contacts[this.chatActive].messages.splice(index, 1);
    },
    preferiteMessage(index) {
      const preferiti = document.querySelectorAll("#preferiti");
      preferiti[index].classList.toggle("d-none");
    },
    copyMessage(index) {
      const messageCopied =
        this.contacts[this.chatActive].messages[index].message;
      navigator.clipboard.writeText(messageCopied);
      console.log(messageCopied);
    },
    // provaX(x) {
    //   if (x.date.length < 9 && x.status == "received") {
    //     this.ultimoAccess = x.date;
    //   }
    // },
  },
}).mount("#app");

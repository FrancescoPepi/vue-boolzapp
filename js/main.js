const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,

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
    over(index) {
      const cestino = document.querySelectorAll("#cestino");
      const arrow = document.querySelectorAll(".btn");
      cestino[index].classList.remove("d-none");
      arrow[index].classList.remove("dropdown-toggle");
      // console.log(cestino, index);
    },
    noOver(index) {
      const cestino = document.querySelectorAll("#cestino");
      const arrow = document.querySelectorAll(".btn");
      cestino[index].classList.add("d-none");
      arrow[index].classList.add("dropdown-toggle");
      // console.log(cestino);
    },
    deleteMessage(index) {
      let messageDelete = this.contacts[this.chatActive].messages.slice(
        index,
        this.contacts[this.chatActive].messages.length
      );
      console.log(messageDelete);
      // messageDelete
      console.log(this.contacts[this.chatActive].messages);
    },
    // provaX(x) {
    //   if (x.date.length < 9 && x.status == "received") {
    //     this.ultimoAccess = x.date;
    //   }
    // },
  },
}).mount("#app");

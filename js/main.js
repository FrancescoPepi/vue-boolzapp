const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      message: "Hello Vue!",
    };
  },
  methods: {},
  // created: {
  //   addUaccess() {
  //     contacts.forEach((element) => {
  //       element.access = randomNumber();
  //       console.log(contacts);
  //     });
  //   },
  // },
}).mount("#app");

// function randomNumber() {
//   Math.floor(Math.random() * (12 + 1) - 1);
// }

document.addEventListener(
  "keydown",
  (event) => {
    var keyValue = event.key;
    var codeValue = event.code;

    console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue);
  },
  false
);

console.log("Script Loaded");

$(document).on("keydown", (e) => {
    //Check if key down is enter
    if (e.which === 13) {
      alert("Hi")
    }
  })
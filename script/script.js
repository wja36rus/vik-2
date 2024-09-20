$(document).ready(function () {
  $("#send").click(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const text = $("#text").val();

    if (text === "") {
      $("#name-error").append("Введите имя");
    }

    console.log("### ~ text:", text);
    console.log("### ~ name:", name);
    console.log("### ~ email:", email);
  });
});

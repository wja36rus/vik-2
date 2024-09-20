$(document).ready(function () {
  $("#send").click(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const text = $("#text").val();

    if (name === "") {
      $("#error-name").text("Введите имя");
      return;
    } else {
      $("#error-name").text("");
    }

    if (email === "") {
      $("#error-email").text("Введите e-mail");
      return;
    } else {
      $("#error-email").text("");
    }

    const body = {
      text: text,
      name: name,
      email: email,
    };

    $.ajax({
      type: "post",
      url: "../script/mail.php",
      data: body,
      dataType: "json",
      success: function ({ status }) {
        if (status === "success") {
          console.log("Success!");
          $("#name").val("");
          $("#email").val("");
          $(".success-form").addClass("active");

          setTimeout(() => {
            $(".success-form").removeClass("active");
          }, 2500);
        }
      },
      error: function (error) {
        console.log("### ~ error:", error);
      },
    });
  });
});

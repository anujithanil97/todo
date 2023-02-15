$(document).ready(() => {
  //  $(".btn").on("click", validate(redirect));

  $(".btn").click(() => {
    validate(redirect);
  });

  function validate(callback) {
    var check = true;
    let uname = $(".uname");
    let pass = $(".pass");

    if (uname[0].value != "admin") {
      uname.css("border", "solid red 2px");
      $(".uname+.fas").css("visibility", "visible");
      check = false;
    } else {
      uname.css("border", "none");
      $(".uname+.fas").css("visibility", "hidden");
    }

    if (pass[0].value != 12345) {
      pass.css("border", "solid red 2px");
      $(".pass+.fas").css("visibility", "visible");
      check = false;
    } else {
      pass.css("border", "none");
      $(".pass+.fas").css("visibility", "hidden");
    }

    callback(check);
  }

  function redirect(condn) {
    if (condn == true) {
      window.location.href = "./list.html";
    }
  }
});

(e) => {
  let uname = $(".uname");
  let pass = $(".pass");

  if (uname[0].value != "admin") {
    e.preventDefault();
    uname.css("border", "solid red 2px");
    $(".uname+.fas").css("visibility", "visible");
  } else {
    uname.css("border", "none");
    $(".uname+.fas").css("visibility", "hidden");
  }

  if (pass[0].value != 12345) {
    e.preventDefault();
    pass.css("border", "solid red 2px");
    $(".pass+.fas").css("visibility", "visible");
  } else {
    pass.css("border", "none");
    $(".pass+.fas").css("visibility", "hidden");
  }
};

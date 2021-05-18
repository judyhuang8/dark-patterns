$(document).ready(function () {
  $("#rm-submit").click(function () {
    $("#rm-ty").removeClass("hidden");
    $("#rm-signup").addClass("hidden");
  });

  $("#rm-acc").click(function () {
    $("#rm-acc-info").removeClass("hidden");
    $("#rm-ty").addClass("hidden");
  });

  $("#rm-acc-settings-link").click(function () {
    $("#rm-acc-settings").removeClass("hidden");
  });

  $("#rm-sub-details-link").click(function () {
    $("#rm-sub-details").removeClass("hidden");
  });

  $("#rm-support-link").click(function () {
    $("#rm-support").removeClass("hidden");
  });

  $("#rm-faq-link").click(function () {
    $("#rm-faq").removeClass("hidden");
    $("#rm-acc-info").addClass("hidden");
  });

  $("#rm-unsub-link").click(function () {
    $("#rm-unsub-ty").removeClass("hidden");
    $("#rm-faq").addClass("hidden");
  });

});
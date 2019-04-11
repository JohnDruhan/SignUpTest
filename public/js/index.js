// Get references to page elements
var $signupName = $("#signup-name");
var $signupEmail = $("#signup-email");
var $submitBtn = $("#submit");
var $signupList = $("#signup-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveSignup: function(signup) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/signups",
      data: JSON.stringify(signup)
    });
  },
  getSignups: function() {
    return $.ajax({
      url: "api/signups",
      type: "GET"
    });
  },
  deleteSignup: function(id) {
    return $.ajax({
      url: "api/signups/" + id,
      type: "DELETE"
    });
  }
};

// refreshSignups gets new signups from the db and repopulates the list
var refreshSignups = function() {
  API.getSignup().then(function(data) {
    var $Signup = data.map(function(signup) {
      var $a = $("<a>")
        .text(Signup.text)
        .attr("href", "/signup/" + signup.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": signup.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $signupList.empty();
    $signupList.append($signups);
  });
};

// handleFormSubmit is called whenever we submit a new signup
// Save the new signup to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var signup = {
    name: $signupName.val().trim(),
    email: $signupEmail.val().trim()
  };

  if (!(signup.name && signup.email)) {
    alert("You must enter an name and email!");
    return;
  }

  API.saveSignup(signup).then(function() {
    refreshSignup();
  });

  $signupName.val("");
  $signupEmail.val("");
};

// handleDeleteBtnClick is called when an signup's delete button is clicked
// Remove the signup from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteSignup(idToDelete).then(function() {
    refreshSignup();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$signupList.on("click", ".delete", handleDeleteBtnClick);

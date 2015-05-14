var username = "nerthbox";

function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " badges, and " + points + " points! ";
    console.log(message);
}

var request = http.get("http://treehouse.com/" + username + ".json");

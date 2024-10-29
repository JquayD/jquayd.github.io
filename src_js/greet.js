function generateGreeting(name) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Guten morgen " + name;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Guten tag " + name;
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Guten abend " + name;
  } else {
    greeting = "Guten nacht " + name;
  }

  return greeting;
}

// Set the greeting in the HTML element with the id "greeting"
const name = "Ptah"; // Replace with the desired name
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = generateGreeting(name);

function chatbotResponse(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput.includes("salut") || userInput.includes("bonjour") || userInput.includes("hello")) {
    return "Salut ! Comment puis-je vous aider aujourd'hui ?";
  } else if (userInput.includes("comment ça va")) {
    return "Je vais bien merci, et vous ? Comment puis-je vous aider ?";
  } else if (
    userInput.includes("quel est ton nom ?") ||
    userInput.includes("qui es-tu ?")
  ) {
    return "Je suis Pooja, votre chatbot amical.";
  } else if (userInput.includes("au revoir") || userInput.includes("adieu")) {
    return "Au revoir ! Passez une bonne journée !";
  } else {
    return "Je suis désolé, je ne comprends pas. Pouvez-vous reformuler ou poser une autre question ?";
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() === "") return;

  addMessageToChat(userInput, "user");
  document.getElementById("userInput").value = "";

  const botResponse = chatbotResponse(userInput);
  addMessageToChat(botResponse, "bot");
  addSuggestions(botResponse);
}

function addMessageToChat(message, sender) {
  const chatbox = document.getElementById("chatbox");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = message;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function addSuggestions(response) {
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (response.includes("aider")) {
    addSuggestion("Quel est ton nom ?");
    addSuggestion("Comment ça va ?");
  } else if (response.includes("bien merci")) {
    addSuggestion("Que pouvez-vous faire ?");
  } else if (response.includes("chatbot")) {
    addSuggestion("Salut");
    addSuggestion("Au revoir");
  }
}

function addSuggestion(text) {
  const suggestion = document.createElement("div");
  suggestion.className = "suggestion";
  suggestion.textContent = text;
  suggestion.onclick = () => {
    document.getElementById("userInput").value = text;
    sendMessage();
  };
  document.getElementById("suggestions").appendChild(suggestion);
}

function toggleChat() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.classList.toggle("visible");
}

function checkEnter(event) {
  if (event.key === "Enter") {
    sendMessage();
    return false;
  }
  return true;
}

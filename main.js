// JavaScript-Code für den Chatbot

// Funktion, um Nachrichten zu senden
function sendMessage() {
    // Benutzereingabe abrufen
    var userInput = document.getElementById("user-input").value;
  
    // Konversationselement abrufen
    var conversationContainer = document.querySelector(".conversation-container");
  
    // Benutzereingabe zur Konversation hinzufügen
    conversationContainer.innerHTML += '<div class="user-message">' + userInput + '</div>';
  
    // Antwort des Chatbots generieren (hier kannst du die Logik deines Chatbots implementieren)
    var botResponse = getBotResponse(userInput);
  
    // Antwort des Chatbots zur Konversation hinzufügen
    conversationContainer.innerHTML += '<div class="bot-message">' + botResponse + '</div>';
  
    // Benutzereingabefeld leeren
    document.getElementById("user-input").value = '';
  }
  
  // Funktion, um die Antwort des Chatbots zu generieren
  function getBotResponse(userInput) {
    // Hier kannst du die Logik deines Chatbots implementieren
    // Zum Beispiel kannst du eine einfache Antwort zurückgeben oder eine API für fortgeschrittenere Interaktionen aufrufen
    return "Vielen Dank für deine Frage. Leider bin ich noch ein einfacher Chatbot und kann keine komplexen Anfragen beantworten.";
  }
  
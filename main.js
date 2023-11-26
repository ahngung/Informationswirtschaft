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
    
    if (userInput.includes("Problem")) {
      return "Vielen Dank für die Informationen zu Ihrem Fall. Gibt es noch weitere Details, die ich wissen sollte?";
    } else if (userInput.includes("Chatbot fragt ob irgendwelche Datei hochzuladen sind")) {
      return "Wenn Sie Dateien haben, die Sie hochladen möchten, klicken Sie bitte auf die Schaltfläche 'Datei hochladen'.";
    } else if (userInput.includes("Mandat lädt die Datei hoch")) {
      uploadFile();
      return "Vielen Dank für das Hochladen des Dokuments. Ich werde es überprüfen und mich dann mit einer Antwort zu Ihrem Fall melden.";
    } else if (userInput.includes("Termin zum Anwalt")) {
      return "Können wir einen Termin mit einem Anwalt für Sie vereinbaren? Bitte antworten Sie mit 'Ja' oder 'Nein'.";
    } else if (userInput.includes("Ja")) {
      return "Vielen Dank für Ihre Zustimmung. Um einen Termin zu vereinbaren, benötigen wir einige persönliche Daten. Bitte geben Sie Ihren vollständigen Namen, Ihre E-Mail-Adresse und Ihre Telefonnummer ein.";
    } else if (userInput.includes("[Persönliche Daten]")) {
      return "Vielen Dank für die Bereitstellung Ihrer persönlichen Daten. Wir haben einige Terminvorschläge für Sie: [Terminvorschläge]. Bitte wählen Sie einen Termin aus, der Ihnen am besten passt.";
    } else if (userInput.includes("Mandat entscheidet sich für einen Termin")) {
      return "Vielen Dank für Ihre Auswahl. Ihr Termin ist für den [Datum] um [Uhrzeit] mit Anwalt [Anwaltsname] in der Kanzlei [Kanzleiadresse] vereinbart.";
    } else if (userInput.includes("Tschüss")) {
      return "Vielen Dank für Ihre Nutzung des Chatbots. Wenn Sie weitere Fragen haben, stehe ich Ihnen gerne zur Verfügung. Auf Wiedersehen!";
    } else {
      return "Entschuldigung, ich habe Ihre Frage nicht verstanden. Wie kann ich Ihnen helfen?";
    }
  }
  
  // Funktion zum Hochladen einer Datei
  function uploadFile() {
    // Code zum Abrufen der hochgeladenen Datei
    var uploadedFile = document.getElementById("upload-file").files[0];
    
    // Code zum Verarbeiten der hochgeladenen Datei (z.B. Auslesen von Daten)
    // Hier können Sie den gewünschten Code für die Dateiverarbeitung einfügen
  }
  
  // Funktion zum Starten einer neuen Konversation
  function startNewConversation() {
    document.getElementById("conversation-history").innerHTML += '<div class="conversation">Neue Konversation gestartet</div>';
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  }

  // Funktion zum Wechseln zwischen Dark und Light Mode
function toggleDarkMode() {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
  }
  
  // Dark Mode-Switch Event-Listener
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("change", toggleDarkMode);
  
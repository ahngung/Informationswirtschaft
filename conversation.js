// Globale Variable für die Konversations-ID und ob eine neue Konversation gestartet wurde
var conversationId = 0;
var newConversationStarted = true;

// Funktion zum Starten einer neuen Konversation
function startNewConversation() {
    // Wenn bereits eine Konversation gestartet wurde, einfach den Konversationscontainer leeren
    document.querySelector("#conversation-container").innerHTML = '';
  
    // Setze newConversationStarted auf true
    newConversationStarted = true;
  
    // Wieder auf Benutzereingabefeld fokussieren
    document.getElementById("user-input").focus();
}

// Funktion, um Nachrichten zu senden
function sendMessage() {
    // Benutzereingabe abrufen
    var userInput = document.getElementById("user-input").value;
  
    // Konversationselement abrufen
    var conversationContainer = document.querySelector("#conversation-container");
  
    // Benutzereingabe zur Konversation hinzufügen
    var userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    conversationContainer.appendChild(userMessage);
  
    // Antwort des Chatbots generieren
    var botResponse = getBotResponse(userInput);
  
    // Antwort des Chatbots zur Konversation hinzufügen
    var botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerText = botResponse;
    conversationContainer.appendChild(botMessage);
  
    // Benutzereingabefeld leeren
    document.getElementById("user-input").value = '';
  
    // Wieder auf Benutzereingabefeld fokussieren
    document.getElementById("user-input").focus();
  
    // Wenn eine neue Konversation gestartet wurde, füge sie der Konversationsliste hinzu
    if (newConversationStarted) {
        // Erhöhe die Konversations-ID
        conversationId++;
    
        // Erstelle ein neues 'li' Element
        var newConversation = document.createElement("li");
        newConversation.className = "conversation-list-item";
    
        // Erstelle ein neues 'div' Element
        var newObject = document.createElement("div");
        newObject.className = "object";
        newObject.innerText = 'Konversation ' + conversationId;
    
        // Speichere die Konversations-ID im Data-Attribut des neuen Objekts
        newObject.dataset.conversationId = conversationId;
    
        // Erstelle den Löschknopf
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.className = "delete-button";
    
        // Erstelle den Umbenennen-Button
        var renameButton = document.createElement("button");
        renameButton.innerHTML = '<i class="fas fa-edit"></i>';
        renameButton.className = "rename-button";
    
        // Erstelle ein 'div'-Element, das die beiden rechten Buttons umschließt
        var rightButtons = document.createElement("div");
    
        // Füge die Buttons zum 'div'-Element hinzu
        rightButtons.appendChild(renameButton);
        rightButtons.appendChild(deleteButton);
    
        // Füge einen Event-Listener zum Umbenennen-Button hinzu, um den Namen der Konversation zu ändern, wenn er angeklickt wird
        renameButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Verhindert, dass das Klick-Event auf den Eltern ausgeführt wird
        var newName = prompt("Bitte geben Sie den neuen Namen für die Konversation ein:");
        if (newName) {
            newObject.innerText = newName;
            // Hier können Sie auch den neuen Namen in localStorage speichern, wenn nötig
        }
        });
    
        // Füge einen Event-Listener zum Löschknopf hinzu, um die Konversation zu löschen, wenn er angeklickt wird
        deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Verhindert, dass das Klick-Event auf den Eltern ausgeführt wird
    
        // Referenz auf das nächste 'li'-Element in der Konversationsliste
        var nextConversation = newConversation.nextElementSibling || newConversation.previousElementSibling;
    
        localStorage.removeItem(newObject.dataset.conversationId); // Löscht die Konversation aus dem localStorage
        newConversation.remove(); // Entfernt die Konversation aus der Liste
    
        // Überprüfen, ob es eine nächste Konversation gibt und ob diese ein 'div'-Element mit der Klasse "object" enthält
        if (nextConversation && nextConversation.querySelector('.object')) {
            // Lade die nächste Konversation
            nextConversation.querySelector('.object').click();
        }
        });
    
    
    
        // Füge das 'div' Element und das 'div'-Element mit den Buttons zum 'li' Element hinzu
        newConversation.appendChild(newObject);
        newConversation.appendChild(rightButtons);
        
    
        // Füge das 'li' Element zur Konversationsliste hinzu
        document.querySelector("#conversation-list").appendChild(newConversation);
    
        // Füge einen Event-Listener zum 'div' Element hinzu, um die Konversation zu laden, wenn es angeklickt wird
        newObject.addEventListener('click', function() {
        var id = this.dataset.conversationId;
        loadConversation(id);
        });
    
        // Setze newConversationStarted zurück auf false
        newConversationStarted = false;
    }
  
  
    // Speichere die aktuelle Konversation
    // Anstatt conversationContainer.innerHTML zu speichern, speichern Sie ein Array von Nachrichten
    var messages = Array.from(conversationContainer.children).map(function(messageElement) {
      return {
        type: messageElement.className,
        text: messageElement.innerText
      };
    });
    saveConversation(conversationId, messages);
  
    // Wieder auf Benutzereingabefeld fokussieren
    document.getElementById("user-input").focus();
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

// Konversationen in localStorage speichern
function saveConversation(id, conversation) {
    // Anstatt conversation als String zu speichern, speichern Sie es als JSON
    localStorage.setItem(id, JSON.stringify(conversation));
    // Wieder auf Benutzereingabefeld fokussieren
    document.getElementById("user-input").focus();
}

// Gespeicherte Konversationen abrufen
function loadConversation(id) {
    var conversation = localStorage.getItem(id);
    if (conversation) {
      var messages = JSON.parse(conversation);
      var conversationContainer = document.querySelector("#conversation-container");
      conversationContainer.innerHTML = ''; // Konversationscontainer leeren
      messages.forEach(function(message) {
        var messageElement = document.createElement('div');
        messageElement.className = message.type;
        messageElement.innerText = message.text;
        conversationContainer.appendChild(messageElement);
      });
    } else {
        console.error("Konversation mit ID " + id + " konnte nicht gefunden werden!");
    }
    // Wieder auf Benutzereingabefeld fokussieren
    document.getElementById("user-input").focus();
}
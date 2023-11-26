function uploadFile() {
    var fileInput = document.getElementById("file-upload");
    var updatesSection = document.querySelector(".updates-section");
  
    if (fileInput.files.length > 0) {
      var file = fileInput.files[0];
  
      // Erzeugen Sie eine URL für die hochgeladene Datei
      var fileUrl = URL.createObjectURL(file);
  
      // Erstellen Sie einen Download-Link für die Datei
      var downloadLink = document.createElement("a");
      downloadLink.href = fileUrl;
      downloadLink.download = file.name;
      downloadLink.innerText = "Hochgeladene Datei: " + file.name + " (" + file.size + " bytes)";
      downloadLink.className = "updates-section-list"; // Fügen Sie die gleiche CSS-Klasse wie bei den anderen Buttons hinzu
  
      // Fügen Sie den Download-Link zum Updates-Bereich hinzu
      updatesSection.appendChild(downloadLink);
    }
    // Wieder auf Benutzereingabefeld fokussieren
    document.getElementById("user-input").focus();
  }

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {
  
  try {
    
    var dropbox = "HackMTY Student Resumes";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);
    
    file.setName(form.myName + form.myFile);
    file.setDescription("Uploaded by " + form.myName);
        
    return "Thank you, stay tuned for an email update.";
    
  } catch (error) {
    
    return error.toString();
  }
  
}

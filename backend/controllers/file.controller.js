// Return list of files.
exports.getFilesForAdmin = (req, res) => {
    res.status(200).send("All files.");
};

// Return list of files.
exports.getFiles = (req, res) => {
    res.status(200).send("All files.");
};

// download files
exports.downloadFile = (req, res) => {
    res.status(200).send("File downloaded successfully.");
};

// Create a new file.
// A duplicate file is also treated a new file.
exports.createFile = (req, res) => {
    res.status(200).send("File uploaded successfully.");
};

// Updates an existing file.
// If the file doesn't exist then creates a new file.
exports.updateFile = (req, res) => {
    res.status(200).send("File updated successfully.");
};

// Deletes the file.
exports.deleteFile = (req, res) => {
    res.status(200).send("File deleted successfully.");
};
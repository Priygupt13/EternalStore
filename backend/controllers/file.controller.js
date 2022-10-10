const db = require("../models");
const File = db.file;

const getPublicFileMetadata = (item) => {
    return {
        id: item.id,
        name: item.name
    };
}

// Return list of files.
exports.getFilesForAdmin = (req, res) => {
    File.findAll().then(
        result => {res.status(200).send(result.map(getPublicFileMetadata));}
    );
};

// Return list of files.
exports.getFiles = (req, res) => {
    File.findAll({
        where: { userId: req.userId }
    }).then(
        result => {res.status(200).send(result.map(getPublicFileMetadata));}
    );
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
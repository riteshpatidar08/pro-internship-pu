const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },

  filename: function (req, file, cb) {
    console.log(req.file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({
  storage: storage,
  limit: {
    fileSize: 10 * 1024 * 1024,
  },
});

module.exports = upload;

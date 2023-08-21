const path = require('path');
const rootdir = require('../utilities/path');

exports.get404 = (req, res) => {
    res.status(404).sendFile(path.join(rootdir, 'views', 'error.html'));
};
  
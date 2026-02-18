var parser = require('./parser');

module.exports = {
    parse: function (string) {
        return parser.parse(string);
    }
};

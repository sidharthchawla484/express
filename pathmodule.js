const path = require("path");

console.log(path.basename('/foo/bar/baz/asdf/myfile.html'));
console.log(path.dirname('/foo/bar/baz/asdf/myfile.html'))
// Returns: 'quux.html'

//path.basename('/foo/bar/baz/asdf/myfile.html', '.html');
// Returns: 'quux')
console.log(path.extname(__filename))
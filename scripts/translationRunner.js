var fs = require('fs');
var glob = require('glob');
var parser = require('typescript-react-intl').default;

function runner(pattern, cb) {
  var results = [];
  pattern = pattern || 'src/**/*.@(tsx|ts)';
  glob(pattern, function(err, files) {
    if (err) {
      throw new Error(err);
    }
    files.forEach((f) => {
      var contents = fs.readFileSync(f).toString();
      var res = parser(contents);
      results = results.concat(res);
    });

    cb && cb(results);
  });
}

runner(null, function(res) {
  var locale = {};

  res.forEach((r) => {
    locale[r.id] = r.defaultMessage;
  });

  // save file to disk。you can save as a json file,just change the ext and contents as you want.
  fs.writeFileSync(`src/translations/en.json`, `${JSON.stringify(locale, null, 2)}\r`);
});

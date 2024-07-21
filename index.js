const functions = require('@google-cloud/functions-framework');

functions.http('gcp', (req, res) => {
  res.send(`Hello ${req.query.name || req.body.name || 'My World'}!`);
});

const fs        = require('fs'),
      showdown  = require('showdown');

showdown.setOption('output',              'index.html');
showdown.setOption('ghCompatibleHeaderId', true);

const converter = new showdown.Converter(),
      text      = fs.readFileSync('./index.md').toString(),
      output    = converter.makeHtml(text);

const html = `
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
  <header>
    <h1><strong>Code Selectors</strong> - convention for referencing parts of code</h1>
  </header>
  <main>
    <div class="markdown-body">
      ${output}
    </div>
  </main>
  <footer>
    <a class="license-badge" href="http://creativecommons.org/licenses/by-sa/3.0/">
      <img alt="Creative Commons License" class="license-badge" src="https://jsdoc.app/images/cc-by-sa.svg" width="80" height="15">
    </a>
    <br> Copyright © 2023 the
    <a href="https://github.com/jonathanconway/htmldoc/contributors">contributors</a> to the HTMLDoc documentation project.
    <br> This website is <a href="https://github.com/jonathanconway/htmldoc">open source</a> and is licensed under the <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
        Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.
  </footer>
</body>
</html>
`;

fs.writeFileSync('./index.html', html);
const fs        = require('fs'),
      showdown  = require('showdown');

showdown.setOption('output',              'index.html');
showdown.setOption('ghCompatibleHeaderId', true);

const converter = new showdown.Converter(),
      text      = fs.readFileSync('./README.md').toString(),
      output    = converter.makeHtml(text);

const html = `
<!DOCTYPE HTML>
<html>
<head>
<title>Code Selectors - convention for referencing parts of code</title>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="index.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/assets/site.webmanifest">
<link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
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
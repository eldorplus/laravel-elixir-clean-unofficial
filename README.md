# laravel-elixir-clean-unofficial

Clean built files or folders.

## Install

```sh
$ npm install laravel-elixir-clean-unofficial --save-dev
```

## Usage

Clean folders: `public/css`, `public/js`, `public/build`.

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-clean-unofficial');

elixir(function(mix) {
  mix.clean()
     .less('app.less')
     .browserify('app.js');
});
```

Then run tasks:

```bash
gulp
```

Or just clean folders only:

```bash
gulp clean
```

## License

MIT

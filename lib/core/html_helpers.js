function require_javascript_file(libraryName) {
  document.write('<script type="text/javascript" src="' + libraryName + '"><\/script>');
}

function require_javascript_lib(libraryName) {
  document.write('<script type="text/javascript" src="lib/' + libraryName + '.js"><\/script>');
}

function require_javascript_files() {
  for (a in arguments) {
    require_javascript_file(arguments[a]);
  }
}

function require_javascript_libs() {
  for (a in arguments) {
    require_javascript_lib(arguments[a]);
  }
}

function load_akihabara(libs) {
  if (!libs) { libs = ['gbox', 'iphopad', 'trigo', 'toys', 'help', 'tool', 'gamecycle'] }
}
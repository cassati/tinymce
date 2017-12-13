/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import CharMapPlugin from 'tinymce/plugins/charmap/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

CharMapPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "charmap code",
  toolbar: "charmap code",
  height: 600
});
/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import ListPlugin from 'tinymce/plugins/lists/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

ListPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "lists code",
  toolbar: "numlist bullist | outdent indent | code",
  height: 600
});
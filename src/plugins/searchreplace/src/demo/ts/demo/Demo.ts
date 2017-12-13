/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import SearchReplacePlugin from 'tinymce/plugins/searchreplace/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

SearchReplacePlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "searchreplace code",
  toolbar: "searchreplace code",
  height: 600
});
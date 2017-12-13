/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import AutoResizePlugin from 'tinymce/plugins/autoresize/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

AutoResizePlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "autoresize code",
  toolbar: "autoresize code",
  height: 600
});
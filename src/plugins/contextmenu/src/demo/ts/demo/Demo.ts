/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import ContextMenuPlugin from 'tinymce/plugins/contextmenu/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

ContextMenuPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "contextmenu code",
  toolbar: "contextmenu code",
  height: 600,
  contextmenu: 'code'
});
/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import ColorPickerPlugin from 'tinymce/plugins/colorpicker/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

ColorPickerPlugin();

var elm: any = document.querySelector('.tinymce');
elm.value = '<table><tbody><tr><td>One</td></tr></tbody></table>';

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "table colorpicker code",
  toolbar: "table code",
  height: 600
});
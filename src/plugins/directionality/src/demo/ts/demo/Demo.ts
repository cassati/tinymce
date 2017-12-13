/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import DirectionalityPlugin from 'tinymce/plugins/directionality/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

DirectionalityPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "directionality code",
  toolbar: "ltr rtl code",
  height: 600
});
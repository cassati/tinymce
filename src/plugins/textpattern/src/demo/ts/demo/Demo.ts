/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import TextPatternPlugin from 'tinymce/plugins/textpattern/Plugin';

/*eslint no-console:0 */

declare let tinymce: any;

TextPatternPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "textpattern code",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  toolbar: "code",
  height: 600
});
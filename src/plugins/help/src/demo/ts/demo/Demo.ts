/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import HelpPlugin from 'tinymce/plugins/help/Plugin';
import PluginManager from 'tinymce/core/PluginManager';

/*eslint no-console:0 */

declare let tinymce: any;

HelpPlugin();

PluginManager.urls.help = '../../../dist/help';

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../skins/lightgray/dist/lightgray",
  plugins: "help link table paste code emoticons fullpage print fullscreen advlist anchor bbcode colorpicker textcolor",
  toolbar: "help",
  height: 600
});
/**
 * Plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Cell from '@ephox/katamari/lib/main/ts/ephox/katamari/api/Cell';
import PluginManager from 'tinymce/core/PluginManager';
import Commands from './api/Commands';
import Resize from './core/Resize';

/**
 * This class contains all core logic for the autoresize plugin.
 *
 * @class tinymce.autoresize.Plugin
 * @private
 */

PluginManager.add('autoresize', function (editor) {
  if (!editor.inline) {
    var oldSize = Cell(0);
    Commands.register(editor, oldSize);
    Resize.setup(editor, oldSize);
  }
});

export default <any> function () {};
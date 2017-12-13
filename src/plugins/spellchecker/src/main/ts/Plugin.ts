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
import DetectProPlugin from './alien/DetectProPlugin';
import Api from './api/Api';
import Commands from './api/Commands';
import Settings from './api/Settings';
import Buttons from './ui/Buttons';
import SuggestionsMenu from './ui/SuggestionsMenu';

PluginManager.add('spellchecker', function (editor, pluginUrl) {
  if (DetectProPlugin.hasProPlugin(editor) === false) {
    var startedState = Cell(false);
    var currentLanguageState = Cell(Settings.getLanguage(editor));
    var textMatcherState = Cell(null);
    var lastSuggestionsState = Cell({});

    Buttons.register(editor, pluginUrl, startedState, textMatcherState, currentLanguageState, lastSuggestionsState);
    SuggestionsMenu.setup(editor, pluginUrl, lastSuggestionsState, startedState, textMatcherState);
    Commands.register(editor, pluginUrl, startedState, textMatcherState, lastSuggestionsState, currentLanguageState);

    return Api.get(editor, startedState, lastSuggestionsState, textMatcherState, pluginUrl);
  }
});

export default <any> function () { };
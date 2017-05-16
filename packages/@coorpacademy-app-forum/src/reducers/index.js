import {createReducers} from '@coorpacademy/app-core';
import api from './api';
import ui from './ui';

export default ({lang} = {}) => createReducers(lang, {api, ui});

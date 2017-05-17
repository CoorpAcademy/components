import {createReducers} from '@coorpacademy/app-core';
import ui from './ui';
import data from './data';

export default ({lang} = {}) => createReducers(lang, {ui, data});

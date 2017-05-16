import {createReducers} from '@coorpacademy/app-core';
import ui from './ui';

export default ({lang} = {}) => createReducers(lang, {ui});

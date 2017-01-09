import {createReducers} from '@coorpacademy/appster';
import api from './api';
import ui from './ui';

export default ({lang} = {}) => createReducers(lang, {api, ui});

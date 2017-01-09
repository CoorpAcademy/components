import {createReducers} from '@coorpacademy/appster';
import ui from './ui';

export default ({lang} = {}) => createReducers(lang, {ui});

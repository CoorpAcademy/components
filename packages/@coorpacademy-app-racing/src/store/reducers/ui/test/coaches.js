import test from 'ava';
import reducer from '../coaches';
import {UI_UPDATE_COACHES} from '../../../actions/ui/coaches';
import macro from '../../test/helpers/macro';

test(
  'should update coaches data',
  macro,
  reducer,
  {},
  {
    type: UI_UPDATE_COACHES,
    payload: {
      chatStarted: false,
      coachForDiscipline: [
        {
          displayName: 'Benjamin Leiba0',
          user_id: '00000000000000000000035f',
          avatar: null,
          language: 'fr',
          population: 'coorpacademy',
          isCoach: true,
          isSuperCoach: true,
          disciplines: []
        }
      ],
      currentCoachId: '',
      currentChatRoomId: '',
      currentDiscipline: {
        ref: '01',
        universalRef: 'dis_xxx01',
        name: 'La recherche en ligne'
      },
      currentContentRef: '1.B'
    }
  },
  {
    availableCoaches: 1
  }
);

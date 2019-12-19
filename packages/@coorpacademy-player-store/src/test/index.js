import test from 'ava';
import {keys} from 'lodash/fp';
import * as api from '..';

// this test is somehow a snapshot;
// use this to update the test according to your changes: uncomment the next line
// console.dir({k: keys(api)}, {depth: 10, maxArrayLength: null, colors: true});
// and launch this specific test with `NODE_ENV=test npx ava src/test/index.js`

test('it should expose all api', t => {
  t.deepEqual(keys(api), [
    '__esModule',
    'selectClue',
    'getClue',
    'CONTENT_TYPE',
    'ENGINES',
    'middlewares',
    'reducers',
    'getChoices',
    'getChapterId',
    'getQuestionType',
    'getCurrentProgressionId',
    'getProgression',
    'getCurrentProgression',
    'getCurrentEngine',
    'isCurrentEngineMicrolearning',
    'isCurrentEngineLearner',
    'getAnswers',
    'getAnswerValues',
    'getSlide',
    'getCurrentSlide',
    'getChapter',
    'getLevel',
    'getDiscipline',
    'getProgressionContent',
    'getContent',
    'getCurrentContent',
    'getContentInfo',
    'getNbSlides',
    'getStepContent',
    'getPrevStepContent',
    'getChapterIdBySlide',
    'getCurrentChapterId',
    'getCurrentChapter',
    'isContentAdaptive',
    'hasViewedAResourceAtThisStep',
    'getEngine',
    'getEngineConfig',
    'getPreviousSlide',
    'getExitNode',
    'getCurrentExitNode',
    'getCorrection',
    'getCurrentCorrection',
    'isCommentSent',
    'extractClue',
    'getCurrentClue',
    'getRoute',
    'getRecommendations',
    'getNextContent',
    'getStartRank',
    'getEndRank',
    'getBestScore',
    'getQuestionMedia',
    'getResourceToPlay',
    'getLives',
    'getCoaches',
    'hasSeenLesson',
    'getVideoUri',
    'getVideoTracks',
    'MEDIA_VIEWED_ANALYTICS_REQUEST',
    'MEDIA_VIEWED_ANALYTICS_SUCCESS',
    'MEDIA_VIEWED_ANALYTICS_FAILURE',
    'sendMediaViewed',
    'PROGRESSION_UPDATED_FAILURE',
    'PROGRESSION_UPDATED_ON_MOVE',
    'PROGRESSION_UPDATED_ON_NODE',
    'PROGRESSION_FINISHED',
    'progressionUpdated',
    'ANSWER_FETCH_REQUEST',
    'ANSWER_FETCH_SUCCESS',
    'ANSWER_FETCH_FAILURE',
    'fetchAnswer',
    'CLUE_FETCH_REQUEST',
    'CLUE_FETCH_SUCCESS',
    'CLUE_FETCH_FAILURE',
    'fetchClue',
    'SEND_POST_COMMENT_REQUEST',
    'SEND_POST_COMMENT_SUCCESS',
    'SEND_POST_COMMENT_FAILURE',
    'postComment',
    'CONTENT_FETCH_REQUEST',
    'CONTENT_FETCH_SUCCESS',
    'CONTENT_FETCH_FAILURE',
    'fetchContent',
    'CONTENT_INFO_FETCH_REQUEST',
    'CONTENT_INFO_FETCH_SUCCESS',
    'CONTENT_INFO_FETCH_FAILURE',
    'fetchContentInfo',
    'fetchSlideChapter',
    'EXIT_NODE_FETCH_REQUEST',
    'EXIT_NODE_FETCH_SUCCESS',
    'EXIT_NODE_FETCH_FAILURE',
    'fetchExitNode',
    'NEXT_CONTENT_FETCH_REQUEST',
    'NEXT_CONTENT_FETCH_SUCCESS',
    'NEXT_CONTENT_FETCH_FAILURE',
    'fetchNext',
    'PROGRESSION_CREATE_REQUEST',
    'PROGRESSION_CREATE_SUCCESS',
    'PROGRESSION_CREATE_FAILURE',
    'createProgression',
    'PROGRESSION_FETCH_REQUEST',
    'PROGRESSION_FETCH_SUCCESS',
    'PROGRESSION_FETCH_FAILURE',
    'fetchProgression',
    'ENGINE_CONFIG_FETCH_REQUEST',
    'ENGINE_CONFIG_FETCH_SUCCESS',
    'ENGINE_CONFIG_FETCH_FAILURE',
    'fetchEngineConfig',
    'PROGRESSION_CREATE_ANSWER_REQUEST',
    'PROGRESSION_CREATE_ANSWER_SUCCESS',
    'PROGRESSION_CREATE_ANSWER_FAILURE',
    'createAnswer',
    'PROGRESSION_REQUEST_CLUE_REQUEST',
    'PROGRESSION_REQUEST_CLUE_SUCCESS',
    'PROGRESSION_REQUEST_CLUE_FAILURE',
    'requestClue',
    'PROGRESSION_EXTRALIFEREFUSED_REQUEST',
    'PROGRESSION_EXTRALIFEREFUSED_SUCCESS',
    'PROGRESSION_EXTRALIFEREFUSED_FAILURE',
    'registerRefuseExtraLife',
    'PROGRESSION_EXTRALIFEACCEPTED_REQUEST',
    'PROGRESSION_EXTRALIFEACCEPTED_SUCCESS',
    'PROGRESSION_EXTRALIFEACCEPTED_FAILURE',
    'registerAcceptExtraLife',
    'PROGRESSION_FETCH_BESTOF_REQUEST',
    'PROGRESSION_FETCH_BESTOF_SUCCESS',
    'PROGRESSION_FETCH_BESTOF_FAILURE',
    'fetchBestProgression',
    'PROGRESSION_RESOURCE_VIEWED_REQUEST',
    'PROGRESSION_RESOURCE_VIEWED_SUCCESS',
    'PROGRESSION_RESOURCE_VIEWED_FAILURE',
    'markResourceAsViewed',
    'RANK_FETCH_START_REQUEST',
    'RANK_FETCH_START_SUCCESS',
    'RANK_FETCH_START_FAILURE',
    'RANK_FETCH_END_REQUEST',
    'RANK_FETCH_END_SUCCESS',
    'RANK_FETCH_END_FAILURE',
    'fetchStartRank',
    'fetchEndRank',
    'RECO_FETCH_REQUEST',
    'RECO_FETCH_SUCCESS',
    'RECO_FETCH_FAILURE',
    'fetchRecommendations',
    'VIDEOS_FETCH_URI_REQUEST',
    'VIDEOS_FETCH_URI_SUCCESS',
    'VIDEOS_FETCH_URI_FAILURE',
    'FETCH_VIDEOS_TRACKS_REQUEST',
    'FETCH_VIDEOS_TRACKS_SUCCESS',
    'FETCH_VIDEOS_TRACKS_FAILURE',
    'fetchVideoUri',
    'fetchVideoTracks',
    'EDIT_ANSWER_ERROR',
    'VALIDATE_ERROR',
    'ANSWER_EDIT',
    'editAnswer',
    'validateAnswer',
    'START_CHAT_REQUEST',
    'START_CHAT_SUCCESS',
    'START_CHAT_FAILURE',
    'startChat',
    'UI_UPDATE_COACHES',
    'updateCoaches',
    'UI_EDIT_COMMENT',
    'editComment',
    'UI_TOGGLE_ACCORDION',
    'UI_SELECT_RESOURCE_IN_POPIN',
    'ACCORDION_LESSON',
    'ACCORDION_KLF',
    'ACCORDION_TIPS',
    'toggleAccordion',
    'selectResource',
    'refuseExtraLife',
    'acceptExtraLife',
    'LOCATION_RETRY_REQUEST',
    'LOCATION_RETRY_SUCCESS',
    'LOCATION_RETRY_FAILURE',
    'retry',
    'LOCATION_EXIT_REQUEST',
    'LOCATION_EXIT_SUCCESS',
    'LOCATION_EXIT_FAILURE',
    'exit',
    'LOCATION_BACK_REQUEST',
    'LOCATION_BACK_SUCCESS',
    'LOCATION_BACK_FAILURE',
    'back',
    'LOCATION_SEE_COMMENT_REQUEST',
    'LOCATION_SEE_COMMENT_SUCCESS',
    'LOCATION_SEE_COMMENT_FAILURE',
    'seeComment',
    'LOCATION_NEXT_CONTENT_REQUEST',
    'LOCATION_NEXT_CONTENT_SUCCESS',
    'LOCATION_NEXT_CONTENT_FAILURE',
    'nextLevel',
    'LOCATION_OPEN_RECOMMENDATION_REQUEST',
    'LOCATION_OPEN_RECOMMENDATION_SUCCESS',
    'LOCATION_OPEN_RECOMMENDATION_FAILURE',
    'openRecommendation',
    'UI_PROGRESSION_ACTION_TYPES',
    'unselectProgression',
    'selectProgression',
    'openAssistance',
    'UI_SELECT_ROUTE',
    'selectRoute',
    'UI_VIDEO_ERROR',
    'UI_VIDEO_PAUSE',
    'UI_VIDEO_RESUME',
    'UI_VIDEO_ENDED',
    'play',
    'pause',
    'resume',
    'ended'
  ]);
});

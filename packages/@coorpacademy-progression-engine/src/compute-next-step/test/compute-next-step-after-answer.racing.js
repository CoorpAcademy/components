// @flow
import test from "ava";
import filter from "lodash/fp/filter";
import { getConfig } from "../../config";
import type {
  AvailableContent,
  Config,
  Content,
  RacingUser,
  State
} from "../../types";
import { computeNextStepAfterRacingAnswer, type PartialAnswerAction } from "..";
import allSlides from "./fixtures/slides";
import getSlide from "./helpers/get-slide";
import { stateBeforeGettingNextContent } from "./fixtures/states";

const config: Config = getConfig({ ref: "racing", version: "1" });
const availableContent: AvailableContent = [
  {
    ref: "1.A1",
    slides: filter({ chapter_id: "1.A1" }, allSlides),
    rules: null
  }
];

const _state: RacingUser = {
  id: "user_1",
  team: 0,
  isCorrect: true,
  questionNum: 1,
  nextContent: {
    type: "slide",
    ref: "1.A1.1"
  },
  content: undefined,
  slides: ["1.A1.1", "1.A1.2", "1.A1.3", "1.A1.4", "1.A1.5", "1.A1.6"],
  allAnswers: []
};

test("should return next slide when a user provides an answer", t => {
  const author = "user_1";
  const state: RacingUser = Object.freeze(_state);

  if (!state.nextContent) {
    throw new Error();
  }

  const content: Content = state.nextContent;

  const currentSlide = getSlide(allSlides, content);
  const partialAction: PartialAnswerAction = {
    type: "answer",
    authors: [author],
    payload: {
      answer: [],
      content,
      godMode: true
    }
  };

  const result = computeNextStepAfterRacingAnswer(
    config,
    state,
    availableContent,
    currentSlide,
    partialAction
  );

  t.deepEqual(result, {
    type: "answer",
    authors: [author],
    payload: {
      answer: [],
      content,
      godMode: true,
      nextContent: { ref: "1.A1.7", type: "slide" },
      instructions: null,
      isCorrect: true
    }
  });
});

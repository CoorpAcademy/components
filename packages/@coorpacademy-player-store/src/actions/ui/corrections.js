// @flow strict

export const UI_TOGGLE_ACCORDION = '@@ui/TOGGLE_ACCORDION';
export const UI_SELECT_RESOURCE_IN_POPIN = '@@ui/SELECT_RESOURCE_IN_POPIN';

export const ACCORDION_LESSON = 0;
export const ACCORDION_KLF = 1;
export const ACCORDION_TIPS = 2;

type AccordionId = 0 | 1 | 2;

type ToggleAccordionAction = {
  type: string, // '@@ui/TOGGLE_ACCORDION',
  payload: {
    id: AccordionId
  }
};

type SelectResourceAction = {
  type: string, // | '@@ui/SELECT_RESOURCE_IN_POPIN',
  payload: {
    id: string
  }
};

export const toggleAccordion = (id: AccordionId): ToggleAccordionAction => ({
  type: UI_TOGGLE_ACCORDION,
  payload: {
    id
  }
});

export const selectResource = (id: string): SelectResourceAction => ({
  type: UI_SELECT_RESOURCE_IN_POPIN,
  payload: {
    id
  }
});

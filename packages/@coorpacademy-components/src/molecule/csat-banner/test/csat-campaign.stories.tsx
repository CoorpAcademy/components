import React from 'react';
import CSATBanner from '..';
import fixture from './fixtures/default';

export default {
  title: 'Molecule/CSATBanner',
  component: CSATBanner,
  parameters: {layout: 'padded', chromatic: {viewports: [1280]}}
};

// Example props supplied by the consuming application; no production translations live here.
const frenchProps = {
  ...fixture.props,
  title: 'Votre avis compte',
  message:
    'Aidez-nous à améliorer votre expérience avec Coorpacademy | Go1. Le questionnaire prend environ 2 minutes.',
  campaign: {
    ...fixture.props.campaign,
    language: 'fr',
    status: 'Enquête en cours',
    until: 'Jusqu’au'
  },
  cta: {
    ...fixture.props.cta,
    label: 'Donner mon avis',
    ariaLabel: 'Donner mon avis — S’ouvre dans un nouvel onglet'
  }
};

export const French = (args: any) => <CSATBanner {...args} />;
French.args = frenchProps;
export const English = (args: any) => <CSATBanner {...args} />;
English.args = fixture.props;
export const FrenchMobile = (args: any) => <CSATBanner {...args} />;
FrenchMobile.args = frenchProps;
FrenchMobile.parameters = {chromatic: {viewports: [390]}};
export const EnglishMobile = (args: any) => <CSATBanner {...args} />;
EnglishMobile.args = fixture.props;
EnglishMobile.parameters = {chromatic: {viewports: [390]}};

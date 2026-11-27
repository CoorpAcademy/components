import React from 'react';
import Banner from '..';
import fixture from './fixtures/survey';

export default {
  title: 'Molecule/Banner/CSAT campaign',
  component: Banner,
  parameters: {layout: 'padded', chromatic: {viewports: [1280]}}
};

// Example props supplied by the consuming application; no production translations live here.
const frenchProps = {
  ...fixture.props,
  title: 'Votre avis compte',
  message:
    'Aidez-nous à améliorer votre expérience avec Coorpacademy | Go1. Le questionnaire prend environ 3 minutes.',
  campaign: {
    ...fixture.props.campaign,
    language: 'fr',
    status: 'Enquête en cours',
    until: 'Jusqu’au'
  },
  cta: [
    {
      ...fixture.props.cta[0],
      label: 'Donner mon avis',
      ariaLabel: 'Donner mon avis — S’ouvre dans un nouvel onglet'
    }
  ]
};

export const French = (args: any) => <Banner {...args} />;
French.args = frenchProps;
export const English = (args: any) => <Banner {...args} />;
English.args = fixture.props;
export const FrenchMobile = (args: any) => <Banner {...args} />;
FrenchMobile.args = frenchProps;
FrenchMobile.parameters = {chromatic: {viewports: [390]}};
export const EnglishMobile = (args: any) => <Banner {...args} />;
EnglishMobile.args = fixture.props;
EnglishMobile.parameters = {chromatic: {viewports: [390]}};

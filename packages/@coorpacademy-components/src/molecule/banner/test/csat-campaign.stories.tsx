import React from 'react';
import Banner from '..';
import french from '../../../../locales/fr/global';
import english from '../../../../locales/en/global';
import fixture from './fixtures/survey';

export default {
  title: 'Molecule/Banner/CSAT campaign',
  component: Banner,
  parameters: {layout: 'padded', chromatic: {viewports: [1280]}}
};

const propsFor = (language: 'fr' | 'en') => {
  const copy = language === 'fr' ? french.csat : english.csat;
  return {
    ...fixture.props,
    title: copy.title,
    message: copy.description,
    campaign: {...fixture.props.campaign, language, status: copy.status, until: copy.until},
    cta: [{...fixture.props.cta[0], label: copy.cta, ariaLabel: `${copy.cta} — ${copy.newTab}`}]
  };
};

export const French = (args: any) => <Banner {...args} />;
French.args = propsFor('fr');
export const English = (args: any) => <Banner {...args} />;
English.args = propsFor('en');
export const FrenchMobile = (args: any) => <Banner {...args} />;
FrenchMobile.args = propsFor('fr');
FrenchMobile.parameters = {chromatic: {viewports: [390]}};
export const EnglishMobile = (args: any) => <Banner {...args} />;
EnglishMobile.args = propsFor('en');
EnglishMobile.parameters = {chromatic: {viewports: [390]}};

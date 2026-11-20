import React, {useState} from 'react';
import BrandUpdate from '..';
import warning, {labels} from './fixtures/assignment-edition-audience-access';
import selected from './fixtures/assignment-edition-audience-access-selected';
import restored from './fixtures/assignment-edition-audience-access-restored';

export default {
  title: 'Template/BackOffice/BrandUpdate/Assignment audience access',
  component: BrandUpdate,
  parameters: {layout: 'fullscreen', chromatic: {viewports: [1440]}}
};

export const UnavailableContents = () => <BrandUpdate {...warning.props} />;
export const UnavailableContentsSelected = () => <BrandUpdate {...selected.props} />;
export const AccessRestored = () => <BrandUpdate {...restored.props} />;

const messages: Record<string, string> = labels;

const label = (key: string, count: number) =>
  (messages[count === 1 ? key : `${key}_plural`] || messages[key]).replace(
    '{{count}}',
    String(count)
  );

export const InteractiveReview = () => {
  const [accessRestored, setAccessRestored] = useState(false);
  const [removed, setRemoved] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [focusRequest, setFocusRequest] = useState(0);
  const [query, setQuery] = useState('');
  const source = accessRestored ? restored.props : warning.props;
  const rows = source.content.contents.list.items.filter(item => !removed.includes(item.ref));
  const unavailable = rows.filter(item => item.hidden).map(item => item.ref);
  const learner = warning.props.content.audience.individuals.selected[0];
  const hasUnavailable = unavailable.length > 0;
  const select = (ref: string, value: boolean) =>
    setChecked(previous =>
      value ? [...new Set([...previous, ref])] : previous.filter(id => id !== ref)
    );
  const contents = {
    ...source.content.contents,
    warning: hasUnavailable ? label('warning', unavailable.length) : undefined,
    checkboxWithTitle:
      rows.length > 0
        ? {
            ...source.content.contents.checkboxWithTitle,
            title: label('items', rows.length),
            checked: rows.every(item => checked.includes(item.ref)),
            onChange: (value: boolean) => setChecked(value ? rows.map(item => item.ref) : [])
          }
        : undefined,
    actionButtons:
      rows.length > 0
        ? [
            {
              ...source.content.contents.actionButtons[0],
              disabled: !rows.some(item => checked.includes(item.ref)),
              onClick: () => {
                setRemoved(previous => [...previous, ...checked]);
                setChecked([]);
              }
            },
            ...(hasUnavailable
              ? [
                  {
                    ...warning.props.content.contents.actionButtons[1],
                    label: label('select', unavailable.length),
                    onClick: () => setChecked(unavailable)
                  }
                ]
              : [])
          ]
        : undefined,
    list: {
      items: rows.map(item => ({
        ...item,
        checkbox: {
          ...item.checkbox,
          checked: checked.includes(item.ref),
          onChange: (value: boolean) => select(item.ref, value)
        },
        deleteButton: {
          ...item.deleteButton,
          onClick: () => setRemoved(previous => [...previous, item.ref])
        }
      })),
      emptyResult:
        rows.length > 0 ? undefined : {title: labels.noneTitle, description: labels.noneDescription}
    }
  };
  return (
    <BrandUpdate
      {...source}
      header={{
        ...source.header,
        warning: hasUnavailable
          ? {
              ...warning.props.header.warning,
              label: label('header', unavailable.length),
              onClick: () => setFocusRequest(previous => previous + 1)
            }
          : undefined,
        actionButtons: source.header.actionButtons.map((button, index) => ({
          ...button,
          disabled: index === 1 && (hasUnavailable || rows.length === 0)
        }))
      }}
      content={{
        ...source.content,
        focusSection: focusRequest ? 'contents' : undefined,
        focusRequestKey: String(focusRequest),
        audience: {
          ...source.content.audience,
          individuals: {
            ...source.content.audience.individuals,
            value: query,
            suggestions: accessRestored && query ? [learner] : [],
            onSearch: setQuery,
            onRemove: () => setAccessRestored(true),
            onAdd: () => {
              setAccessRestored(false);
              setQuery('');
            }
          }
        },
        contents
      }}
    />
  );
};

import React, {useState, useCallback} from 'react';
import Range from '../../atom/range';
import Title from '../../atom/title';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {FilterRangeProps} from './prop-types';

const CLEAR_BUTTON_STYLE = {fontWeight: 'normal', padding: 0, width: 'auto'};

const FilterRange = (props: FilterRangeProps, context: WebContextValues) => {
  const {title, titleAriaLabel, onClear, options} = props;
  const translate = GetTranslateFromContext(context);
  const {min, max, step, value, minLabel, maxLabel, onChange, theme} = options;

  const [isDragging, setIsDragging] = useState(false);
  const [pendingValue, setPendingValue] = useState<number[] | null>(null);

  const handleRangeChange = useCallback(
    (newValue: number[]) => {
      if (isDragging) {
        setPendingValue(newValue);
      } else {
        onChange(newValue);
      }
    },
    [isDragging, onChange]
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (pendingValue) {
      onChange(pendingValue);
      setPendingValue(null);
    }
  }, [pendingValue, onChange]);

  const hasValue = value && value.length > 0 && (value[0] !== min || value[1] !== max);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Title
          title={title}
          type="form-group"
          titleSize="standard-light-weight"
          ariaLabel={titleAriaLabel}
        />
        {hasValue ? (
          <ButtonLink
            customStyle={CLEAR_BUTTON_STYLE}
            label={translate('clear')}
            type="text"
            data-name="range-clear-button"
            aria-label="range clear button"
            onClick={onClear}
            hoverColor={COLORS.primary_600}
          />
        ) : null}
      </div>
      <div
        className={style.rangeContainer}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <Range
          multi
          theme={theme || 'mooc'}
          min={min}
          max={max}
          step={step}
          value={pendingValue || value}
          minLabel={minLabel}
          maxLabel={maxLabel}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
};

FilterRange.propTypes = propTypes;

FilterRange.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default FilterRange;

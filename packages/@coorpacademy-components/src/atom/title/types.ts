export type TitleProps = {
  title: string;
  subtitle: string;
  type: 'page' | 'form-group';
  'data-name'?: string;
  titleSize:
    | 'xl-strong'
    | 'standard'
    | 'standard-light-weight'
    | 'medium'
    | 'small'
    | 'smallAndLight';
  subtitleSize: 'standard' | 'medium' | 'small-without-margin' | 'small' | 'extra-small';
  required: boolean;
};

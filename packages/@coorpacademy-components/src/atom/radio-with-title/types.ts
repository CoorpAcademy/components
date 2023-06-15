export type RadioWithTitleProps = {
  title: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  'aria-label': string;
  'data-name': string;
};

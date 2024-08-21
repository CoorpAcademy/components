export type CardsListProps = {
  contentType: string;
  dataName: string;
  title: string | React.ReactNode;
  showMore: string;
  cards: Record<string, unknown>[];
  customStyle: Record<string, unknown>;
  onScroll: (skip: number, limit: number) => void;
  onShowMore: () => void;
  'arrows-aria-label': {
    showMoreOnLeftAriaLabel: string;
    showMoreOnRightAriaLabel: string;
  };
  type: string;
  key: string;
};

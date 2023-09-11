export type CardsListProps = {
  contentType: string;
  dataName: string;
  title: string;
  showMore: string;
  cards: Record<string, unknown>[];
  onScroll: (skip: number, limit: number) => void;
  onShowMore: () => void;
  'arrows-aria-label': {
    showMoreOnLeftAriaLabel: string;
    showMoreOnRightAriaLabel: string;
  };
};

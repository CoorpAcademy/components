export type BulkEmptyDashboardType = {
  mainText: string;
  subText: string;
  imageUrl: string;
  buttonLink: {
    type: string;
    label: string;
    ariaLabel: string;
    dataName: string;
    icon: {
      position: string;
      type: string;
    };
  };
  onClick: () => void;
};

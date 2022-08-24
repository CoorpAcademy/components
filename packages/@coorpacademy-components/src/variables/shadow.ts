export type BoxStyle = {
  shadowColor: string;
  shadowOpacity: number;
  shadowOffset: {width: number; height: number};
  shadowRadius: number;
  elevation: number;
  backgroundColor: string;
};

export const BOX_STYLE: BoxStyle = {
  shadowColor: '#14171A',
  shadowOpacity: 0.15,
  shadowOffset: {width: 0, height: 0},
  shadowRadius: 8,
  elevation: 4,
  backgroundColor: 'rgba(0,0,0,0.015)' // fix shadow not visible bug on android
};

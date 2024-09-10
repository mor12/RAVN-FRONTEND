export enum PointEstimate {
  EIGHT = 'EIGHT',
  FOUR = 'FOUR',
  ONE = 'ONE',
  TWO = 'TWO',
  ZERO = 'ZERO',
}

type TypeKey = keyof typeof PointEstimate;

export type PointEstimateValue = {
  [key in TypeKey]: string;
};

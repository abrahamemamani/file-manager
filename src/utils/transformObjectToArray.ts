import * as R from "ramda";

export const transformObjectToArray = R.compose(
  R.map(([id, props]) => ({ id, ...props! })),
  R.toPairs
);

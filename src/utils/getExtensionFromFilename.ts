import * as R from "ramda";
const regex = /(?:\.([^.]+))?$/;

export const getExtensionFromFilename = (str: string): string => {
  const regExpArray = regex.exec(str);
  return R.isNotNil(regExpArray) ? regExpArray[1] : "";
};

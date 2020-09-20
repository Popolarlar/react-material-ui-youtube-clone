// Potential Usage
// import * as textService from '../../utils/format/text';
// OR import * as textService from '@format/text';
// const trimedDesc = textService.TrimDesc(desc, 250);

export const TrimDesc = (str, limit) => {
  return str.length <= limit ? str : `${str.substring(0, limit)}...`;
};

import replaceWhere from './replaceWhere';

export default function replaceById(array, id, replaceFn) {
  return replaceWhere(array, (v) => v.id === id, replaceFn);
}

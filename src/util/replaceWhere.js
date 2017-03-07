
export default function replaceWhere(array, predicate, functor) {
  return array.map((v, i, a) => predicate(v, i, a) ? functor(v, i, a) : v);
}

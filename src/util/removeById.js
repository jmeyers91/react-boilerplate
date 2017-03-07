
export default function removeById(array, id) {
  return array.filter((v) => v.id !== id);
}

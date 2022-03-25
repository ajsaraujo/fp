type Item = number | Item[];

export function sumNestedLists(list: Item[]): number {
  return list.reduce((sum: number, item: Item) => {
    if (Array.isArray(item)) {
      return sum + sumNestedLists(item);
    } else {
      return sum + (item as number);
    }
  }, 0) as number;
}

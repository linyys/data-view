export const useExtract = (data: { label: string; values: object[]; }[], filters: string) => {
  let extract: { label: string; values: number[]; }[] = [];
  data.filter((item) => {
    extract.push({
      label: item.label,
      values: item.values.map((value: { [x: string]: any }) => {
        return value[filters]
      })
    });
  });
  return extract;
};

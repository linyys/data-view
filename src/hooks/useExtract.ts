export const useExtract = (data: object[], filters: string[]) => {
  let extract: { [x: string]: number[] } = {};
  const onlyOne = filters.length === 1
  filters.forEach(item => {
    extract[item] = []
  })
  data.filter((item: { [x: string]: any }) => {
    if (onlyOne) {
      extract[filters[0]].push(item[filters[0]])
      return
    }
    for (let key in item) {
      if (filters.includes(key)) {
        extract[key].push(item[key])
      }
    }
  });
  return extract;
};

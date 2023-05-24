function solution(n, lost, reserve) {
  let result = 0;

  const noCloth = lost.sort((a, b) => a - b).filter((lost) => !reserve.includes(lost));

  let manyCloth = reserve.sort((a, b) => a - b).filter((el) => !lost.includes(el));

  const findCloth = noCloth.filter((el) => {
    const lendCloth = manyCloth.find((i) => Math.abs(i - el) == 1);

    if (!lendCloth) {
      return lost;
    }
    manyCloth = manyCloth.filter((el) => el !== lendCloth);
  });

  result = n - findCloth.length;

  return result;
}

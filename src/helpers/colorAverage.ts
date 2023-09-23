const colorAverage = (number: number) => {
  if (number < 3) return '#E90000';
  if (number < 5) return '#E97E00';
  if (number < 7) return '#E9D100';
  return '#66E900';
};

export default colorAverage;

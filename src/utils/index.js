export const getRandomColor = () => {
  const colors = [
    '#f9bcdd',
    '#fff1ac',
    '#b689b0',
    '#ff6768',
    '#ea7070',
    '#41b6e6',
    '#4263eb',
    '#1c7cd6',
    '#1098ad',
    '#0ca678',
    '#37b24d',
    '#74b816',
    '#f59f00',
  ];
  const random = Math.floor(Math.random() * 13);
  return colors[random];
};

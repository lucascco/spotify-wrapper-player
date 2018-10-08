export default function convertToHumanTime(ms) {
  let s = (ms / 1000) % 60;

  const min = parseInt((ms / 1000) / 60, 10);

  s = (s < 10) ? `0${s}` : s;
  return `${min}:${s}`;
}

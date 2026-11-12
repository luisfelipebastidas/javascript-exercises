const fibonacci = function (position) {
  const count = Number(position);

  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let previous = 0;
  let current = 1;
  for (let i = 2; i <= count; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;

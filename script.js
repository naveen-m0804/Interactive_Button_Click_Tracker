function createCounter() {
  let count = 0; 

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

document.getElementById('clickBtn').addEventListener('click', () => {
  const currentCount = counter(); 
  document.getElementById('count').innerText = currentCount;
});

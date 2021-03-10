const timer = process.argv.slice(2); 
timer.sort((a, b) => {return a-b});
if (timer.length > 0) {
  timer.forEach(item => {
    if (Number(item) > 0) {
      setTimeout(() => {
      process.stdout.write('\x07');
      }, Number(item));
    }
  });
}

var totalSum = 0;

for (var i = 2; i < process.argv.length; i++) {
    totalSum += Number(process.argv[i])

};

console.log(totalSum);
const fs = require('fs');

fs.readFile("lists.txt", 'utf-8', (err, data) => {
    const array = data.split('\n').map((row) => row.split("   "));
    const left = array.map(([leftItem]) => +leftItem).sort();
    const right = array.map(([, rightItem]) => +rightItem).sort();

    // console.log(left[0])
    // console.log(right[0]);
    // console.log(Math.abs(left[0] - right[0]));
    // console.log(Math.abs(right[0] - left[0]));

    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        sum += Math.abs(right[i] - left[i]);
    }
    console.log(sum)

    let similarity = 0;
    for (let i = 0; i < left.length; i++) {
        const number = left[i];
        const leftIndex = right.indexOf(number)
        if (leftIndex === -1) {
            continue
        }

        const rightIndex = right.lastIndexOf(number);
        similarity += (rightIndex - leftIndex + 1) * number
    }

    console.log(left.indexOf(84000))
    // Should be -1 because there is no 84000 in the right
    console.log(right.lastIndexOf(left.indexOf(84000)))
    // 38142 is at left[311]
    console.log(left.indexOf(38142));
    console.log(left[311])
    // 38142 is in the right list 15 times.
    console.log(right.lastIndexOf(38142) - right.indexOf(38142) + 1)
    console.log('Final Answer: ', similarity);

})
const fs = require('fs');

// fs.readFile("day2.txt", 'utf-8', (err, data) => {
//     const array = data.split('\n').map((row) => row.split(" "));
//     // console.log(array[783]);
//     console.log(array[878])
//     let safe = 0;
//     for (let i = 0; i < array[878].length -1; i++) {
//         if ((array[878][i] < array[878][i+1]) || (array[878][i] > array[878][i+1])) {
//             console.log('safe');
//             continue;
//         } else {
//             console.log('i: ', array[878][i])
//             console.log('i+1 ', array[878][i+1])
//             console.log('unsafe');
//             return false;
//         }
//     }
//     safe++
//     console.log(safe);
// })

// figuring out increased by 1 - 3

fs.readFile("day2.txt", 'utf-8', (err, data) => {
    const array = data.split('\n').map((row) => row.split(" "));
    console.log(array[0])
    console.log(array.length)
    let safe = 0;
    outloop:
    for (let i = 0; i < array.length; i++) {
        innerloop:
        for (let j = 0; j < array[i][j].length -1; j++) {
            console.log(array[i][j])
            if (((array[i][j] < array[i][j+1]) || (array[i][j] > array[i][j+1])) && ((Math.abs((array[i][j] - array[i][j+1])) >= 1) && (Math.abs((array[i][j] - array[i][j+1])) <= 3)  )) {
                console.log('safe');
            } else {
                console.log('unsafe')
                break
            }
            safe++
        }
    }
    console.log('safe: ', safe);
    console.log('hi')
})

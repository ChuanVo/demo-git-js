let arr = [4, 2, 7, 3, 1, 9]

// cau 2

for(let i=0; i< arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log('Mang tang dang: ', arr)
// cau
let max = arr[0]
for(let i=1; i< arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}

console.log('Phan tu lon nhat trong mang la: ', max)

// cau 4

let tong = 0

for(let i =0; i< arr.length; i++) {
    tong = tong + arr[i]
}

console.log('Tong cac phan tu trong mang la: ', tong)
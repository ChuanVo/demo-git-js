let arr = [4, 2, 7, 3, 1, 9]

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
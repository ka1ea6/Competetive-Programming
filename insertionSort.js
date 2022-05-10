function insertionSort11(n, arr) {
    // Write your code here
    var temp;
    for (var i = n - 1; i >= 0; i--) {
        // if (arr[n - 1] < arr[i] && !temp) {
        //   temp = arr[n - 1];
        //   arr[n - 1] = arr[i];
        //   console.log(arr.join(" "));
        // } else if (temp || temp === 0) {
        //   arr[i + 1] = arr[i];
        //   if (temp > arr[i]) {
        //     arr[i + 1] = temp;
        //     console.log(arr.join(" "));
        //     return;
        //   } else if (temp < arr[0] && i === 0) {
        //     arr[0] = temp;
        //     console.log(arr.join(" "));
        //     return;
        //   }
        //   console.log(arr.join(" "));
        // }
        if (arr[i] < arr[i - 1] && !temp) {
            temp = arr[i];
            arr[i] = arr[i - 1];
            console.log(arr.join(" "));
        }
        else if (temp || temp === 0) {
            if (temp < arr[i - 1]) {
                arr[i] = arr[i - 1];
                console.log(arr.join(" "));
            }
            else if (i === 0 && arr[i] > temp) {
                arr.shift();
                arr.unshift(temp);
                console.log(arr.join(" "));
            }
        }
    }
}
insertionSort11(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);

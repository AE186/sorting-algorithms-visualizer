// var arr = []

// 1
// SELECTION SORT

// SelectionSort() : Implementation of selection sort algorithm. O(n^2) 
// async function SelectionSort() {
// 	let delay = Disable_The_Input();

// 	let container = document.getElementById("container");
// 	for (let i = 0; i < bars.length; i++) {
// 		let mn_ind = i;
// 		let curr_id = bars[i].split('id="')[1].split('"')[0];
// 		document.getElementById(curr_id).style.backgroundColor = selected;
// 		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
// 		beep(100, sound, delay)
// 		for (let j = i + 1; j < bars.length; j++) {
// 			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
// 			document.getElementById(nxt_ele).style.backgroundColor = chng;
// 			let a = parseInt(bars[mn_ind].split(/[:%]/)[1]);
// 			let b = parseInt(bars[j].split(/[:%]/)[1]);
// 			if (a > b) mn_ind = j;
// 			await Sleep(delay / 5.0);
// 			document.getElementById(nxt_ele).style.backgroundColor = def;
// 		}

// 		let nxt_ele = bars[mn_ind].split('id="')[1].split('"')[0];
// 		document.getElementById(nxt_ele).style.backgroundColor = selected;
// 		await Sleep(2 * delay / 5.0);

// 		let tmp = bars[mn_ind];
// 		bars[mn_ind] = bars[i];
// 		bars[i] = tmp;

// 		container.innerHTML = bars.join('');
// 		await Sleep(2 * delay / 5.0);
// 		document.getElementById(curr_id).style.backgroundColor = def;
// 		document.getElementById(nxt_ele).style.backgroundColor = def;
// 	}
// 	Finished_Sorting();
// }






// 2
// BUBBLE SORT

// BubbleSort() : Implementation of bubble sort algorithm. O(n^2)
async function nv_BubbleSort() {
	// let delay = Disable_The_Input();
	// let container = document.getElementById("container");

	for (let i = 0; i < arr.length - 1; i++) {
		let has_swap = false;
		for (let j = 0; j < arr.length - i - 1; j++) {
			// let curr_id = bars[j].split('id="')[1].split('"')[0];
			// let nxt_ele = bars[j + 1].split('id="')[1].split('"')[0];

			// document.getElementById(curr_id).style.backgroundColor = selected;
			// let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			// beep(100, sound, delay)
			// document.getElementById(nxt_ele).style.backgroundColor = chng;
			// await Sleep(delay / 2);
			// let a = parseInt(bars[j].split(/[:%]/)[1]);
			// let b = parseInt(bars[j + 1].split(/[:%]/)[1]);

            let a = parseInt(arr[j]);
			let b = parseInt(arr[j+1]);

			if (a > b) {
				has_swap = true;

				let t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;

				// container.innerHTML = bars.join('');
			}
			// document.getElementById(curr_id).style.backgroundColor = selected;
			// document.getElementById(nxt_ele).style.backgroundColor = chng;
			// await Sleep(delay / 2.0);
			// document.getElementById(curr_id).style.backgroundColor = def;
			// document.getElementById(nxt_ele).style.backgroundColor = def;
		}
		if (has_swap == false) break;
	}
	// Finished_Sorting();
}





// 3
// INSERTION SORT

// InsertionSort() : Implementation of inserion sort algorithm. O(n^2) 
async function nv_InsertionSort() {
	// let delay = Disable_The_Input();
	// let container = document.getElementById("container");

	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		let key = arr[i];
		// let curr_id = key.split('id="')[1].split('"')[0];
		// let nxt_ele = bars[j].split('id="')[1].split('"')[0];
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		// beep(100, sound, delay)

		while (j >= 0 && parseInt(arr[j]) > parseInt(key)) {
			// document.getElementById(nxt_ele).style.backgroundColor = def;
			// nxt_ele = bars[j].split('id="')[1].split('"')[0];
			// document.getElementById(nxt_ele).style.backgroundColor = chng;
			// await Sleep(delay);
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = key;
		// container.innerHTML = bars.join('');
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// document.getElementById(nxt_ele).style.backgroundColor = chng;
		// await Sleep(delay * 3.0 / 5);
		// document.getElementById(curr_id).style.backgroundColor = def;
		// document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	// Finished_Sorting();
}



// 4
// MERGE SORT
// Slide_down() : Places bars[r] at lth position by sliding other bars to the right. 
function nv_Slide_down(l, r) {
	let temp = arr[r];
	for (let i = r - 1; i >= l; i--) {
		arr[i + 1] = arr[i];
	}
	arr[l] = temp;
}


async function nv_merge(l, m, r, d) {
	let y = l;
	let i = l;
	let j = m + 1;

	while (i < j && j <= r) {
		// let curr_id = bars[j].split('id="')[1].split('"')[0];
		// let nxt_ele = bars[i].split('id="')[1].split('"')[0];
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// document.getElementById(nxt_ele).style.backgroundColor = chng;
		let a = parseInt(arr[j]);
		let b = parseInt(arr[i]);

		if (a > b) i++;
		else {
			nv_Slide_down(i, j);
			i++; j++;
		}
		// await Sleep(d / 2.0);
		// container.innerHTML = bars.join('');
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// document.getElementById(nxt_ele).style.backgroundColor = chng;
		// let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		// beep(100, sound, d)
		// await Sleep(d / 2.0);
		// document.getElementById(curr_id).style.backgroundColor = def;
		// document.getElementById(nxt_ele).style.backgroundColor = def;
		// sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		// beep(100, sound, d)
	}
}


async function nv_mergeSort(l, r, d) {
	if (l < r) {
		let m = parseInt(l + (r - l) / 2);
		await nv_mergeSort(l, m, d);
		await nv_mergeSort(m + 1, r, d);
		await nv_merge(l, m, r, d);
	}
}


async function nv_MergeSort() {
	// let delay = Disable_The_Input();
	await nv_mergeSort(0, arr.length - 1, 0);
	// Finished_Sorting();
}




// 5
// QUICK SORT
// Partition(): Places the (r)th bar at the correct position 
async function nv_Partition(l, r, d) {
	let i = l - 1;
	let j = l;
	// let id = bars[r].split('id="')[1].split('"')[0];
	// document.getElementById(id).style.backgroundColor = selected;
	for (j = l; j < r; j++) {
		let a = parseInt(arr[j]);
		let b = parseInt(arr[r]);
		if (a < b) {
			i++;
			// let curr_id = bars[i].split('id="')[1].split('"')[0];
			// let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			// document.getElementById(curr_id).style.backgroundColor = chng;
			// document.getElementById(nxt_ele).style.backgroundColor = chng;

			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

			// await Sleep(d / 3.0);
			// container.innerHTML = bars.join('');
			// document.getElementById(curr_id).style.backgroundColor = chng;
			// document.getElementById(nxt_ele).style.backgroundColor = chng;
			// document.getElementById(id).style.backgroundColor = selected;
			// let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			// beep(100, sound, d)
			// await Sleep(d / 3.0)
			// document.getElementById(curr_id).style.backgroundColor = def;
			// document.getElementById(nxt_ele).style.backgroundColor = def;
		}
	}

	let temp = arr[i + 1];
	arr[i + 1] = arr[r];
	arr[r] = temp;

	// container.innerHTML = bars.join(' ');
	// document.getElementById(id).style.backgroundColor = selected;
	// await Sleep(d / 3.0);
	// document.getElementById(id).style.backgroundColor = def;
	return i + 1;
}


async function nv_quickSort(l, r, d, k=1) {
	if(r-l <= k){
		return
	}
	
	else if (l < r) {
		let p = await nv_Partition(l, r, d);
		await nv_quickSort(l, p - 1, d);
		await nv_quickSort(p + 1, r, d);
	}
}


async function nv_QuickSort() {
	// let delay = Disable_The_Input();
	await nv_quickSort(0, arr.length - 1, 0);
	// Finished_Sorting();
}




// 5.1
// MODDED QUICK SORT
async function nv_modded_QuickSort() {
	// let delay = Disable_The_Input();
	await nv_quickSort(0, arr.length - 1, 0, Math.log2(bars.length));
	await nv_InsertionSort();
	// Finished_Sorting();
}



// 6
// HEAP SORT
// Heapfiy(): Creates a max heap.
async function nv_Heapfiy(n, i, d) {
	let largest = i;
	let l = 2 * i + 1; // lft
	let r = 2 * i + 2; // rgt
	// let curr_id = bars[i].split('id="')[1].split('"')[0];
	// let nxt_ele;
	// let id3;

	// document.getElementById(curr_id).style.backgroundColor = selected;
	// if (r < n) {
	// 	id3 = bars[r].split('id="')[1].split('"')[0];
	// 	document.getElementById(id3).style.backgroundColor = chng;
	// }
	// if (l < n) {
	// 	nxt_ele = bars[l].split('id="')[1].split('"')[0];
	// 	document.getElementById(nxt_ele).style.backgroundColor = chng;
	// }
	// await Sleep(d / 3.0)
	if (l < n && parseInt(arr[l]) > parseInt(arr[largest]))
		largest = l;
	if (r < n && parseInt(arr[r]) > parseInt(arr[largest]))
		largest = r;

	if (largest != i) {
		let t = arr[i]; arr[i] = arr[largest]; arr[largest] = t;
		// container.innerHTML = bars.join(' ');
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		// beep(100, sound, d)
		// if (r < n) document.getElementById(id3).style.backgroundColor = chng;
		// if (l < n) document.getElementById(nxt_ele).style.backgroundColor = chng;
		// await Sleep(d / 3.0)
		// container.innerHTML = bars.join(' ');
		await nv_Heapfiy(n, largest, d);
	}
	// container.innerHTML = bars.join(' ');
}


async function nv_HeapSort() {
	// let delay = Disable_The_Input();
	let n = arr.length;
	for (let i = n / 2 - 1; i >= 0; i--) // Build the heap
		await nv_Heapfiy(n, i, 0);

	for (let i = n - 1; i >= 0; i--) {
		let t = arr[0]; // Swaping
		arr[0] = arr[i];
		arr[i] = t;

		// container.innerHTML = bars.join(' ');
		await nv_Heapfiy(i, 0, 0);
	}
	// Finished_Sorting();
} 



// 7
// COUNT SORT
async function nv_CountSort(){
	let max_arr = 9;

		for(let i=0 ; i<arr.length ; i++){
			if(parseInt(arr[i]) > max_arr){
				max_arr = parseInt(arr[i]);
			}
		}
	

	count = [];
	for(let i=0 ; i<=max_arr ; i++){
		count.push(0);
	}

	for(let i=0 ; i<arr.length ; i++){
		count[parseInt(arr[i])] += 1;
	}

	for(let i=1 ; i<=max_arr ; i++){
		count[i] = count[i] + count[i-1];
	}
	// console.log(count);
	output = Array(arr.length)
	for(let i=0 ; i<arr.length ; i++){
		output[count[parseInt(arr[i])]-1] = arr[i];
		count[parseInt(arr[i])]--;
		// console.log(parseInt(bars[i].split(/[:%]/)[1]));
	}
	
	// let delay = Disable_The_Input();
	// await Sleep(delay*100);
	// bars = []

	arr = [];
	for(let i=0 ; i<output.length ; i++){
		// $(".container").html(bars.join(''));
		// await Sleep(delay*10);

		arr.push(output[i]);
		// $(".container").html(bars.join(''));
		// document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
		
		// await Sleep(delay*10);

		// document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = def;
		// $(".container").html(bars.join(''));
	}

	// Finished_Sorting();

}



// 8
// RADIX SORT
async function nv_cs(d){
	let n = arr.length;

	count = [];
	for(let i=0 ; i<=9 ; i++){
		count.push(0);
	}

	for(let i=0 ; i<n ; i++){
		count[ Math.floor((parseInt(arr[i])/d % 10)) ] += 1;
	}

	for(let i=1 ; i<=9 ; i++){
		count[i] = count[i] + count[i-1];
	}
	
	output = Array(n)
	for(let i=n-1 ; i>=0 ; i--){
		output[count[ Math.floor((parseInt(arr[i])/d % 10)) ]-1] = arr[i];
		count[ Math.floor((parseInt(arr[i])/d % 10)) ]--;
		// console.log(parseInt(bars[i].split(/[:%]/)[1]));
	}
	
	// let delay = Disable_The_Input();
	// bars = []
	// await Sleep(delay*100);

	arr = []
	for(let i=0 ; i<n ; i++){
		// $(".container").html(bars.join(''));
		// await Sleep(delay*10);

		arr.push(output[i]);
		// $(".container").html(bars.join(''));
		// document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
		
		// await Sleep(delay*10);

		// document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = def;
		// $(".container").html(bars.join(''));
	}

}

async function nv_RadixSort(){
	let max_arr = -1;

	for(let i=0 ; i<arr.length ; i++){
		if(parseInt(arr[i]) > max_arr){
			max_arr = parseInt(arr[i]);
		}
	}


	for(let i = 1 ; Math.floor(max_arr/i)>0 ; i*=10){

		await nv_cs(i);
		// console.log(i);
		// console.log(bars.length);

	}

	// Finished_Sorting();
}



// 9
// RADIX SORT
function nv_ins(arr){
	// let delay = Disable_The_Input();
	// let container = document.getElementById("container");
	console.log(arr);

	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		let key = arr[i];
		// let curr_id = key.split('id="')[1].split('"')[0];
		// let nxt_ele = bars[j].split('id="')[1].split('"')[0];
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		// beep(100, sound, delay)

		while (j >= 0 && parseInt(arr[j]) > parseInt(key)) {
			// document.getElementById(nxt_ele).style.backgroundColor = def;
			// nxt_ele = bars[j].split('id="')[1].split('"')[0];
			// document.getElementById(nxt_ele).style.backgroundColor = chng;
			// await Sleep(delay);
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = key;
		// container.innerHTML = bars.join('');
		// document.getElementById(curr_id).style.backgroundColor = selected;
		// document.getElementById(nxt_ele).style.backgroundColor = chng;
		// await Sleep(delay * 3.0 / 5);
		// document.getElementById(curr_id).style.backgroundColor = def;
		// document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	// Finished_Sorting();

	return arr;
}

async function nv_BucketSort(buckets){
	let max = parseInt(arr[0]), min = parseInt(arr[0]);

	for(let i=0 ; i<arr.length ; i++){
		max = Math.max(max, parseInt(arr[i]));
		min = Math.min(min, parseInt(arr[i])); 
	}

	let range = Math.floor((max - min) / buckets);

	let bucket = new Array(buckets);
	for(let i = 0 ; i<=buckets ; i++){
		bucket[i] = new Array();
	}

	for(let i=0 ; i<arr.length ; i++){
		// console.log(Math.ceil((arr[i] - min) / range));
		bucket[Math.floor((parseInt(arr[i]) - min) / range)].push(arr[i]);
	}

	console.log(bucket);

	for(let i=0 ; i<=buckets ; i++){
		bucket[i] = nv_ins(bucket[i]);
		console.log(bucket[i]);
	}

	// console.log(bucket);

	arr = [];
	for(let i=0 ; i<=buckets ; i++){
		for(let j = 0 ; j<bucket[i].length ; j++){
			arr.push(bucket[i][j]);
		}
	}

	console.log(arr);
}
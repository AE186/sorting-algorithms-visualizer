let bars = [];
const def = "#000000", chng = "#431f91", finished = "#8ef511", selected = "yellow";

// window.onload = setup();
// async function setup() {
// 	let b = document.getElementById("bars");
// 	let d = document.getElementById("delay");
// 	document.getElementById("b").innerText = b.value;
// 	document.getElementById("d").innerText = d.value + "ms";

// 	if (bars.length != parseInt(b.value)) {
// 		generateBars(parseInt(b.value));
// 	}
// }


function reset() {
	location.reload();
}


function Disable_The_Input() {
	// let x = document.getElementsByTagName("input");
	// for (let i = 0; i < x.length; i++)
	// 	x[i].disabled = true;
	// return parseInt(document.getElementById("delay").value);
	return 15;
}


function Finished_Sorting() {
	let x = document.getElementsByClassName("bar");
	for (let i = 0; i < x.length; i++)
		x[i].style.backgroundColor = finished;
	x = document.getElementsByTagName("input");
	for (let i = 0; i < x.length; i++)
		x[i].disabled = false;

}


function generateBars(nums) {
	bars = [];
	// let container = document.getElementById("full-size");

	for (let i = 0; i < nums.length; i++) {
		bars.push('<div class="bar" id="' + i + '" style="height:' + nums[i] + '%"></div>');
	}

	// console.log(bars.join(''));
	$(".container").html(bars.join(''));
	// console.log($(".container").html());
	// container.innerHTML = bars.join('');
}


function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function MapRange(value, in_min, in_max, out_min, out_max) {
	return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
//=============================== Sorting Algorithms ==================================//


// 1
// SELECTION SORT

// SelectionSort() : Implementation of selection sort algorithm. O(n^2) 
async function SelectionSort() {
	let delay = Disable_The_Input();

	let container = document.getElementById("container");
	for (let i = 0; i < bars.length; i++) {
		let mn_ind = i;
		let curr_id = bars[i].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)
		for (let j = i + 1; j < bars.length; j++) {
			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			let a = parseInt(bars[mn_ind].split(/[:%]/)[1]);
			let b = parseInt(bars[j].split(/[:%]/)[1]);
			if (a > b) mn_ind = j;
			await Sleep(delay / 5.0);
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}

		let nxt_ele = bars[mn_ind].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = selected;
		await Sleep(2 * delay / 5.0);

		let tmp = bars[mn_ind];
		bars[mn_ind] = bars[i];
		bars[i] = tmp;

		container.innerHTML = bars.join('');
		await Sleep(2 * delay / 5.0);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	Finished_Sorting();
}






// 2
// BUBBLE SORT

// BubbleSort() : Implementation of bubble sort algorithm. O(n^2)
async function BubbleSort() {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");

	for (let i = 0; i < bars.length - 1; i++) {
		let has_swap = false;
		for (let j = 0; j < bars.length - i - 1; j++) {
			let curr_id = bars[j].split('id="')[1].split('"')[0];
			let nxt_ele = bars[j + 1].split('id="')[1].split('"')[0];

			document.getElementById(curr_id).style.backgroundColor = selected;
			let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			beep(100, sound, delay)
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay / 2);
			let a = parseInt(bars[j].split(/[:%]/)[1]);
			let b = parseInt(bars[j + 1].split(/[:%]/)[1]);
			if (a > b) {
				has_swap = true;

				let t = bars[j];
				bars[j] = bars[j + 1];
				bars[j + 1] = t;

				container.innerHTML = bars.join('');
			}
			document.getElementById(curr_id).style.backgroundColor = selected;
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay / 2.0);
			document.getElementById(curr_id).style.backgroundColor = def;
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}
		if (has_swap == false) break;
	}
	Finished_Sorting();
}





// 3
// INSERTION SORT

// InsertionSort() : Implementation of inserion sort algorithm. O(n^2) 
async function InsertionSort() {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");
	for (let i = 1; i < bars.length; i++) {
		let j = i - 1;
		let key = bars[i];
		let curr_id = key.split('id="')[1].split('"')[0];
		let nxt_ele = bars[j].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)
		while (j >= 0 && parseInt(bars[j].split(/[:%]/)[1]) > parseInt(key.split(/[:%]/)[1])) {
			document.getElementById(nxt_ele).style.backgroundColor = def;
			nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay);
			bars[j + 1] = bars[j];
			j--;
		}

		bars[j + 1] = key;
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(delay * 3.0 / 5);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	Finished_Sorting();
}



// 4
// MERGE SORT
// Slide_down() : Places bars[r] at lth position by sliding other bars to the right. 
function Slide_down(l, r) {
	let temp = bars[r];
	for (let i = r - 1; i >= l; i--) {
		bars[i + 1] = bars[i];
	}
	bars[l] = temp;
}


async function merge(l, m, r, d) {
	let y = l;
	let i = l;
	let j = m + 1;

	while (i < j && j <= r) {
		let curr_id = bars[j].split('id="')[1].split('"')[0];
		let nxt_ele = bars[i].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		let a = parseInt(bars[j].split(/[:%]/)[1]);
		let b = parseInt(bars[i].split(/[:%]/)[1]);

		if (a > b) i++;
		else {
			Slide_down(i, j);
			i++; j++;
		}
		await Sleep(d / 2.0);
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		await Sleep(d / 2.0);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
		sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
	}
}


async function mergeSort(l, r, d) {
	if (l < r) {
		let m = parseInt(l + (r - l) / 2);
		await mergeSort(l, m, d);
		await mergeSort(m + 1, r, d);
		await merge(l, m, r, d);
	}
}


async function MergeSort() {
	let delay = Disable_The_Input();
	await mergeSort(0, bars.length - 1, delay);
	Finished_Sorting();
}




// 5
// QUICK SORT
// Partition(): Places the (r)th bar at the correct position 
async function Partition(l, r, d) {
	let i = l - 1;
	let j = l;
	let id = bars[r].split('id="')[1].split('"')[0];
	document.getElementById(id).style.backgroundColor = selected;
	for (j = l; j < r; j++) {
		let a = parseInt(bars[j].split(/[:%]/)[1]);
		let b = parseInt(bars[r].split(/[:%]/)[1]);
		if (a < b) {
			i++;
			let curr_id = bars[i].split('id="')[1].split('"')[0];
			let nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(curr_id).style.backgroundColor = chng;
			document.getElementById(nxt_ele).style.backgroundColor = chng;

			let temp = bars[i];
			bars[i] = bars[j];
			bars[j] = temp;

			await Sleep(d / 3.0);
			container.innerHTML = bars.join('');
			document.getElementById(curr_id).style.backgroundColor = chng;
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			document.getElementById(id).style.backgroundColor = selected;
			let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
			beep(100, sound, d)
			await Sleep(d / 3.0)
			document.getElementById(curr_id).style.backgroundColor = def;
			document.getElementById(nxt_ele).style.backgroundColor = def;
		}
	}

	let temp = bars[i + 1];
	bars[i + 1] = bars[r];
	bars[r] = temp;

	container.innerHTML = bars.join(' ');
	document.getElementById(id).style.backgroundColor = selected;
	await Sleep(d / 3.0);
	document.getElementById(id).style.backgroundColor = def;
	return i + 1;
}


async function quickSort(l, r, d, k=1) {
	if(r-l <= k){
		return
	}
	
	else if (l < r) {
		let p = await Partition(l, r, d);
		await quickSort(l, p - 1, d);
		await quickSort(p + 1, r, d);
	}
}


async function QuickSort() {
	let delay = Disable_The_Input();
	await quickSort(0, bars.length - 1, delay);
	Finished_Sorting();
}




// 5.1
// MODDED QUICK SORT
async function hb_ins(low, high) {
	let delay = Disable_The_Input();
	let container = document.getElementById("container");

	for (let i = low+1 ; i <= high; i++) {
		let j = i - 1;
		let key = bars[i];
		let curr_id = key.split('id="')[1].split('"')[0];
		let nxt_ele = bars[j].split('id="')[1].split('"')[0];
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, delay)

		while (j >= low && parseInt(parseInt(bars[j].split(/[:%]/)[1])) > parseInt(key.split(/[:%]/)[1])) {
			document.getElementById(nxt_ele).style.backgroundColor = def;
			nxt_ele = bars[j].split('id="')[1].split('"')[0];
			document.getElementById(nxt_ele).style.backgroundColor = chng;
			await Sleep(delay * 20);
			bars[j + 1] = bars[j];
			j--;
		}

		bars[j + 1] = key;
		container.innerHTML = bars.join('');
		document.getElementById(curr_id).style.backgroundColor = selected;
		document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(delay * 20);
		document.getElementById(curr_id).style.backgroundColor = def;
		document.getElementById(nxt_ele).style.backgroundColor = def;
	}
	// Finished_Sorting();
}

async function hb_quicksort(low, high){

	if(low < high){

		let delay = Disable_The_Input();

		if(high - low < Math.sqrt(arr.length)){
			await hb_ins(low, high);
			console.log(arr);
		}

		else {
			 let p = await Partition(low, high, 0);

			 if(p - low < high - p){
			 	await hb_quicksort(low, p-1);
				await Sleep(delay * 20);
				await hb_quicksort(p+1, high);
			 }

			 else{
			 	await hb_quicksort(p+1, high);
				 await Sleep(delay * 20);
				await hb_quicksort(low, p-1);
			 }
		}

	}

}

async function modded_QuickSort() {
	// let delay = Disable_The_Input();
	await hb_quicksort(0, arr.length - 1);
	Finished_Sorting();
}



// 6
// HEAP SORT
// Heapfiy(): Creates a max heap.
async function Heapfiy(n, i, d) {
	let largest = i;
	let l = 2 * i + 1; // lft
	let r = 2 * i + 2; // rgt
	let curr_id = bars[i].split('id="')[1].split('"')[0];
	let nxt_ele;
	let id3;

	document.getElementById(curr_id).style.backgroundColor = selected;
	if (r < n) {
		id3 = bars[r].split('id="')[1].split('"')[0];
		document.getElementById(id3).style.backgroundColor = chng;
	}
	if (l < n) {
		nxt_ele = bars[l].split('id="')[1].split('"')[0];
		document.getElementById(nxt_ele).style.backgroundColor = chng;
	}
	await Sleep(d / 3.0)
	if (l < n && parseInt(bars[l].split(/[:%]/)[1]) > parseInt(bars[largest].split(/[:%]/)[1]))
		largest = l;
	if (r < n && parseInt(bars[r].split(/[:%]/)[1]) > parseInt(bars[largest].split(/[:%]/)[1]))
		largest = r;

	if (largest != i) {
		let t = bars[i]; bars[i] = bars[largest]; bars[largest] = t;
		container.innerHTML = bars.join(' ');
		document.getElementById(curr_id).style.backgroundColor = selected;
		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0], 2, 100, 500, 1000);
		beep(100, sound, d)
		if (r < n) document.getElementById(id3).style.backgroundColor = chng;
		if (l < n) document.getElementById(nxt_ele).style.backgroundColor = chng;
		await Sleep(d / 3.0)
		container.innerHTML = bars.join(' ');
		await Heapfiy(n, largest, d);
	}
	container.innerHTML = bars.join(' ');
}


async function HeapSort() {
	let delay = Disable_The_Input();
	let n = bars.length;
	for (let i = n / 2 - 1; i >= 0; i--) // Build the heap
		await Heapfiy(n, i, delay);

	for (let i = n - 1; i >= 0; i--) {
		let t = bars[0]; // Swaping
		bars[0] = bars[i];
		bars[i] = t;

		container.innerHTML = bars.join(' ');
		await Heapfiy(i, 0, delay);
	}
	Finished_Sorting();
} 



// 7
// COUNT SORT
async function CountSort(){
	let max_arr = 9;

		for(let i=0 ; i<bars.length ; i++){
			if(parseInt(bars[i].split(/[:%]/)[1]) > max_arr){
				max_arr = parseInt(bars[i].split(/[:%]/)[1]);
			}
		}
	

	count = [];
	for(let i=0 ; i<=max_arr ; i++){
		count.push(0);
	}

	for(let i=0 ; i<bars.length ; i++){
		count[parseInt(bars[i].split(/[:%]/)[1])] += 1;
	}

	for(let i=1 ; i<=max_arr ; i++){
		count[i] = count[i] + count[i-1];
	}
	console.log(count);
	output = Array(bars.length)
	for(let i=0 ; i<bars.length ; i++){
		output[count[parseInt(bars[i].split(/[:%]/)[1])]-1] = bars[i];
		count[parseInt(bars[i].split(/[:%]/)[1])]--;
		// console.log(parseInt(bars[i].split(/[:%]/)[1]));
	}
	
	let delay = Disable_The_Input();
	await Sleep(delay*100);
	bars = []

	for(let i=0 ; i<output.length ; i++){
		$(".container").html(bars.join(''));
		await Sleep(delay*10);

		bars.push(output[i]);
		$(".container").html(bars.join(''));
		document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
		
		await Sleep(delay*10);

		document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = def;
		$(".container").html(bars.join(''));
	}

	Finished_Sorting();

}



// 8
// RADIX SORT
async function cs(d){
	let n = bars.length;

	count = [];
	for(let i=0 ; i<=9 ; i++){
		count.push(0);
	}

	for(let i=0 ; i<n ; i++){
		count[ Math.floor((parseInt(bars[i].split(/[:%]/)[1])/d % 10)) ] += 1;
	}

	for(let i=1 ; i<=9 ; i++){
		count[i] = count[i] + count[i-1];
	}
	
	output = Array(n)
	for(let i=n-1 ; i>=0 ; i--){
		output[count[ Math.floor((parseInt(bars[i].split(/[:%]/)[1])/d % 10)) ]-1] = bars[i];
		count[ Math.floor((parseInt(bars[i].split(/[:%]/)[1])/d % 10)) ]--;
		// console.log(parseInt(bars[i].split(/[:%]/)[1]));
	}
	
	let delay = Disable_The_Input();
	bars = []
	await Sleep(delay*100);

	for(let i=0 ; i<n ; i++){
		$(".container").html(bars.join(''));
		await Sleep(delay*10);

		bars.push(output[i]);
		$(".container").html(bars.join(''));
		document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = selected;
		
		await Sleep(delay*10);

		document.getElementById(bars[i].split('id="')[1].split('"')[0]).style.backgroundColor = def;
		$(".container").html(bars.join(''));
	}

}

async function RadixSort(){
	let max_arr = -1;

	for(let i=0 ; i<bars.length ; i++){
		if(parseInt(bars[i].split(/[:%]/)[1]) > max_arr){
			max_arr = parseInt(bars[i].split(/[:%]/)[1]);
		}
	}


	for(let i = 1 ; Math.floor(max_arr/i)>0 ; i*=10){

		await cs(i);
		console.log(i);
		console.log(bars.length);

	}

	Finished_Sorting();
}



// 9
// BUCKET SORT
async function BucketSort(buckets){
	let delay = Disable_The_Input();
	await Sleep(delay*60);

	let max = parseInt(bars[0].split(/[:%]/)[1]), min = parseInt(bars[0].split(/[:%]/)[1]);

	for(let i=0 ; i<bars.length ; i++){
		max = Math.max(max, parseInt(bars[i].split(/[:%]/)[1]));
		min = Math.min(min, parseInt(bars[i].split(/[:%]/)[1])); 
	}

	let range = Math.floor((max - min) / buckets);

	let bucket = new Array(buckets - 1);
	for(let i = 0 ; i<=buckets ; i++){
		bucket[i] = new Array();
	}

	for(let i=0 ; i<bars.length ; i++){
		// console.log(Math.ceil((arr[i] - min) / range));
		bucket[Math.floor((parseInt(bars[i].split(/[:%]/)[1]) - min) / range)].push(bars[i]);
	}

	console.log(bucket);

	for(let i=1 ; i<=buckets+1 ; i++){
		
		bars = bucket[i-1];
		console.log(bars);
		$(".r").html("<h1 class='mx-auto' style='display: block;'>Bucket " + parseInt(i) + "</h1>" + "<div class='container' id='container' style='display: none; height: 100%;'></div>");
		$(".container").show();

		$(".container").html(bars.join(''));

		await Sleep(delay*20);
		await InsertionSort();
		await Sleep(delay*50);

		Finished_Sorting();
	}

	// console.log(bucket);

	$(".r").html("<div class='container' id='container' style='display: none; height: 100%;'></div>");
	$(".container").show();

	bars = [];
	for(let i=0 ; i<=buckets ; i++){
		for(let j = 0 ; j<bucket[i].length ; j++){
			bars.push(bucket[i][j]);
		}
	}

	console.log(bars);
	$(".container").html(bars.join(''));

	Finished_Sorting();
}
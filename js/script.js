var selected_algo;
var arr;
var count;
var arr_inp = false, algo_inp = false;


// selecting the algorithm
$(".sort-btn").click(function(){

    $(".sort-btn").each(function(index, ele){
        $(ele).removeClass("active");
    });

    $(this).addClass("active");
    selected_algo = $(this).text();
    // console.log(selected_algo)

    algo_inp = true;
    if(algo_inp && arr_inp){
        // $(".start").attr("href", "visualize.html");
    }

});


// reading numbers from text file 
$("#formFile").change(function(event){

    // let props = $("#formFile").prop("files");
    // let file = props[0];
    // console.log(file.name);
    // console.log(file.type);

    let fileToLoad = event.target.files[0];

    if(fileToLoad){

        let reader = new FileReader();
        reader.onload = function(fileLoadedEvent){
            let text = fileLoadedEvent.target.result;
            arr = text.split(" ");
        };
        reader.readAsText(fileToLoad, 'UTF-8');
        
        arr_inp = true;

        $(".freq").attr("data-bs-target", "#Range");

    }

    else{
        arr_inp = false;
        // $(".start").attr("href", "#");
        $(".freq").attr("data-bs-target", "");
    }

});


// start visualize button 
$(".start").click(function(){

    if(!algo_inp && !arr_inp){
        alert("Oh snap! Change a few things up, try selecting a algorithm and inserting a text file");
    }

    else if(!algo_inp){
        alert("Oh snap! Change a few things up, try selecting a algorithm");
    }

    else if(!arr_inp){
        alert("Oh snap! Change a few things up, try inserting a text file");
    }

    else{
        $(".selection").hide();
        $(".container").show();

        console.log(arr);
        generateBars(arr);

        sort();

    } 

});


// start sorting no-visualization button 
$(".nv-start").click(function(){

    if(!algo_inp && !arr_inp){
        alert("Oh snap! Change a few things up, try selecting a algorithm and inserting a text file");
    }

    else if(!algo_inp){
        alert("Oh snap! Change a few things up, try selecting a algorithm");
    }

    else if(!arr_inp){
        alert("Oh snap! Change a few things up, try inserting a text file");
    }

    else{
        $(".selection").hide();
        // $(".container").show();
        $(".r").css("height", "0px");
        $(".page-center").removeClass("full-size");

        console.log(arr);
        // generateBars(arr);

        nv_sort();

    } 

});


$(".freq").click(function(){

    if(!arr_inp){
        alert("Oh snap! Change a few things up, try inserting a text file");
    }

    else{
        count = getCountArray(arr.map(Number));
    }

});



$("#modalClose").click(function(){

    $("#From").val("");
    $("#To").val("");
    $("#readOnlyInput").val("0");
    // console.log($("#From").attr("value"));

});



$("#calc").click(function(){

    if($("#From").val() == "" || $("#To").val() == ""){
        alert("Oh snap! Change a few things up, try entering range values");
    }

    else if(Number($("#From").val()) <= Number($("#To").val())){
        $("#readOnlyInput").val(String(getNumsfreq(Number($("#From").val()), Number($("#To").val()), count)));
    }

    else{
        alert("Oh snap! Change a few things up, From should be smaller then To");
    }

});



$("home").click(function(){
    arr = undefined;
    selected_algo = undefined;

    $(".selection").show();
    $("container").hide();
    $(".after-sort").hide();
    $(".page-center").addClass("full-size");
});



async function sort(){

    const start = Date.now();

    switch(selected_algo){
        case "Selection Sort":
            await SelectionSort();
            $("#complexity").html("O(n<sup>2</sup>)");
            break;
        case "Bubble Sort":
            await BubbleSort();
            $("#complexity").html("O(n<sup>2</sup>)");
            break;
        case "Insertion Sort":
            await InsertionSort();
            $("#complexity").html("O(n<sup>2</sup>)");
            break;
        case "Merge Sort":
            await MergeSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Modified Quick Sort":
            await modded_QuickSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Quick Sort":
            await QuickSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Heap Sort":
            await HeapSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Count Sort":
            await CountSort();
            $("#complexity").html("O(n + k)");
            break;
        case "Radix Sort":
            await RadixSort();
            $("#complexity").html("O(nk)");
            break;
    }

    const end = Date.now();

    arr.sort(function(a, b){return a-b;});
    console.log(arr);

    var sorted = []
    arr.forEach(element => {
        sorted.push('<div class="array-displayn p-1" style="display: inline-block;">  '+ element +'  </div>');
    });
    $(".array").html(sorted);

    $("#time").html(`${end - start} ms`);

    $(".after-sort").show();

}


async function nv_sort(){

    const start = Date.now();

    switch(selected_algo){
        case "Bubble Sort":
            await nv_BubbleSort();
            $("#complexity").html("O(n<sup>2</sup>)");
            break;
        case "Insertion Sort":
            await nv_InsertionSort();
            $("#complexity").html("O(n<sup>2</sup>)");
            break;
        case "Merge Sort":
            await nv_MergeSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Modified Quick Sort":
            await nv_modded_QuickSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Quick Sort":
            await nv_QuickSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Heap Sort":
            await nv_HeapSort();
            $("#complexity").html("O(nlog(n))");
            break;
        case "Count Sort":
            await nv_CountSort();
            $("#complexity").html("O(n + k)");
            break;
        case "Radix Sort":
            await nv_RadixSort();
            $("#complexity").html("O(nk)");
            break;
    }

    const end = Date.now();

    // arr.sort(function(a, b){return a-b;});
    // console.log(arr);

    var sorted = []
    arr.forEach(element => {
        sorted.push('<div class="array-displayn p-1" style="display: inline-block;">  '+ element +'  </div>');
    });
    $(".array").html(sorted);

    $("#time").html(`${end - start} ms`);

    $(".after-sort").show();

}
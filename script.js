let y = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let index = 0;

document.getElementById("button").addEventListener("click", change);

let hex_num_1 = "";
let hex_num_2 = "";

function change(){


    for(let i = 0; i < 6; i++){
        index = Math.floor(Math.random() * y.length);
        hex_num_1 += y[index];
    }

    for(let i = 0; i < 6; i++){
        index = Math.floor(Math.random() * y.length);
        hex_num_2 += y[index];
    }
    

        document.getElementById("screen").style.background = `linear-gradient(to right, #${hex_num_1}, #${hex_num_2})`;

        hex_num_1 = "";
        hex_num_2 = "";
}
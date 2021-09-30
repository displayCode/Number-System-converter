
//conversion buttons
let convertDecBin = document.getElementById('convertDecBin');
let convertDecOct = document.getElementById('convertDecOct');
let convertDecHex = document.getElementById('convertDecHex');

//input fields
let decBin = document.getElementById('decBin');
let binDec = document.getElementById('binDec');

let decOct = document.getElementById('decOct');
let octDec = document.getElementById('octDec');

let decHex = document.getElementById('decHex');
let hexDec = document.getElementById('hexDec');

//output results variables
let decBinResult = document.getElementById('decBinResult');

let decOctResult = document.getElementById('decOctResult');

let decHexResult = document.getElementById('decHexResult');


convertDecBin.addEventListener('click', 
    () => {
        if(decBin.value.toString().length > 0 && binDec.value.toString().length > 0){
            window.alert("invalid input, please fill one field only.");
        }
        // Decimal to Binary
        else if(decBin.value.toString().length > 0){
            for(let l=0; l < decBin.value.toString().length; l++){
                if( !(0 <= decBin.value.toString()[l]) && !(decBin.value.toString()[l] < 10)){
                    window.alert('Invalid input!');
                    return 0;
                }
            }
            const deciToBi = (deci) => {
                let i = deci,
                binary = [],
                notYet = true;

                while (notYet) {
                    binary.push(i%2);
                    if (i === 0) {
                        notYet = false;
                    } else
                        i = Math.floor(i/2);
                }
                binary = binary.reverse().join('');

                return parseInt(binary);
            }
            decBinResult.innerText = `Result is: ${deciToBi(decBin.value)}`
            decBinResult.style.display = 'block';
        }

        else if(binDec.value.toString().length > 0){
            //Binary to Decimal
            for(let l=0; l < binDec.value.toString().length; l++){
                if( !0 <= binDec.value.toString()[l] && !binDec.value.toString()[l] <= 1
                 && !0 < binDec.value.toString()[l] && !binDec.value.toString()[l] < 1){
                    window.alert('Invalid input!');
                    return 0;
                }
            }
            const binToDec = (bin) => {
                let i,
                binStr = bin.toString();
                let binLen = binStr.length;
                let nums = [];
                let j = 0;

                for (i = --binLen; i >= 0; i--) {
                    nums.push(parseInt(binStr[j])*(2**i));
                    j++
                };
                let valueNeeded = 0;
                let k;
                for(k=0; k<nums.length; k++) {
                    valueNeeded += nums[k];
                };
                return valueNeeded;
            }
            decBinResult.innerText = `Result is: ${binToDec(binDec.value)}`
            decBinResult.style.display = 'block';           
        }
    }
)
const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    //HTML will automatically put the form back to its initial state
    //unless we do 
    ev.preventDefault();
    // programmatically we can reset it 
    document.getElementById('form-user').reset();
    //if you want to do anything else...
}




function dest(){
    //let valid = false;
    //let failures = [];
    //checkbox (or radio buttons grouped by name)
    var ipu = document.getElementById('input-first').value;
    // .checked .value
    if(ipu==""){
        valid=false;
        document.getElementById("firstnameerror").innerHTML="Field required";
        return valid;
        //failures.push({input: 'ow', msg: 'Please select the no.of trips.'})
    }
    else{
        document.location.href="payment.html";
    }

}


document.addEventListener('DOMContentLoaded', init);
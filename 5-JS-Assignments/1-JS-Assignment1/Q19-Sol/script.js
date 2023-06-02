let month="November";
let year=2059;

findDays = (month,year) => {
    if(year%4==0){
        if(month=="January" || month=="March" || month=="May" 
        || month=="July" || month=="August" || month=="October" || month=="December"){
            console.log("Days are 31");
        }
        else if(month=="February"){
            console.log("Days are 29");
        }
        else{
            console.log("Days are 30");
        }
    }
    else{
        if(month=="January" || month=="March" || month=="May" 
        || month=="July" || month=="August" || month=="October" || month=="December"){
            console.log("Days are 31");
        }
        else if(month=="February"){
            console.log("Days are 28");
        }
        else{
            console.log("Days are 30");
        }
    }
}
let dayCount = findDays(month,year);
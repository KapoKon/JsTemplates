function caseSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
        case 4:
        case 5:
            answer = "Dunno";
        default:
            answer = "Chicken Nuggets";
            break;    }
        return answer;
}
console.log(caseSwitch(2)); //change this

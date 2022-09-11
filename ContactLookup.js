var contacts = [
    {
        "firstName": "Michelle",
        "lastName": "Mouton",
        "number": "1987234634",
        "likes": ["vroom","audi"]
    },
    {
        "firstName": "mater",
        "lastName": "mater",
        "number": "2929210047",
        "likes": ["towing","shelly"]
    },
    {
        "firstName": "kevin",
        "lastName": "owens",
        "number": "6723493105",
        "likes": ["slamming","dunkin"]
    },
    {
        "firstName": "theodore",
        "lastName": "lenses",
        "number": "5000001335",
        "likes": ["peru","calamari"]
    }
];
function lookUpProfile(name,prop){
        for(var i=0; i<contacts.length; i++){
            if(contacts[i].firstName === name){
                return contacts[i][prop] || "No such property";
            }
        }
        return "No such contact";
}
var data = lookUpProfile("theodore", "number");
console.log(data);
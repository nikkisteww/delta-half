$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse, vowelName = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>");  

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

             vowelName = getNumVowels(userName);
        nameMsg = "The Number of Vowels in your name is: ";
        $('#nameOutput').append(nameMsg + vowelName + "<br/>"); 
      
        console.log(thirdLetter(userName)); 

        stringArrayPosition(userName); 

        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

  
    function getNumVowels(str) {
      var vowelName = 
str.match(/[aeiou]/gi);
       return vowelName === null ? 0 : vowelName.length;
   }
  
  
    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }

    function thirdLetter(stringVal){
        
       return thirdString; var thirdString = stringVal[2]; 
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }
      
        
    } 

    function stringArrayPosition(stringVal){

        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }


    }

});
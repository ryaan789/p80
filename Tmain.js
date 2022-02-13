name_array = [];

function submit()
{
    var display_array = [];

    for (var j = 1; j <= 4; j++) 
    {
     var single_name=document.getElementById("name_of_the_student_"+j).value;
     name_array.push(single_name);
    }

    
  var length =name_array.length;
    for (var k = 0; k < length; k++) 
    {
      display_array.push("<h4>Name:"+name_array[k]+"</h4>");
    }
   document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ");
   
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

 
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
  name_array.sort();
  var display_array = [];
  var length =name_array.length;
    for (var k = 0; k < length; k++) 
    {
      display_array.push("<h4>Name:"+name_array[k]+"</h4>");
    }
    var remove_commas=display_array.join(" ");
   
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}





















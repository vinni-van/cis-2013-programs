var $ = function (id) 
{
    return document.getElementById(id);
};

doStuffComputer = function()
{
	forFunction();
	doWhileFunction();
};

function forFunction()
{
	var output = "";	

for (var counter = 1; counter <= 100; counter++) 
{
  if (counter % 15 === 0) {
    output = output + "fizzbuzz\n";
    counter++;
  }
  else if (counter % 5 === 0) {
    output = output + "fizz\n";
    counter++;
  }
  else if (counter % 3 === 0) {
    output = output + "buzz\n";
    counter++;
  }
  else {
    output = output + counter + "\n";
    counter++;
  }
} 
alert(output); 
}

function doWhileFunction()
{
    var counter = 1;
    var output = "";
    while (counter <= 100)

  do {
    if (counter % 15 === 0) {
      output = output + "fizzbuzz\n";
      counter++;
    }
    else if (counter % 5 === 0) {
      output = output + "fizz\n";
      counter++;
    }
    else if (counter % 3 === 0) {
      output = output + "buzz\n";
      counter++;
    }
    else {
      output = output + counter + "\n";
      counter++;
    }
  } while (counter <= 100);
  
alert(output);
}



window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
};
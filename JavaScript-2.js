/*this program will calculate the age of the user in days, weeks, months, and fortnights*/
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter age in years"));
     //calculate floatDays by multiplying age x 365.25
     floatDays = floatAge * 365.25;
     //calculate floatDays by multiplying age x 12
     floatMonths = floatAge * 12;
     //calculate intWeeks by dividing days by 7
     intWeeks = floatDays / 7;
     //calculate intFornights by dividing days by 14
     intFortnights = floatDays / 14;
     alert("Age in days = " + floatDays.toFixed(2) + "    Age in months = " + floatMonths.toFixed(2) + "   Age in weeks = " + intWeeks.toFixed(2) + "   Age in fortnights = " + intFortnights.toFixed(2));
     //alert("Age in months = " + floatMonths); 
     //alert("Age in weeks = " + intWeeks); 
     //alert("Age in fortnights = " + intFortnights);
// var studentNames = []
// var objNames = []
// var names = ["azeem","ahsan","rohan"];
// var stNames = [1,2,3,4,5];
// var mixed = [1,"azeem",5];
// var qualification = ["SSC","HSC","BSC","BCOM","BCOM","MS","M.Phil","PHD"];
// document.write("Qualifications:<br>");
// document.write("1)" + " " +  qualification[0] + "<br>");
// document.write("2)" + " " +  qualification[1] + "<br>");
// document.write("3)" + " " +  qualification[2] + "<br>");
// document.write("4)" + " " +  qualification[3] + "<br>");
// document.write("5)" + " " +  qualification[4] + "<br>");
// document.write("6)" + " " +  qualification[5] + "<br>");
// document.write("7)" + " " +  qualification[6] + "<br>");
// document.write("8)" + " " +  qualification[7] + "<br>");
// document.write(qualification);

// var stuNames = ["Azeem","Ahsan","Rohan"]
// var score = [400,430,380]
// var azeemPer = (400*100)/500;
// var ahsanPer = (430*100)/500;
// var RohanPer = (380*100)/500;

// document.write("Score of Azeem is " + score[0] + " " + "Percentage : " + azeemPer + "% <br>");
// document.write("Score of Ahsan is " + score[1] + " " + "Percentage : " + ahsanPer + "% <br>");
// document.write("Score of Azeem is " + score[2] + " " + "Percentage : " + RohanPer + "%");

// question9

// var colorNames = ["yellow","pink","black"];
// document.write("Here are the colors name: " + colorNames);
// a
// var begColor1 = prompt("what color do you want to add at the begining?");
// var begColor2 = prompt("what color do you want to add at the begining?");
// colorNames.unshift(begColor);
// document.write(colorNames);
// b
// colorNames.push(begColor);
// document.write(colorNames);

// c
// colorNames.unshift(begColor1,begColor2);
// document.write(colorNames);
// d
// colorNames.shift(colorNames);
// document.write(colorNames);
// // e
// colorNames.pop(colorNames);
// document.write(colorNames);

// f
// var userColor = +prompt("At which index do you want to add the color? 1, 2 or 3");
// var userColorName = prompt("tell me the color name");

// if (userColor === 1){
//     colorNames.unshift(userColorName);

// }else if(userColor === 2){
//     colorNames.splice(1,0,userColorName);

// }else if(userColor === 3){
//     colorNames.push(userColorName);
// }
// document.write(colorNames);

// g
// array = ["yellow","pink","black"];
// var userDelColor = +prompt("which color do you want to remove 1 2 or 3 ");
// var noOfColors = +prompt("how many colors do you want to remove");
// if (userDelColor == 1 && noOfColors == 1){
//     array.shift();
//     document.write("Updated colors: " + array);
// }else if(userDelColor == 2 && noOfColors == 2){
//     var newarray = array.slice(0,1);
//     document.write("Updated colors: " + newarray);
// }else if(userDelColor == 3 && noOfColors == 1){
//     array.pop();
//     document.write("Updated colors: " + array);
// }

// question10
// var studentScores = [230,320,248,480,120];
// document.write("Scores of syudents: " + studentScores + "<br>");
// studentScores.sort();
// document.write("Ordered Scores of syudents: " + studentScores);

// question11
// var cityNames = ["karachi","lahore","islamabad","Quetta","Peshawar" + "<br>"];
// document.write("Cities list: " + cityNames);
// var selectedCities =  cityNames.slice(2,4);
// document.write(" selected Cities list: " + selectedCities);

// question12
// var arr = ["this","is","my","cat"];
// document.write("Array: " + arr + "<br>");
// var d = arr.join("");
// document.write("String: " + d);

// question15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// document.write("<option>" + manufacturers + "</option>");
// document.write("</select>");
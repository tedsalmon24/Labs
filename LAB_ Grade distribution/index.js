function bodyLoaded() {
    setTableContent("45 78 98 83 86 99 90 59");
}

function parseScores(x) {
    //split(x) method will split the string in to list with x
    return x.split(" ");
}

function buildDistributionArray(marks) {
    // a,b,c,d,f are used to store the count of grades
    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        f = 0;
    // accessing each marks and incrementing grades according to the range
    for (i = 0; i < marks.length; i++) {
        if (marks[i] != "") {
            if (marks[i] >= 90)
                a += 1;
            else if (marks[i] <= 89 && marks[i] >= 80)
                b += 1;
            else if (marks[i] <= 79 && marks[i] >= 70)
                c += 1
            else if (marks[i] <= 69 && marks[i] >= 60)
                d += 1
            else if (marks[i] <= 59 && marks[i] >= 0)
                f += 1;
        }
    }
    // returning the grades count as list
    return [a, b, c, d, f];
}

function setTableContent(userInput) {
    var marks = parseScores(userInput);
    var grade_dis = buildDistributionArray(marks);
    // f is used as flag to know minimum there should be one grade
    var f = 0;
    for (i = 0; i < grade_dis.length; i++)
        if (grade_dis[i] != 0)
            f = 1;
    if (f == 1) {
        // 3 rows are generated as stated in the question
        document.getElementById('distributionTable').innerHTML = 
<tr>
<td><div style='height:0px' class='bar0'></div></td>
<td><div style='height:0px' class='bar1'></div></td>
<td><div style='height:0px' class='bar2'></div></td>
<td><div style='height:0px' class='bar3'></div></td>
<td><div style='height:0px' class='bar4'></div></td>
</tr>
<tr>
<td>A</td>
<td>B</td>
<td>C</td>
<td>D</td>
<td>F</td>
</tr>
<tr>
<td class="grade"></td>
<td class="grade"></td>
<td class="grade"></td>
<td class="grade"></td>
<td class="grade"></td>
</tr>
`;
        // assigning the heights for the each bars according to the grade
        for (i = 0; i < grade_dis.length; i++) {
            // taking coressponding bar and assigning grades to third row
            var x = document.getElementsByClassName("bar" + i);
            document.getElementsByClassName("grade")[i].innerHTML = grade_dis[i] + "";
            // the height of the bar is assigned according to th grade
            x[0].style.height = (10 * grade_dis[i]) + "px";
        }
    } else {
        // if there are no grades then the message no Graph is displayed
        document.getElementById('distributionTable').innerHTML = "<tr><td>No graph to display</td></tr>";
    }
}

window.addEventListener("load", myFunction);

function myFunction() {
    setTableContent("88 64 73 77 81 79 14 92 71")
}

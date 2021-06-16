$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()
const urlApi ="https://wp.zybooks.com/quotes.php?topic="+topic+"&count="+count;

let html = "<ol>";

$.ajax({
  
accepts: {
text: "application/json"
},
  
type: "GET",

url: urlApi,
cache: true,
  
success: function(data){

if(!data.error){

$.each(data, function(index) {
  
html+="<li>"+data[index].quote+" - "+data[index].source +"</li>";
});   
}
  
else {
html+=data.error;
}
html+="</ol>";
  
$("#quotes").html(html);
}
});

}


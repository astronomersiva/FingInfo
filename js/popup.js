$(document).ready(function(){
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},  
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var searchQuery = response.data;
      console.log("searchQuery");
      console.log(searchQuery);
      searchQuery = searchQuery.replace(/ /g, "_");      
      $('#article').wikiblurb({
    		page: searchQuery,
    		removeLinks: true,
    		type: "text"
    	});    		
    });   
  });
});

menu_list_array = ["BMW 220i GRAN COUPE M SPORT - 2021",
                        "VOLVO V40 D3(R DESIGN) - 2018",
                        "AUDI Q2 TECHNOLOGY - 2021"];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        // use the sort function as - menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}

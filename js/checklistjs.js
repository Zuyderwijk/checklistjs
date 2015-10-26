$(function() {

	if(document.getElementById('checklistOverview')) {
	    var count = 0;
	    var checked = 0;
	    function countBoxes() {
	        count = $("#checklist input[type='checkbox']").length;
	    }
	
	    countBoxes();
	    $(":checkbox").click(countBoxes);
	
	    // Count checks
	    function countChecked() {
	        checked = $("input:checked").length;
	
	        var percentage = parseInt(((checked / count) * 100),10);
	        if (count < 1) {
		        percentage = 0;
	        }

            $('meter').val(percentage);

/*	        $(".progressbar-bar").progressbar({
	            value: percentage
	        });*/
	
	        $(".progressbar-label").text(percentage + "%");
	
	    }
	
	    countChecked();

	    $(":checkbox").click(function(){
		    countChecked();
	    });

        $(":checkbox").click(function(){

            countChecked();

            var value=$(this).attr('value');
            var id= $(this).attr('id');
            console.log(id);
            console.log(value);
        });
	}
    
});
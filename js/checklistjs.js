(function () {
	$.fn.checklistjs = function () {
		// jQuery opbjects
		var $list = $(this).find("ul");
		var $items = $list.find("li");
		var theme = "basic";

		// Init theme classes
		$(this).addClass('checklistjs').show();
		$list.addClass('list-theme'+' '+theme).attr('id', 'checklist');
		$(this).parent("#checklistjs").addClass('checklistjs');

		var itemid = 0;
		$items.each(function() {
			itemid++
			var styledElements = "<span><span></span></span>";
			var existingText = $(this).text();
			var checkbox = "<input id='item" +itemid+ "' type='checkbox' name='field' value='" +itemid+ "'>";

			$(this).replaceWith("<li class='item'>" + checkbox + "<label for='item" +itemid+ "'>" + styledElements + existingText + "</label>" + "</li>");
		});

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
			// Update progressbar
			$('meter').val(percentage);
			$(".progressbar-label").text(percentage + "%");

		}
		countChecked();

		$(":checkbox").click(function(){
			countChecked();
			var value = $(this).attr('value');
			var id = $(this).attr('id');

			console.log(id);
			console.log(value);
		});
	}
})(jQuery);
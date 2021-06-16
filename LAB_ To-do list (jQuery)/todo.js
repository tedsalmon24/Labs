const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';
$(function () {
    $("#addBtn").click(addBtnClick);
    // Attaching keydown event handler with the text box
    //This will check if enter key is presses by checking event code is 13
    //If event keycode matches, calling addBtnClick function
    $("#newItemText").keydown((function (event) {
        var code = event.keyCode || event.which;
        if (code === 13) {
            addBtnClick();
        }
    }))
});

function addBtnClick() {
    let itemText = $("#newItemText").val().trim();
    // Don't add empty strings
    if (itemText.length !== 0) {
        addItem(itemText);

        // Clear text and put focus back in text input
        $("#newItemText").val("").focus();
    }
}

function addItem(item) {
    // Create a new <li> for the list
    let $newItem = $(`<li><span>${item}</span></li>`);
    //Up button moves item up one spot
    let $upButton = $(upButtonHtml).click(function () {
        let index = $(this.parentElement).index();
        moveItem(index, index - 1);
    });

    // Down button moves item down one spot
    let $downButton = $(downButtonHtml).click(function () {
        let index = $(this.parentElement).index();
        moveItem(index, index + 1);
    });

    // Add click hander for done button
    $doneButton = $(doneButtonHtml).click(function () {
        // Remove item from list
        let index = $(this.parentElement).index();
        removeItem(index);
    });

    // Add all buttons to the new item, and add new item to list
    $newItem.append($upButton, $downButton, $doneButton);
    $("ol").append($newItem);
}

function moveItem(fromIndex, toIndex) {
    // TODO: Complete the function
    // if from index is higher then it is move up button
    if (fromIndex > toIndex) {
        // if item is at top and enters move up button it wont move
        if (fromIndex !== 0) {
            // detach item
            let item = $("ol").children().eq(fromIndex).detach();
            // insert before the item
            $(item).insertBefore($("ol").children().eq(toIndex));
        }
    }
    // if from index is lower then it is move down button
    else {
        // number of childrens
        let len = $("ol").children().length;
        // if item is at bottom and enters move down button it wont move
        if (toIndex < len) {
            // detach the item
            let item = $("ol").children().eq(fromIndex).detach();
            // move below of the item 
            $(item).insertAfter($("ol").children().eq(toIndex - 1));
        }
    }

}

function removeItem(index) {
    // TODO: Complete the function
    $("ol").children().eq(index).remove();
}

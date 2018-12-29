var inventory = document.getElementsByClassName("inventory-list-container")[0];
var inventory_scroll_up_button = document.getElementsByClassName("inventory-before")[0];
var inventory_scroll_down_button = document.getElementsByClassName("inventory-after")[0];
var lastKnownScrollPosition = 0;
var ticking;

function scrollIt(scroll_pos){
    inventory.clientY = scroll_pos;
    console.log(inventory.clientY);
}

inventory.addEventListener("scroll", (e) => {
    lastKnownScrollPosition = inventory.scrollY;

    if(!ticking){
        window.requestAnimationFrame(() => {
            scrollIt(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});
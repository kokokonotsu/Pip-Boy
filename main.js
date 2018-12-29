var inventory = document.getElementsByClassName("inventory-list-container")[0];
var inventory_scroll_up_button = document.getElementsByClassName("inventory-before")[0];
var inventory_scroll_down_button = document.getElementsByClassName("inventory-after")[0];
var lastKnownScrollPosition = 0;
var ticking;

function scrollItUp(){
    inventory.scrollBy(0, -50);
    console.log(inventory.scrollTop);
}
function scrollItDown(){
    inventory.scrollBy(0, 50);
    console.log(inventory.scrollTop);
}
inventory_scroll_up_button.addEventListener("click", (e) => {
    lastKnownScrollPosition = inventory.scrollTop;
    if(!ticking){
        window.requestAnimationFrame(() => {
            scrollItUp();
            ticking = false;
        });
        ticking = true;
    }
});
inventory_scroll_down_button.addEventListener("click", (e) => {
    lastKnownScrollPosition = inventory.scrollTop;
    if(!ticking){
        window.requestAnimationFrame(() => {
            scrollItDown();
            ticking = false;
        });
        ticking = true;
    }
});

var inventory = document.getElementsByClassName("inventory-list-container")[0];
var inventory_scroll_up_button = document.getElementsByClassName("inventory-before")[0];
var inventory_scroll_down_button = document.getElementsByClassName("inventory-after")[0];
var inventoryHeight = inventory.offsetHeight;
var offsetChangeUp = ((inventoryHeight/100) * 10) * -1;
var offsetChangeDown = (inventoryHeight/100) * 10;
var lastKnownScrollPosition = 0;
var ticking;
console.log(offsetChangeUp);
function scrollItUp(){    
    inventory.scrollBy(0, offsetChangeUp);
}
function scrollItDown(){
    inventory.scrollBy(0, offsetChangeDown);
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

var inventory = document.getElementsByClassName("inventory-list-container")[0];
var inventory_scroll_up_button = document.getElementsByClassName("inventory-before")[0];
var inventory_scroll_down_button = document.getElementsByClassName("inventory-after")[0];
var inventoryHeight = inventory.offsetHeight;
var offsetChangeUp = ((inventoryHeight/100) * 10) * -1;
var offsetChangeDown = (inventoryHeight/100) * 10;
var inventoryItemCheckBoxes = document.getElementsByClassName("inventory-item-checkbox");
var lastKnownScrollPosition = 0;
var ticking;
console.log(offsetChangeUp);
for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
    inventoryItemCheckBoxes[i].setAttribute("onclick", "check(event)");
}
function check(e){
    if(!e.target.classList.contains("checked")){
        e.target.classList.add("checked");
        for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
            if(inventoryItemCheckBoxes[i] != e.target){
                inventoryItemCheckBoxes[i].classList.remove("checked");
            }
        }
    }
    else if(e.target.classList.contains("checked")){
        e.target.classList.remove("checked");
    }
}
//Scrolling via JS
function scrollItUp(){    
    inventory.scrollBy(0, offsetChangeUp);
}
function scrollItDown(){
    inventory.scrollBy(0, offsetChangeDown);
}
//Experimental Code
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

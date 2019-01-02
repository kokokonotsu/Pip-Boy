var inventory = document.getElementsByClassName("inventory-list-container")[0];
var inventoryItem = document.getElementsByClassName("inventory-item-container");
var inventory_scroll_up_button = document.getElementsByClassName("inventory-before")[0];
var inventory_scroll_down_button = document.getElementsByClassName("inventory-after")[0];
var inventoryHeight = inventory.offsetHeight;
var offsetChangeUp = ((inventoryHeight/100) * 10) * -1;
var offsetChangeDown = (inventoryHeight/100) * 10;
var inventoryItemCheckBoxes = document.getElementsByClassName("inventory-item-checkbox");
var lastKnownScrollPosition = 0;
var ticking;
console.log(offsetChangeUp);
//Add Attributes
for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
    inventoryItemCheckBoxes[i].setAttribute("onclick", "check(event)");
}
for(let i = 0; i < inventoryItem.length; i++){
    inventoryItem[i].setAttribute("onmouseover", "itemHover(event)");
    inventoryItem[i].setAttribute("onmouseleave", "itemOut(event)");
}
//CheckBox Function
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
//Item Hover Function
function itemHover(e){
    if(e.target.firstChild.className == "inventory-item-checkbox"){ 
        e.target.firstChild.classList.add("highlight");
    } else if(e.target.className == "inventory-item-checkbox"){
        e.target.classList.add("highlight");
    }
}
//Item Out Function
function itemOut(e){
    if(e.target.firstChild.className == "inventory-item-checkbox" || e.target.className == "inventory-item-checkbox"){
        e.target.firstChild.classList.remove("highlight");
        console.log("I am running");

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

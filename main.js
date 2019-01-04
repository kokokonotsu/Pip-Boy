var inventory = document.getElementsByClassName("inventory-list-container")[0];
var inventoryItem = document.getElementsByClassName("inventory-item-container");
var inventoryItemContainer = document.getElementsByClassName("item-container");
var inventory_scroll_up_button = document.getElementsByClassName("inventory-before")[0];
var inventory_scroll_down_button = document.getElementsByClassName("inventory-after")[0];
var inventoryHeight = inventory.offsetHeight;
var stats = document.getElementById("stats-button");
var statsSpan = document.getElementById("stats-span");
var items = document.getElementById("items-button");
var itemsSpan = document.getElementById("items-span");
var data = document.getElementById("data-button");
var dataSpan = document.getElementById("data-span");
var offsetChangeUp = ((inventoryHeight/100) * 10) * -1;
var offsetChangeDown = (inventoryHeight/100) * 10;
var inventoryItemCheckBoxes = document.getElementsByClassName("inventory-item-checkbox");
var lastKnownScrollPosition = 0;
var ticking;
console.log(offsetChangeUp);
//Add Attributes
for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
    inventoryItemCheckBoxes[i].setAttribute("onclick", "check(event)");
    inventoryItemCheckBoxes[i].setAttribute("onmouseover", "itemHover(event)");
    inventoryItemCheckBoxes[i].setAttribute("onmouseleave", "itemOut(event)");
}
for(let i = 0; i < inventoryItem.length; i++){
    inventoryItem[i].setAttribute("onclick", "check(event)");
    inventoryItem[i].setAttribute("onmouseover", "itemHover(event)");
    inventoryItem[i].setAttribute("onmouseleave", "itemOut(event)");
}
for(let i = 0; i < inventoryItemContainer.length; i++){
    inventoryItemContainer[i].setAttribute("onclick", "check(event)");
    inventoryItemContainer[i].setAttribute("onmouseover", "itemHover(event)");
    inventoryItemContainer[i].setAttribute("onmouseleave", "itemOut(event)");
}
//CheckBox Function
function check(e){
    if(!e.target.classList.contains("checked") && e.target.classList.contains("inventory-item-checkbox")){
        e.target.classList.add("checked");
        for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
            if(inventoryItemCheckBoxes[i] != e.target){
                inventoryItemCheckBoxes[i].classList.remove("checked");
            }
        }
    }
    else if(e.target.classList.contains("inventory-item-container")){
        e.target.firstChild.classList.add("checked");
        for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
            if(inventoryItemCheckBoxes[i] != e.target.firstChild){
                inventoryItemCheckBoxes[i].classList.remove("checked");
            }
        }
    }
    else if(e.target.classList.contains("item-container")){
        e.target.previousSibling.classList.add("checked");
        for(let i = 0; i < inventoryItemCheckBoxes.length; i++){
            if(inventoryItemCheckBoxes[i] != e.target.previousSibling){
                inventoryItemCheckBoxes[i].classList.remove("checked");
            }
        }
    }
    // else {
    //     e.target.classList.remove("checked");
    // }
}
//Item Hover Function
function itemHover(e){
    if(e.target.classList.contains("inventory-item-checkbox")){ 
        e.target.classList.add("highlight");
        e.target.parentElement.style.border = "2px solid";
        //console.log("I am running");

    }
    else if(e.target.classList.contains("inventory-item-container")){
        e.target.firstChild.classList.add("highlight");
        e.target.style.border = "2px solid";
        //console.log("I am running");

    }
    // else if(e.target.classList.contains("item-container")){
    //     e.target.parentElement.firstChild.classList.add("highlight");
    //     e.target.parentElement.classList.style.border = "2px solid";
    // }
}
//Item Out Function
function itemOut(e){
    if(e.target.classList.contains("inventory-item-checkbox")){
        //console.log("I am running");
        e.target.classList.remove("highlight");
        e.target.parentElement.style.border = "2px solid transparent";
    } else
    if(e.target.classList.contains("inventory-item-container")){
        e.target.firstChild.classList.remove("highlight");
        e.target.style.border = "2px solid transparent";
    } 
    // else
    // if(e.target.classList.contains("item-container")){
    //     e.target.parentElement.firstChild.remove("highlight");
    //     e.target.parentElement.style.border = "2px solid transparent";
    //     //console.log("I am running");
    // }
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
//Radial Selector
var dial = document.getElementById("dial-switch");
var dialObject = {
    angles: [45, 90, 135],
    rotate: function(e){
        switch(e.target.id){
            case "stats-button": 
            dial.style.transform = "rotate(" + dialObject.angles[0].toString() + "deg)";
            //console.log("I am running");
            break;
            case "items-button":
            dial.style.transform = "rotate(" + dialObject.angles[1].toString() + "deg)";
            //console.log("I am running");
            break;
            case "data-button":
            dial.style.transform = "rotate(" + dialObject.angles[2].toString() + "deg)";
            //console.log("I am running");
            break;
            default:
            alert("No angle found");
        }
    },
    activate: function(e){
        switch(e.target.id){
            case "stats-button":
            if(!stats.classList.contains("active")){
                stats.classList.add("active");
                statsSpan.classList.add("active-font-color");
            }
            if(items.classList.contains("active")){
                items.classList.remove("active");
                itemsSpan.classList.remove("active-font-color");
            }
            if(data.classList.contains("active")){
                data.classList.remove("active");
                dataSpan.classList.remove("active-font-color");
            }
            break;
            case "items-button":
            if(!items.classList.contains("active")){
                items.classList.add("active");
                itemsSpan.classList.add("active-font-color");
            }
            if(stats.classList.contains("active")){
                stats.classList.remove("active");
                statsSpan.classList.remove("active-font-color");
            }
            if(data.classList.contains("active")){
                data.classList.remove("active");
                dataSpan.classList.remove("active-font-color");
            }
            break;
            case "data-button":
            if(!data.classList.contains("active")){
                data.classList.add("active");
                dataSpan.classList.add("active-font-color");
            }
            if(items.classList.contains("active")){
                items.classList.remove("active");
                itemsSpan.classList.remove("active-font-color");
            }
            if(stats.classList.contains("active")){
                stats.classList.remove("active");
                statsSpan.classList.remove("active-font-color");
            }
        }
    },
    hover: function(){
        return this.style.opacity = "1";
    }
}
stats.addEventListener("click", dialObject.rotate);
stats.addEventListener("click", dialObject.activate);
items.addEventListener("click", dialObject.rotate);
items.addEventListener("click", dialObject.activate);
data.addEventListener("click", dialObject.rotate);
data.addEventListener("click", dialObject.activate);
//Gauge
// var gauge = new RadialGauge({
//     renderTo: 'dial', // identifier of HTML canvas element or element itself
//     width: 200,
//     height: 300,
//     units: false,
//     title: false,
//     value: 180,
//     minValue: 180,
//     maxValue: 220,
//     majorTicks: [
//         '180','200','220'
//     ],
//     minorTicks: 2,
//     strokeTicks: false,
//     highlights: false,
//     colorPlate: '#222',
//     colorMajorTicks: '#f5f5f5',
//     colorMinorTicks: '#ddd',
//     colorTitle: '#fff',
//     colorUnits: '#ccc',
//     colorNumbers: '#eee',
//     colorNeedleStart: '#fff',
//     colorNeedleEnd: 'rgba(255, 160, 122, .9)',
//     valueBox: true,
//     animationRule: 'bounce'
// });
// // draw initially
// gauge.draw();
// // animate
// // setInterval(() => {
// //    gauge.value = Math.random() * -220 + 220;
// // }, 1000);


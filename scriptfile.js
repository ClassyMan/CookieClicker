CookieClicker = {
 start: function() {
  this.clickInterval = setInterval(function(){
   // Click the large cookie as fast as possible!
   document.getElementById("bigCookie").click();
  }, 1);
  this.goldInterval = setInterval(function(){
   // Click the golden cookie
   var shimmer = document.getElementsByClassName("shimmer")[0];
   if (shimmer) {
    shimmer.click();
   }
  }, 1000);
 },
 stop: function() {
  clearInterval(this.clickInterval);
  clearInterval(this.goldInterval);
 }
};
UpgradeClicker = {
 start: function() {
  this.buyInterval = setInterval(function(){
   // Now we need to buy stuff with our money.
   // Then try to buy the most expensive upgrade
   var upgrades = document.querySelectorAll(".upgrade.enabled[id!='upgrade0']"); 
   if (upgrades.length > 0) {
     var upgrade = [].slice.call(upgrades).reverse()[0];   
     if (upgrade) {
       upgrade.click();
     }
   } else {
    // Then try to buy the most-expensive item
    var last = [].slice.call(document.querySelectorAll(".product.enabled")).reverse()[0];
    if (last) {
     last.click();
    }
   }
  }, 10000);
 },
 stop: function() {
  clearInterval(this.buyInterval);
 }
};

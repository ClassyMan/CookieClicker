# CookieClicker
If you're addicted to http://orteil.dashnet.org/cookieclicker/ like I am, use this to automate away your addiction. 

Open up the js console (Ctrl + Shift + J in chrome) and paste the contents of scriptfile.js in there. Then use 

* CookieClicker.start()/CookieClicker.stop()
* UpgradeClicker.start()/UpgradeClicker.stop()

The goal here was to take the code I found elsewhere and make something that's grandmapocalypse proof. I can't find where I got the original code from but yunno, credit for most of it goes to them. 

There's cheats too if you just want it to end. Credit there goes to https://gist.github.com/ssmereka/6517444 

# Change your Mouse Cookies Per Second (MCPS) 
Game.computedMouseCps=123456789;

# Change your Cookies Per Second (CPS) 
Game.cookiesPs=123456789

# Spawn a Golden Cookie 
Game.goldenCookie.delay= 0;
Game.goldenCookie.life=0;
Game.goldenCookie.spawn();

# Add cookies to your current cookie supply 
Game.cookies= Game.cookies + 1000000000;

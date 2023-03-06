const food=["Nori","Adzuki beans","Black turtle beans","Cowpeas","Mung beans","Buckwheat","Quinoa","Okra","Kale","Chinese cabbage","Spinach","Enoki mushrooms"]

function generateFood(){
    const random =math.floor(math.random()*food.length);
    const item = food[random];
    document.getElementById("item").innerHTML=item;
    document.write(item);
}

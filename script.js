



async function  fetchdata(){
    try{
        var catdata = await fetch("https://cataas.com/api/cats")
        
        var berwery = await catdata.json()
        console.log(berwery)
        
        berwery.forEach(element => {
           
            var box = document.createElement("img")
            box.setAttribute("src", element.tags.gif)
            document.body.append(box)
            
        });
           
            
        
    } catch (error) {
        console.log(error)
    }
}
    
fetchdata()
var black = document.createElement(input)
black.placeholder="/cute/says/hello"
document.getElementById("blackcat").appendChild(black)
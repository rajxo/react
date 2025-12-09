export function List(){
    let fruitlist=[{id:1 ,name:"apple" ,calories:30},
                    {id:2,name:"banana",calories:47},
                    {id:3, name:"goava",calories:74},
                    {id:4,name:"orange",calories:55},
                    {id:5,name:"pinepple",calories:43}]


    fruitlist.sort((a,b)=>a.calories-b.calories);                
   
     let lowcalfruit = fruitlist.filter(fruit=>fruit.calories<50)
     let fruitli = lowcalfruit.map(fruit=><li>{fruit.name} {fruit.calories}</li>)

    return (
        <ul>
            {fruitli}
        </ul>
    )
}
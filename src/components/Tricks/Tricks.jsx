import Trick from "./Trick";

function Tricks({tricks}){
    let toRender;
    if(!tricks[0]){
        toRender = [
        {
            "stance": "unloaded",
            "name": "treflip",
            "obstacle": "flat ground",
            "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
            "id": 1
        }
    ]
    } else {
        toRender = tricks
    }
     toRender = toRender.map((trick)=>{
   
        return( 
                <Trick
                id = {trick.id}
                key= {`trick-${trick.id}`}
                stance = {trick.stance}
                name = {trick.name}
                obstacle = {trick.obstacle}
                tutorial = {trick.tutorial}
                />
            
        )
    })
    return(
        <div>
            {toRender}
        </div>
    )
}
export default Tricks;
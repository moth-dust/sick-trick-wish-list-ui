import Trick from "./Trick";

function Tricks({tricks}){
    let toRender;
    if(!tricks){
        toRender = [
        {
            "stance": "unloaded",
            "name": "treflip",
            "obstacle": "flat ground",
            "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
            "id": 1
        }
    ]
    }
    
    return(
        <div>
            <Trick toRender = {toRender}/>
        </div>
    )
}
export default Tricks;
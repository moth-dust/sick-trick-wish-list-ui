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
    
    return(
        <div>
            <Trick toRender = {toRender}/>
        </div>
    )
}
export default Tricks;
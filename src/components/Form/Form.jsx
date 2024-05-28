function Form({updateTricks}){
    function processSubmission(){
        const newTrick = {
            stance : document.getElementById('stance').value,
            name : document.getElementById('trick').value,
            obstacle : document.getElementById('obstacle').value,
            tutorial : document.getElementById('tutorial').value,
        }
        updateTricks(newTrick)
   
    }
    return(
    <div className="trick-submission">
        <select className="stance-select" id="stance">
            <option value={null}>Choose your Stance</option>
            <option value={'regular'}>regular</option>
        </select>
        <input className="trick-name" id="trick" placeholder="Name of Trick"></input>
        <select className="obstacle-select" id="obstacle">
            <option value={null}>Choose your Obstacle</option>
            <option value={'flat ground'}>flat ground</option>
        </select>
        <input className="tutorial-link" id="tutorial" placeholder="Link to Tutorial"></input>
        <button onClick={(e)=>{
            processSubmission()}}>Send It!</button>
    </div>
    )
};
export default Form;
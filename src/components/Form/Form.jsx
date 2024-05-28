function Form({/**updateFunction */}){

    return(
    <div className="trick-submission">
        <select className="stance-select">
            <option value={null}>Choose your Stance</option>
        </select>
        <input className="trick-name" placeholder="Name of Trick"></input>
        <select className="obstacle-select">
            <option value={null}>Choose your Obstacle</option>
        </select>
        <input className="tutorial-link" placeholder="Link to Tutorial"></input>
        <button onClick={(e)=>{
            console.log(e.target)
        }}>Send It!</button>
    </div>
    )
};
export default Form;
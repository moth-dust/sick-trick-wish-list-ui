function Trick({id, key, stance, name, obstacle, tutorial}){

    return(
        <ul className="trick-card" id={`${id}`} key={`${key}`}>
            <li>{`${stance}`}</li>
            <li>{`${name}`}</li>
            <li>{`${obstacle}`}</li>
            <li>{`${tutorial}`}</li>
        </ul>
    )
};
export default Trick;

// <ul className="trick" id={`${trick.id}`} key={`trick-${trick.id}`}>
// <li>Stance: hello</li>
// </ul>

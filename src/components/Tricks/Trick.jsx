function Trick({toRender}){
    console.log(toRender)
    return(
        <div>
            <h1>{`${toRender[0].stance}`}</h1>
        </div>
    )
};
export default Trick;
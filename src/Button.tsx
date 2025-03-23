interface ButtonProps{
    addValue: () => void;
    subtractValue: () => void;
}


function Button({ addValue, subtractValue}: ButtonProps){
    return(
        <>
        <button onClick={addValue}>ADD</button>
        <br/>
        <button onClick={subtractValue}>SUBTRACT</button>
        </>
    )
}

export default Button ;
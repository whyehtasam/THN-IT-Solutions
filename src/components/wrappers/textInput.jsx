function TextInput(props)
{
    return(

        <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
    <div className="label">
        <span className="label-text">{props.children}</span>
    </div>
    <input type="text" placeholder={"Enter "+props.children} className="input input-bordered w-full max-w-xs" />
    </label>
)
}


export default TextInput;

let FatB=(props)=>{

    return(
        <div>
           <h3> Fatarrow B</h3>
           
           <h6>Empolyee name:{props.ename}</h6>
           <h6>Empolyee loc:{props.esal}</h6>
           <hr/>
           <pre>{JSON.stringify(props)}</pre>
        </div>
    )
}
export default FatB
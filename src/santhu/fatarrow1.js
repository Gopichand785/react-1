import FatB from '../santhu/fatarrow';
let FatA=()=>{
    let name= "rahul gandhi",
         salary = 40000
    return (
        <div>
        <h4> Fatarrow A</h4>
        <FatB ename={name} esal={salary}/>
        </div>
    )
}
export default FatA
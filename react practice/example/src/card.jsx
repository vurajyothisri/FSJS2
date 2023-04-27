

function Card({myname,list,details}){
    
    
    return(
        <>This is card
        <div>
            {myname}
        </div>
        <ul>
            {list.map(l=>(
                <li key={l}>{l}</li>
            ))}
        </ul>
        <h1>{details.name?.first}</h1>
        </>
    )
}
export default Card

import './StylingComp.css'
const StylingComp =()=>{
    const test = {
        color :"blue",
        fontSize:"100px"
    }

    return(
        <>
            {/* Inline css */}
            <h1 style={{color:"red"}}>Styling to Component using inline css</h1>
            {/* Internal css */}
            <h2 style={test}>Styling to component using internal css</h2>

            {/* External css */}
            <h3 className="stylingComp">Styling to Component using External css</h3>
        </>
    )

}

export default StylingComp;
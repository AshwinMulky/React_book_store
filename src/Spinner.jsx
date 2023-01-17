import { Dna } from "react-loader-spinner"

const Spinner = ( {visible} ) => {
    return (
        
            visible ? (<div className={"d-flex justify-content-center spinner"}>
                <div className={"spinner-overlay"}></div>
            <Dna
                visible={visible}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
         </div>
         ) : (
            <></>
         )    
    )
}

export default Spinner
/* eslint-disable react/prop-types */

const OptionSelection = ({arrayItems}) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-4xl mb-20">React AI App</h1>

           <div >
            {
                arrayItems?.map((item) => {
                    return <>
         
                    <div className="border-4 mb-4 py-6 ">

                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">{item.description}</p>
                    </div>
             
                    </>
                })
            }
           </div>
        </div>
    );
};

export default OptionSelection;
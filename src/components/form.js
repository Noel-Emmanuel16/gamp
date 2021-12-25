import React from 'react'

const Form = () => {
    return (
        <form action="" className="flex flex-col mt-4 w-full">
            <input type="text" className="p-4 rounded-lg border border-[#858585] mb-2" placeholder="Email Address or Phone Number" />
            <input type="text" className="p-4 rounded-lg border border-[#858585] mb-2" placeholder="Password" />
            <button className="p-4 rounded-lg  bg-[#49A05C] text-white" >Login</button>
        </form>
    )
}

export default Form

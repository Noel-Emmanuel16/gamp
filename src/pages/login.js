import React from 'react'
import Form from '../components/form'
import Logo from '../components/logo'

const Login = () => {
    return (

        <div className="max-w-full min-h-screen flex items-center justify-center bg-[#F5FAFF]">
            <div className="container flex justify-between items-center lg:p-0 p-4">
                <div className="lg:w-4/12 w-full">
                    <div className="w-full h-auto flex justify-center flex-col items-center lg:p-8 p-2 rounded-lg border-[#858585] border bg-white">
                        <Logo />
                        <Form />
                        <span className="font-semibold text-center inline-block p-6 mt-2">
                            Forgot Password?
                        </span>
                    </div>
                    <span className="text-gray-400 text-center p-6 mt-2 inline-block w-full">
                        © GAMP
                    </span>
                </div>
                <img
                    src="/design-pics/artboard.png"
                    className="w-auto h-auto"
                    alt=""
                    className="lg:block hidden"
                />
            </div>
        </div>
    )
}

export default Login

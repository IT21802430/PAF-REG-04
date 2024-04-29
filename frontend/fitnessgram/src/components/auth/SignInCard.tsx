import React, { useState } from "react"; 
import { Modal } from "../ui/Modal"; 
import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline"; 
import Image from "next/image"; 

const SignInCard: React.FC<{
    show: boolean; 
    onClose: (show: boolean) => void;
}> = ({ show, onClose }) => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [showModal, setShowModal] = useState(show); 

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }; 

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }; 

    const handleSignIn = () => {
        //handle signin logic here 
        setShowModal(false);
    }; 

    const handleSignInWithGoogle = () => {
        //handle signin with google logic here
    }; 

    const handleCloseModal = () => {
        setShowModal(false);
    }; 

    return (
        <Modal show={show}>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 relative">
                <XCircleIcon 
                    className="text-gray-600 absolute top-4 right-4 cursor-pointer" 
                    width={20}
                    height={20} 
                    onClick={() => onClose(false)}
                />
                <p className="text-gray-700">{showModal}</p>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address {showModal ? "hi" : "no"}
                        </label>
                        <div className="mt-1">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required 
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:border-gray-400 focus:z-10 sm:text-sm" 
                                placeholder="Enter your email address"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password" 
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="mt-1">
                            <input 
                                id="password" 
                                name="password"
                                type="password"
                                autoComplete="current-password" 
                                required 
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:border-gray-400 focus:z-10 sm:text-sm" 
                                placeholder="Enter your password"
                            />
                        </div>
                    </div> 

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                id="remember_me" 
                                name="remember_me" 
                                type="checkbox" 
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember_me" 
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember Me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-100 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div> 

                    <div className="mt-6 w-full">
                        <a
                            href="#" 
                            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <Image 
                                width={50}
                                height={50}
                                className="h-6 w-6"
                                src="https://www.svgrepo.com/show/506498/google.svg"
                                alt="google icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Modal>
    );
}; 

export default SignInCard;
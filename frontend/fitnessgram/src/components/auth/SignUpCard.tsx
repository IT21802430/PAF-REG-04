import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react"
import { Modal } from "../ui/Modal"; 
import Image from "next/image";

const SignUpCard: React.FC<{
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
    } 

    const handleSignIn = () => {}; 

    const handleSignInWithGoogle = () => {}; 

    const handleCloseModal = () => {
        setShowModal(false);
    }; 

    return (
        <Modal show={show}>
            <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 relative">
                <XCircleIcon 
                    className="text-gray-600 absolute top-4 right-4 cursor-pointer"
                    width={20}
                    height={20}
                    onClick={() => onClose(false)}
                />
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
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

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Re-Enter Password
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

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
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

export default SignUpCard;
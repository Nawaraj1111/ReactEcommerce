import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-2xl font-semibold text-center mb-6">Create an Account</h3>

                {/* Full Name Input Box */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        placeholder="Enter your full name" 
                        required 
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email Input Box */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter email address" 
                        required 
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password Input Box */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Create a password" 
                        required 
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Confirm Password Input Box */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Confirm your password" 
                        required 
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Registration Button */}
                <button 
                    type="submit" 
                    className="w-full bg-emerald-500 text-2xl rounded-lg py-2 hover:bg-blue-600 transition"
                >
                    Register
                </button>

                {/* Login Link */}
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? 
                    <Link to="/login" className="text-blue-500 font-semibold"> Login</Link>
                </p>
            </div>
        </div>
    );
}

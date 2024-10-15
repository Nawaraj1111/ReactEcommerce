import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h3 className="text-2xl font-semibold text-center mb-6">Log In</h3>
                
                {/* Email Input */}
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
                {/* Password Input */}
                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                    </div>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password" 
                        required 
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                      <Link to="#" className="text-blue-500 text-right">Forgot Password?</Link>

                </div>
                {/* Login Button */}
                <Link to="/">
                    <button type="submit" className="w-full bg-yellow-800 text-gray-800 rounded-lg py-2 hover:bg-blue-600 transition">
                        Log In
                    </button>
                </Link>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? 
                    <Link to="/register" className="text-blue-500 font-semibold"> Register</Link>
                </p>
            </div>
        </div>
    );
}

import './css/register.css'
import {Link} from "react-router-dom"
export const Register =()=>{
    return(
        <div class="registration_form">
    <form action="#">
      <h3>Create an Account</h3>

      {/* <!-- Full Name input box --> */}
      <div class="input_box">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="Enter your full name" required />
      </div>

      {/* <!-- Email input box --> */}
      <div class="input_box">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter email address" required />
      </div>

      {/* <!-- Password input box --> */}
      <div class="input_box">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" required />
      </div>

      {/* <!-- Confirm Password input box --> */}
      <div class="input_box">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
      </div>

      {/* <!-- Registration button --> */}
      <button type="submit">Register</button>

      <p class="login_link">Already have an account? <Link to="/login">Login</Link> </p>
    </form>
  </div>
    )
}
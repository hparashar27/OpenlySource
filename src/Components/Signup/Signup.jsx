import React from 'react'
import avatar from "../../assets/images/avatar.svg"
import earthimg from "../../assets/images/earthimg.png"
import wave from "../../assets/images/bgg.png"
import '../Login/Login.css'
import { Link } from 'react-router-dom'

export default function Signup(props) {
	const inputs = document.querySelectorAll(".logininput");

	function addcl(){
		let parent = this.parentNode.parentNode;
		parent.classList.add("focus");
	}
	
	function remcl(){
		let parent = this.parentNode.parentNode;
		if(this.value === ""){
			parent.classList.remove("focus");
		}
	}

	inputs.forEach(input => {
		input.addEventListener("focus", addcl);
		input.addEventListener("blur", remcl);
	});
  return (
    <div>
	<img class="wave" src={wave} alt="null"/>
	<div class="container">
		<div class="img">
			<img src={earthimg} alt="networking"/>
		</div>
		<div class="login-content">
			<form action="index.html">
			   <div class="finalprofile">
			   <div class="profile-pic-div">
				<img src={avatar} id="photo" alt='avatar'/>
				<input type="file" id="file"/>
				<label for="file" id="uploadBtn">Choose Photo</label>
			  </div>
			</div>
				<h2 class="title toot">Signup</h2>
           		<div class="input-div one">
           		   <div class="iconforlogininput">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Set username</h5>
           		   		<input type="text" class="logininput"  id="logggin"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="iconforlogininput"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Your Email-id</h5>
           		    	<input type="password" class="logininput" id="passsword"/>
            	   </div>
            	</div>
                <div class="input-div pass">
           		   <div class="iconforlogininput"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Set Password</h5>
           		    	<input type="password" class="logininput" id="passsword"/>
            	   </div>
            	</div>
            	<a class="a" ><Link to="/Log-in">Login instead?</Link></a>
				<button class="finalbtn finalLogin">Sign-up</button>
            </form>
        </div>
    </div> </div>
  )
}

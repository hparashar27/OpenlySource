import React from 'react'
import avatar from "../../assets/images/avatar.svg"
import earthimg from "../../assets/images/earthimg.png"
import wave from "../../assets/images/bgg.png"
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login(props) {
	const inputs = document.querySelectorAll(".logininput");
	function addcl(){
		let parent = this.parentNode.parentNode;
		parent.classList.add("focus");
	}
	function dostuff(){
		let parent = this.parentNode.parentNode;
		if(parent.classList.contains("focus")){
			parent.classList.remove("focus");
		}
		else{
			parent.classList.add("focus");
		}
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
				<h2 class="title toot">Login</h2>
           		<div class="input-div one">
           		   <div class="iconforlogininput">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Login-id</h5>
           		   		<input type="text" class="logininput"  id="logggin" onClick={dostuff}/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="iconforlogininput"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="logininput" id="passsword" onClick={dostuff} />
            	   </div>
            	</div>
            	<a class="a"><Link to="/Sign-up">Sign-up instead?</Link></a>
				<button class="finalbtn finalLogin">Login</button>
            </form>
        </div>
    </div> </div>
  )
}

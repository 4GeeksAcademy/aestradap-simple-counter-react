import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const SecondsCounter = ({seconds}) => {

	
	
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">There is no time to lose!</h1>
			<p>
				<img src={rigoImage} />
			</p>

			<div className="text-center">
				<h1>Seconds Counter: {seconds}</h1>
			</div>
			
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default SecondsCounter;

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {DigitNumber} from './DigitNumber';

//create your first component
const SecondsCounter = ({seconds}) => {
//each second its converted to String,
//splited to charArray of strings and
//mapping in a new array where the Number function converts a string to a number. 
	let arr = seconds.toString().split('').map(Number);

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">There is no time to lose!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<div className="row">
				<div className="col-2"/>
    			<div className="col-8">
					<div className="card-group">
						<div className="card text-center bg-dark text-light border">
							<div className="card-body">
							<i className="bi bi-clock" style="font-size: 2rem; color: cornflowerblue;"></i>
								<p className="card-text" style={{fontSize:100}}>
								<i className="bi bi-clock" style="font-size: 2rem; color: cornflowerblue;"></i>
								</p>
								<i className="bi bi-clock" style="font-size: 2rem; color: cornflowerblue;"></i>
							</div>
        				</div>	
						<DigitNumber digit = {arr[arr.length - 5]}/>
						<DigitNumber digit = {arr[arr.length - 4]}/>
						<DigitNumber digit = {arr[arr.length - 3]}/>
						<DigitNumber digit = {arr[arr.length - 2]}/>
						<DigitNumber digit = {arr[arr.length - 1]}/>
					</div>
				</div>
					<div className="col-2"/>
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

var x=document.getElementById('select').value;
function run(){
	 x =document.getElementById('select').value;
	console.log(parseInt(x)+1);
	fetch('https://kontests.net/api/v1/all')
	.then(response => response.json())
	.then(response =>{
		console.log(response)
		const name= response[x].name;
		const url = response[x].url;
		const starttime=response[x].start_time;
		const endtime=response[x].end_time;
		const _duration = response[x].duration
		const check = response[x].in_24_hours;
		let status= response[x].status;
		const stime = starttime;
		const etime = endtime;
		const dateObj1 = new Date(stime);
		const dateObj2 = new Date(etime);
		const options = {
			  year: 'numeric',
			  month: 'long',
			  day: 'numeric',
			  hour: 'numeric',
			  minute: 'numeric',
			  second: 'numeric',
			  timeZoneName: 'short'
		};
		const formattedDate1 = dateObj1.toLocaleString('en-US', options);
		const formattedDate2 = dateObj2.toLocaleString('en-US', options);
		document.getElementById('name').innerHTML=name;
		document.getElementById('url').innerHTML=`<a href="${url}">${url}</a>`
		document.getElementById('stime').innerHTML= formattedDate1;
		document.getElementById('etime').innerHTML=formattedDate2;

		let hours = Math.floor(parseInt(_duration) / 3600);
  		let minutes = Math.floor((parseInt(_duration) % 3600) / 60);
  		let seconds = parseInt(_duration) % 60;

		console.log(_duration)


		document.getElementById('duration').innerHTML = hours+"  hours "+minutes+" minutes "+seconds+ " seconds" ;
		document.getElementById('check').innerHTML = check;
		if(status=="BEFORE"){
			status="NOT BEGIN YET";
		}else{
			status="ONGOING";
		}
		console.log(status)
		document.getElementById('status').innerHTML = status;
	})
	.catch(err => alert(err));
	return x;
}

fetch('https://kontests.net/api/v1/all')
	.then(response => response.json())
	.then(response =>{
		for(let i=0;i<response.length;i++){
			const option = document.createElement('option')
			option.text=response[i].name;
			option.value = i;
			document.getElementById('select').appendChild(option)
		}
	})
	.catch(err => alert(err));

var options={
	strings: [".....","....."],
	typeSpeed: 100,
	backSpeed:100,
	loop:true
}
var typed=new Typed('.typing',options)
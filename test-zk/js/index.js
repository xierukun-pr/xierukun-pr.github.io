// 获取 url 传递的参数。=> 可通过参数传递配置相关倒计时时间 和 name
function getQueryVariable(variable) {
	let query = window.location.search.substring(1);
	let vars = query.split("&");
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return (false);
}

// 页面加载完成
window.addEventListener("load", () => {
	const day = document.querySelector(".day");
	const hour = document.querySelector(".hour");
	const minute = document.querySelector(".minute");
	const second = document.querySelector(".second");

	const getTime = () => {
		var EndTime = new Date("2021/06/17 08:30");
		var name = "谢玉清中考时间";


		// 如果 URL 中没有传递 相关参数
		if (getQueryVariable("date") == false || getQueryVariable("time") == false || getQueryVariable("name") == false) EndTime = new Date("2021/06/17 08:30"), name = "谢玉清中考";
		else EndTime = new Date(getQueryVariable("date") + " " + getQueryVariable("time")), name = decodeURI(getQueryVariable("name"));

		// document.getElementById("name").innerHTML = "距离" + decodeURI(name) + "还有";
		document.getElementById("name").innerHTML = `距离 ${decodeURI(name)}还有：`;
		document.getElementById("title").innerHTML = `${name}倒计时`;

		// 获取当前时间戳（ms）并计算差值
		var NowTime = new Date();
		var t = EndTime.getTime() - NowTime.getTime();

		if (t < 0) EndTime = new Date("2021/06/17 08:30"), name = "2021中考", t = EndTime.getTime() - NowTime.getTime();

		const days = Math.floor(t / 1000 / 60 / 60 / 24);


		day.innerHTML = days < 100 ? (days < 10 ? "00" + days : "0" + days) : days;

		const hours = Math.floor(t / 1000 / 60 / 60 % 24);

		hour.innerHTML = hours < 10 ? "0" + hours : hours;

		const minutes = Math.floor(t / 1000 / 60 % 60);
		minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;

		const seconds = Math.floor(t / 1000 % 60);
		second.innerHTML = seconds < 10 ? "0" + seconds : seconds;
	};
	getTime();

	let timer = setInterval(() => {
		getTime();
	}, 1000);


});


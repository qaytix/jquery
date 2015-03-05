window.onload = function() {
	var p = document.getElementsByTagName("p");
	for (i = 0; i < p.length; i++) {
		p[i].style.color = 'red';
		p[i].onmouseover = function() {
			this.style.color = 'green';
		}
		p[i].onmouseout = function() {
			this.style.color = '#FF9900';
		}
	}
}
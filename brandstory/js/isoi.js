/*메뉴호버(product)*/
 $(document).ready(function (){
	 $("#pro span").mouseenter(function(){
		 $("#p2").stop().animate({height: "500px"});
	 } );
	 $("#p2").mouseleave(function(){
		 $("#p2").stop().animate({height: "0"});
	 } );
 });



/*브랜드 이미지들 올라오기
let brand1 = document.querySelector("#f4>.b1");
window.addEventListener("scroll",function(){
	let value = window.scrollY
	console.log("scrollY",value);
	if(value>3000){
			brand1.style.animation = "b1 2s ease-out";
	}
});*/

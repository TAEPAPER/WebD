/**
 * 람다함수 => 화살표를 이용하는 함수
   proc3 = (매개변수) => {  }
 */
 
 
 function proc1(){
//1~10합구하기	 //continue 쓰기
	
}
 //proc1 = function(){} 이것도 가능
function proc2(){
	//1~200까지 짝수의 합
	hap =0;
	for(i =1 ; i<=100; i++){
		//if(i%2==0)hap += i;
		if(i%2 !=0) continue;
		hap += i;
	}
	
	document.querySelector('#result2').innerHTML = hap;
}

  //proc3 = function(){
    //사용자가 입력한 값-prompt-을 계속 더하고, 0을 입력하면 그때까지 누적된 값을 출력하는 프로그램	
  proc3 = (a) => {
	var hap = 0;
	var str = "";
	while(true){
		//입력
		su = parseInt(prompt("수를 입력하세요"));
		//비교
		if(su ==0) break;
		//더하고
		hap += su;
		str += su +" ";
	}
	res = "입력한 값들 : " + str + "<br>";
	res += "더한 합 : "+ hap;
	document.querySelector('#result3').innerHTML = res;
	
	
}

 proc4 = () =>{
	str = "";
	 for(i =1; i<=10; i++){
		for(k =1; k<=10; k++){
			if((i+k)%3 != 0){
				continue;
			}	
			str += `${i} ${k} , &nbsp;&nbsp;&nbsp;`;
		}
	}	
	document.querySelector('#result4').innerHTML  = str;
}

 proc5 = () =>{
	str = "";
	for( i =1; i<=100; i++){
		if(i%2==0 && i%3==0){
			str += `${i},`;
		}
		
	}
	
	document.querySelector('#result5').innerHTML = str;
	
}

proc6 = ()=>{
	grth  = "합이 100이상인 값들<br>";  //두수의 합이 100보다 큰 값들 저장
	leth = "합이 100미만인 값들<br>";  //두수의 합이 100미만인 값들 저장
	//입력
	while(true){
	su1 = parseInt(prompt("첫번째 숫자입력"));
	su2 = parseInt(prompt("두번째 숫자입력"));
	if(su1 ==0 && su2 ==0)break;
	//두수의 합 구하기
	hap = su1+ su2;
	if(hap>=100) {
		grth +=`${su1} ${su2} <br>` ;
	}
	if(hap<100){
		leth +=`${su1} ${su2} <br>` ;
	}
	}
	//출력 grth, leth

	document.querySelector('#result6').innerHTML = grth;
	document.querySelector('#result6').innerHTML += leth;
}
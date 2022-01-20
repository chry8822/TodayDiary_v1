
# TodayDiary (React practice)  
* [Diary link](https://chry8822.github.io/TrainingMakethPro/1%EB%A7%8C%EC%8B%9C%EA%B0%84%EC%9D%98%EB%B2%95%EC%B9%99.html) 🌐

 * 부족하지만 본 소스는 자유롭게 사용하셔도 좋습니다!.  
  

<br/>  



## 내용 및 목적 (Content)  
* 전문가가 되기 위해서 얼마나 훈련해야 하는지 알려주는 페이지.
* 직업과 하루 훈련시간을 입력하면 몇일 동안 훈련해야 전문가가 되는지 알려줍니다.  
  

<br/>  



## 기능 (Function)  
* 사용자의 직업과 훈련 시간 입력
* 입력 받은 내용을 결과로 도출
* 훈련하러 가기 버튼 클릭시 반전 등장
* 사이트 URL 복사 버튼(공유하기버튼)  
  

<br/>  



## 기술 스택 (Tech stack)  
<div align="center">  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />  
<img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" />  
</div>  

<br/>  



## 느낀점 그리고 문제점 (epilogue)  
<br>

* 시멘틱한 마크업 구조를 짜기 위해서 노력했고 후에 강사님의 코드와 어떤점이 다른지 왜 쓰였는 지에 대해서 비교하면서 작업했고 마크업 구조에 대해서 좀더 이해하는 시간이 되었습니다.

<br>


* 스타일 작업시 선택자를 좀더 세분하게 줘서 겹치거나 혼동되지 않게 작성해야 된다는걸 느꼈고 미디어쿼리를 사용하므로써 다양한 기기에서 사용자 편의성을 고려해서 코드를 작성해야 된다는걸 알게 되었습니다. 

<br>


* 자바스크립트로 사용자가 입력하는 내용을 받아서 결과를 도출 해줌으로써 자바스크립트의 사용 필요성에 대해서 알게 되었습니다.

  <br>

  
* 문제점 1 -  결과를 도출하는 버튼 클릭시 계속해서 새로고침 현상이 일어나서 그후에 코드들이 작동하지 않는거처럼 보여서 많은 시간동안 해결하지 못했는데 구글링과 스터디를 통해서 버튼의 submit은 정보를 전송후에 새로고침을 한다는걸 알게 되었고 버튼시 실행되는 함수에 preventDefault를 주어서 submit 의 기본 동작중에 하나인 reload를 안하게 막으니 해결 되었습니다.

 <br>

 
* 문제점 2 - 모달창을  열고 닫을때 모달창이 아닌(모달닫기버튼제외) 부분을 클릭 하였을때 닫히도록 만들었는데 함수안에 window.onclick(닫는함수) 만들어서 주었느데 위에 상황처럼 반응이 없던거처럼 보였습니다. 그리고 또 많은 시간동안 구글링과 지인과의 스터디로 여는 버튼을 클릭하는 순간 열기함수 안에 닫기함수 이벤트가 전부 전파되어서 열리자 마자 닫히는 거였습니다. 그래서 stopPropagation 으로 버블링을 막아주고 조건문으로 모달함수를 포함하지 않는 이라는 조건으로 닫는 함수를 호출하게 하였습니다. 그리고 마지막으로 window.onclick 닫기 함수 실행후 다시 모달이 꺼지면 window.onclick의 이벤트 핸들러도 사용할대가 없으므로 null을 주어서 꺼주었습니다.  

<br>

<br />

----
<div align="center">Generated using <a href="https://profilinator.rishav.dev/" target="_blank">Github Profilinator</a></div>

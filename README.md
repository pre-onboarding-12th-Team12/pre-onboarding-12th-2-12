# **Week 2**

동료학습을 통해서 팀에서 생각한 Todolist(선발과제)의 Best Pratice를 만들고 제출해주세요

> 💡 Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.
>
> 과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
>
> 이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요

<br>

# 과제목표

특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹사이트 구축

<h2>팀원 소개</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/wlsgus93"><img src="https://avatars.githubusercontent.com/u/35252854?v=4" width="100px;" alt=""/><br /><sub><b>김진현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/plou102"><img src="https://avatars.githubusercontent.com/u/107393773?v=4" width="100px;" alt=""/><br /><sub><b>박정민</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Donghyun-git"><img src="https://avatars.githubusercontent.com/u/78803763?v=4" width="100px;" alt=""/><br /><sub><b>안동현</b></sub></a><br /></td>
           <td align="center"><a href="https://github.com/datoybi"><img src="https://avatars.githubusercontent.com/u/41810621?v=4" width="100px;" alt=""/><br /><sub><b>윤다솜</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/kiseokDev"><img src="https://avatars.githubusercontent.com/u/107299502?v=4" width="100px;" alt=""/><br /><sub><b>이기석</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/haron-lee"><img src="https://avatars.githubusercontent.com/u/88657261?v=4" width="100px;" alt=""/><br /><sub><b>이도하</b></sub></a><br /></td>
     <tr/>
     <tr/>
  </tbody>
</table>
</div>

<br>

# 목차

- [**Week 2**](#week-2)
- [과제목표](#과제목표)
- [목차](#목차)
  - [🔗 배포 링크](#-배포-링크)
  - [⚙️ 실행 방법](#️-실행-방법)
  - [⌛ 진행 과정](#-진행-과정)
    - [과제 스케줄링 방식 및 회의](#과제-스케줄링-방식-및-회의)
    - [구현 기능 방법](#구현-기능-방법)
  - [브랜치 전략](#브랜치-전략)
  - [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
  - [🤝팀 규칙](#팀-규칙)
    - [formating 및 lint 전략](#formating-및-lint-전략)
    - [기타](#기타)
    - [협업툴](#협업툴)
  - [📂 폴더 구조](#-폴더-구조)
  - [🛠️ 기술 스택](#️-기술-스택)
- [👑 Best Practice](#-best-practice)
  - [목표](#목표)
    - [진행 방식](#진행-방식)
    - [Assignment 1 이슈 목록](#assignment-1-이슈-목록)
    - [Assignment 2 다섯번째 셀마다 광고 이미지 출력](#assignment-2-다섯번째-셀마다-광고-이미지-출력)
    - [Assignment 3 무한 스크롤](#assignment-3-무한-스크롤)
    - [Assignment 4 이슈 상세 화면](#assignment-4-이슈-상세-화면)
    - [Assignment 5 공통 헤더](#assignment-5-공통-헤더)
    - [Assignment 6 데이터 요청 중 로딩 표시](#assignment-6-데이터-요청-중-로딩-표시)
    - [Assignment 7 에러 화면 구현](#assignment-7-에러-화면-구현)
    - [Assignment 8 마크다운 렌더링 라이브러리](#assignment-8-마크다운-렌더링-라이브러리)

<br>

## 🔗 배포 링크

https://github-issues-12.netlify.app/

![image](https://github.com/FRONTENDSCHOOL5/final-15-Tripillow/assets/88657261/d982b0f8-2f8c-46a8-92ae-cf3284bd6510)

<br>

## ⚙️ 실행 방법

```
npm install
npm run start
```

- git clone후, 위의 명령어를 순서대로 실행하면 프로젝트를 이용하실 수 있습니다.

<br>

## ⌛ 진행 과정

### 과제 스케줄링 방식 및 회의

- day1 : 회의를 통해 Best Practice 도출
- day2 : 초기세팅 및 공통 세팅, 각자 기능 구현 및 진행상황 공유
- day3 : Readme작성, 리팩토링 및 배포

### 구현 기능 방법

- Best Practice 도출
- 각자 기능팀내 업무 분담

<br>

## 브랜치 전략

<img src="https://github.com/wlsgus93/pre-onboarding-12th-1-12/assets/35252854/31806487-9c20-4b5c-8bf0-f7b49d536af9" alt=""/>
<br>

- upstream에는 main(배포용), dev(개발용) 브랜치 존재
- 브랜치명: feature/구현기능
- ex: feature/todoForm
- 개인 원격 저장소 fork한뒤 작업한뒤 원본 저장소의 origin:dev으로 PR 날림
- 팀원 승인 받으면 origin:dev=> origin:main에 merge
- Pull request시에 reviewer 3명 이상 Approve시 merge 가능

<br>

## 커밋 메시지 컨벤션

| 타입             | 설명                                                      |
| ---------------- | --------------------------------------------------------- |
| Feat             | 새로운 기능 추가                                          |
| Fix              | 버그 수정                                                 |
| Env              | 개발 환경 관련                                            |
| Style            | 코드 자체의 변경이 없는 경우, formatting, semicolon 등    |
| Refactor         | 코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일)   |
| Design           | CSS 등 사용자 UI 디자인 변경                              |
| Comment          | 필요한 주석 추가 및 변경                                  |
| Docs             | 내부 문서 추가/수정                                       |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                    |
| Chore            | 빌드, 패키지 매니저 수정, 그 외 기타 수정 (.gitignore 등) |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우       |
| Remove           | 파일 또는 폴더를 삭제하는 작업만한 경우                   |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                    |
| !HOTFIX          | 급하게 치명적인 버그를 고치는 경우                        |

<br>

## 🤝팀 규칙

### formating 및 lint 전략

```json
{
  //formating
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true
}
```

```json
//Lint
"rules": {
  "no-var": "error", // var 금지
  "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
  "eqeqeq": "error", // 일치 연산자 사용 필수
  "dot-notation": "error", // 가능하다면 dot notation 사용
  "no-unused-vars": "warn" // 사용하지 않는 변수 금지
},
```

### 기타

- 폴더: 소문자
- 함수 : arrowfunction
- 함수이름: camel
- 컴포넌트: pascal
- 훅,로직파일: camel
- 상수변수: 대문자

### 협업툴

<br>

## 📂 폴더 구조

```
project-root/
│
├── public/ # 정적 파일들
│ ├── index.html
│ └── manifest.json
│
├── src/ # 소스 코드
│ ├── api/           # api 함수들
│ ├── components/    # 재사용 가능한 컴포넌트들
│ ├── contexts       # context 관리 폴더
│ ├── hooks/         # custom hooks
│ ├── pages/         # 페이지 또는 뷰 컴포넌트
│ ├── router/        # 라우팅 관련 설정
│ ├── style/         # style 폴더
│ ├── types/         # type 관리 폴더
│ ├── utils/         # 공통 함수
│ ├── App.tsx        # App 컴포넌트
│ ├── index.tsx      # 진입점 파일
│ └── GlobalStyle.ts # 전역 스타일 설정파일
│
├── .gitignore
├── .eslintignore
├── .eslintrc
├── .prettierignore
├── .prettierrc.js
├── package.json
├── tsconfig.json
└── README.md


```

<br>

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Typescript-blue?style=square"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-56347C?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon Amplify-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>

<br>
<br>

# 👑 Best Practice

## 목표

특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹사이트 구축

### 진행 방식

- 각자 개발한 뒤 가장 Best Practice 라고 생각되는 걸 선정하여 리팩토링 하는 방식

<br>

### Assignment 1 이슈 목록

- 이슈 목록 화면 가져오기 API 활용
- open 상태의 이슈 중 코멘트가 많은 순으로 정렬
- 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | octokit 라이브러리 사용하여 api에 정의된 코멘트 순으로 Get해와서 map으로 리스팅  |
| 박정민 | axios 사용, url에 sort=comments를 붙여서(쿼리) 통신하여 데이터를 받아와서 렌더링 |
| 윤다솜 | axios를 이용하여 api 호출, 쿼리스트링을 이용하여 comment 순으로 정렬한 데이터를 가져와 렌더링 |
| 이기석 | 데이터를 가져와 프론트에서 comment순으로 정렬 |
| 이도하 | octokit 라이브러리를 사용, useOctokit custom hook을 만들어 response에서 렌더링 시 필요한 데이터만 필터링 하여 return 후 Home 컴포넌트에서 데이터 받아와서 렌더링 |

**👑 Best Practice**

- axios를 이용하여 api 호출, 쿼리스트링을 이용하여 comment 순으로 정렬한 데이터를 가져와 렌더링

<br>

### Assignment 2 다섯번째 셀마다 광고 이미지 출력

- 다섯번째 셀마다 광고 이미지 출력

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | 이슈 목록 map함수에서 index의 조건부하에 광고이미지 삽입 |
| 박정민 | 데이터를 받아와 for 반복문 안에서 splice를 사용하여 광고 자리에 객체를 추가한 후 컴포넌트에서 광고와 데이터를 구분하여 렌더링 |
| 윤다솜 | for 반복문 안에서 다섯번째 셀인 경우, 조건을 주어 광고 이미지 표출, 조건문을 변수로 만들어 조건문 캡슐화  |
| 이기석 | 데이터를 map 함수로 렌더링할떄 조건문에 요구사항 함수를 검사하여 통과시 광고 컴포넌트 추가 |
| 이도하 | issues 데이터를 map으로 각각 IssueItem 컴포넌트로 렌더링 해줄 때 Ad props(boolean)를 전달, issues 데이터의 index가 3과 같거나 크고 (index - 3) % 4가 0과 같을 때는 true를 전달하여 Ad props가 true이면 이미지 배열에서의 이미지를 랜덤으로 렌더링 |

**👑 Best Practice**

- for 반복문 안에서 다섯번째 셀인 경우, 조건을 주어 광고 이미지 표출
- 조건문을 변수로 만들어 조건문 캡슐화

<br>

### Assignment 3 무한 스크롤

- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | IntersectionObserver를 이용하여 구현 |
| 박정민 | IntersectionObserver를 사용하여 구현, 옵저버가 보이면 page + 1을 해주고 page의 state가 변화함에 따라 api 통신을 하여 받은 데이터를 기존 데이터에 붙여서 구현 |
| 윤다솜 | Intersection Observer를 사용하여 구현 |
| 이기석 | Intersection Observer를 사용하여 구현  |
| 이도하 | octokit의 url 중 page=${pagenum}안에 무한 스크롤 시 넣어줄 currentPage useState 값을 handleScroll 함수에서 scroll이 바닥에 닿을 때마다 +1 해주어 새로운 데이터를 불러와서 렌더링. debounce 기능을 위해 setTimeout 사용 |

**👑 Best Practice**

- IntersectionObserver를 사용하여 구현 옵저버가 보이면 page + 1을 해주고 page의 state가 변화함에 따라 api 통신을 하여 받은 데이터를 기존 데이터에 붙여서 구현

<br>

### Assignment 4 이슈 상세 화면

- 이슈의 상세 내용 표시
- ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문’ 표시

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | useParam으로 issue Number를 전달하여 octokit api로 요청후 렌더링 |
| 박정민 | navigate의 state로 해당 list의 issues_number 값을 api에 요청하여 데이터를 받아 렌더링 |
| 윤다솜 | param으로 issue id를 전달하여 detail data를 fetch |
| 이기석 | param으로 issue id를 전달하여 detail data를 fetch |
| 이도하 | 각 IssueItem을 클릭 할 경우 IssueItem에서 navigate로 /detail/:id로 이동하면서 state로 해당 item의 데이터를 전달 후 렌더링 |

**👑 Best Practice**

- param으로 issue id를 전달하여 detail data를 fetch

<br>

### Assignment 5 공통 헤더

- 두 페이지는 공통 헤더를 공유
- 헤더에는 Organization / Repository Name이 표시

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | 상수변수로 직접 작성 |
| 박정민 | name을 직접 작성하여 사용함 |
| 윤다솜 | constants.ts에 constant 변수 값으로 선언하여 공통으로 공유, 공통 Header 컴포넌트를 구현하여 재사용   |
| 이기석 | useParam을 통해  param을  가져와서 렌더링 하는 공통함수 작성  |
| 이도하 | name을 직접 지정, header 컴포넌트를 App.tsx에서 모든 경로에서 공통적으로 사용 |

**👑 Best Practice**

- constants.ts에 constant 변수 값으로 선언하여 공통으로 공유 공통 Header 컴포넌트를 구현하여 재사용

<br>

### Assignment 6 데이터 요청 중 로딩 표시

- 데이터 요청 중 로딩 표시

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | useState로 isloading을 통해서 데이터 불러오면 false 아니면 true로 로딩표시 조건부 렌더링 |
| 박정민 | useState boolean 값으로 데이터 요청시 true, 요청 완료시 false로 로딩 표시가 보이도록 구현 (스피너는 css로 구현) |
| 윤다솜 | api통신이 시작할 때 isLoading 값을 false로 두고, 결과가 반환되었을 때 true로 값을 변환, 로딩중일 때는 스피너를 표출 |
| 이기석 | 데이터 패칭함수 로직 전후로 useState로 생성한 isloading을 통해 핸들링 |
| 이도하 | Skeleton 컴포넌트 생성 하여 useOctokit안의 getOctokit 함수가 실행될 때 isLoading useState값으로 데이터 요청 시작시 false, 요청 성공시 true로 변경 되면서 false일 동안 skeleton 컴포넌트를 렌더링 |

**👑 Best Practice**

- useState boolean 값으로 데이터 요청시 true, 요청 완료시 false로 로딩 표시가 보이도록 구현 (스피너는 css로 구현)

<br>

### Assignment 7 에러 화면 구현

- 에러 화면 구현

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | 없는 경로일때 Error페이지 navigate |
| 박정민 | createBrowserRouter에서 errorElement를 설정하여 없는 경로일 경우 404 페이지 띄워주기 |
| 윤다솜 | rotuer 404 페이지 에러 화면 구현, api 통신 에러시 오류 ui 구현 |
| 이기석 | ErrorBoundary로 에러 핸들링  |
| 이도하 | 없는 경로일 경우 404 페이지 띄워주기, ErrorBoundary로 에러 통제하기 |

**👑 Best Practice**

- **잘못된 접근시 404 페이지, api 통신 에러시 에러 페이지**, ErrorBoundary 에러 통제

<br>

### Assignment 8 마크다운 렌더링 라이브러리

- 마크다운 렌더링 라이브러리 사용

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 | react-markdown라이브러리를 사용 |
| 박정민 | react-markdown 라이브러리를 사용하여 마크다운 렌더링 구현 및 web-vitals 라이브러리를 사용하여 스타일 추가 |
| 윤다솜 | react-markdown 라이브러리를 사용하여 마크다운 렌더링 구현 |
| 이기석 | react-markdown 라이브러리를 사용 |
| 이도하 | react-markdown 라이브러리를 사용하여 렌더링 할 때 ReactMarkdown으로 감싸서 렌더링 |

**👑 Best Practice**

- react-markdown 라이브러리를 사용하여 렌더링 할 때 `<ReactMarkdown>`으로 감싸서 렌더링
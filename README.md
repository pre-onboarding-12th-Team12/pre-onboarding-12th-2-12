# **Week 3**

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
    - [Assignment 1 ]()
    - [Assignment 2 ]()
    - [Assignment 3 ]()
    - [Assignment 4 ]()
    - [Assignment 5 ]()
    - [Assignment 6 ]()
    - [Assignment 7 ]()
    - [Assignment 8 ]()

<br>

## 🔗 배포 링크

https://www.naver.com/

![image](https://github.com/pre-onboarding-12th-Team12/pre-onboarding-12th-2-12/assets/107299502/83a1b323-0752-469b-abc8-ea119ab43b3c)


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

### Assignment 1
-요구사항1
-요구사항2 

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample



<br>

### Assignment 2
-요구사항1
-요구사항2 

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample



<br>

### Assignment 3
-요구사항1
-요구사항2 

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample


<br>

### Assignment 4
-요구사항1
-요구사항2

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample


<br>

### Assignment 5
-요구사항1
-요구사항2 

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample


<br>

### Assignment 6
-요구사항1
-요구사항2 

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample


<br>

### Assignment 7
-요구사항1
-요구사항2

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample



<br>

### Assignment 8
-요구사항1
-요구사항2 

| <div style="width:100px">이름</div> | 의견 |
| :---: | --- |
| 김진현 |  |
| 박정민 |  |
| 윤다솜 |  |
| 이기석 |  |
| 이도하 |  |

**👑 Best Practice**

-bestPracticeExample


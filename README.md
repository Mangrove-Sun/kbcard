# 📌 자신이 원하는 사이트 레이아웃 클론

- 과제 기한:
  - 과제 수행 기간: 2022년 04월 14일(목) 19시 ~ 2022년 04월 28일(목) 19시
  - 코드 리뷰 기간: 2022년 04월 28일(목) 19시 ~ 2022년 05월 06일(금) 19시
- 내용:
  - 원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
  - 평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.

## 필수 요구사항

- [x] 정리된 README.md 파일을 제공하세요!
- [x] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [x] 제출 프로젝트에 확인 가능한 HTML, CSS 파일이 모두 있어야 합니다!
- [x] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항

- [x] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [ ] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [ ] SCSS를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [ ] BEM 방법론을 도입해보세요.

# KBCard Clone Coding

# 사이트
- 참고 사이트: [국민의 행복생활 파트너 KB국민카드](https://card.kbcard.com/CMN/DVIEW/HOAMCXPRIZZC0002)
- 클론 사이트: https://legendary-wisp-7433e4.netlify.app/

# 사용 스택
- HTML
- CSS
- JS

# 구현 기술

- tab을 클릭했을 때 보여지는 내용이 변경되는 부분이 있는데 JS로 구현을 해봤습니다! 간소화?를 하고싶은데 너무 어렵네요,, 보다 효율적인 방법을 알고 계시다면 공유부탁드립니다!  

![ezgif-5-cf0e02b787](https://user-images.githubusercontent.com/64007362/165490833-ccc473ad-4722-469f-8b3f-a91170245879.gif)
![ezgif-5-52f0c23bdd](https://user-images.githubusercontent.com/64007362/165493482-e740bdf6-bc73-47c9-b4e6-3ed8e9f29480.gif)
![ezgif-5-d38126dc3b](https://user-images.githubusercontent.com/64007362/165494308-ff366c6a-1f2b-4260-a255-87b5fc50cb1a.gif)

```js
// recomCard Tab변경
const recomTabEls = document.querySelectorAll('.article.full .recom-card .tabs__menu li');
const cardPanelEls = document.querySelectorAll('.article.full .recom-card .tabs__body .tabs__panel');

for (let i = 0; i < recomTabEls.length; i += 1) {
  recomTabEls[i].querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();

    for (let j = 0; j < recomTabEls.length; j += 1) {
      recomTabEls[j].classList.remove('on');
      cardPanelEls[j].classList.remove('on');
    }

    recomTabEls[i].classList.add('on');
    cardPanelEls[i].classList.add('on');
  })
}
```
세 개의 탭메뉴 모두 위 코드를 사용해 작성하였습니다.

# 느낀점
머릿속으로는 다 이해했다고 알고 있다고 생각했는데 막상 클론 코딩을 해보니 내게 부족한 점이 무엇인지 알 수 있었습니다...

`float: left, right`를 사용한 부분이 어찌나 많은지.. Flex, Grid를 사용해 적용하다 보니까 얕게 알고 있던 지식이 확실히 내 것이 된 느낌만 들었습니다.

개발자 도구를 열어 거의 베끼다시피 코딩한 것 같지만 이번 과제를 통해서 조금이지만 발전은 무조건 있었다고 생각합니다.

그리고 눈앞에 출력된 내가 만든 페이지를 보니 뿌듯합니다^^

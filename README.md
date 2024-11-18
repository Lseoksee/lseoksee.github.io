# lseoksee.github.io

Obsidian 으로 스터디 한것들을 웹으로 배포합니다

- 템플릿: [Quartz v4](https://github.com/jackyzha0/quartz)
- 공식문서: https://quartz.jzhao.xyz

## 사용법

1. **리포지토리 복제**

   ```bash
   git clone https://github.com/Lseoksee/lseoksee.github.io.git
   ```

2. **서브 모듈 업데이트**

   ```bash
   git submodule init && git submodule update --remote --recursive
   ```

3. **npm 종속성 설치**

   ```bash
   npm i
   ```

4. **디버깅 시작**

   ```bash
   npx quartz build --serve
   ```

## 배포 구조

- `content` 폴더가 실제 작성되는 markdown 인데
- `gitmodules` 로 해당 폴더를 My-Study-File 리포지토리와 symbolic link 느낌으로 엮음
- `My-Study-File` 리포지토리에 Push 할때 마다 Github Actions Workflows 시작
- Workflows에서 Github Rest API 로 `lseoksee.github.io`의 `Deploy` workflows 를 시작하게 됨

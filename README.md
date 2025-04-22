# lseoksee.github.io

Obsidian 으로 스터디 한것들을 웹으로 배포합니다

- 템플릿: [Quartz v4](https://github.com/jackyzha0/quartz)
- 공식문서: https://quartz.jzhao.xyz

## 템플릿 마이그레이션 방법

> 템플릿 리포지토리는 포크와 달리 커밋이 동일하지 않아 upstream을 병합하기가 어렵다.

먼저 `https://github.com/jackyzha0/quartz.git`을 remote로 추가하고

`dev` 브랜치로 전환하여 추가된 remote랑 병합을 진행한다.

이후 이 저장소 `v4` 브렌치로 전환해서 아래 명령어를 통해 dev에 변경된 모든 사항을 가져온다

```bash
git restore --source origin/dev --staged --worktree
```

즉 메인 브랜치인 `v4`는 merge작업이 들어가지 않고 `dev`에서 작업 후 `v4` 브랜치에는 병합 작업된 변경 사항만 가져오는 거다.

## 빌드 방법

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

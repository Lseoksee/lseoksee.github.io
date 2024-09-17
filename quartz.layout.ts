import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "Lseoksee/My-Study-WebSite",
        repoId: "R_kgDOMxkRSw",
        category: "General",
        categoryId: "DIC_kwDOMxkRS84Cii-Y",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Lseoksee",
      Instagram: "https://www.instagram.com/jeonghy_03",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        sortFn(a, b) {
          const A = /[가-힣]/.test(a.displayName)
          const B = /[가-힣]/.test(b.displayName)

          if (A && !B) return -1
          if (!A && B) return 1

          return a.displayName.localeCompare(b.displayName)
        },
      }),
    ),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

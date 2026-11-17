# Huaiming Shen · 沈怀明

中英双语研究主页，基于 [al-folio v1.2](https://github.com/alshedivat/al-folio/releases/tag/v1.2) 和 Jekyll。英文版位于 `/`，中文版位于 `/zh/`。

## 本地预览

使用 Ruby 3.4 和 Bundler。macOS 上如果通过 Homebrew 安装 Ruby 3.4，先运行 `export PATH="$(brew --prefix ruby@3.4)/bin:$PATH"`。

```sh
bundle install
LC_ALL=en_US.UTF-8 bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

打开 <http://127.0.0.1:4000/>。

## 更新内容

- `_data/profile.yml` 存放姓名、个人链接和可选的 CV 路径。设置 `cv_pdf` 之前，将可公开的简历放到 `assets/pdf/cv.pdf`。
- `_data/homepage.yml` 存放两种语言的简介和页面文案。
- `_bibliography/papers.bib` 是中英文首页共用的论文列表。
- `_config.yml` 设置域名和站点元数据。个人 GitHub Pages 使用 `baseurl: ""`。

## 部署到 GitHub Pages

把项目推到 `TanJI-C/TanJI-C.github.io` 的 `main` 分支。在仓库的 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**，然后在 Actions 中运行 **Deploy to GitHub Pages**。后续推送到 `main` 会自动部署。

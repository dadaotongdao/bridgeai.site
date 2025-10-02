# Bridge AI Studio 网站

一个专业的AI咨询工作室网站，专注于为中小企业提供AI自动化解决方案。

## 🚀 快速开始

### 本地开发

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd bridge-ai-studio
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问网站**
   打开浏览器访问 `http://localhost:4321`

### 构建生产版本

```bash
npm run build
```

构建完成后，静态文件将位于 `dist/` 目录中。

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
/
├── public/                 # 静态资源
│   ├── logo.svg           # 网站Logo
│   ├── favicon.svg        # 网站图标
│   ├── og-default.png     # 默认分享图片
│   ├── team-*.jpg         # 团队成员头像
│   ├── case-*.jpg         # 案例图片
│   └── robots.txt         # 搜索引擎爬虫配置
│
├── src/
│   ├── components/        # 可复用组件
│   │   └── UI/           # UI组件库
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Nav.astro
│   │       └── Footer.astro
│   │
│   ├── layouts/          # 页面布局
│   │   └── BaseLayout.astro
│   │
│   ├── pages/            # 页面文件
│   │   ├── index.astro   # 主页
│   │   ├── services.astro # 服务页
│   │   ├── cases.astro   # 案例页
│   │   ├── about.astro   # 关于页
│   │   ├── contact.astro # 联系页
│   │   └── cases/        # 案例详情
│   │       ├── case-1.mdx
│   │       └── case-2.mdx
│   │
│   ├── styles/           # 样式文件
│   │   └── tailwind.css
│   │
│   └── site.config.ts    # 网站配置
│
├── astro.config.mjs      # Astro配置
├── tailwind.config.cjs   # TailwindCSS配置
├── package.json          # 项目依赖
└── README.md            # 项目说明
```

## 🛠 技术栈

- **框架**: [Astro](https://astro.build/) - 静态站点生成器
- **样式**: [TailwindCSS](https://tailwindcss.com/) - 实用优先的CSS框架
- **组件**: Astro组件 + TypeScript
- **内容**: MDX支持
- **部署**: 静态网站，支持多种部署平台

## 🎨 设计系统

### 颜色系统
- **主色**: `#245BFF` (蓝色)
- **辅助色**: `#111827` (深灰)
- **背景色**: `#f9fafb` (浅灰)

### 字体系统
- **主字体**: Inter (Google Fonts)
- **标题**: 粗体 (700-900)
- **正文**: 常规 (400-500)

### 组件库
- Button - 按钮组件
- Card - 卡片组件
- Badge - 标签组件
- Stat - 统计组件
- Nav - 导航组件
- Footer - 页脚组件
- Hero - 英雄区域组件

## 📋 页面说明

### 主页 (index.astro)
- Hero区域展示核心价值主张
- 服务概览
- 统计数据展示
- 流程说明
- CTA区域

### 服务页 (services.astro)
- 三大核心服务详细介绍
- 交付物清单
- 价格和周期信息
- 服务优势说明

### 案例页 (cases.astro)
- 成功案例展示
- 项目成果数据
- 使用工具展示
- 案例详情链接

### 关于页 (about.astro)
- 公司使命和愿景
- 团队介绍
- 价值观展示
- 公司数据

### 联系页 (contact.astro)
- 联系表单 (Formspree集成)
- 联系方式
- FAQ部分

## 🔧 配置说明

### 网站配置 (site.config.ts)

```typescript
export const siteConfig = {
  title: 'Bridge AI Studio',           // 网站标题
  description: '网站描述',              // 网站描述
  siteUrl: 'https://bridge-ai-studio.com', // 网站URL
  email: 'hello@bridge-ai-studio.com',     // 联系邮箱
  
  // 社交链接
  social: {
    twitter: 'https://twitter.com/bridgeaistudio',
    linkedin: 'https://linkedin.com/company/bridge-ai-studio',
    github: 'https://github.com/bridge-ai-studio',
  },
  
  // Formspree 表单ID
  formspree: {
    contactFormId: 'YOUR_FORM_ID_HERE',
  },
  
  // 服务配置
  services: [...],
  
  // 统计数据
  stats: [...]
};
```

### SEO配置

网站已配置完整的SEO优化：
- 页面标题和描述
- Open Graph标签
- Twitter卡片
- 结构化数据 (JSON-LD)
- 站点地图自动生成
- robots.txt配置

## 🚀 部署指南

### 部署到 Cloudflare Pages

1. **准备代码**
   ```bash
   npm run build
   ```

2. **Cloudflare Pages 设置**
   - 登录 Cloudflare Dashboard
   - 选择 Pages → 创建新项目
   - 连接 GitHub/GitLab 仓库
   - 构建设置：
     - Framework: Astro
     - Build command: `npm run build`
     - Build output directory: `dist`

3. **自定义域名**
   - 在 Pages 设置中添加自定义域名
   - 按照提示配置 DNS
   - 启用 Always HTTPS

4. **环境变量** (可选)
   - FORMSPREE_FORM_ID: Formspree 表单ID

### 部署到 Vercel

1. **Vercel 设置**
   - 登录 Vercel Dashboard
   - 导入 GitHub 仓库
   - 框架预设选择 Astro
   - 构建设置：
     - Framework: Astro
     - Build command: `npm run build`
     - Output directory: `dist`

2. **环境变量**
   - FORMSPREE_FORM_ID: Formspree 表单ID

3. **自定义域名**
   - 在 Settings → Domains 中添加域名
   - 配置 DNS 解析

### 其他部署方式

- **Netlify**: 直接拖拽 `dist/` 文件夹
- **GitHub Pages**: 使用 GitHub Actions
- **传统服务器**: 上传 `dist/` 文件夹内容

## 📧 邮箱配置

### Cloudflare Email Routing

1. **添加邮箱路由**
   - Cloudflare Dashboard → Email → Email Routing
   - 添加自定义邮箱地址: `hello@yourdomain.com`
   - 设置转发到您的个人邮箱

2. **配置 DNS**
   - 按照 Cloudflare 提示添加必要的 DNS 记录
   - 验证邮箱路由设置

## 🔍 性能优化

### Lighthouse 目标
- Performance: ≥80
- Accessibility: ≥80
- Best Practices: ≥80
- SEO: ≥80

### 优化措施
- 图片懒加载
- CSS/JS 最小化
- 字体预加载
- 缓存策略
- 压缩资源

## 📊 分析集成

### Google Analytics 4
在 `BaseLayout.astro` 的 `analytics` slot 中添加：

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 其他分析工具
- Mixpanel
- Hotjar
- Microsoft Clarity

## 🔐 安全特性

- HTTPS 强制
- Content Security Policy
- security.txt 配置
- 表单验证
- XSS 防护

## 🧪 测试

### 本地测试
```bash
# 启动开发服务器
npm run dev

# 构建并预览
npm run build
npm run preview
```

### 性能测试
使用 Lighthouse 进行性能测试：
```bash
# 安装 Lighthouse
npm install -g lighthouse

# 运行测试
lighthouse http://localhost:4321 --chrome-flags="--headless"
```

## 📝 内容管理

### 更新案例
编辑 `/src/pages/cases/case-*.mdx` 文件

### 更新服务
编辑 `/src/site.config.ts` 中的 services 配置

### 更新团队信息
编辑 `/src/pages/about.astro` 中的 team 数据

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 创建 Pull Request

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 📞 支持

如有问题，请联系：
- 邮箱: hello@bridge-ai-studio.com
- 微信: BridgeAI_Studio

---

## 更新日志

### v1.0.0 (2024-10-02)
- 初始版本发布
- 完成核心功能开发
- 支持响应式设计
- 集成 Formspree 表单
- 完整的SEO优化
# Bridge AI Studio 快速部署指南

## 🚀 5分钟快速部署

### 步骤1: 准备项目
```bash
# 进入项目目录
cd bridge-ai-studio

# 安装依赖
npm install
```

### 步骤2: 配置项目
编辑 `src/site.config.ts`:
```typescript
// 替换为您的Formspree表单ID
formspree: {
  contactFormId: 'YOUR_ACTUAL_FORM_ID_HERE',
},

// 更新为您的域名
siteUrl: 'https://your-domain.com',
```

### 步骤3: 本地测试
```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:4321 测试
```

### 步骤4: 构建部署
```bash
# 构建生产版本
npm run build

# 构建输出在 dist/ 目录
```

## 📦 一键部署平台

### Cloudflare Pages (推荐)
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择 Pages → 创建项目
3. 连接 GitHub/GitLab 仓库
4. 构建设置:
   - Framework: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 点击"部署站点"

### Vercel
1. 登录 [Vercel Dashboard](https://vercel.com)
2. 点击"New Project"
3. 导入 GitHub 仓库
4. Framework Preset: Astro
5. 点击"Deploy"

### Netlify
1. 登录 [Netlify Dashboard](https://netlify.com)
2. 拖拽 `dist/` 文件夹到部署区域
3. 或连接 GitHub 自动部署

## 🔧 必要配置

### Formspree 配置
1. 注册 [Formspree](https://formspree.io)
2. 创建新表单
3. 复制表单ID
4. 更新 `src/site.config.ts`

### 域名配置
1. 在部署平台添加自定义域名
2. 配置DNS解析
3. 等待SSL证书自动配置

### 环境变量
在部署平台设置:
```
FORMSPREE_FORM_ID=your_form_id_here
```

## 📋 部署检查清单

### 部署前
- [ ] 替换Formspree表单ID
- [ ] 更新网站URL
- [ ] 测试本地构建
- [ ] 检查所有图片加载

### 部署后
- [ ] 测试网站访问
- [ ] 验证表单功能
- [ ] 检查移动端显示
- [ ] 测试所有链接

### 上线后
- [ ] 配置Google Analytics
- [ ] 提交搜索引擎
- [ ] 监控网站性能
- [ ] 收集用户反馈

## 🆘 常见问题

### Q: 部署失败怎么办？
A: 检查构建日志，通常是环境变量或依赖问题

### Q: 表单不工作？
A: 确认Formspree表单ID正确，检查垃圾邮件文件夹

### Q: 图片不显示？
A: 确认图片路径正确，检查大小写敏感

### Q: 样式异常？
A: 检查TailwindCSS配置，确认构建成功

## 📞 紧急联系

**技术支持**: hello@bridge-ai-studio.com  
**微信**: BridgeAI_Studio  
**电话**: 400-123-4567

---

**恭喜！您的Bridge AI Studio网站已准备就绪！** 🎉
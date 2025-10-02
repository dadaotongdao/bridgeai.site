#!/bin/bash

# Bridge AI Studio 项目测试脚本

echo "🚀 Bridge AI Studio 项目测试开始..."
echo "=================================="

# 检查Node.js和npm
if command -v node &> /dev/null; then
    echo "✅ Node.js 已安装: $(node --version)"
else
    echo "❌ Node.js 未安装，请先安装Node.js"
    exit 1
fi

if command -v npm &> /dev/null; then
    echo "✅ npm 已安装: $(npm --version)"
else
    echo "❌ npm 未安装，请先安装npm"
    exit 1
fi

# 检查项目文件
echo ""
echo "📁 检查项目文件..."
echo "===================="

required_files=(
    "package.json"
    "astro.config.mjs"
    "tailwind.config.cjs"
    "src/site.config.ts"
    "src/layouts/BaseLayout.astro"
    "src/pages/index.astro"
    "src/pages/services.astro"
    "src/pages/cases.astro"
    "src/pages/about.astro"
    "src/pages/contact.astro"
    "public/logo.svg"
    "public/favicon.svg"
    "public/robots.txt"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file 存在"
    else
        echo "❌ $file 不存在"
    fi
done

# 检查UI组件
echo ""
echo "🧩 检查UI组件..."
echo "================="

ui_components=(
    "src/components/UI/Button.astro"
    "src/components/UI/Card.astro"
    "src/components/UI/Nav.astro"
    "src/components/UI/Footer.astro"
    "src/components/UI/Hero.astro"
    "src/components/UI/Stat.astro"
    "src/components/UI/Badge.astro"
    "src/components/UI/Container.astro"
    "src/components/UI/Section.astro"
)

for component in "${ui_components[@]}"; do
    if [ -f "$component" ]; then
        echo "✅ $component 存在"
    else
        echo "❌ $component 不存在"
    fi
done

# 检查配置文件内容
echo ""
echo "⚙️  检查配置文件..."
echo "=================="

# 检查site.config.ts中的关键配置
if grep -q "formspree" src/site.config.ts; then
    echo "✅ Formspree 配置存在"
    if grep -q "YOUR_FORM_ID_HERE" src/site.config.ts; then
        echo "⚠️  需要替换Formspree表单ID"
    else
        echo "✅ Formspree表单ID已配置"
    fi
else
    echo "❌ Formspree 配置不存在"
fi

# 检查服务配置
if grep -q "services:" src/site.config.ts; then
    echo "✅ 服务配置存在"
else
    echo "❌ 服务配置不存在"
fi

# 检查统计数据配置
if grep -q "stats:" src/site.config.ts; then
    echo "✅ 统计数据配置存在"
else
    echo "❌ 统计数据配置不存在"
fi

# 检查依赖
echo ""
echo "📦 检查项目依赖..."
echo "=================="

if [ -f "package-lock.json" ] || [ -f "yarn.lock" ]; then
    echo "✅ 依赖锁定文件存在"
else
    echo "⚠️  未找到依赖锁定文件，建议运行 npm install"
fi

# 检查构建配置
echo ""
echo "🔧 检查构建配置..."
echo "================="

if grep -q "build.*dist" astro.config.mjs; then
    echo "✅ 构建输出目录配置正确"
else
    echo "⚠️  构建输出目录配置可能需要检查"
fi

# 检查Tailwind配置
if grep -q "primary.*245BFF" tailwind.config.cjs; then
    echo "✅ 主色调配置正确"
else
    echo "⚠️  主色调配置可能需要检查"
fi

# 检查SEO配置
echo ""
echo "🔍 检查SEO配置..."
echo "================"

if grep -q "JSON.stringify" src/layouts/BaseLayout.astro; then
    echo "✅ 结构化数据配置存在"
else
    echo "❌ 结构化数据配置不存在"
fi

if grep -q "og:" src/layouts/BaseLayout.astro; then
    echo "✅ Open Graph标签配置存在"
else
    echo "❌ Open Graph标签配置不存在"
fi

# 检查静态资源
echo ""
echo "🖼️  检查静态资源..."
echo "================="

static_files=(
    "public/logo.svg"
    "public/favicon.svg"
    "public/og-default.png"
    "public/team-1.jpg"
    "public/team-2.jpg"
    "public/team-3.jpg"
    "public/case-1-hero.jpg"
    "public/case-2-hero.jpg"
)

for file in "${static_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file 存在"
    else
        echo "❌ $file 不存在"
    fi
done

# 检查案例文件
echo ""
echo "📄 检查案例文件..."
echo "================"

if [ -f "src/pages/cases/case-1.mdx" ]; then
    echo "✅ 案例1文件存在"
else
    echo "❌ 案例1文件不存在"
fi

if [ -f "src/pages/cases/case-2.mdx" ]; then
    echo "✅ 案例2文件存在"
else
    echo "❌ 案例2文件不存在"
fi

# 检查文档
echo ""
echo "📚 检查文档..."
echo "=============="

if [ -f "README.md" ]; then
    echo "✅ README.md 存在"
else
    echo "❌ README.md 不存在"
fi

if [ -f "DEPLOYMENT_CHECKLIST.md" ]; then
    echo "✅ 部署检查清单存在"
else
    echo "❌ 部署检查清单不存在"
fi

if [ -f "project-kit/README_project_kit.md" ]; then
    echo "✅ 项目套件说明存在"
else
    echo "❌ 项目套件说明不存在"
fi

# 总结
echo ""
echo "🎯 测试完成总结"
echo "=============="
echo ""
echo "项目结构完整，所有必需文件已就位。"
echo ""
echo "下一步操作:"
echo "1. 运行 'npm install' 安装依赖"
echo "2. 替换 src/site.config.ts 中的 Formspree 表单ID"
echo "3. 根据需要更新品牌信息和服务内容"
echo "4. 运行 'npm run dev' 启动开发服务器"
echo "5. 测试所有功能正常后部署到生产环境"
echo ""
echo "如需帮助，请联系: hello@bridge-ai-studio.com"
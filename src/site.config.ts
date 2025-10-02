export const siteConfig = {
  // Site Info
  title: 'Bridge AI Studio',
  description: '用AI，把旧世界的问题一周内跑起来。你给问题，我交付能运行的小系统（自动化/脚本/看板/SOP），让数字证明价值。',
  author: 'Bridge AI Studio',
  
  // URLs
  siteUrl: 'https://bridge-ai-studio.com',
  
  // Contact & Social
  email: 'hello@bridge-ai-studio.com',
  social: {
    twitter: 'https://twitter.com/bridgeaistudio',
    linkedin: 'https://linkedin.com/company/bridge-ai-studio',
    github: 'https://github.com/bridge-ai-studio',
  },
  
  // Form Configuration
  formspree: {
    contactFormId: 'YOUR_FORM_ID_HERE', // Replace with actual Formspree form ID
  },
  
  // Brand Colors
  colors: {
    primary: '#245BFF',
    secondary: '#111827',
    accent: '#f3f4f6',
  },
  
  // Navigation
  nav: [
    { href: '/', label: '主页' },
    { href: '/services', label: '服务' },
    { href: '/cases', label: '案例' },
    { href: '/about', label: '关于我' },
    { href: '/contact', label: '联系' },
  ],
  
  // Services
  services: [
    {
      title: '线索自动化',
      description: '自动化销售线索收集、筛选和分配流程，提升转化率',
      deliverables: [
        '自动化工作流设计文档',
        'CRM集成配置',
        '线索评分算法',
        '转化率追踪仪表板'
      ],
      timeline: '5-7个工作日',
      price: '¥8,000起'
    },
    {
      title: '双语内容管线',
      description: 'AI驱动的中英文内容创作、翻译和发布自动化系统',
      deliverables: [
        '内容策略模板',
        'AI翻译工作流',
        '多平台发布脚本',
        '内容效果分析报告'
      ],
      timeline: '7-10个工作日',
      price: '¥12,000起'
    },
    {
      title: '售后FAQ机器人',
      description: '智能客服机器人，7×24小时自动回答常见问题',
      deliverables: [
        '知识库构建',
        '对话流程设计',
        '多平台集成',
        '学习优化机制'
      ],
      timeline: '10-14个工作日',
      price: '¥15,000起'
    }
  ],
  
  // Stats
  stats: [
    { label: '小时诊断', value: '48' },
    { label: '天上线', value: '7' },
    { label: '数字说话', value: '100%' }
  ]
};
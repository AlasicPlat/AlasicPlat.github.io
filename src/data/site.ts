export const site = {
  name: "Alasic",
  title: "Alasic — 独立开发者与 macOS 软件",
  description:
    "Alasic 的个人网站，记录正在打磨的高效办公软件 Puer（普洱）与 Pipa（枇杷）。",
  intro: "你好，我是 Alasic, 一名5年的后端。",
  headline: "把复杂工具，\n做得更轻一点。",
  summary:
    "这里记录我正在打磨的软件，以及一些持续发生的想法与实验。个人介绍还在慢慢整理，先让作品和你见面。",
  githubUrl: "https://github.com/AlasicPlat",
} as const;

export const products = [
  {
    slug: "puer",
    number: "01",
    name: "Puer",
    chineseName: "普洱",
    category: "本地数据工作台",
    headline: "高性能地处理表格。",
    description:
      "一款本地优先的电子表格桌面应用，用于打开、查看和处理常见表格与结构化数据。",
    features: ["多格式编辑", "去重 / 分列", "本地处理"],
    imageLight: "/images/puer.png",
    imageDark: null,
    imageAlt: "Puer 本地表格工作台的软件展示封面",
    downloadUrl:
      "https://github.com/AlasicPlat/puer/releases/latest/download/Puer-macOS-arm64.dmg",
    releasesUrl: "https://github.com/AlasicPlat/puer/releases/latest",
  },
  {
    slug: "pipa",
    number: "02",
    name: "Pipa",
    chineseName: "枇杷",
    category: "本地数据库工具",
    headline: "让数据库工作区保持清爽、专注。",
    description:
      "一款面向 macOS 的本地优先数据库工作台，支持 MySQL 查询与离线 Binlog 事务分析、Redis 键浏览，以及可指定连接的本机 MCP 接入。",
    features: ["MySQL 查询", "Binlog 分析", "Redis 键浏览", "MCP 控制台"],
    imageLight: "/images/pipa-cover.png",
    imageDark: null,
    imageAlt: "Pipa 本地数据库工作台的软件展示封面",
    downloadUrl:
      "https://github.com/AlasicPlat/pipa/releases/latest/download/Pipa-macOS-arm64.dmg",
    releasesUrl: "https://github.com/AlasicPlat/pipa/releases/latest",
  },
] as const;

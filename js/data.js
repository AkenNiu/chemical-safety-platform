/* ==================== 业务数据定义 ==================== */

// 企业基本信息
const ENTERPRISE_INFO = {
  name: "某化工企业",
  code: "CHEM001",
  address: "某化工园区",
  level: "重大危险源企业"
};

// 装置数据
const PROCESS_UNITS = [
  { id: "F101", name: "氟化反应装置", type: "氟化", status: "running", riskLevel: "high" },
  { id: "R201", name: "氢化反应装置", type: "氢化", status: "running", riskLevel: "high" },
  { id: "T301", name: "氯气储罐区", type: "储罐", status: "warning", riskLevel: "critical" }
];

// 危险源数据
const MAJOR_HAZARDS = [
  { id: "MH001", name: "重大危险源A1", level: "一级", processId: "F101" },
  { id: "MH002", name: "重大危险源A2", level: "二级", processId: "T301" }
];

// 统计数据
const STATISTICS = {
  deviceCount: 26,
  runningRate: 98.5,
  sisRate: 100,
  hazardCount: 26,
  todayWork: 5
};

// 导出数据访问接口
const APP_DATA = {
  getEnterprise: () => ENTERPRISE_INFO,
  getProcessUnits: () => PROCESS_UNITS,
  getMajorHazards: () => MAJOR_HAZARDS,
  getStatistics: () => STATISTICS
};
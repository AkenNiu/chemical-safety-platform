/* ==================== 公共函数 ==================== */

// 格式化日期
function formatDate(date) {
  const d = new Date(date);
  return d.getFullYear() + '-' + 
    String(d.getMonth() + 1).padStart(2, '0') + '-' + 
    String(d.getDate()).padStart(2, '0');
}

// 获取状态标签
function getStatusTag(status) {
  const map = {
    running: '<span class="tag tag-success">运行中</span>',
    warning: '<span class="tag tag-warning">警告</span>',
    stopped: '<span class="tag tag-muted">已停用</span>'
  };
  return map[status] || status;
}

// 格式化数字
function formatNumber(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 通用工具对象
const COMMON = {
  formatDate,
  getStatusTag,
  formatNumber
};
/**
 * 初始化加载效果的svg格式logo
 * @param {string} id - 元素id
 */
function initSvgLogo(id) {
  const appEl = document.querySelector(id);
  const div = document.createElement('div');

  if (appEl) {
    appEl.appendChild(div);
  }
}

function addThemeColorCssVars() {
  const key = '__THEME_COLOR__';
  const defaultColor = '#1890ff';
  const themeColor = window.localStorage.getItem(key) || defaultColor;
  const cssVars = `--primary-color: ${themeColor}`;
  document.documentElement.style.cssText = cssVars;
}

addThemeColorCssVars();

initSvgLogo('#loadingLogo');

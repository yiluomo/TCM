// /**
//  * 异步加载一个 HTML 组件，并正确处理其内部的相对路径和 JavaScript。
//  * @param {string} componentUrl - 要加载的组件的 HTML 文件路径。
//  * @param {string} placeholderId - 用于放置组件内容的 DOM 元素的 ID。
//  */
// function loadComponent(componentUrl, placeholderId) {
//   const placeholder = document.getElementById(placeholderId);
//   if (!placeholder) {
//     console.error(`错误：未找到 ID 为 '${placeholderId}' 的占位符元素。`);
//     return;
//   }

//   // 1. 计算组件的基础路径，用于修正内部资源（CSS, JS, IMG）的相对路径
//   const componentBasePath = componentUrl.substring(0, componentUrl.lastIndexOf('/') + 1);

//   fetch(componentUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`网络请求失败: ${response.statusText}`);
//       }
//       return response.text();
//     })
//     .then(html => {
//       // 2. 修正 HTML 内容中所有以 "./" 开头的 href 和 src 路径
//       const adjustedHtml = html.replace(/(href|src)="\.\//g, `$1="${componentBasePath}`);

//       // 3. 将修正后的 HTML 插入占位符。此时脚本还不会执行。
//       placeholder.innerHTML = adjustedHtml;

//       // 4. 查找所有刚刚被插入的脚本
//       const scripts = placeholder.querySelectorAll("script");

//       // 5. 遍历并重新创建脚本以使其执行
//       scripts.forEach(oldScript => {
//         const newScript = document.createElement("script");

//         // 复制所有属性（包括已经修正过的 src）
//         Array.from(oldScript.attributes).forEach(attr => {
//           newScript.setAttribute(attr.name, attr.value);
//         });

//         // 复制内联脚本的内容
//         newScript.textContent = oldScript.textContent;

//         // 6. 将新脚本添加到文档末尾以执行
//         document.body.appendChild(newScript);

//         // 7. 移除占位符中旧的、无法执行的脚本
//         oldScript.parentNode.removeChild(oldScript);
//       });
//     })
//     .catch(error => {
//       console.error(`加载组件 '${componentUrl}' 时出错:`, error);
//     });
// }
/**
 * 异步加载HTML组件，修正路径并执行脚本（包括外部脚本）
 * @param {string} componentUrl - 组件HTML路径
 * @param {string} placeholderId - 占位符ID
 */
function loadComponent(componentUrl, placeholderId) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) {
    console.error(`未找到ID为'${placeholderId}'的元素`);
    return;
  }

  const componentBasePath = componentUrl.substring(0, componentUrl.lastIndexOf('/') + 1);

  fetch(componentUrl)
    .then(response => {
      if (!response.ok) throw new Error(`请求失败: ${response.statusText}`);
      return response.text();
    })
    .then(html => {
      // 修正相对路径（href/src）
      const adjustedHtml = html.replace(/(href|src)="\.\//g, `$1="${componentBasePath}`);
      placeholder.innerHTML = adjustedHtml;

      // 处理所有脚本（包括外部和内联）
      const scripts = placeholder.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        
        // 复制属性（包括修正后的src）
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        
        // 复制内联脚本内容
        newScript.textContent = oldScript.textContent;
        
        // 关键：移除旧脚本，添加新脚本触发执行
        oldScript.parentNode.removeChild(oldScript);
        document.body.appendChild(newScript);

        // 对于外部脚本，执行后可移除（可选）
        if (newScript.src) {
          newScript.onload = () => newScript.remove();
        }
      });
    })
    .catch(error => {
      console.error(`加载组件出错:`, error);
    });
}
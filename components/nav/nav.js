const getUserInfo = async () => {
  try {
    const response = await fetch(
      "https://zhongguojiaoyunet.com/api/index/getipaddr"
    );
    const res = await response.json();
    // console.log(res,'sss');
    return res.data;
  } catch (error) {
    console.error("获取用户信息失败:", error);
    return "中国 河南省 郑州市 金水区";
  }
};

// 将获取到的地址信息渲染到页面元素上
const renderAddress = async () => {
  // console.log(getUserInfo());
  const address = await getUserInfo();
  // console.log(getUserInfo());
  // console.log(address);
  // 假设页面上有一个ID为address的元素用于显示地址
  const addressElement = document.getElementById('address');
  if (addressElement) {
      addressElement.textContent = address;
      console.log(address)
  }
};

// 页面加载完成后渲染地址信息
// console.log("nav.js执行了");
// console.log("是否找到address元素：", document.getElementById('address')); 
renderAddress();
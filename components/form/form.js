// formValidator.js
class FormValidator {
  constructor(formSelector, options = {}) {
    this.form = document.querySelector(formSelector);
    this.options = {
      successMessage: '提交成功！',
      ...options
    };

    if (this.form) {
      this.init();
    }
  }

  init() {
    this.cacheElements();
    this.createErrorElements();
    this.createSuccessMessage();
    this.bindEvents();
  }

  cacheElements() {
    this.username = this.form.querySelector('.userName');
    this.tel = this.form.querySelector('.tel');
    this.email = this.form.querySelector('.date');
    this.degree = document.getElementById('type');
    this.submitBtn = this.form.querySelector('.commit_btn');
  }

  createErrorElements() {
    // 用户名错误提示
    this.usernameError = this.username ?
      this.createErrorElement(this.username, 'username-error', '姓名至少需要2个字符') : null;

    // 电话错误提示
    this.telError = this.tel ?
      this.createErrorElement(this.tel, 'tel-error', '请输入正确的11位手机号') : null;

    // 邮箱错误提示
    this.emailError = this.email ?
      this.createErrorElement(this.email, 'email-error', '请输入有效的邮箱地址') : null;

    // 学历错误提示
    this.degreeError = this.degree ?
      this.createErrorElement(this.degree, 'degree-error', '请选择专家') : null;
  }

  createErrorElement(refElement, className, message) {
    if (!refElement) {
      console.error('Reference element not found for error message:', className);
      return null;
    }

    let errorElement = document.querySelector('.' + className);
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = className;
      errorElement.textContent = message;
      errorElement.style.cssText = 'color: red; font-size: 12px; margin-top: 4px; visibility: hidden; position: absolute;';
      refElement.parentNode.insertBefore(errorElement, refElement.nextSibling);
    }
    return errorElement;
  }

  createSuccessMessage() {
    this.successMessage = this.form.querySelector('.success-message');
    if (!this.successMessage) {
      this.successMessage = document.createElement('div');
      this.successMessage.className = 'success-message';
      this.successMessage.textContent = this.options.successMessage;
      this.successMessage.style.cssText = 'color: green; font-size: 14px; margin-top: 10px; visibility: hidden;';
      this.form.appendChild(this.successMessage);
    }
  }

  bindEvents() {
    // 用户名验证
    if (this.username) {
      this.username.addEventListener('blur', () => this.validateUsername());
      this.username.addEventListener('input', () => {
        if (this.username.classList.contains('input-error')) {
          this.hideError(this.username, 'username-error');
        }
      });
    }

    // 电话验证
    if (this.tel) {
      this.tel.addEventListener('blur', () => this.validateTel());
      this.tel.addEventListener('input', () => {
        if (this.tel.classList.contains('input-error')) {
          this.hideError(this.tel, 'tel-error');
        }
      });
    }

    // 邮箱验证
    if (this.email) {
      this.email.addEventListener('blur', () => this.validateEmail());
      this.email.addEventListener('input', () => {
        if (this.email.classList.contains('input-error')) {
          this.hideError(this.email, 'email-error');
        }
      });
    }

    // 学历验证
    if (this.degree) {
      this.degree.addEventListener('blur', () => this.validateDegree());
      this.degree.addEventListener('change', () => {
        if (this.degree.value !== '0') {
          this.hideError(this.degree, 'degree-error');
        }
      });
    }

    // 表单提交
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  validateUsername() {
    if (this.username && this.username.value.trim().length < 2) {
      this.showError(this.username, 'username-error');
      return false;
    } else {
      this.hideError(this.username, 'username-error');
      return true;
    }
  }

  validateTel() {
    if (this.tel && (this.tel.value.length != 11 || !/^1[3-9]\d{9}$/.test(this.tel.value))) {
      this.showError(this.tel, 'tel-error');
      return false;
    } else {
      this.hideError(this.tel, 'tel-error');
      return true;
    }
  }

  validateEmail() {
    if (this.email && !this.email.value.trim()) {
      this.showError(this.email, 'email-error');
      return false;
    } else {
      this.hideError(this.email, 'email-error');
      return true;
    }
  }

  validateDegree() {
    if (this.degree && this.degree.value === '0') {
      this.showError(this.degree, 'degree-error');
      return false;
    } else {
      this.hideError(this.degree, 'degree-error');
      return true;
    }
  }

  validateAll() {
    let isValid = true;

    if (!this.validateUsername()) isValid = false;
    if (!this.validateTel()) isValid = false;
    if (!this.validateEmail()) isValid = false;
    if (!this.validateDegree()) isValid = false;

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateAll()) {
      this.submitForm();
    }
  }

  async submitForm() {
    try {
      const formData = new FormData(this.form);
      const formObj = {
        username: formData.get('name'),
        tel: formData.get('mobile'),
        content: formData.get('yixiang')
      };

      const name = formObj.username;
      const mobile = formObj.tel;
      const zhuangtai = formData.get('zhuangtai');
      const yixiang = formData.get('yixiang');
      const message = formObj.content;
      const laiyuan = "学术期刊与资讯";

      const response = await fetch("http://192.168.2.5/api/index/savemessages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile, zhuangtai, yixiang, message, laiyuan }),
      });

      const result = await response.json();

      if (this.successMessage) {
        this.successMessage.innerHTML = result.msg || "提交成功！";
        this.successMessage.style.visibility = 'visible';
        this.successMessage.style.color = "green";
      }

      // 重置表单
      this.form.reset();

      // 3秒后隐藏成功消息
      setTimeout(() => {
        if (this.successMessage) {
          this.successMessage.style.visibility = 'hidden';
        }
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      if (this.successMessage) {
        this.successMessage.innerHTML = "提交失败，请重试";
        this.successMessage.style.color = "red";
        this.successMessage.style.visibility = 'visible';
      }

      // 3秒后隐藏错误消息
      setTimeout(() => {
        if (this.successMessage) {
          this.successMessage.style.visibility = 'hidden';
          this.successMessage.style.color = "green";
        }
      }, 3000);
    }
  }

  showError(input, errorClass) {
    input.classList.add('input-error');
    const errorElement = document.querySelector('.' + errorClass);
    if (errorElement) {
      errorElement.style.visibility = 'visible';
    }
  }

  hideError(input, errorClass) {
    input.classList.remove('input-error');
    const errorElement = document.querySelector('.' + errorClass);
    if (errorElement) {
      errorElement.style.visibility = 'hidden';
    }
  }
}

// 导出模块
console.log("form.js执行了");

export default FormValidator;
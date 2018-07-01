let Phone = /^1[345789]\d{9}$/
let Email = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
let soldier1 = /^[^\u5b57].*[\u5b57\u7b2c].*[^\u7b2c]$/
let soldier2 = /^[A-Za-z0-9\u4e00-\u9fa5]{10,18}$/
let HK = /^[A-Za-z0-9\u4e00-\u9fa5]{8,}$/
let passport = /^[A-Za-z0-9]{3,}$/
let Name = /^[\u4e00-\u9fa5 ·]{2,32}|^[a-zA-Z \s]{2,32}$/

export default {
  // 校验姓名
  checkName: new CreateCheckFn(false, Name, '姓名'),
  // 校验手机号
  checkPhone: new CreateCheckFn(false, Phone, '手机号'),
  // 校验邮箱
  checkEmail: new CreateCheckFn(true, Email, '邮箱'),
  // 校验港澳通行证
  checkHK: new CreateCheckFn(true, HK, '证件号码'),
  // 校验护照
  checkPassport: new CreateCheckFn(true, passport, '证件号码'),
  // 校验身份证
  checkIdNo: checkIdNoFn,
  checkSoldier: checkSoldierFn
}

/* CreateCheckFn创建一个通用的校验函数
    参数：1.isEmptyAllowed 是否允许为空  2.reg 为校验的正则表达式 3.msg 为校验不通过的提示信息
    返回值：返回一个校验obj的函数
    示例：let checkEmail = new createCheckFn(true, Email, '邮箱校验不通过')
          checkEmail(obj)
*/
function CreateCheckFn (isEmptyAllowed, reg, msg) {
  return function (obj, res) {
    // console.log(obj)
    res = res || ''
    let result = {
      flag: true,
      msg: ''
    }
    if (isEmptyAllowed && obj === '') {
      return result
    }
    // console.log(Object.prototype.toString.call(reg))
    if (Object.prototype.toString.call(reg) === '[object RegExp]') {
      if (obj === '') {
        result.flag = false
        result.msg = `请输入${msg}`
      } else if (!reg.test(obj) || obj.length > 50) {
        result.flag = false
        result.msg = `请输入正确的${res}${msg}`
      }
    }
    return result
  }
}

function checkIdNoFn (idcard, res) {
  if (!res) {
    res = ''
  }
  // console.log(idcard)
  let result = {
    flag: true,
    msg: ''
  }
  let area = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  let Y, JYM
  let S, M
  let ereg
  let idcardArray = idcard.split('')
  // 非空验证
  if (idcard.length === 0) {
    result.flag = false
    result.msg = `${res}证件号码不能为空`
    return result
  }
  // 地区验证
  if (typeof area[parseInt(idcard.substr(0, 2))] === 'undefined') {
    result.flag = false
    result.msg = `${res}身份证号码有误`
    return result
  }
  // 身份号码位数及格式检验
  switch (idcard.length) {
    case 15:
      // 15位身份号码检测
      if (((parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 100 !== 0) ||
        ((parseInt(idcard.substr(6, 2)) + 1900) % 100 === 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 400 === 0)) {
        // 测试闰年出生日期的合法性
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
      } else {
        // 测试平年出生日期的合法性
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
      }
      if (!ereg.test(idcard)) {
        result.flag = false
        result.msg = `${res}身份证号码有误`
        return result
      }
      break
    case 18:
      // 18位身份号码检测
      if ((parseInt(idcard.substr(6, 4)) % 4 === 0 && parseInt(idcard.substr(6, 4)) % 100 !== 0) ||
        (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 400 === 0)) {
        // 测试闰年出生日期的合法性
        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
      } else {
        // 测试平年出生日期的合法性
        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
      }
      if (ereg.test(idcard)) {
        // 计算校验位
        S = (parseInt(idcardArray[0]) + parseInt(idcardArray[10])) * 7 +
          (parseInt(idcardArray[1]) + parseInt(idcardArray[11])) * 9 +
          (parseInt(idcardArray[2]) + parseInt(idcardArray[12])) * 10 +
          (parseInt(idcardArray[3]) + parseInt(idcardArray[13])) * 5 +
          (parseInt(idcardArray[4]) + parseInt(idcardArray[14])) * 8 +
          (parseInt(idcardArray[5]) + parseInt(idcardArray[15])) * 4 +
          (parseInt(idcardArray[6]) + parseInt(idcardArray[16])) * 2 +
          parseInt(idcardArray[7]) * 1 +
          parseInt(idcardArray[8]) * 6 +
          parseInt(idcardArray[9]) * 3
        Y = S % 11
        JYM = '10X98765432' // 匹配的字符串
        M = JYM.substr(Y, 1) // 获取校验位
        if (M !== idcardArray[17]) {
          // 检测ID的校验位
          result.flag = false
          result.msg = `${res}身份证号码有误`
          return result
        }
      } else {
        result.flag = false
        result.msg = `${res}身份证号码有误`
        return result
      }
      break
    default:
      result.flag = false
      result.msg = `${res}身份证号码位数有误`
      return result
  } // switch end
  return result
}

function checkSoldierFn (idNo) {
  let result = {
    flag: true,
    msg: ''
  }
  if (soldier1.test(idNo) && soldier2.test(idNo)) {
    return result
  } else {
    result.flag = false
    result.msg = '请输入正确的证件号码'
    return result
  }
}

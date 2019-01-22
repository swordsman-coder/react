/** 
 * 获取随机字符串(时间+字符串)
 */
export const random = ()  => {
    return "?RANDOM=" + (new Date().getTime() + "_" + Math.random());
}
/*******************************************数据判断类****************************************/
/** 
 * 是否为数组
 * @param value  [必须]对象
 */
export const isArray = (value) => {
    if (!isNull(value) && value instanceof Array) return true;
    return false;
}
/** 
 * 是否为数组 并存在数据 length>0
 * @param value  [必须]对象
 */
export const isList = (value) => {
    if (isArray(value) && value.length > 0) return true;
    return false;
}

/** 
 * 判断是否存在指定的变量
 * @param value  [必须]变量名称
 */
export const islet = (value) => {
    try {
        if (typeof (value) === "undefined") {
            return false;
        } else {
            return true;
        }
    } catch (e) {}
    return false;
}
/** 
 * 判断是否为Date 
 * @param value  [必须]时间或时间字符串
 */
export const isDate = (value) => {
    try {
        if (!(value instanceof Date)) {
            if (typeof (value) === "string") {
                let d = Date.parse(value);
                if (d > 0)
                    return true;
            }
            return false;
        } else {
            return true;
        }
    } catch (e) {}
    return false;
}

/** 
 * 判断是否为undefined
 * @param value  [必须]对象
 */
export const isUndefined = (value) => {
    if (typeof (value) === "undefined") return true;
    return false;
}

/** 
 * 判断是否为空
 * @param value  [必须]对象
 */
export const isEmpty = (value) => {
    if (value === '') return true;
    return false;
}

/** 
 * 判断是否为null
 * @param value  [必须]对象
 */
export const isNull = (value) => {
    if (value === null) return true;
    else if (typeof (value) === "undefined") return true;
    return false;
}

/** 
 * 是否为空 为null 为undefined
 * @param value  [必须]对象
 */
export const isNullOrEmpty = (value) => {
    if (value === null) return true;
    else if (value === "") return true;
    else if (typeof (value) === "undefined") return true;
    return false;
}

/** 
 * 是否是邮箱格式
 * @param value  [必须]字符串
 */
export const isEmail = (value) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(value);
}
/** 
 * 是否是手机格式
 * @param value  [必须]字符串
 */
export const isPhone = (value) => {
    return (/^1[3456789]\d{9}$/).test(value);
}

/** 
 * 是否是传真格式
 * @param value  [必须]字符串
 */
export const isFax = (value) => {
    return (/^(\d{3,4}-)?\d{7,8}$/).test(value);
}
/** 
 * 是否是邮编格式
 * @param value  [必须]字符串
 */
export const isZipCode = (value) => {
    return (/^[1-9]\d{5}(?!\d)/).test(value);
}
/** 
 * 中国身份证号码验证
 * @param value  [必须]字符串
 */
export const isIDCard = (value) => {
    return (/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/).test(value);
}
/** 
 * 是否为IP地址
 * @param value  [必须]字符串
 */
export const isIP = (value) => {
    let reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
    if (reSpaceCheck.test(value)) {
        //this.match(reSpaceCheck);
        if (RegExp.$1 <= 255 && RegExp.$1 >= 0 &&
            RegExp.$2 <= 255 && RegExp.$2 >= 0 &&
            RegExp.$3 <= 255 && RegExp.$3 >= 0 &&
            RegExp.$4 <= 255 && RegExp.$4 >= 0) {
            return true;
        } else
            return false;
    } else
        return false;
}
/** 
 * 是否为数字
 * @param value  [必须]对象
 */
export const isNumber = value => {
    if (isNaN(value))
        return false;
    return true;
}
/** 
 * 是否为字符串
 * @param value  [必须]对象
 */
export const isString = value => {
    if (typeof (value) === 'string')
        return true;
    return false;
}
/** 
 * 是否对象{} 排除数组和function
 * @param value  [必须]对象
 */
export const isObject = value => {
    if (typeof (value) === 'object' && typeof (value) !== 'function' && !isArray(value)) {
        return true;
    }
    return false;
}
/** 
 * 判断字符串是否为json格式
 * @param str  [必须]对象
 */
export const isJson = str => {
    if (typeof str === 'string') {
        try {
            let obj = JSON.parse(str);
            if (typeof obj === 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    return false;
}
/**
 * 去除非数字的字符串
 * @param   s  [必须]  html格式字符串 -0.1元
 * @returns 返回数字相关的数字 -0.1
 */
export const filterNotNumber = (s) => {
    return parseFloat(s.replace(/[^\d\.-]/g, ""));
}
/**
 * 金额按千位逗号分隔
 * @param   s     [必须]  需要格式化的金额数值
 * @param   type  [必须]  判断格式化后的金额是否需要小数位. 
 * @returns 返回格式化后的数值字符串.
 */
export const formatMoney = (s, type) => {
    if (/[^0-9\.]/.test(s))
        return "0.00";
    if (s === null || s === "null" || s === "")
        return "0.00";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    let re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    if (type === 0) {
        let a = s.split(".");
        if (a[1] === "00") {
            s = a[0];
        }
    }
    return s;
}
/**
 * 自动转换数字金额为大小写中文字符,返回大小写中文字符串，最大处理到999兆
 * @param   money   [必须] 需要格式化的金额数值
 * @returns 返回格式化后的中文数字字符串.
 */
export const formatMoneyToChinese = (money) => {
    let cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]; //汉字的数字
    let cnIntRadice = ["", "拾", "佰", "仟"]; //基本单位
    let cnIntUnits = ["", "万", "亿", "兆"]; //对应整数部分扩展单位
    let cnDecUnits = ["角", "分", "毫", "厘"]; //对应小数部分单位
    let cnInteger = "整"; //整数金额时后面跟的字符
    let cnIntLast = "元"; //整型完以后的单位
    let maxNum = 999999999999999.9999; //最大处理的数字

    let IntegerNum; //金额整数部分
    let DecimalNum; //金额小数部分
    let ChineseStr = ""; //输出的中文金额字符串
    let parts; //分离金额后用的数组，预定义

    if (!isNumber(money)) {
        return "";
    }

    money = parseFloat(money);
    //alert(money);
    if (money >= maxNum) {
        console.error('超出最大处理数字');
        return money;
    }
    if (money === 0) {
        ChineseStr = cnNums[0] + cnIntLast + cnInteger;
        //document.getElementById("show").value=ChineseStr;
        return ChineseStr;
    }
    money = money.toString(); //转换为字符串
    if (money.indexOf(".") === -1) {
        IntegerNum = money;
        DecimalNum = '';
    } else {
        parts = money.split(".");
        IntegerNum = parts[0];
        DecimalNum = parts[1].substr(0, 4);
    }
    if (parseInt(IntegerNum, 10) > 0) { //获取整型部分转换
        let zeroCount = 0;
        let IntLen = IntegerNum.length;
        for (let i = 0; i < IntLen; i++) {
            let n = IntegerNum.substr(i, 1);
            let p = IntLen - i - 1;
            let q = p / 4;
            let m = p % 4;
            if (n === "0") {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    ChineseStr += cnNums[0];
                }
                zeroCount = 0; //归零
                ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m === 0 && zeroCount < 4) {
                ChineseStr += cnIntUnits[q];
            }
        }
        ChineseStr += cnIntLast;
        //整型部分处理完毕
    }
    if (DecimalNum !== '') { //小数部分
        let decLen = DecimalNum.length;
        for (let i = 0; i < decLen; i++) {
            let n = DecimalNum.substr(i, 1);
            if (n !== '0') {
                ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (ChineseStr === '') {
        ChineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (DecimalNum === '') {
        ChineseStr += cnInteger;
    }
    return ChineseStr;
}
/**  
 * 格式化数字显示方式    
 * @param num      [必须]数字
 * @param pattern  [必须]格式
 * 用法  
 * formatNumber(12345.999,'#,##0.00');  
 * formatNumber(12345.999,'#,##0.##');  
 * formatNumber(123,'000000'); 
 */
export const formatNumber = (num, pattern) => {
    let strarr = num ? num.toString().split('.') : ['0'];
    let fmtarr = pattern ? pattern.split('.') : [''];
    let retstr = '';

    // 整数部分   
    let str = strarr[0];
    let fmt = fmtarr[0];
    let i = str.length - 1;
    let comma = false;
    for (let f = fmt.length - 1; f >= 0; f--) {
        switch (fmt.substr(f, 1)) {
            case '#':
                if (i >= 0) retstr = str.substr(i--, 1) + retstr;
                break;
            case '0':
                if (i >= 0) retstr = str.substr(i--, 1) + retstr;
                else retstr = '0' + retstr;
                break;
            case ',':
                comma = true;
                retstr = ',' + retstr;
                break;
            default:
                // do nothing
        }
    }
    if (i >= 0) {
        if (comma) {
            let l = str.length;
            for (; i >= 0; i--) {
                retstr = str.substr(i, 1) + retstr;
                if (i > 0 && ((l - i) % 3) === 0) retstr = ',' + retstr;
            }
        } else retstr = str.substr(0, i + 1) + retstr;
    }

    retstr = retstr + '.';
    // 处理小数部分   
    str = strarr.length > 1 ? strarr[1] : '';
    fmt = fmtarr.length > 1 ? fmtarr[1] : '';
    i = 0;
    for (let f = 0; f < fmt.length; f++) {
        switch (fmt.substr(f, 1)) {
            case '#':
                if (i < str.length) retstr += str.substr(i++, 1);
                break;
            case '0':
                if (i < str.length) retstr += str.substr(i++, 1);
                else retstr += '0';
                break;
            default:
                // do nothing
        }
    }
    return retstr.replace(/^,+/, '').replace(/\.$/, '');
}
export const setData = (key, data) => {
    if (!window.localStorage || !window.JSON || !key) {
        return;
    }
    localStorage.setItem(key, JSON.stringify(data));
}

export const getData = key => {
    if (!window.localStorage || !window.JSON || !key) {
        return;
    }
    const item = localStorage.getItem(key);

    if (!item) {
        return
    }

    return JSON.parse(item);
}

export const removeData = key => {
    if (!window.localStorage || !window.JSON || !key) {
        return;
    }
    localStorage.removeItem(key);
}
export const query2Dictionary = param => {
    let pattern = /([^?&=]+)=([^&#]*)/g;
    let dict = {};
    let search = null;
    if (typeof param === "object" && param instanceof Location) {
        search = param.search;
    } else if (typeof param === "string") {
        search = param;
    } else {
        throw new Error("参数类型非法！请传入window.loaction对象或者url字符串。");
    }
    search.replace(pattern, function (rs, $1, $2) {
        let key = decodeURIComponent($1);
        let value = decodeURIComponent($2);
        dict[key] = value;
        return rs;
    });
    return dict;
}

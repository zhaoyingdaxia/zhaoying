/**
 * Created by abbas on 17. 5. 18.
 */
Validation.add('validate-password-repeat', '', function(v) {
    var pass=v.strip(); /*strip leading and trailing spaces*/

    if(pass.match(/([a-zA-Z0-9])\1{3,}/)){
        this.error = "不允许连续使用四个相同字符。例：aaa,DDDD, 44444.";
        return false;
    }

    this.error = '';
    return true;
})

Validation.add('validate-password-length', '', function(v) {
    var pass=v.strip(); /*strip leading and trailing spaces*/

    if(pass.length>0 && pass.length < 8){
        this.error = "请输入8位数以上的字符。前后空格会被忽略。";
        return false;
    }

    this.error = '';
    return true;
})

Validation.add('validate-password-classes', '', function(v) {
    var pass=v.strip(); /*strip leading and trailing spaces*/
    var counter = 0;


    if (pass.match(/\d+/)) {
        counter ++;
    }
    if (pass.match(/[a-z]+/)) {
        counter ++;
    }
    if (pass.match(/[A-Z]+/)) {
        counter ++;
    }
    if (pass.match(/[^a-zA-Z0-9]+/)) {
        counter ++;
    }

    if (pass.length < 10 && counter < 3) {
        this.error = "密码中不同类型的字符的最小值为3。字符类:小写、大写、数字、特殊字符";
        return false;
    }


    return true;
})

Validation.add('validate-password-classes-two', '', function(v) {
    var pass=v.strip(); /*strip leading and trailing spaces*/
    var counter = 0;


    if (pass.match(/\d+/)) {
        counter ++;
    }
    if (pass.match(/[a-z]+/)) {
        counter ++;
    }
    if (pass.match(/[A-Z]+/)) {
        counter ++;
    }
    if (pass.match(/[^a-zA-Z0-9]+/)) {
        counter ++;
    }

    if (pass.length >= 10 && counter < 2) {
        this.error = "密码中不同类型的字符的最小值为2。字符类:小写、大写、数字、特殊字符";
        return false;
    }
    this.error = '';
    return true;
})

Validation.add('validate-strictly-increase', '', function(v) {
    var increasingNumber = '0123456789';
    var decreasingNumber = '9876543210';
    var increasingAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    var decreasingAlphabets = 'zyxwvutsrqponmlkjihgfedcba';
    var increasingQwerty1 = '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./ ';
    var increasingQwerty2 = '~!@#$%^&*()_+|QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?';
    var decreasingQwerty1 = ' /.,mnbvcxz\';lkjhgfdsa][poiuytrewq\=-0987654321\`';
    var decreasingQwerty2 = ' ?><MNBVCXZ":LKJHGFDSA}{POIUYTREWQ|+_)(*&^%$#@!~';
    var pass=v.strip(); /*strip leading and trailing spaces*/
    var passParts = new Array();
    var errorMessage = "禁止使用包含连续文字或数字的密码。例：1234, 4321, ABCD, DCBA, abcd, qwer, REWQ etc";

    //Validation of stricly increasing and decreasing
    for(var i =0; i <= pass.length-4 ; i++)
    {
        if(i+4 <= pass.length)
        {
            passParts[i] = pass.substring(i, i+4);
        }
    }

    for(var i =0; i< passParts.length; i++)
    {
        if(decreasingNumber.indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }else if(increasingNumber.indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }else if(increasingAlphabets.indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }else if(decreasingAlphabets.indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }else if(increasingAlphabets.toUpperCase().indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }else if(decreasingAlphabets.toUpperCase().indexOf(passParts[i]) >= 0) {
            this.error = errorMessage;
            return false;
        }else if(increasingQwerty1.indexOf(passParts[i]) >= 0 || increasingQwerty2.indexOf(passParts[i]) >= 0 || increasingQwerty1.toUpperCase().indexOf(passParts[i]) >= 0 || increasingQwerty2.toUpperCase().indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }else if(decreasingQwerty1.indexOf(passParts[i]) >= 0 || decreasingQwerty2.indexOf(passParts[i]) >= 0 || decreasingQwerty1.toUpperCase().indexOf(passParts[i]) >= 0 || decreasingQwerty2.toUpperCase().indexOf(passParts[i]) >= 0)
        {
            this.error = errorMessage;
            return false;
        }
    }

    this.error = '';
    return true;
})


$.validator.setDefaults({
	submitHandler: function() {
		alert("提交事件!");
	}
});
/*表单验证规则*/
$().ready(function() {
	jQuery.validator.addMethod("Mobile", function(value, element) {
		var Mobile = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/
		return this.optional(element) || (Mobile.test(value));
	}, "请输入正确的手机号码格式");
	jQuery.validator.addMethod("Idname", function(value, element) {
		var Idname = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
		return this.optional(element) || (Idname.test(value));
	}, "请输入正确的身份证或手机号码格式");
	$("#RegisterForm").validate({
		rules: {
			name:{
				required: true,
		        minlength: 6,
		        maxlength: 20
			},
			password: {
				required: true,
		        minlength: 6,
		        maxlength: 20
			},
			confirm_password: {
		        required: true,
		        equalTo: "#password"
		    },
		    email:{
		    	required: true,
        		email: true
		    },
			verify:"required",
			id:{
				required: true,
				Idname:true
			},
			old_password:"required",
		},
		messages: {
			name:{
				required: "请输入用户名",
				minlength: "密码长度不能少于6个中、英文、数字及符号",
				maxlength: "密码长度不能超过20个中、英文、数字及符号"
			},
			password: {
				required: "请设置密码",
				minlength: "密码长度不能少于6个大小英文字母、符号或数字",
				maxlength: "密码长度不能超过20个大小英文字母、符号或数字"
			},
			confirm_password: {
				required: "请验证密码",
		        equalTo: "两次密码输入不一致"
			},
			email:{
				required:"请输入邮箱",
				email:"请输入正确的电子邮箱格式"
			},
			verify:"请输入验证码",
			id:{
				required:"请输入身份证或手机号码",
				Idname:"请输入正确的身份证或手机号码"
			},
			old_password:"请输入旧密码",
		},
	});
	
});
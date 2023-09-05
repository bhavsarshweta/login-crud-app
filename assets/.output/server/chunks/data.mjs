import { defineEventHandler } from 'h3';

var en = {
	Home: "Home",
	Logout: "Logout",
	lang: "Languages",
	sr: "Sr No.",
	username: "Username",
	password: "Password",
	role: "Role",
	actions: "Actions",
	createuser: "Create User",
	displayuser: "Display User",
	enterusername: "Enter Username",
	enterpassword: "Enter Password",
	login: "Login",
	submit: "Submit",
	Role: "Role",
	admin: "Admin",
	user: "User",
	umessage: "Username must be between 5 and 10 characters.",
	pmessage: "Password must be between 5 and 10 characters.",
	alert1: "Please Enter Username and Password !",
	alert2: "Please Enter Username!",
	alert3: "Please Enter Password!",
	alert4: "Username or password is incorrect",
	alert5: "Please enter all the fields !",
	alert6: "Please Enter Username and Password!",
	alert7: "Please Enter Username!",
	alert8: "Please Enter Password!",
	alert9: "Please Enter Role!",
	alert10: "Please enter valid details",
	edit: "Edit User!",
	deletemsg: "Delete User!",
	update: "UPDATE",
	"delete": "DELETE",
	close: "CLOSE",
	alert11: "Are you sure you want to delete?",
	alert12: "Logged out succesfully!"
};
var hn = {
	Home: "होम ",
	Logout: "लॉग आउट",
	lang: "भाषाएँ",
	sr: "क्रमांक",
	username: "युजरनेम",
	password: "पासवर्ड",
	role: "रोल",
	actions: "एक्शन",
	createuser: "युजर बनाइये",
	displayuser: "युजर देखिये ",
	enterusername: "युजरनेम दर्ज करें",
	enterpassword: "पासवर्ड दर्ज करें",
	login: "लॉग इन करें",
	submit: "सबमिट करें",
	Role: "भूमिका",
	admin: "एडमिन",
	user: "युजर",
	umessage: "युजरनेम 5 से 10 अक्षरों के बीच होना चाहिए.",
	pmessage: "पासवर्ड 5 से 10 अक्षरों के बीच होना चाहिए.",
	alert1: "कृपया युजरनेम और पासवर्ड दर्ज करें!",
	alert2: "कृपया युजरनेम दर्ज करें!",
	alert3: "कृपया पासवर्ड दर्ज करें!",
	alert4: "युजरनेम या पासवर्ड गलत है",
	alert5: "कृपया सभी फ़ील्ड दर्ज करें !",
	alert6: "कृपया युजरनेम और पासवर्ड दर्ज करें!",
	alert7: "कृपया युजरनेम दर्ज करें!",
	alert8: "कृपया पासवर्ड दर्ज करें!",
	alert9: "कृपया भूमिका दर्ज करें!",
	alert10: "कृपया वैध विवरण दर्ज करें",
	edit: "एडीट युजर!",
	deletemsg: "युजर डिलीट करें!",
	update: "अपडेट",
	"delete": "डिलीट",
	close: "बंद करें",
	alert11: "क्या आपको डिलीट करना है?",
	alert12: "सफलतापूर्वक लॉग आउट हो गया!"
};
const json = {
	en: en,
	hn: hn
};

const data = defineEventHandler(async () => {
  return json;
});

export { data as default };
//# sourceMappingURL=data.mjs.map

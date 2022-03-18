<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>이메일 전송화면</h1>

	<%
	
	request.setCharacterEncoding("UTF-8");
	String userName = request.getParameter("name");
	String userEmail = request.getParameter("email");
	String userText = request.getParameter("area");

	out.print("<p>이름 :" + userName + "</p>");
	out.print("<p>이메일 :" + userEmail + "</p>");
	userText = userText.replaceAll("\r","")
			.replaceAll("\n","<br>");
	out.print("<p>내용 :" + userText + "</p>");
	
		%>






</body>
</html>
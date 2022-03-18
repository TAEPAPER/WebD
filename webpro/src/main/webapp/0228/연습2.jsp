<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>회원가입 정보</h1>
<%
 request.setCharacterEncoding("UTF-8");

		String userName = request.getParameter("name");
		String userAddr = request.getParameter("addr");
		String userEmail = request.getParameter("email");
		String gender = request.getParameter("gender");
		
		out.print("<p>이름 :"+ userName+"</p>");
		out.print("<p>주소 :"+ userAddr+"</p>");
		out.print("<p>이메일 :"+ userEmail+"</p>");
		out.print("<p>성별 :"+  gender+"</p>");
		


%>

</body>
</html>
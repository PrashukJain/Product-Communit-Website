package com.productcommunity.filter;

import java.io.IOException;

import javax.security.sasl.AuthenticationException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import com.productcommunity.model.User;
import com.productcommunity.repository.UserRepository;

@Component
public class AuthenticateFilter extends GenericFilterBean {
@Autowired
UserRepository userRepository;
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest=(HttpServletRequest) request;
		if(httpRequest.getHeader("token")!=null) {
			String token=httpRequest.getHeader("token");
			User user=userRepository.getUser(token);
			if(user==null)
				throw new AuthenticationException();
			RequestContextHolder.getRequestAttributes().setAttribute("user", user, RequestAttributes.SCOPE_REQUEST);
			chain.doFilter(httpRequest, response);
		}
		else
			throw new AuthenticationException();
		
	}

}

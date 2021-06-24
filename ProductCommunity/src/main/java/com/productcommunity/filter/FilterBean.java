package com.productcommunity.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextListener;

@Configuration
public class FilterBean {
@Autowired
AuthenticateFilter authenticatefilter;
@Bean
public FilterRegistrationBean<AuthenticateFilter> authenticationBean(){
	FilterRegistrationBean<AuthenticateFilter> authenticateBean=new FilterRegistrationBean<>();
	authenticateBean.setFilter(authenticatefilter);
	authenticateBean.addUrlPatterns("/api/addQuestion","/api/getAllQuestion","/api/getQuestion","/api/searchQuestion","/api/comment");
	return authenticateBean;
}
@Bean
public RequestContextListener requestContextListener(){
	    return new RequestContextListener();
	} 

}

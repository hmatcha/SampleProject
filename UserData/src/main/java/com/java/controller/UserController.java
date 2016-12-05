package com.java.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.java.model.User;
import com.java.service.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService service;

	@Autowired
	private HttpSession session;

	@Autowired
	@RequestMapping("/users")
	@ResponseBody
	List<User> getAllUsersFromDataBase() {
		List<User> users = service.displayUsers();

		return users;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public void loginForm(@RequestBody User userJson) {

		String username = userJson.getUserName();

		String password = userJson.getUserPassword();

		User user = service.getUserByUsernameAndPassword(username, password);

		if (user.equals(null)) {

			throw new RuntimeException();

		}
		session.setAttribute("user", user);

	}

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	@ResponseBody
	public void saveUser(@RequestBody User user) {
		service.insertUser(user);
	}
}

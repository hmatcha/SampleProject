package com.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.dao.UserDAO;
import com.java.model.User;


@Service
public class UserService {

	@Autowired
	private UserDAO userDao;

	 public List<User> displayUsers() {
	
	 return userDao.getAllUsers();
	 }

	public void insertUser(User user) {

		userDao.addUser(user);
	}

	public User getUserByUserID(int Id) {
		return userDao.getUserById(Id);
	}

	public User getUserByUsernameAndPassword(String username, String password) {

		return userDao.getUserByUsernameAndPassword(username, password);
	}
}

package com.java.dao;

import java.util.List;

import com.java.model.User;

public interface UserDAO {
	public List<User> getAllUsers();

	public void addUser(User user);

	public User getUserById(int userID);

	public User getUserByUsernameAndPassword(String username, String password);
}

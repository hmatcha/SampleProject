package com.java.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "User")
@NamedQuery(name="select Users",query="select c from User c")
public class User {
	@Id
	@Column(name = "id")
	private int userID;
	
	@Column(name = "userFirstName")
	private String userFirstName;
	
	@Column(name = "userLastName")
	private String userLastName;
	
	@Column(name = "userName")
	private String userName;
	
	@Column(name = "userPassword")
	private String userPassword;
	
	@Column(name = "userEmail")
	private String userEmail;

	
	
	public User() {

	}

	public User(String userFirstName, String userLastName, String userName,
			String userPassword, String userEmail) {
		super();
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public int getUserID() {
		return userID;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public String getUserLastName() {
		return userLastName;
	}

	public String getUserName() {
		return userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

}

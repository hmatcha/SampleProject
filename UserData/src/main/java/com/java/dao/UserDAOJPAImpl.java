package com.java.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.java.model.User;

@Repository
public class UserDAOJPAImpl implements UserDAO {

	@PersistenceContext
	private EntityManager em;

	public List<User> getAllUsers() {

		Query query = em.createNamedQuery("select Users");
		// TODO Auto-generated method stub
		return (List<User>) query.getResultList();
	}

	@Transactional
	public void addUser(User user) {
		em.persist(user);

	}

	public User getUserById(int userID) {

		Query query = em.createQuery("from User where userID =:1");
		query.setParameter("1", userID);
		return (User) query.getSingleResult();
	}

	public User getUserByUsernameAndPassword(String username, String password) {
		Query query = em.createQuery("from User where userName = :username and userPassword = :password");
		query.setParameter("username", username);
		query.setParameter("password", password);
		System.out.println();
		User user = (User) query.getSingleResult();
		System.out.println(user.getUserFirstName() + "  " + user.getUserLastName());
		return user;
	}

}

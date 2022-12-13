package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TypeRepository typeRepository;
	
	@PostMapping("/users")
	void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@GetMapping("/users")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@PostMapping("/types")
	void addType(@RequestBody Type type) {
		typeRepository.save(type);
	}
	
	@GetMapping("/types")
	public @ResponseBody Iterable<Type> getAllTypes() {
		return typeRepository.findAll();
	}
}

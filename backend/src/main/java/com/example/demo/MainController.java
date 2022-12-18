package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/users/{id}")
	public @ResponseBody Optional<User> getUserById(@PathVariable int id){
		return userRepository.findById(id);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {
		User updateUser = userRepository.findById(id).orElseThrow();;
		
		updateUser.setName(user.getName());
		updateUser.setFirstname(user.getFirstname());
		updateUser.setEmail(user.getEmail());
		updateUser.setTypeuser(user.getTypeUser());
		
		userRepository.save(updateUser);
		
		return ResponseEntity.ok(updateUser);
	}
	
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable int id) {
		userRepository.deleteById(id);
	}
	
	@PostMapping("/types")
	void addType(@RequestBody Type type) {
		typeRepository.save(type);
	}
	
	@GetMapping("/types")
	public @ResponseBody Iterable<Type> getAllTypes() {
		return typeRepository.findAll();
	}
	
	@GetMapping("/types/{id}")
	public @ResponseBody Optional<Type> getTypeById(@PathVariable int id){
		return typeRepository.findById(id);
	}
	
	@PutMapping("/types/{id}")
	public ResponseEntity<Type> updateType(@PathVariable int id, @RequestBody Type type) {
		Type updateType = typeRepository.findById(id).orElseThrow();;
		
		updateType.setName(type.getName());
		
		typeRepository.save(updateType);
		
		return ResponseEntity.ok(updateType);
	}

	
	@DeleteMapping("/types/{id}")
	public void deleteType(@PathVariable int id) {
		typeRepository.deleteById(id);
	}
}

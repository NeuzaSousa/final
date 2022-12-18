package com.example.demo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="type")
public class Type {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (name = "type_id")
	int type_id;
	String name;
	
	@OneToMany (mappedBy = "type")
	private Set<User> user = new HashSet<>();
	
	public int getTypeId() {
		return type_id;
	}
	public void setTypeId(int type_id) {
		this.type_id = type_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}

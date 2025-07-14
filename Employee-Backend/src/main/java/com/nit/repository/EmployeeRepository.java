package com.nit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nit.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
	public Employee findByEmail(String email);
}

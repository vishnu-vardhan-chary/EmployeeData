package com.nit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nit.dto.EmployeeDTO;
import com.nit.exception.UserNotFoundException;
import com.nit.model.Employee;
import com.nit.service.EmployeeService;

import jakarta.validation.Valid;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/api/users")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public List<EmployeeDTO> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	@GetMapping("/paginated")
	public Page<EmployeeDTO> getUsersPaginated(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "5") int size){
		return employeeService.getUsersPaginated(page, size);
	}
	@PostMapping
	public String saveEmployee(@Valid @RequestBody EmployeeDTO emp) {
		return employeeService.saveEmployee(emp);
	}
	
	@GetMapping("/{id}")
	public EmployeeDTO getEmployeeById(@PathVariable long id) {
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping("/{id}")
	public EmployeeDTO updateEmployee(@PathVariable long id,@RequestBody EmployeeDTO emp) {
		return employeeService.updateEmployee(id, emp);
	}
	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable long id) {
		return employeeService.deleteEmployee(id);
	}
}

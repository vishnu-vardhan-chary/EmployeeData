package com.nit.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.nit.dto.EmployeeDTO;
import com.nit.exception.NotPermitException;
import com.nit.exception.UserNotFoundException;
import com.nit.model.Employee;
import com.nit.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	private EmployeeDTO entityToDTO(Employee em) {
		
		EmployeeDTO dto = new EmployeeDTO();
		dto.setId(em.getId());
		dto.setName(em.getName());
		dto.setEmail(em.getEmail());
		dto.setAddress(em.getAddress());
		dto.setSalary(em.getSalary());
		
		return dto;
	}
	
	private Employee dtoToEntity(EmployeeDTO dto) {
		
		Employee emp = new Employee();
		if(dto.getId() != null) {
			emp.setId(dto.getId());
		}
		emp.setName(dto.getName());
		emp.setEmail(dto.getEmail());
		emp.setAddress(dto.getAddress());
		emp.setSalary(dto.getSalary());
		
		return emp;
	}

	public List<EmployeeDTO> getAllEmployees(){
		
		return employeeRepository.findAll().stream()
				.map(this :: entityToDTO)
				.collect(Collectors.toList());
	}
	
	public Page<EmployeeDTO> getUsersPaginated(int page, int size){
		
		Pageable pageable = PageRequest.of(page, size);
		
		return employeeRepository.findAll(pageable)
				.map(this :: entityToDTO);
	}
	
	public String saveEmployee(EmployeeDTO dto) {
		
		Employee findEmail = employeeRepository.findByEmail(dto.getEmail());
		
		if(findEmail != null) {
			return "User Already Available";
		}
		Employee emp = dtoToEntity(dto);
		entityToDTO(employeeRepository.save(emp));
		return "User Saved";
	}
	
	public EmployeeDTO getEmployeeById(long id) {
		return entityToDTO(employeeRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User Not Found")));
	}
	
	public EmployeeDTO updateEmployee(long id,EmployeeDTO dto) {
		Employee em = employeeRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User Not Found"));
		if(dto.getEmail() != null) throw new NotPermitException("Can't Update Email");
		
		em.setName(dto.getName());
		em.setAddress(dto.getAddress());
		em.setSalary(dto.getSalary());
		
		return entityToDTO(employeeRepository.save(em));
	}
	public String deleteEmployee(long id) {
		employeeRepository.deleteById(id);
		return "Employee is Deleted";
	}
	
}

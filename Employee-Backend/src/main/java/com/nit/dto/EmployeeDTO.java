package com.nit.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class EmployeeDTO {

	private Long id;
	
	@NotBlank(message = "Name should not be empty")
	private String name;
	
	@NotBlank(message = "Email is Required")
	@Email(message = "Invalid Email")
	private String email;
	
	@NotBlank(message = "Address cannot be Empty")
	private String address;
	
	@Min(value = 10000)
	@Max(value = 100000)
	private Double salary;
}

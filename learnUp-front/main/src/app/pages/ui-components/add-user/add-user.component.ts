import { HttpClient, type HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators, type FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import type { Apprenant } from 'src/app/models/Apprenant';
import type { StudentAndUserDTO } from 'src/app/models/ApprenatAndUser';
import type { FormateurAndUserDTO } from 'src/app/models/FormateurAndUser';
import type { Formateur } from 'src/app/models/formateur';
import type { userDTO } from 'src/app/models/user';
import { FormateurService } from 'src/app/services/formateur.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {


  registrationForm: FormGroup;

  formateurForm: FormGroup;
  showApprenant: boolean = false;
  showFormateur: boolean = false;
  http = inject(HttpClient);
  
  ReactiveFormsModule = inject(ReactiveFormsModule);

  constructor(@Inject(FormateurService) private formateurService:FormateurService,
  @Inject(StudentService)private studentService: StudentService,
  @Inject(FormBuilder) private fb: FormBuilder,  
    @Inject(MatSnackBar) private snackBar: MatSnackBar) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['APPRENANT'], // Assuming default role is APPRENANT
      interests: [''], // Add interests field if needed
      educationLevel: [''], // Add educationLevel field if needed
      classe: ['', Validators.required] // Add classe field with Validators.required
    });
    


    this.formateurForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      expertise: ['', Validators.required],
      role: ['FORMATEUR'],
      experience: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }


  onSubmitFormateur(): void {
    if (this.formateurForm.valid) {
      const formData = this.formateurForm.value;
      const formateur: Formateur = {
        formateurId: 0, // Assign an ID if needed
        userDTO: {
          userId: 0, // Assign an ID if needed
          email: formData.email,
          password: formData.password,
          role: formData.role, 
          formateurId: 0
        },
        fullName: formData.fullName,
        expertise: formData.expertise,
        experience: formData.experience,
        phoneNumber: formData.phoneNumber,
        courDtos: null, // Set courDtos to null
      };
  
      const formateurAndUser: FormateurAndUserDTO = {
        formateurDTO: formateur,
        userDTO: formateur.userDTO, // Assign userDTO from formateur
      };
  
      this.formateurService.addFormateur(formateurAndUser).subscribe(
        (response: Formateur) => {
          console.log('Formateur added successfully:', response);
          this.formateurForm.reset();
          this.openSnackBar('Formateur added successfully');
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding formateur:', error);
        }
      );
    }
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      const user: userDTO = {
        userId: 0, 
        email: formData.email,
        password: formData.password,
        role: formData  .role,
    
        formateurId: 0
      };

      const student: Apprenant = {
        apprenantId: 0, 
        userDTO: user,
        fullName: formData.fullName,
        classe:formData.classe,
        interests: formData.interests,
        educationLevel: formData.educationLevel,
      };

      const studentAndUser: StudentAndUserDTO = {
        apprenantDTO: student,
        userDTO: user,
      };

      this.studentService.addStudent(studentAndUser).subscribe(
        (response:any) => {
          console.log('Student added successfully:', response);
          this.registrationForm.reset();
          this.openSnackBar('Student added successfully')
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding student:', error);
        }
      );
    }
  }
  
  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, 
      horizontalPosition: 'center', 
      verticalPosition: 'bottom'
    });
  }
}

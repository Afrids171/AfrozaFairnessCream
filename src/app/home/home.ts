import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      Qty: [1, [Validators.required, Validators.min(1)]],
      creamType: ['', Validators.required]
    });
  }

  submitOrder() {
    if (this.orderForm.invalid) return;

    const { name, phone, address, Qty, creamType } = this.orderForm.value;

    const message = encodeURIComponent(
      `New Order:
Name: ${name}
Phone: ${phone}
Address: ${address}
Quantity: ${Qty}
Product Name: ${creamType}
Date: ${new Date().toLocaleString()}
Please confirm the order and provide payment details.`
    );

    const whatsappNumber = '918419971552'; // 🔴 replace with your number

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    // More reliable than window.open
    window.location.href = url;

    this.orderForm.reset();
  }
}


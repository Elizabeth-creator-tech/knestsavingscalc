# KNEST Member Savings Calculator

A professional web-based tool designed for KNEST members to estimate their future savings based on regular monthly contributions and compound interest.

## Features

1. Monthly Contribution Analysis: Calculate total savings based on a fixed monthly deposit amount.
2. Compound Interest Logic: Applies the standard formula for regular deposits to show potential growth.
3. Responsive Design: Optimized for both desktop and mobile devices.
4. Clean Interface: Minimalist design using KNEST brand colors and modern typography.

## Project Structure

The project follows a standard web application structure:

- index.html: The main entry point containing the application structure.
- static/css/style.css: External stylesheet for all visual styling and animations.
- static/js/script.js: Logic for interest calculations and UI transitions.

## Calculation Logic

The calculator uses the following formula to determine total savings:

Total = P * ((1 + r)^n - 1) / r

Where:
- P is the monthly contribution amount.
- r is the monthly interest rate (annual rate divided by 12).
- n is the total number of months.

## Installation and Usage

1. Clone the repository to your local machine.
2. Open index.html in any modern web browser.
3. Enter your monthly contribution, duration in months, and annual interest rate.
4. Click Calculate to view your results.

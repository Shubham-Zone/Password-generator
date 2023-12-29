# React.js Password Generator

This is a simple password generator built using React.js. It allows users to generate secure passwords with customizable settings like length, inclusion of numbers, and special characters.

## Features

- Customizable Passwords: Users can adjust the length of the password and select options to include numbers and special characters.
- Secure Generation: The generator uses a secure random algorithm to ensure strong and unpredictable passwords.
- Copy to Clipboard: Users can easily copy the generated password to their clipboard with a single click.
- Responsive Design: The application is designed to work seamlessly across various devices and screen sizes.

## Code Overview

This password generator uses React functional components along with hooks such as `useState`, `useEffect`, `useCallback`, and `useRef` to manage state, handle side effects, and interact with the DOM.

- `useState`: Manages the state of password length, allowed numbers, allowed special characters, and the generated password itself.
- `useEffect`: Triggers the password generation whenever there's a change in length, inclusion of characters, or numbers.
- `useCallback`: Handles the password generation and copying to the clipboard functions, optimizing performance by memoizing functions.
- `useRef`: References the password input field for copying to the clipboard.

## Installation and Usage

To run this password generator locally:

1. Clone this repository: `git clone https://github.com/shubham-zone/password-generator.git`
2. Navigate to the project directory: `cd password-generator`
3. Install dependencies: `npm install`
4. Run the application: `npm start`

The application will open in your default web browser at `http://localhost:3000`.

Once the application is running:

1. Adjust the slider to set the password length.
2. Check the checkboxes to include numbers and special characters.
3. The generated password will appear in the input field.
4. Click the "Copy" button to copy the password to your clipboard.

## Technologies Used

- React.js
- JavaScript
- HTML/CSS

## Contributing

Contributions are welcome! Feel free to fork the repository, make enhancements, and create a pull request.

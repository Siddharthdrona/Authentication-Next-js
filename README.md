# 🔐 Authentication System

A secure and modern authentication system built with **Next.js**, **MongoDB**, **BcryptJS**, **Nodemailer**, and **Mailtrap**.

The application provides user registration, login, email verification, password reset functionality, and protected routes while following industry-standard security practices.

---

## 🚀 Features

* ✅ User Registration (Sign Up)
* ✅ User Login (Sign In)
* ✅ Secure Password Hashing with BcryptJS
* ✅ Email Verification via Verification Links
* ✅ Forgot Password Functionality
* ✅ Password Reset via Email
* ✅ Protected Routes
* ✅ Authentication Middleware
* ✅ MongoDB Database Integration
* ✅ Responsive User Interface
* ✅ Secure Token Generation & Validation
* ✅ Email Testing with Mailtrap

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* JavaScript

### Backend

* Next.js API Routes

### Database

* MongoDB
* Mongoose

### Authentication & Security

* BcryptJS
* JWT (if applicable)

### Email Service

* Nodemailer
* Mailtrap

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Siddharthdrona/Authentication-Next-js.git

cd Authentication-Next-js
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string

TOKEN_SECRET=your_secret_key

MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASSWORD=your_mailtrap_password

DOMAIN=http://localhost:3000
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## 🔐 Authentication Flow

### User Registration

1. User enters registration details.
2. Password is hashed using BcryptJS.
3. User information is stored in MongoDB.
4. Verification token is generated.
5. Verification email is sent via Nodemailer and Mailtrap.

### Email Verification

1. User clicks the verification link.
2. Token is validated.
3. Account is marked as verified.

### Login

1. User enters credentials.
2. Password is compared using BcryptJS.
3. Authentication token/session is created.
4. Access to protected pages is granted.

### Password Reset

1. User requests password reset.
2. Reset token is generated.
3. Email containing reset link is sent.
4. User creates a new password.

---

## 🔒 Security Features

* Password Hashing with BcryptJS
* Email Verification Before Login
* Secure Password Reset Workflow
* Token Expiration Handling
* Protected Routes
* Environment Variable Protection
* Authentication Middleware

---

## 📧 Mailtrap Integration

Mailtrap is used for safe email testing during development.

```env
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=your_username
MAILTRAP_PASSWORD=your_password
```

---

## 🗄️ MongoDB Configuration

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
```

---

## 🎯 Future Enhancements

* Google OAuth Authentication
* GitHub OAuth Authentication
* Two-Factor Authentication (2FA)
* Role-Based Access Control (RBAC)
* User Profile Management
* Session Management Dashboard
* Activity & Security Logs

---

## 📸 Screenshots

### Login Page

*Add screenshot here*

### Signup Page

*Add screenshot here*

### Profile Page

*Add screenshot here*

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "feat: add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Siddharth Dronachary**

* GitHub: https://github.com/Siddharthdrona
* LinkedIn: https://www.linkedin.com/in/siddharth-dronachary/

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, please consider giving it a star on GitHub!

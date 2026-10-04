// ============================================================
// USERS
// ============================================================

// المستخدمين الافتراضيين
const defaultUsers = [
    {
        fullName: "Ahmad Ali",
        email: "ahmad@gmail.com",
        password: "123456",
        address: "Amman",
        role: "user"
    },

    {
        fullName: "Sara Mohammad",
        email: "sara@gmail.com",
        password: "sara123",
        address: "Irbid",
        role: "user"
    },

    {
        fullName: "Omar Khaled",
        email: "omar@gmail.com",
        password: "omar123",
        address: "Zarqa",
        role: "user"
    },

    {
        fullName: "Lina Ahmad",
        email: "lina@gmail.com",
        password: "lina123",
        address: "Aqaba",
        role: "user"
    }
];


// Get users from Local Storage
let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;


// Add role to old users if they don't have one
users = users.map(function (user) {

    if (!user.role) {
        user.role = "user";
    }

    return user;
});


// Save users in Local Storage
function saveUsers() {

    localStorage.setItem("users", JSON.stringify(users));

}


// ============================================================
// ADMIN ACCOUNT
// ============================================================

// Check if Admin already exists
const adminExists = users.some(function (user) {

    return user.role === "admin";

});


// If Admin does not exist, create Admin account
if (!adminExists) {

    const adminUser = {

        fullName: "Admin",
        email: "admin@gmail.com",
        password: "admin123",
        address: "Amman",
        role: "admin"

    };

    users.push(adminUser);

}


// Save users
saveUsers();


// ============================================================
// REGISTER
// ============================================================

const registerForm = document.getElementById("register-form");


if (registerForm) {

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const addressInput = document.getElementById("address");

    const passwordInput = document.getElementById("password");

    const confirmPasswordInput =
        document.getElementById("confirm-password");

    const emailMessage =
        document.getElementById("email-message");

    const message =
        document.getElementById("message");


    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const address = addressInput.value.trim();

        const password = passwordInput.value;

        const confirmPassword =
            confirmPasswordInput.value;


        // ====================================================
        // FULL NAME VALIDATION
        // ====================================================

        if (name === "") {

            message.textContent =
                "Please enter your full name";

            message.className = "error";

            return;
        }


        // ====================================================
        // EMAIL VALIDATION
        // ====================================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailMessage.textContent =
                "Please enter your email";

            emailMessage.className = "error";

            return;
        }


        if (!emailPattern.test(email)) {

            emailMessage.textContent =
                "Please enter a valid email address";

            emailMessage.className = "error";

            return;
        }


        // ====================================================
        // CHECK EMAIL ALREADY EXISTS
        // ====================================================

        const existingUser = users.find(function (user) {

            return user.email === email;

        });


        if (existingUser) {

            emailMessage.textContent =
                "This email is already registered";

            emailMessage.className = "error";

            return;
        }


        // ====================================================
        // ADDRESS VALIDATION
        // ====================================================

        if (address === "") {

            message.textContent =
                "Please enter your address";

            message.className = "error";

            return;
        }


        // ====================================================
        // PASSWORD VALIDATION
        // ====================================================

        if (password === "") {

            message.textContent =
                "Please enter your password";

            message.className = "error";

            return;
        }


        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters long";

            message.className = "error";

            return;
        }


        // ====================================================
        // CONFIRM PASSWORD
        // ====================================================

        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match";

            message.className = "error";

            return;
        }


        // ====================================================
        // CREATE NEW USER
        // ====================================================

        const newUser = {

            fullName: name,

            email: email,

            password: password,

            address: address,

            role: "user"

        };


        // Add new user to users array
        users.push(newUser);


        // Save updated users
        saveUsers();


        // Success message
        message.textContent =
            "Registration successful!";

        message.className = "success";


        // Clear form
        registerForm.reset();

    });

}


// ============================================================
// LOGIN
// ============================================================

const loginForm = document.getElementById("login-form");


if (loginForm) {

    const emailInput =
        document.getElementById("login-email");

    const passwordInput =
        document.getElementById("login-password");

    const message =
        document.getElementById("message");


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;


        // ====================================================
        // EMAIL VALIDATION
        // ====================================================

        if (email === "") {

            message.textContent =
                "Email is required";

            message.className = "error";

            return;
        }


        if (!emailInput.checkValidity()) {

            message.textContent =
                "Please enter a valid email";

            message.className = "error";

            return;
        }


        // ====================================================
        // PASSWORD VALIDATION
        // ====================================================

        if (password === "") {

            message.textContent =
                "Password is required";

            message.className = "error";

            return;
        }


        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters";

            message.className = "error";

            return;
        }


        // ====================================================
        // FIND USER
        // ====================================================

        const user = users.find(function (user) {

            return user.email === email;

        });


        // User does not exist
        if (!user) {

            message.textContent =
                "User not found";

            message.className = "error";

            return;
        }


        // ====================================================
        // CHECK PASSWORD
        // ====================================================

        if (user.password !== password) {

            message.textContent =
                "Incorrect password";

            message.className = "error";

            return;
        }


        // ====================================================
        // LOGIN SUCCESSFUL
        // ====================================================

        // Save current logged-in user
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );


        // Check user role
        if (user.role === "admin") {

            // Admin → Admin Dashboard
            window.location.href =
                "admin-dashboard.html";

        } else {

            // Normal user → User Dashboard
            window.location.href =
                "dashboard.html";

        }

    });

}


// ============================================================
// USER DASHBOARD
// ============================================================

const userName =
    document.getElementById("user-name");


if (userName) {

    // Get current user
    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));


    // If no user is logged in
    if (!currentUser) {

        window.location.href = "login.html";

    }


    // If Admin tries to open User Dashboard
    else if (currentUser.role === "admin") {

        window.location.href =
            "admin-dashboard.html";

    }


    else {

        // Display user information

        document.getElementById("user-name").textContent =
            currentUser.fullName;

        document.getElementById("user-email").textContent =
            currentUser.email;

        document.getElementById("user-address").textContent =
            currentUser.address;

        document.getElementById("user-role").textContent =
            currentUser.role;

    }

}


// ============================================================
// ADMIN DASHBOARD
// ============================================================

const usersTableBody =
    document.getElementById("users-table-body");


if (usersTableBody) {

    // Get current user
    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));


    // No one is logged in
    if (!currentUser) {

        window.location.href =
            "login.html";

    }


    // Normal user is not allowed
    else if (currentUser.role !== "admin") {

        window.location.href =
            "dashboard.html";

    }


    else {

        // Clear table
        usersTableBody.innerHTML = "";


        // Display all users
        users.forEach(function (user) {

            const row =
                document.createElement("tr");


            const nameCell =
                document.createElement("td");

            const emailCell =
                document.createElement("td");

            const addressCell =
                document.createElement("td");

            const roleCell =
                document.createElement("td");


            // Add user information
            nameCell.textContent =
                user.fullName;

            emailCell.textContent =
                user.email;

            addressCell.textContent =
                user.address;

            roleCell.textContent =
                user.role;


            // Add cells to row
            row.appendChild(nameCell);

            row.appendChild(emailCell);

            row.appendChild(addressCell);

            row.appendChild(roleCell);


            // Add row to table
            usersTableBody.appendChild(row);

        });

    }

}


// ============================================================
// LOGOUT
// ============================================================

const logoutBtn =
    document.getElementById("logout-btn");


if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        // Remove current logged-in user
        localStorage.removeItem("currentUser");


        // Go back to Login
        window.location.href =
            "login.html";

    });

}

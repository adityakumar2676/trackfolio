const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

const getUsers = () => {
    const users = localStorage.getItem(USERS_KEY);

    return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const getCurrentUser = () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);

    return user ? JSON.parse(user) : null;
};

const setCurrentUser = (user) => {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

const clearCurrentUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

const register = ({ name, email, password }) => {
    const users = getUsers();

    const userExists = users.some(
        (user) => user.email.toLowerCase() === email.toLowerCase(),
    );

    if (userExists) {
        return {
            success: false,
            message: "Email already exists.",
        };
    }

    const newUser = {
        id: crypto.randomUUID(),
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    setCurrentUser(newUser);

    return {
        success: true,
        user: newUser,
    };
};

const login = ({ email, password }) => {
    const users = getUsers();

    const user = users.find(
        (user) =>
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password,
    );

    if (!user) {
        return {
            success: false,
            message: "Invalid email or password.",
        };
    }

    setCurrentUser(user);

    return {
        success: true,
        user,
    };
};

export {
    getUsers,
    saveUsers,
    getCurrentUser,
    setCurrentUser,
    clearCurrentUser,
    register,
    login,
};

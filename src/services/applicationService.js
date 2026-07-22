import { getCurrentUser, getUsers, saveUsers } from "./authService";

const getApplications = () => {
    const currentUser = getCurrentUser();

    if (!currentUser) return [];

    const users = getUsers();

    const user = users.find((user) => user.id === currentUser.id);

    return user?.applications || [];
};

const addApplication = (applicationData) => {
    const currentUser = getCurrentUser();

    if (!currentUser) return;

    const users = getUsers();

    const user = users.find((user) => user.id === currentUser.id);

    if (!user) return;

    const newApplication = {
        id: crypto.randomUUID(),
        ...applicationData,
    };

    user.applications.push(newApplication);

    saveUsers(users);

    return newApplication;
};

const updateApplication = (id, updatedData) => {
    const currentUser = getCurrentUser();

    if (!currentUser) return;

    const users = getUsers();

    const user = users.find((user) => user.id === currentUser.id);

    if (!user) return;

    const index = user.applications.findIndex(
        (application) => application.id === id,
    );

    if (index === -1) return;

    user.applications[index] = {
        ...user.applications[index],
        ...updatedData,
    };

    saveUsers(users);

    return user.applications[index];
};

const deleteApplication = (id) => {
    const currentUser = getCurrentUser();

    if (!currentUser) return;

    const users = getUsers();

    const user = users.find((user) => user.id === currentUser.id);

    if (!user) return;

    user.applications = user.applications.filter(
        (application) => application.id !== id,
    );

    saveUsers(users);
};

export {
    getApplications,
    addApplication,
    updateApplication,
    deleteApplication,
};

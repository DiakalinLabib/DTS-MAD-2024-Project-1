const users = [
    {
        name: 'John Doe',
        email: 'johndoe@dtsmap.com',
        password: 'password',
    },
];

const getUsers = () => {
    return users;
};

const checkUser = (password) => {
    return users.find(user => {
        return user.password === password;
    });
};

export {
    checkUser,
    getUsers,
};
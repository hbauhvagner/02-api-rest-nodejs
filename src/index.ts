interface User {
    birthyear: Number;
}

function calculateAgeOfUser(user: User) {
    return new Date().getFullYear() - user.birthyear
}

calculateAgeOfUser('Vagner')
calculateAgeOfUser({})
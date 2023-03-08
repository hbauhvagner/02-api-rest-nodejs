function calculateAgeOfUser(user) {
    return new Date().getFullYear() - user.birthyear;
}
calculateAgeOfUser('Vagner');
calculateAgeOfUser({});

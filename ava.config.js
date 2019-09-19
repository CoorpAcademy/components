export default {
    files: ['src/**/test/**/*.js'],
    require: ['@babel/register'],
    helpers: [
        "**/test/**/helpers/**/*",
        "**/test/**/fixtures/**/*"
    ]
};

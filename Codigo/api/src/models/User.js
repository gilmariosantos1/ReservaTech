export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'users',
        timestamps: true
    });

    return User;
};

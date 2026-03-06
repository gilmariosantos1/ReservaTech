export default (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        tableName: 'cursos',
        timestamps: true
    });

    return Curso;
};

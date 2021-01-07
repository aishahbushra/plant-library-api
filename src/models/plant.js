module.exports = (connection, DataTypes) => {
    const schema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        watering: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        feeding: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sunlightLevel: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };

    const PlantModel=  connection.define('Plant', schema);
    return PlantModel
};
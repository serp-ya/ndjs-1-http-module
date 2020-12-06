const prepareWeatherResponse = ({ current }) => ([
    `Temperature: ${current.temperature} degrees`,
    `Pressure: ${current.pressure}`,
    `Visibility: ${current.visibility} mi`,
].join('\n'));

module.exports = {
    prepareWeatherResponse,
};
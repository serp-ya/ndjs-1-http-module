#!/usr/bin/env node -r dotenv/config
const url = require('url');
const http = require('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const { prepareWeatherResponse } = require('./utils');
const { API_ENDPOINT, API_SEARCH_PARAMETERS } = require('./constants');

const argv = yargs(hideBin(process.argv))
    .option('c', {
        alias: 'city',
        demandOption: true,
        description: 'City name',
        type: 'string',
    })
    .help('h')
    .alias('h', 'help')
    .argv

if (!argv.city) {
    process.stderr.write('Parameter "city" is required\n');
    process.exit(1);
}

const apiUrl = new URL(API_ENDPOINT);
apiUrl.searchParams.append(API_SEARCH_PARAMETERS.ACCESS_KEY, process.env.WEATHER_STACK_API_KEY);
apiUrl.searchParams.append(API_SEARCH_PARAMETERS.QUERY, argv.city);

http.get(apiUrl, (res) => {
    let responseBody = '';

    res.setEncoding('UTF8');
    res.on('data', chunk => responseBody += chunk);
    res.on('end', () => {
        const result = JSON.parse(responseBody);

        if (result.error) {
            process.stdout.write(result?.error?.info || 'Unhandable error');
            process.exit(0);
        }
        
        const formattedResponse = prepareWeatherResponse(result);
        process.stdout.write(formattedResponse);
        process.exit(0);
    });

    res.on('error', error => {
        process.stdout.write(error);
        process.exit(-1);
    });
});
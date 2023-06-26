// Function to fetch the weather data from OpenWeatherMap API
function fetchWeatherData(latitude, longitude) {
    const apiKey = '6552f3b85e2772c17f883f3f0495a7de'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=fr`;

    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}

// Function to update the HTML elements with weather data
function updateWeatherData(weatherData) {
    const temperatureElement = document.getElementById('temp');
    const weatherElement = document.getElementById('weather');
    const locationElement = document.getElementById('location');

    temperatureElement.textContent = `${weatherData.main.temp} °C`;
    weatherElement.textContent = weatherData.weather[0].description;
    locationElement.textContent = addFlagEmoji(`${weatherData.name}, ${weatherData.sys.country}`);
}

// Function to get the current device's location and fetch weather data
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetchWeatherData(latitude, longitude)
                    .then(weatherData => updateWeatherData(weatherData));
            },
            error => console.log(error)
        );
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function addFlagEmoji(text) {
    var countryCode = getEndOfString(text, 2)

    const countryFlags = {
        AF: '🇦🇫', // Afghanistan
        AX: '🇦🇽', // Åland Islands
        AL: '🇦🇱', // Albania
        DZ: '🇩🇿', // Algeria
        AS: '🇦🇸', // American Samoa
        AD: '🇦🇩', // Andorra
        AO: '🇦🇴', // Angola
        AI: '🇦🇮', // Anguilla
        AQ: '🇦🇶', // Antarctica
        AG: '🇦🇬', // Antigua & Barbuda
        AR: '🇦🇷', // Argentina
        AM: '🇦🇲', // Armenia
        AW: '🇦🇼', // Aruba
        AU: '🇦🇺', // Australia
        AT: '🇦🇹', // Austria
        AZ: '🇦🇿', // Azerbaijan
        BS: '🇧🇸', // Bahamas
        BH: '🇧🇭', // Bahrain
        BD: '🇧🇩', // Bangladesh
        BB: '🇧🇧', // Barbados
        BY: '🇧🇾', // Belarus
        BE: '🇧🇪', // Belgium
        BZ: '🇧🇿', // Belize
        BJ: '🇧🇯', // Benin
        BM: '🇧🇲', // Bermuda
        BT: '🇧🇹', // Bhutan
        BO: '🇧🇴', // Bolivia
        BQ: '🇧🇶', // Bonaire, Sint Eustatius & Saba
        BA: '🇧🇦', // Bosnia & Herzegovina
        BW: '🇧🇼', // Botswana
        BV: '🇧🇻', // Bouvet Island
        BR: '🇧🇷', // Brazil
        IO: '🇮🇴', // British Indian Ocean Territory
        VG: '🇻🇬', // British Virgin Islands
        BN: '🇧🇳', // Brunei
        BG: '🇧🇬', // Bulgaria
        BF: '🇧🇫', // Burkina Faso
        BI: '🇧🇮', // Burundi
        KH: '🇰🇭', // Cambodia
        CM: '🇨🇲', // Cameroon
        CA: '🇨🇦', // Canada
        CV: '🇨🇻', // Cape Verde
        KY: '🇰🇾', // Cayman Islands
        CF: '🇨🇫', // Central African Republic
        TD: '🇹🇩', // Chad
        CL: '🇨🇱', // Chile
        CN: '🇨🇳', // China
        CX: '🇨🇽', // Christmas Island
        CC: '🇨🇨', // Cocos (Keeling) Islands
        CO: '🇨🇴', // Colombia
        KM: '🇰🇲', // Comoros
        CG: '🇨🇬', // Congo - Brazzaville
        CD: '🇨🇩', // Congo - Kinshasa
        CK: '🇨🇰', // Cook Islands
        CR: '🇨🇷', // Costa Rica
        HR: '🇭🇷', // Croatia
        CU: '🇨🇺', // Cuba
        CW: '🇨🇼', // Curaçao
        CY: '🇨🇾', // Cyprus
        CZ: '🇨🇿', // Czechia
        CI: '🇨🇮', // Côte d’Ivoire
        DK: '🇩🇰', // Denmark
        DJ: '🇩🇯', // Djibouti
        DM: '🇩🇲', // Dominica
        DO: '🇩🇴', // Dominican Republic
        EC: '🇪🇨', // Ecuador
        EG: '🇪🇬', // Egypt
        SV: '🇸🇻', // El Salvador
        GQ: '🇬🇶', // Equatorial Guinea
        ER: '🇪🇷', // Eritrea
        EE: '🇪🇪', // Estonia
        SZ: '🇸🇿', // Eswatini
        ET: '🇪🇹', // Ethiopia
        FK: '🇫🇰', // Falkland Islands
        FO: '🇫🇴', // Faroe Islands
        FJ: '🇫🇯', // Fiji
        FI: '🇫🇮', // Finland
        FR: '🇫🇷', // France
        GF: '🇬🇫', // French Guiana
        PF: '🇵🇫', // French Polynesia
        TF: '🇹🇫', // French Southern Territories
        GA: '🇬🇦', // Gabon
        GM: '🇬🇲', // Gambia
        GE: '🇬🇪', // Georgia
        DE: '🇩🇪', // Germany
        GH: '🇬🇭', // Ghana
        GI: '🇬🇮', // Gibraltar
        GR: '🇬🇷', // Greece
        GL: '🇬🇱', // Greenland
        GD: '🇬🇩', // Grenada
        GP: '🇬🇵', // Guadeloupe
        GU: '🇬🇺', // Guam
        GT: '🇬🇹', // Guatemala
        GG: '🇬🇬', // Guernsey
        GN: '🇬🇳', // Guinea
        GW: '🇬🇼', // Guinea-Bissau
        GY: '🇬🇾', // Guyana
        HT: '🇭🇹', // Haiti
        HN: '🇭🇳', // Honduras
        HK: '🇭🇰', // Hong Kong SAR China
        HU: '🇭🇺', // Hungary
        IS: '🇮🇸', // Iceland
        IN: '🇮🇳', // India
        ID: '🇮🇩', // Indonesia
        IR: '🇮🇷', // Iran
        IQ: '🇮🇶', // Iraq
        IE: '🇮🇪', // Ireland
        IM: '🇮🇲', // Isle of Man
        IL: '🇮🇱', // Israel
        IT: '🇮🇹', // Italy
        JM: '🇯🇲', // Jamaica
        JP: '🇯🇵', // Japan
        JE: '🇯🇪', // Jersey
        JO: '🇯🇴', // Jordan
        KZ: '🇰🇿', // Kazakhstan
        KE: '🇰🇪', // Kenya
        KI: '🇰🇮', // Kiribati
        KW: '🇰🇼', // Kuwait
        KG: '🇰🇬', // Kyrgyzstan
        LA: '🇱🇦', // Laos
        LV: '🇱🇻', // Latvia
        LB: '🇱🇧', // Lebanon
        LS: '🇱🇸', // Lesotho
        LR: '🇱🇷', // Liberia
        LY: '🇱🇾', // Libya
        LI: '🇱🇮', // Liechtenstein
        LT: '🇱🇹', // Lithuania
        LU: '🇱🇺', // Luxembourg
        MO: '🇲🇴', // Macao SAR China
        MG: '🇲🇬', // Madagascar
        MW: '🇲🇼', // Malawi
        MY: '🇲🇾', // Malaysia
        MV: '🇲🇻', // Maldives
        ML: '🇲🇱', // Mali
        MT: '🇲🇹', // Malta
        MH: '🇲🇭', // Marshall Islands
        MQ: '🇲🇶', // Martinique
        MR: '🇲🇷', // Mauritania
        MU: '🇲🇺', // Mauritius
        YT: '🇾🇹', // Mayotte
        MX: '🇲🇽', // Mexico
        FM: '🇫🇲', // Micronesia
        MD: '🇲🇩', // Moldova
        MC: '🇲🇨', // Monaco
        MN: '🇲🇳', // Mongolia
        ME: '🇲🇪', // Montenegro
        MS: '🇲🇸', // Montserrat
        MA: '🇲🇦', // Morocco
        MZ: '🇲🇿', // Mozambique
        MM: '🇲🇲', // Myanmar (Burma)
        NA: '🇳🇦', // Namibia
        NR: '🇳🇷', // Nauru
        NP: '🇳🇵', // Nepal
        NL: '🇳🇱', // Netherlands
        NC: '🇳🇨', // New Caledonia
        NZ: '🇳🇿', // New Zealand
        NI: '🇳🇮', // Nicaragua
        NE: '🇳🇪', // Niger
        NG: '🇳🇬', // Nigeria
        NU: '🇳🇺', // Niue
        NF: '🇳🇫', // Norfolk Island
        KP: '🇰🇵', // North Korea
        MK: '🇲🇰', // North Macedonia
        MP: '🇲🇵', // Northern Mariana Islands
        NO: '🇳🇴', // Norway
        OM: '🇴🇲', // Oman
        PK: '🇵🇰', // Pakistan
        PW: '🇵🇼', // Palau
        PS: '🇵🇸', // Palestinian Territories
        PA: '🇵🇦', // Panama
        PG: '🇵🇬', // Papua New Guinea
        PY: '🇵🇾', // Paraguay
        PE: '🇵🇪', // Peru
        PH: '🇵🇭', // Philippines
        PN: '🇵🇳', // Pitcairn Islands
        PL: '🇵🇱', // Poland
        PT: '🇵🇹', // Portugal
        PR: '🇵🇷', // Puerto Rico
        QA: '🇶🇦', // Qatar
        RO: '🇷🇴', // Romania
        RU: '🇷🇺', // Russia
        RW: '🇷🇼', // Rwanda
        RE: '🇷🇪', // Réunion
        WS: '🇼🇸', // Samoa
        SM: '🇸🇲', // San Marino
        SA: '🇸🇦', // Saudi Arabia
        SN: '🇸🇳', // Senegal
        RS: '🇷🇸', // Serbia
        SC: '🇸🇨', // Seychelles
        SL: '🇸🇱', // Sierra Leone
        SG: '🇸🇬', // Singapore
        SX: '🇸🇽', // Sint Maarten
        SK: '🇸🇰', // Slovakia
        SI: '🇸🇮', // Slovenia
        SB: '🇸🇧', // Solomon Islands
        SO: '🇸🇴', // Somalia
        ZA: '🇿🇦', // South Africa
        GS: '🇬🇸', // South Georgia & South Sandwich Islands
        KR: '🇰🇷', // South Korea
        SS: '🇸🇸', // South Sudan
        ES: '🇪🇸', // Spain
        LK: '🇱🇰', // Sri Lanka
        BL: '🇧🇱', // St. Barthélemy
        SH: '🇸🇭', // St. Helena
        KN: '🇰🇳', // St. Kitts & Nevis
        LC: '🇱🇨', // St. Lucia
        MF: '🇲🇫', // St. Martin
        PM: '🇵🇲', // St. Pierre & Miquelon
        VC: '🇻🇨', // St. Vincent & Grenadines
        SD: '🇸🇩', // Sudan
        SR: '🇸🇷', // Suriname
        SJ: '🇸🇯', // Svalbard & Jan Mayen
        SE: '🇸🇪', // Sweden
        CH: '🇨🇭', // Switzerland
        SY: '🇸🇾', // Syria
        ST: '🇸🇹', // São Tomé & Príncipe
        TW: '🇹🇼', // Taiwan
        TJ: '🇹🇯', // Tajikistan
        TZ: '🇹🇿', // Tanzania
        TH: '🇹🇭', // Thailand
        TL: '🇹🇱', // Timor-Leste
        TG: '🇹🇬', // Togo
        TK: '🇹🇰', // Tokelau
        TO: '🇹🇴', // Tonga
        TT: '🇹🇹', // Trinidad & Tobago
        TN: '🇹🇳', // Tunisia
        TR: '🇹🇷', // Turkey
        TM: '🇹🇲', // Turkmenistan
        TC: '🇹🇨', // Turks & Caicos Islands
        TV: '🇹🇻', // Tuvalu
        UM: '🇺🇲', // U.S. Outlying Islands
        VI: '🇻🇮', // U.S. Virgin Islands
        UG: '🇺🇬', // Uganda
        UA: '🇺🇦', // Ukraine
        AE: '🇦🇪', // United Arab Emirates
        GB: '🇬🇧', // United Kingdom
        US: '🇺🇸', // United States
        UY: '🇺🇾', // Uruguay
        UZ: '🇺🇿', // Uzbekistan
        VU: '🇻🇺', // Vanuatu
        VA: '🇻🇦', // Vatican City
        VE: '🇻🇪', // Venezuela
        VN: '🇻🇳', // Vietnam
        WF: '🇼🇫', // Wallis & Futuna
        EH: '🇪🇭', // Western Sahara
        YE: '🇾🇪', // Yemen
        ZM: '🇿🇲', // Zambia
        ZW: '🇿🇼', // Zimbabwe
    };

    if (countryFlags.hasOwnProperty(countryCode)) {
        return text + ' ' + countryFlags[countryCode];
    }

    return text;
}

function getEndOfString(text, length) {
    if (length >= 0 && length <= text.length) {
        return text.substring(text.length - length);
    } else {
        return text;
    }
}

function loopWithTimer() {
    // Create a new Date object
    const currentTime = new Date();

    // Get the current time components
    const hours = currentTime.getHours();         // 0-23
    const minutes = currentTime.getMinutes();     // 0-59
    const seconds = currentTime.getSeconds();     // 0-59

    // Format the time as a string
    const formattedTime = `${hours}:${minutes}:${seconds}`;


    // Code to be executed in each iteration
    console.log(`Loop iteration: ${formattedTime}`);
  
    // Call the function to get the current location and fetch weather data
    getCurrentLocation();
    // Set the timer for the next iteration
    setTimeout(loopWithTimer, 600000); // 120000 milliseconds = 2 minutes
}
  
// Start the loop
loopWithTimer();
  

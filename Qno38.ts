// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


function city_name(city: string = "", country: string = ""): void {
    console.log(`${city} is in ${country}`);
} city_name("Karachi", "Pakistan")
city_name("Paris", "London")
city_name("Aghra", "India")

const apiConfiguration = async () => {
    const response = await fetch('../../config.json');
    const config = await response.json();
    console.log(config);
    return config;
}

export { apiConfiguration }
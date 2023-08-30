const apiConfiguration = async () => {
    const response = await fetch('../../config.json');
    const config = await response.json();
    return config;
}

export { apiConfiguration }
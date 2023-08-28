const pathProcessor = (path) => {
    let titleMovie = path || 'empty';
    let titleNotSimbols = titleMovie.replace(/[^\w\s]/g, '').trim();
    let pathMovie = titleNotSimbols.replace(/ /g, '-').toLowerCase();

    return pathMovie;
}

export {pathProcessor}
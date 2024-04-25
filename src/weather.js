const weather = {

    get currentWeather() {
        if (Math.random() < 0.3) {
            return 'stormy';
        } else {
            return 'not stormy';
        }
    }
}

export default weather;
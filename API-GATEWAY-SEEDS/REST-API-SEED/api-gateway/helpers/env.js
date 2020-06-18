const cacheEnv = {};

module.exports = {
    env: (key, defaultValue) => {
        if (!(key in process.env)) {
            if (defaultValue) return defaultValue;
            throw new Error(`${key} not found in process.env!`);
        }

        if (cacheEnv[key]) return cacheEnv[key];

        cacheEnv[key] = process.env[key];

        return process.env[key];
    }
};

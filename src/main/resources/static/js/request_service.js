function getResult(value, x_value) {
    const promise = axios.get(`/test`, {
        params: {
            expr: value,
            x: x_value
        }
    });

    return promise.then((resp) => {
        return resp.data;
    });
}

function getGraphPoints(str, min, max, step) {
    const promise = axios.get(`/graph`, {
        params: {
            expr: str,
            minX: min,
            maxX: max,
            step: step
        }
    });

    return promise.then((resp) => {
        return resp.data;
    });
}

function getCreditResult(sum, period, percent, type) {
    let url = type ? `/credit/annuity` : `/credit/different`;
    const promise = axios.get(url, {
            params: {
                sum: sum,
                period: period,
                percent: percent
            }
        });

        return promise.then((resp) => {
            return resp.data;
        });
}

function getHistory() {
    const promise = axios.get(`/history/get`);

    return promise.then((resp) => {
        return resp.data;
    });
}

function cleanHistory() {
    axios.delete(`/history/clean`);
}

function saveHistory(value) {
    axios.post(`/history/save`, {
        str: value
    });
}
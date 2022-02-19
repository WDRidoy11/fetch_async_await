const makerequerst = async(url, Content) => {
    let res = await fetch(url, Content);
    if (!res.ok) {
        const mesage = `Error: ${res.status}`;
        throw new Error(mesage);
    }
    let data = await res.json();
    return data;
}
const getData = () => {
    makerequerst('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
const sentData = () => {
    makerequerst('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
const updateData = () => {
    makerequerst('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: 'Riody',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
const singleupdateData = () => {
    makerequerst('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'Sabbir and Raja',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
const deleteData = () => {
    makerequerst('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
getData();
sentData();
updateData();
singleupdateData();
deleteData();
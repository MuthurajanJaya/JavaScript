//promise.reject
const p = Promise.resolve(0);
const reject = Promise.reject(p);
console.log(reject === p);//F
reject.catch((v) => {
    console.log(v === p);//T
});
//allsettled
const p1 = Promise.resolve(2);
const p2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'saw'));
const p3 = [p1, p2];
Promise.allSettled(p3).then((results) => results.forEach((result) => console.log(result.status)));
Promise.allSettled([
    Promise.resolve(77),
    new Promise((resolve) => setTimeout(() => resolve(23), 0)),
    12,
    Promise.reject(new Error("an error")),
]).then((values) => console.log(values));
//any()- which fulfills first
const pro1 = Promise.reject(0);
const pro2 = new Promise((resolve) => setTimeout(resolve, 200, 'high'));
const pro3 = new Promise((resolve) => setTimeout(resolve, 400, 'low'));
const promises = [pro1, pro2, pro3];
Promise.any(promises).then((value) => console.log(value));
//catch()
const pro4 = new Promise((resolve, reject) => {
    throw new Error("oh no");
});
pro4.catch((error) => {
    console.error(error);
});
//race
const r = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'flowers');
})
const r1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'birds');
})
Promise.race([r, r1]).then((values) => { console.log(values); })
//finally()
function final() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("arrived");
        }
        else {
            reject(new Error("not arrived"));
        }
    })
}
final().then((val) => { console.log(val) })
    .catch((err) => { console.Error(err) })
    .finally(() => console.log('completed'));
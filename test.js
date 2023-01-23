// let User = {}
//
//     User = {
//         id: string;
//         name: string;
//         posts: Post[];
// }
//
// type Post = {
//     id: string;
//     text: string;
//     user: User;
// }

// let Post = [1, 2, 3, 4]


// Задача 1

// похоже на связь один-ко-многим User к Post
// let User = {
//     id: 'string',
//     name: 'string',
//     posts: {
//         id: 'string',
//         text: 'string',
//         user: {
//             id: 'string'
//         }
//     }
// }
//
// let Post = {
//     id: 'string',
//     text: 'string',
//     user: {
//         id: 'string',
//         name: 'string'
//     }
// }
//
// function Select(model) {
//     for ( const key in model ) {
//         if (model.hasOwnProperty(key) && typeof(model[key]) !== "object") {
//             model[key] = Boolean(model[key])
//         } else {
//             return Select(model[key])
//         }
//     }
//     return model
// }
//
// Select(User)
// Select(Post)
// console.log('User = ', User)
// console.log('Post = ', Post)

// Задача 2

// async function asyncFunc1() {
//     const task = async (T) => {
//         await new Promise((r) => setTimeout(r, 1000 * Math.random()));
//         console.log(T);
//     };
//
//     await Promise.all([
//         task(1),
//         task(2),
//         task(3),
//         task(4),
//     ]);
//     // console.log(task(1))
//     // await task(1)
//     // await task(2)
//     // await task(3)
//     // await task(4)
// }
// asyncFunc1()

//-------------------------------------------------------------------

// async function asyncFunc1() {
    const task = async (T) => {
        await new Promise((r) => setTimeout(r, 1000 * Math.random()));
        console.log(T);
    };

    // console.log('!!!', task(1))
    // console.log(typeof(task(1)))

    class AsyncQueue {
        add(task) {

            setImmediate(task)

            // await task

            // await console.log(task())

            // await new Promise((r) => setTimeout(r, 1));
            // return  task()

            // return Promise.resolve(task).then(() => setTimeout(task(), 0))

            // return queueMicrotask(() => task().then(() => {}));
            // await task()
            // await process.nextTick(task)

            // setTimeout(() => task(), 1000)

            // return task().then((r) => console.log('r = ', r))

            // let resAr = []
            // for (const key in task) {
            //     if (typeof(task[key]) == "object") {
            //         resAr.push(task[key])
            //     }
            // }
            // return resAr
            // if (typeof(task) == "object") {
            //
            // }
            // await queueMicrotask(() => task());
            // return new Promise((r) => {
            //     r(task)
            // }).then((r) => {
            //     // console.log(r)
            // });
            // await setImmediate(() => task())
            // await Promise.all([task()])
        }
    }

    const queue = new AsyncQueue();

    // await queue.add(() => task(1))
    // console.log(queue.add(() => task(1)))

    Promise.all([
        queue.add(() => task(1)),
        queue.add(() => task(2)),
        queue.add(() => task(3)),
        queue.add(() => task(4)),
    ]);
// }
// asyncFunc1()

// // Different speed async operations
// const slow = new Promise(resolve => {
//     setTimeout(resolve, 200, 'slow');
// });
// const instant = 'instant';
// const quick = new Promise(resolve => {
//     setTimeout(resolve, 50, 'quick');
// });
//
// // The order is preserved regardless of what resolved first
// Promise.all([slow, instant, quick]).then(responses => {
//     responses.map(response => console.log(response));
// });







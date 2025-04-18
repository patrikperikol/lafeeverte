async function create() {
    console.log("create handler");
}

async function get() {
    console.log("get handler");
}

export const users = {
    create,
    get
};

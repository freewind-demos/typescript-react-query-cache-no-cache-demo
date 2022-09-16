async function wait(seconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    });
}

export default async function fetchRemoteMessage(from: string): Promise<string> {
    await wait(1);
    const random = Math.floor(Math.random() * 10);
    console.log("### random", random);
    return `hello-from-remote(${from}, random: ${random})`;
};

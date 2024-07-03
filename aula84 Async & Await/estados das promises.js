function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro');
                return
            }
            resolve(msg);
        }, tempo);
    });
};

// Estados das promises



// pendente / pending
async function pendente() {
    try {
        const fase1 = esperaAi(`fase 1`, 1000);
        console.log(fase1)

        setTimeout(function () {
            console.log(`Essa promise estava pendente`, fase1);
        }, 1100);
        const fase2 = await esperaAi(2, rand(0, 3));
        console.log(fase2)
        const fase3 = await esperaAi(`fase 3`, rand(0, 3));
        console.log(fase3)
        console.log(`Terminamos na fase: ${fase3}`);
    } catch (e) {
        console.log(e);
    };
};
pendente()
// fullfilled -> resolvida
// rejected -> rejeitada

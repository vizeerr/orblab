const ct = document.querySelectorAll('#coltab');
const cd = document.getElementById('codedesp');

const contentData = [
    {
        title: 'ORBY, THE INTENT ENGINE',
        description: 'A Stripe-like integration that can be embedded into any app frontend to enable users from any chain to access the app. It can also be embedded in a wallet to enable users to interact with any app on any chain without fragmenting user accounts. Orby works by taking in a multi-chain interaction and converting it into an intent that can be executed on any chain via the Orb Stack.',
        enables: [
            'Users to interact with any app they like on any chain.',
            'App developers to build on the chain that is best for their apps instead of those with the most users.',
            'Wallets to be universal from day one and automatically expand to new chains with every new deployment of the Orb Stack.',
            'Chains to focus on attracting developers instead of users. With a single deployment of the Orb Stack, those developers all have access to all users in web3.'
        ],
        color:'#C478FF'
    },
    {
        title: 'UNIVERSAL ACCOUNT SYSTEM',
        description: 'The topmost layer of the Orb stack. It enables apps and users to securely hold assets and perform transactions across chains without natively being present on those chains. It occasionally serves as the gateway through which users submit intents to the cross-domain intents protocol.',
        enables: [
            'Cross-domain intent protocol',
            'Wallets with web2 authentication',
            'Multichain-wallets'
        ],
        color: 'rgb(56, 232, 116)'
    },
    {
        title: 'CROSS-DOMAIN INTENT PROTOCOL',
        description: 'An on-chain protocol that serves as the core of the Orb Stack. It can be called by anyone, including EOAs, to submit intents across chains. The protocol is responsible for verifying whether an intent has been satisfied and compensating solvers accordingly.',
        enables: [
            'Chain-agnostic wallets',
            'Chain-agnostic frontends',
        ],
        color: 'rgb(255, 163, 246)'
    },
    {
        title: 'TOKEN WRAPPING PROTOCOL',
        description: 'A protocol that leverages the messaging framework to enable fluid movement of assets between chains primarily for computation. It is used by the cross-domain intent protocol for proper compensation of solvers.',
        enables: [
            'Cross-domain intent protocols',
            'Cross-chain meta transactions',
            'Low cost transaction computations',
            'Cross-chain native applications',
            'Cross-chain native tokens'
        ],
        color: 'rgb(4, 236, 240)'
    },
    {
        title: 'MESSAGING FRAMEWORK',
        description: 'An arbitrary message-passing layer that builds on our light clients to enable gas-efficient, secure, and fast message passing between different apps on different chains. It is used by the token wrapping protocol to send token information across chains.',
        enables: [
            'Token Wrapping protocols',
            'Cross-chain messaging platforms',
            'A wide range of cross-chain applications',
        ],
        color: 'rgb(159, 157, 255)'
    },
    {
        title: 'EXTENSIBLE LIGHT CLIENTS',
        description: 'The security foundation of the Orb Stack that enables apps to read data from any chain securely. Leveraged by our messaging framework to enable secure message passing across the Orb Stack. Can be embedded in other messaging protocols and frameworks to enable the same.',
        enables: [
            'Secure messaging protocols',
            'Secure cross-chain state accessors, i.e. services for accessing state of any blockchain',
            'Generalized co-processors',
        ],
        color: 'rgb(253, 255, 171)'
    }
];

function updateContent(index) {
    const data = contentData[index];
    const enablesList = data.enables.map(item => `<li>${item}</li>`).join('');
    const additionalNote = data.additionalNote ? `<p class="fs-5 text-secondary">${data.additionalNote}</p>` : '';

    const titleStyle = `color: ${data.color}`;
    
    const content = `<div>
            <p class="fontcyber fs-8 fw-semibold ls4" style="${titleStyle}">${data.title}</p>
            <p class="fs-5">${data.description}</p>
        </div>
        <div>
            <p class="fontcyber fs-8 fw-semibold ls4" style="${titleStyle}">ENABLES</p>
            <ul class="fs-5">${enablesList}</ul>
            ${additionalNote}
        </div>`;

    cd.innerHTML = content;
}

ct.forEach((e, index) => {
    e.addEventListener('click', () => {

        var prev = document.querySelector('.activetab');
        const prevon = document.querySelector('.activetabfirst')
        if (prev) {
            prev.classList.remove('activetab');
            prev.style.background = ''; // Remove background from the previously clicked tab
        }
        if(prevon){
            prevon.classList.remove('activetabfirst');
        }
        if(index==0){
            e.classList.add('activetabfirst');
        }else{
            e.classList.add('activetab');
            e.style.background = contentData[index].color;
             var offset = cd.offsetTop - 100;
        window.scrollTo({behavior: "smooth",block: 'start',top: offset}); 
        }
        updateContent(index);
       
    });
});


ct[0].click();
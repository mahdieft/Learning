const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe',
};

const workLocation = jobHunter.jobSearchArea || 'Worldwide';
console.log(`${jobHunter.name}'s work location is ${workLocation}`);

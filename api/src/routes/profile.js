const { Router } = require('express')

const profile = Router()

profile.get('/', (request, response) => {
  response.send({
    success: true,
    payload: {
      user: {
        avatar:
          'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
        name: 'Daniel Bevziuc',
        position: 'Junior Front End Developer',
      },
      industry:
        'The longest I’ve been working in finance/ accounting industry. ',
      project: `Based on my past experience, I am proud of my Excel project created in pure Vanilla JavaScript. This project has been created by me from scratch while working as a freelancer for an online platform. The project was both: a challenge and an accomplishment. As newly junior developer, I’ve found this project challenging because I didn’t know from where to start, however my fast-learner abilities helped me to manage it. For start, I created the sketches for algorithms, and then step by step have done the parts in draw.io. The start was very challenging also because I’ve got different errors which needed to be managed by myself only, however with different online tutorials and ambition I’ve managed to successfully complete the tasks. 
        More projects followed; however, I consider this project to be an accomplishment for me because it became part of my JavaScript foundation. During this project, I\’ve managed to create my own framework, library, using vanilla JavaScript and redux, only. `,
      description: `My transferable skills and experience will make me stand out for this role and I believe that will help to become an excellent asset for company. I'm confident this job can help me grow professionally and I am excited to hone my collaboration skills by working and helping others, and to have the chance to see some glimpses into my future career path.`,
    },
  })
})

module.exports = profile

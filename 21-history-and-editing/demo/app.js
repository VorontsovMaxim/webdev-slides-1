'use strict';

const express = require('express');
const { readFileSync } = require('fs');

const data = {
    warcraft: {
        title: 'Warcraft',
        text: `<p><img src="http://st.kp.yandex.net/images/film_iphone/iphone360_277328.jpg" width="200">
        Draenor, the homeworld of the orcs, is being torn apart by a mysterious force known as fel magic. Gul'dan, a powerful orc warlock, unites the orc clans and forms the Horde, and creates a portal to the world of Azeroth. The orcs begin to use fel magic to drain the life out of captive draenei in order to sustain the portal. Once it is operational, Gul'dan leads a small warband to capture prisoners on Azeroth and sacrifice them to bring the rest of the Horde through the portal. Durotan, the chieftain of the Frostwolf Clan, his pregnant mate Draka, and his friend Orgrim Doomhammer join this initial warband. While crossing through the portal, Draka goes into labor. When the orcs arrive on Azeroth, Gul'dan assists Draka with giving birth, but while the baby is born alive, it is in neonatal distress, struggling to breathe, and is near death. Gul'dan then drains the life out of a nearby deer to revive and infuse fel magic into the baby, which Durotan later names Go'el.</p>
        <p>The orcs raid several settlements throughout Azeroth. Anduin Lothar, the military commander of the human forces in the Stormwind Kingdom, looks over some of the men that were killed, and finds a trespassing mage named Khadgar, who explains that he was investigating the dead bodies because they contained traces of fel magic. Khadgar persuades Stormwind's king, Llane Wrynn, to consult Medivh, the renowned Guardian of Tirisfal, and Llane sends Anduin and Khadgar to Medivh's stronghold, Karazhan, to inform him of the fel magic's presence on Azeroth. In the Karazhan library, a ghostly shadow leads Khadgar to a mysterious book, which he takes.</p>
        <p>Anduin, Khadgar, and Medivh join a scouting team following traces of fel magic, but are ambushed by orcs. Medivh uses a spell to kill the fel-corrupted orcs, leaving the Horde's warchief, Blackhand, to flee along with Durotan and Orgrim. Khadgar restrains a half-orc slave, Garona, and the soldiers take her prisoner. King Llane frees Garona in exchange for loyalty to Stormwind, and she leads the humans to spy on the orc camp, where they learn of Gul'dan's plan to bring the Horde to Azeroth. Meanwhile, Durotan realizes that the fel magic is responsible for the destruction of Draenor, and if Gul'dan is not thwarted, Azeroth will suffer the same fate. Despite Orgrim's objections, Durotan invites Llane to a secret meeting so that the Frostwolf Clan and the humans can unite to defeat Gul'dan. While studying the book he took from Karazhan, Khadgar learns that Gul'dan could not have opened the portal on his own; he had help from someone on Azeroth. He is confronted by Medivh, who burns Khadgar's research when Khadgar offers to help him with his work</p>
        <p>Draenor, the homeworld of the orcs, is being torn apart by a mysterious force known as fel magic. Gul'dan, a powerful orc warlock, unites the orc clans and forms the Horde, and creates a portal to the world of Azeroth. The orcs begin to use fel magic to drain the life out of captive draenei in order to sustain the portal. Once it is operational, Gul'dan leads a small warband to capture prisoners on Azeroth and sacrifice them to bring the rest of the Horde through the portal. Durotan, the chieftain of the Frostwolf Clan, his pregnant mate Draka, and his friend Orgrim Doomhammer join this initial warband. While crossing through the portal, Draka goes into labor. When the orcs arrive on Azeroth, Gul'dan assists Draka with giving birth, but while the baby is born alive, it is in neonatal distress, struggling to breathe, and is near death. Gul'dan then drains the life out of a nearby deer to revive and infuse fel magic into the baby, which Durotan later names Go'el.</p>
        <p>The orcs raid several settlements throughout Azeroth. Anduin Lothar, the military commander of the human forces in the Stormwind Kingdom, looks over some of the men that were killed, and finds a trespassing mage named Khadgar, who explains that he was investigating the dead bodies because they contained traces of fel magic. Khadgar persuades Stormwind's king, Llane Wrynn, to consult Medivh, the renowned Guardian of Tirisfal, and Llane sends Anduin and Khadgar to Medivh's stronghold, Karazhan, to inform him of the fel magic's presence on Azeroth. In the Karazhan library, a ghostly shadow leads Khadgar to a mysterious book, which he takes.</p>
        <p>Anduin, Khadgar, and Medivh join a scouting team following traces of fel magic, but are ambushed by orcs. Medivh uses a spell to kill the fel-corrupted orcs, leaving the Horde's warchief, Blackhand, to flee along with Durotan and Orgrim. Khadgar restrains a half-orc slave, Garona, and the soldiers take her prisoner. King Llane frees Garona in exchange for loyalty to Stormwind, and she leads the humans to spy on the orc camp, where they learn of Gul'dan's plan to bring the Horde to Azeroth. Meanwhile, Durotan realizes that the fel magic is responsible for the destruction of Draenor, and if Gul'dan is not thwarted, Azeroth will suffer the same fate. Despite Orgrim's objections, Durotan invites Llane to a secret meeting so that the Frostwolf Clan and the humans can unite to defeat Gul'dan. While studying the book he took from Karazhan, Khadgar learns that Gul'dan could not have opened the portal on his own; he had help from someone on Azeroth. He is confronted by Medivh, who burns Khadgar's research when Khadgar offers to help him with his work</p>
        <p>The orcs raid several settlements throughout Azeroth. Anduin Lothar, the military commander of the human forces in the Stormwind Kingdom, looks over some of the men that were killed, and finds a trespassing mage named Khadgar, who explains that he was investigating the dead bodies because they contained traces of fel magic. Khadgar persuades Stormwind's king, Llane Wrynn, to consult Medivh, the renowned Guardian of Tirisfal, and Llane sends Anduin and Khadgar to Medivh's stronghold, Karazhan, to inform him of the fel magic's presence on Azeroth. In the Karazhan library, a ghostly shadow leads Khadgar to a mysterious book, which he takes.</p>
        <p>Anduin, Khadgar, and Medivh join a scouting team following traces of fel magic, but are ambushed by orcs. Medivh uses a spell to kill the fel-corrupted orcs, leaving the Horde's warchief, Blackhand, to flee along with Durotan and Orgrim. Khadgar restrains a half-orc slave, Garona, and the soldiers take her prisoner. King Llane frees Garona in exchange for loyalty to Stormwind, and she leads the humans to spy on the orc camp, where they learn of Gul'dan's plan to bring the Horde to Azeroth. Meanwhile, Durotan realizes that the fel magic is responsible for the destruction of Draenor, and if Gul'dan is not thwarted, Azeroth will suffer the same fate. Despite Orgrim's objections, Durotan invites Llane to a secret meeting so that the Frostwolf Clan and the humans can unite to defeat Gul'dan. While studying the book he took from Karazhan, Khadgar learns that Gul'dan could not have opened the portal on his own; he had help from someone on Azeroth. He is confronted by Medivh, who burns Khadgar's research when Khadgar offers to help him with his work</p>
        <p>The orcs raid several settlements throughout Azeroth. Anduin Lothar, the military commander of the human forces in the Stormwind Kingdom, looks over some of the men that were killed, and finds a trespassing mage named Khadgar, who explains that he was investigating the dead bodies because they contained traces of fel magic. Khadgar persuades Stormwind's king, Llane Wrynn, to consult Medivh, the renowned Guardian of Tirisfal, and Llane sends Anduin and Khadgar to Medivh's stronghold, Karazhan, to inform him of the fel magic's presence on Azeroth. In the Karazhan library, a ghostly shadow leads Khadgar to a mysterious book, which he takes.</p>
        <p>Anduin, Khadgar, and Medivh join a scouting team following traces of fel magic, but are ambushed by orcs. Medivh uses a spell to kill the fel-corrupted orcs, leaving the Horde's warchief, Blackhand, to flee along with Durotan and Orgrim. Khadgar restrains a half-orc slave, Garona, and the soldiers take her prisoner. King Llane frees Garona in exchange for loyalty to Stormwind, and she leads the humans to spy on the orc camp, where they learn of Gul'dan's plan to bring the Horde to Azeroth. Meanwhile, Durotan realizes that the fel magic is responsible for the destruction of Draenor, and if Gul'dan is not thwarted, Azeroth will suffer the same fate. Despite Orgrim's objections, Durotan invites Llane to a secret meeting so that the Frostwolf Clan and the humans can unite to defeat Gul'dan. While studying the book he took from Karazhan, Khadgar learns that Gul'dan could not have opened the portal on his own; he had help from someone on Azeroth. He is confronted by Medivh, who burns Khadgar's research when Khadgar offers to help him with his work</p>
        `
    },
    doom: {
        title: 'Doom',
        text: `<p><img src="https://st.kp.yandex.net/images/film_iphone/iphone360_84140.jpg" width="200">
        In the year 2046, a heavily populated research facility on Mars is suddenly attacked by an unknown assailant. Following a distress call sent by Dr. Todd Carmack, a group of marines, led by Asher "Sarge" Mahonin, is sent on a search-and-rescue mission. One of the marines, John "Reaper" Grimm, accompanies his sister, Dr. Samantha Grimm, to one of the labs within the devastated sector to retrieve data; here he learns that the dig site, where their parents were accidentally killed, was reopened and ancient skeletons of a genetically enhanced race were discovered.</p>
        <p>While searching for survivors in the facility, the marines find Dr. Carmack, who is taken to a medical room for examination, but later disappears. The marines find a creature that leads them down to the facility's sewer. Marine Eric "Goat" Fantom is killed during their pursuit, along with the creature. The corpses of Goat and the creature are taken to the medical room. Marine Gregory "Duke" Schofield stays with Sam as she starts an autopsy, when they are attacked by a second creature. After trapping it, Sam continues the autopsy on the first creature, finding that its organs are human. Goat suddenly revives, and then kills himself by slamming his head against a glass window.</p>
        <p>The squad tracks a third creature down into the dig site, where it kills three more marines. Sam and Reaper try to convince Sarge that the creatures are humans from the facility, mutated by the addition of a Martian chromosome (called C24) they found and synthesized from the bones discovered, and that not all of those infected will fully transform into creatures. Some of those infected develop superhuman abilities. Regardless, Sarge orders his team to sanitize the entire facility. Sarge kills the creature in the medical lab (revealed to be a mutated Dr. Carmack) and executes one of his marines for defying his commands. Sam and the surviving marines are then flanked by the infected, partly mutated, humans. Only Sam and a wounded Reaper escape. Sam injects Reaper with the C24 serum, enhancing his abilities so he is able to kill the infected humans and fully mutated creatures. Reaper then battles an infected Sarge and kills him. Having survived, Sam and Reaper enter the elevator to leave the facility.</p>
        <p>In the year 2046, a heavily populated research facility on Mars is suddenly attacked by an unknown assailant. Following a distress call sent by Dr. Todd Carmack, a group of marines, led by Asher "Sarge" Mahonin, is sent on a search-and-rescue mission. One of the marines, John "Reaper" Grimm, accompanies his sister, Dr. Samantha Grimm, to one of the labs within the devastated sector to retrieve data; here he learns that the dig site, where their parents were accidentally killed, was reopened and ancient skeletons of a genetically enhanced race were discovered.</p>
        <p>While searching for survivors in the facility, the marines find Dr. Carmack, who is taken to a medical room for examination, but later disappears. The marines find a creature that leads them down to the facility's sewer. Marine Eric "Goat" Fantom is killed during their pursuit, along with the creature. The corpses of Goat and the creature are taken to the medical room. Marine Gregory "Duke" Schofield stays with Sam as she starts an autopsy, when they are attacked by a second creature. After trapping it, Sam continues the autopsy on the first creature, finding that its organs are human. Goat suddenly revives, and then kills himself by slamming his head against a glass window.</p>
        <p>The squad tracks a third creature down into the dig site, where it kills three more marines. Sam and Reaper try to convince Sarge that the creatures are humans from the facility, mutated by the addition of a Martian chromosome (called C24) they found and synthesized from the bones discovered, and that not all of those infected will fully transform into creatures. Some of those infected develop superhuman abilities. Regardless, Sarge orders his team to sanitize the entire facility. Sarge kills the creature in the medical lab (revealed to be a mutated Dr. Carmack) and executes one of his marines for defying his commands. Sam and the surviving marines are then flanked by the infected, partly mutated, humans. Only Sam and a wounded Reaper escape. Sam injects Reaper with the C24 serum, enhancing his abilities so he is able to kill the infected humans and fully mutated creatures. Reaper then battles an infected Sarge and kills him. Having survived, Sam and Reaper enter the elevator to leave the facility.</p>
        <p>While searching for survivors in the facility, the marines find Dr. Carmack, who is taken to a medical room for examination, but later disappears. The marines find a creature that leads them down to the facility's sewer. Marine Eric "Goat" Fantom is killed during their pursuit, along with the creature. The corpses of Goat and the creature are taken to the medical room. Marine Gregory "Duke" Schofield stays with Sam as she starts an autopsy, when they are attacked by a second creature. After trapping it, Sam continues the autopsy on the first creature, finding that its organs are human. Goat suddenly revives, and then kills himself by slamming his head against a glass window.</p>
        <p>The squad tracks a third creature down into the dig site, where it kills three more marines. Sam and Reaper try to convince Sarge that the creatures are humans from the facility, mutated by the addition of a Martian chromosome (called C24) they found and synthesized from the bones discovered, and that not all of those infected will fully transform into creatures. Some of those infected develop superhuman abilities. Regardless, Sarge orders his team to sanitize the entire facility. Sarge kills the creature in the medical lab (revealed to be a mutated Dr. Carmack) and executes one of his marines for defying his commands. Sam and the surviving marines are then flanked by the infected, partly mutated, humans. Only Sam and a wounded Reaper escape. Sam injects Reaper with the C24 serum, enhancing his abilities so he is able to kill the infected humans and fully mutated creatures. Reaper then battles an infected Sarge and kills him. Having survived, Sam and Reaper enter the elevator to leave the facility.</p>
        <p>While searching for survivors in the facility, the marines find Dr. Carmack, who is taken to a medical room for examination, but later disappears. The marines find a creature that leads them down to the facility's sewer. Marine Eric "Goat" Fantom is killed during their pursuit, along with the creature. The corpses of Goat and the creature are taken to the medical room. Marine Gregory "Duke" Schofield stays with Sam as she starts an autopsy, when they are attacked by a second creature. After trapping it, Sam continues the autopsy on the first creature, finding that its organs are human. Goat suddenly revives, and then kills himself by slamming his head against a glass window.</p>
        <p>The squad tracks a third creature down into the dig site, where it kills three more marines. Sam and Reaper try to convince Sarge that the creatures are humans from the facility, mutated by the addition of a Martian chromosome (called C24) they found and synthesized from the bones discovered, and that not all of those infected will fully transform into creatures. Some of those infected develop superhuman abilities. Regardless, Sarge orders his team to sanitize the entire facility. Sarge kills the creature in the medical lab (revealed to be a mutated Dr. Carmack) and executes one of his marines for defying his commands. Sam and the surviving marines are then flanked by the infected, partly mutated, humans. Only Sam and a wounded Reaper escape. Sam injects Reaper with the C24 serum, enhancing his abilities so he is able to kill the infected humans and fully mutated creatures. Reaper then battles an infected Sarge and kills him. Having survived, Sam and Reaper enter the elevator to leave the facility.</p>
        `
    }
};

const pages = {
    app: 8080,
    history: 8081,
    scroll: 8082
};

for (const [page, port] of Object.entries(pages)) {
    express()
        .use(express.static('./'))
        .get('/api/:id', ({ params: { id } }, res) => res.json(data[id]))
        .get('*', (req, res) => {
            res.setHeader('Content-Type', 'text/html');
            res.send(readFileSync(`${page}.html`));
        })
        .listen(port, () => console.log(`${page} on http://localhost:${port}/`));
}
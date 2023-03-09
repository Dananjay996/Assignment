const fs = require('fs');
const data = fs.readFileSync('./data.json');

//code the parse the given input data...

const skills = JSON.parse(data);
// console.log(skills);

// console.log(Object.keys(skills));

//Code to output the sorted array
const calculateRankArray = (field,skills) => {
    const sortedSkills = Object.keys(skills).sort((a,b) => {
        // console.log(a,b,"over\n");
        return (
            skills[b][field] - skills[a][field]
        )
    });
    return sortedSkills
}
// console.log(calculateRankArray("2019 score",skills));

//Code to Sort 2019 skills
const SortSkills_2019 = () => {
    const SortedSkillValues_2019 = Object.keys(skills).sort((a,b) => {
        return skills[b]["2019 score"] - skills[a]["2019 score"];
    })
    // console.log(SortedSkillValues_2019);
    return SortedSkillValues_2019;
}

//Code to calculate the bottom 3 skills
const SortSkills_2024 = () => {
    const SortedSkillValues_2024 = Object.keys(skills).sort((a,b) => {
        return skills[b]["2024 score"] - skills[a]["2024 score"];
    })
    // console.log(SortedSkillValues_2024);
    return SortedSkillValues_2024;
}

//Code to calculate the top 3 accelerating skills
const SortSkillsByGrowth = () => {
    const SortedSkillValuesByGrowth = Object.keys(skills).sort((a,b) => {
        return ((skills[b]["2024 score"] - skills[b]["2019 score"]) - (skills[a]["2024 score"] - skills[a]["2019 score"]));
    })

    return SortedSkillValuesByGrowth;
}

const getTop3Skills = SortSkills_2019().slice(0,3);
// console.log(getTop3Skills);
const getBottom3Skills = SortSkills_2019().slice(-3).reverse();
// console.log(getBottom3Skills);
const getTop3AcceleratingSkills = SortSkillsByGrowth().slice(0,3);
// console.log(getTop3AcceleratingSkills);
const getTop3DecelaratingSkills = SortSkillsByGrowth().slice(-3).reverse();
// console.log(getTop3DecelaratingSkills);

module.exports = {
    getTop3Skills,
  getBottom3Skills,
  getTop3AcceleratingSkills,
  getTop3DecelaratingSkills,
}











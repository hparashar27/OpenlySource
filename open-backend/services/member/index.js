const { Member } = require('../../models/index')

const addMember = async (name, profilePic, githubProfileLink, thoughts) => {
    const newMember = await Member.create({
        name,
        profilePic,
        thoughts,
        githubProfileLink
    })
    return newMember
}
const getMembers = async (query) => {
    const members = await Member.find(query);
    return members;
};
const updateMember = async (id , body) => {
const member = await Member.findByIdAndUpdate(id,body);
return member
}
const deleteMember = async(id)=>{
    const member =  await Member.findByIdAndDelete(id);
    return member
}

module.exports = {
    addMember,
    getMembers,
    deleteMember,
    updateMember
}
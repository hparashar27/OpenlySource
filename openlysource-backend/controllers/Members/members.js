const { addMember, getMembers, deleteMember, updateMember } = require('../../services/member/index');
const { successResponse, serverErrorResponse } = require('../../utils/response.utils');

const addMembers = async (req, res, next) => {
   try {
      const { name, profilePic, thoughts, githubProfileLink } = req.body
      // not added profilepic as compulsory field
      if (!name || !thoughts || !githubProfileLink) {
         return res.status(401).json({
            message: 'all fields are required',
         })
      }
      let member = await addMember(name, profilePic, githubProfileLink, thoughts);
      if (!member) {
         serverErrorResponse(res);
         return;
      }
      let newmember = {
         name: member.name,
         profilePic: member.profilePic,
         githubProfileLink: member.githubProfileLink,
         thoughts: member.thoughts
      }
      successResponse(res, newmember);
   } catch (error) {
      next(error)
   }
}
const getallmembers = async (req, res, next) => {
   try {
      let data = await getMembers(req.query);
      successResponse(res, data);

   } catch (error) {
      next(error)
   }
}

const updateMemberById = async (req, res, next) => {
   try {
      const id = req.params.id
      let data = await updateMember(id, req.body);
      if (!data) {
         serverErrorResponse(res);
         return;
      }
      successResponse(res, { message: "member updated successfully" });
   } catch (error) {
      next(error)
   }
}
const deleteMemberById = async (req, res, next) => {
   try {
      const id = req.params.id
      let data = await deleteMember(id);
      if (!data) {
         serverErrorResponse(res);
         return;
      }
      successResponse(res, { message: "member deleted successfully" });
   } catch (error) {
      next(error)
   }
}
module.exports = {
   add: addMembers,
   getallmembers: getallmembers,
   update: updateMemberById,
   delete: deleteMemberById
}
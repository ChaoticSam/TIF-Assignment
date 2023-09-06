//Middleware to validate if user is community admin

module.exports = async (req, res, next) => {

    try{
        const isAdmin = (req, res, next) => {
            const { communityId, userId } = req.params;
            const community = communities.find((c) => c.id === communityId);
            if (!community) {
              return res.status(404).json({ message: 'Community not found' });
            }
            if (community.admin !== userId) {
              return res.status(403).json({ message: 'Access denied. Only community admins can perform this action.' });
            }
            next();
          };
    } catch (error) {
        console.log(error);
        return res.status(401).send({
          success: false,
          error,
          message: "Auth Failed",
        });
      }
};

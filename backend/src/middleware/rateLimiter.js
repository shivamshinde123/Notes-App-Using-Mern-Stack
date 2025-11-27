import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next) => {

    try {
        // you could even change this with user_id, if you want to add limit per user.
        // for that to work, we need to have authentication in our app
        const {success} = await ratelimit.limit("my-limit-key") 

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later."
            })
        }

        next()
    }

    catch (error) {
        console.log("Rate limit error", error)
        next(error);
    }
}


export default rateLimiter
import Streamer from './stream';

export const followStreamer = (req, res) => {
    const userId = req.user._id;
    const { name, logo } = req.body;

    Streamer.findOne({ name })
        .then(following => {
            if (following) { 
                return res.status(422).json({ 
                    success: false, 
                    error: 'You are already following this streamer.'
            }); }

            const newStreamer = new Streamer({ name, logo, follow: userId });

            newStreamer.save()
                .then(streamer => {
                    return res.status(201).json({
                        success: true,
                        message: 'Following!',
                        streamer
                    });
                })
                .catch(err => {
                    res.status(422).json({ success: false, err });
                });
        });
};

export const unfollowStreamer = (req, res) => {
    const { id } = req.params;

    Streamer.remove(id, (err, streamer) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        res.status(200).json({ success: true, streamer });
    });
};

//get all streamers user is following
export const streamersFollowedByUser = (req, res) => {
    Streamer.find({ id: req.params.id }, (err, streamers) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        res.status(200).json(streamers);
    });
};

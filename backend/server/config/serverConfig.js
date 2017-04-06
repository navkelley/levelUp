exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://levelUpUser:adminLevelUp@ds161109.mlab.com:61109/level-up' :
                            'mongodb://localhost/levelUp');
                            
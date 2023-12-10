const User = require("./User");
const Post = require("./Chat");
const Chat = require("./Chat");
const ChatUser = require("./ChatUser");
const Comment = require("./Comment");
const Like = require("./Like");
const Photo = require("./Photo");
const Notification = require("./Notification");
const Story = require("./Story");

/////////// All associations here:

// User and Post:
User.hasMany(Post);
Post.belongsTo(User, {
    foreignKey: "user_id",
}); // This app now just allows one user to post a post

// User and Chat:
User.belongsToMany(Chat, { through: ChatUser });
User.hasMany(ChatUser);
Chat.belongsToMany(User, { through: ChatUser });
Chat.hasMany(ChatUser);
ChatUser.belongsTo(User, {
    foreignKey: "user_id",
});
ChatUser.belongsTo(Chat, {
    foreignKey: "chat_id",
});

// User and Like:
Like.belongsTo(User, {
    foreignKey: "user_id",
});
User.hasMany(Like);

// User and Message:
User.hasMany(Message);
Message.hasOne(User, {
    foreignKey: "user_id",
});

// User and Comment:
User.hasMany(Comment);
Comment.belongsTo(User, {
    foreignKey: "user_id",
});

// User and User:
// This will create the 'user_followers' table ...(wait to done this comment after check the result in postgreSQL)
User.belongsToMany(User, { as: "follower_id", through: "user_follower" });

// User and Notification:
User.hasMany(Notification);
Notification.belongsTo(User, {
    foreignKey: "user_id",
});

// User and Story:
User.hasMany(Story);
Story.belongsTo(User, {
    foreignKey: "user_id",
});

// Post and Photo:
Post.hasMany(Photo);
Photo.belongsTo(Post, {
    foreignKey: "post_id",
});

// Post and Comment:
Post.hasMany(Comment);
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

// Post and Like:
Post.hasMany(Like);
Like.belongsTo(Post, {
    foreignKey: "post_id",
});

// Chat and Message:
Chat.hasMany(Message);
Message.hasOne(Chat, {
    foreignKey: "chat_id",
});

// Story and Photo:
Story.hasMany(Photo);
Photo.belongsTo(Story, {
    foreignKey: "story_id",
});

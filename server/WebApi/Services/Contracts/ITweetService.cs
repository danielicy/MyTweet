using DataModels.Models.Tweets;
using DataModels.Models.UserManagment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyTweetAPI.Services.Contracts
{
    public interface ITweetService : ICRUDBase<Tweet>
    {
        Tweet Tweet(Tweet content);

        void Follow(Follower follower);

        void UnFollow(Follower follower);

        IEnumerable<Tweet> GetFollowedtweets(int id);

        IEnumerable<Tweet> GetMyTweets(int id);
    }
}

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
        Tweet Tweet(string content);
        void Follow(Follower follower);
        void UnFollow(Follower follower);
    }
}

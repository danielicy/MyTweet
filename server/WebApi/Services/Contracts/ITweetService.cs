using DataModels.Models.Tweets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyTweetAPI.Services.Contracts
{
    public interface ITweetService : ICRUDBase<Tweet>
    {
        Tweet Tweet(string content);
    }
}

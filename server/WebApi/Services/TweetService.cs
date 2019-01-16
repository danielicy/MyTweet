using DataCore;
using DataModels.Models.Tweets;
using DataModels.Models.UserManagment;
using MyTweetAPI.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Helpers;

namespace MyTweetAPI.Services
{
    public class TweetService : ITweetService
    {
        private MyTweetContext _context;

        public TweetService(MyTweetContext context)
        {
            _context = context;
        }

        public Tweet Create(Tweet tweet, string param)
        {
            tweet.User = _context.Users.Where(user => user.Id.Equals(tweet.UserId)).FirstOrDefault();

            tweet.CreatedDate = DateTime.Now;
       
            _context.Tweets.Add(tweet);
            _context.SaveChanges();

            return tweet;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Follow(Follower follower)
        {
            _context.Follower.Add(follower);
            _context.SaveChanges();
        }

        public IEnumerable<Tweet> GetAll()
        {
            return _context.Tweets;
        }

        public Tweet GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Tweet Tweet(string content)
        {
            throw new NotImplementedException();
        }

        public void UnFollow(Follower follower)
        {
            var itemToRemove = _context.Follower.Where(followed => followed.Follow.Equals(follower)).FirstOrDefault();

            if (follower != null)
            {
                _context.Follower.Remove(itemToRemove);
                _context.SaveChanges();
            }
        }

        public void Update(Tweet model, string param = null)
        {
            throw new NotImplementedException();
        }


    }
}
